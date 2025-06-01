// components/LibretaDeNotas.tsx
"use client";

import React, { useState, useEffect, ChangeEvent, DragEvent } from 'react';

interface Song {
  id: string; // Usaremos el nombre como ID por simplicidad, pero podría ser un UUID
  name: string;
  chords: string;
}

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

const LibretaDeNotas: React.FC = () => {
  const [songs, setSongs] = useState<{ [key: string]: string }>({});
  const [songName, setSongName] = useState<string>('');
  const [chords, setChords] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [currentEditingName, setCurrentEditingName] = useState<string | null>(null);


  // Cargar canciones desde localStorage al montar
  useEffect(() => {
    try {
      const storedSongs = localStorage.getItem('songs');
      if (storedSongs) {
        const parsedSongs = JSON.parse(storedSongs);
        if (typeof parsedSongs === 'object' && parsedSongs !== null) {
          setSongs(parsedSongs);
        } else {
          setSongs({}); // Asegurar que sea un objeto si el parseo falla a algo inesperado
        }
      }
    } catch (error) {
      console.error("Error al cargar canciones de localStorage:", error);
      setSongs({}); // Resetear a objeto vacío en caso de error de parseo
      // Opcionalmente, mostrar un toast de error al usuario
      addToast("Error al cargar datos guardados.", "error");
    }
  }, []);

  // Guardar canciones en localStorage cuando cambien
  useEffect(() => {
    // Solo guardar si songs no es el estado inicial vacío (para evitar sobreescribir en el primer render si aún no se cargó nada)
    if (Object.keys(songs).length > 0 || localStorage.getItem('songs')) {
        localStorage.setItem('songs', JSON.stringify(songs));
    }
  }, [songs]);

  const addToast = (message: string, type: Toast['type']) => {
    const id = Date.now();
    setToasts(prevToasts => [...prevToasts, { id, message, type }]);
    setTimeout(() => {
      setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, 3000);
  };

  const handleAddOrUpdateSong = () => {
    const name = songName.trim();
    const chordProgression = chords.trim();

    if (!name || !chordProgression) {
      addToast('El nombre y los acordes no pueden estar vacíos.', 'warning');
      return;
    }

    const newSongs = { ...songs };
    if (currentEditingName && currentEditingName !== name) {
      // Si el nombre cambió durante la edición, eliminamos la entrada antigua
      delete newSongs[currentEditingName];
    }
    newSongs[name] = chordProgression;
    
    setSongs(newSongs);
    setSongName('');
    setChords('');
    setCurrentEditingName(null);
    addToast(currentEditingName && currentEditingName === name ? `Canción "${name}" actualizada.` : `Canción "${name}" guardada.`, 'success');
  };

  const handleSelectSongForEditing = (name: string) => {
    setSongName(name);
    setChords(songs[name]);
    setCurrentEditingName(name);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top for better UX
  };

  const handleDeleteSong = (name: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(`¿Estás seguro de que querés eliminar la canción "${name}"?`)) {
      const newSongs = { ...songs };
      delete newSongs[name];
      setSongs(newSongs);
      addToast(`Canción "${name}" eliminada.`, 'warning');
      if (currentEditingName === name) { // Si se elimina la canción que se está editando
        setSongName('');
        setChords('');
        setCurrentEditingName(null);
      }
    }
  };

  const handleExportSongs = () => {
    if (Object.keys(songs).length === 0) {
      addToast("No hay canciones para exportar.", "info");
      return;
    }
    const all = Object.entries(songs)
      .map(([name, chordsValue]) => `${name}\n${chordsValue}\n---`)
      .join('\n');

    const blob = new Blob([all], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'progresiones.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    addToast('Exportación completada.', 'success');
  };

  const handleImportSongs = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const entries = text.split('\n---').map(entry => entry.trim()).filter(Boolean);
        const newSongs = { ...songs };
        let importedCount = 0;

        for (const entry of entries) {
          const lines = entry.split('\n');
          if (lines.length < 2) continue; // Necesita al menos nombre y una línea de acordes

          const nameLine = lines[0].trim();
          const chordsValue = lines.slice(1).join('\n').trim();

          if (!nameLine || !chordsValue) continue;

          let finalName = nameLine;
          let counter = 1;
          // Evitar sobrescribir canciones existentes con el mismo nombre, añadiendo un sufijo
          while (newSongs[finalName] && newSongs[finalName] !== chordsValue) { 
            finalName = `${nameLine}-${counter++}`;
          }
          // Si la canción ya existe con los mismos acordes, no la importamos de nuevo, pero tampoco contamos como error.
          // Si existe con acordes distintos, se habrá generado un finalName nuevo.
          if (!newSongs[finalName] || newSongs[finalName] !== chordsValue) {
            newSongs[finalName] = chordsValue;
            importedCount++;
          }
        }
        
        if (importedCount > 0) {
          setSongs(newSongs);
          addToast(`${importedCount} canción(es) importada(s) con éxito.`, 'success');
        } else {
          addToast('No se importaron nuevas canciones. Puede que ya existan o el formato sea incorrecto.', 'info');
        }

      } catch (error) {
        console.error("Error al importar archivo:", error);
        addToast('Error al procesar el archivo de importación.', 'error');
      } finally {
         // Resetear el input para permitir importar el mismo archivo de nuevo si es necesario
        if (event.target) {
            event.target.value = '';
        }
      }
    };
    reader.readAsText(file);
  };

  const handleClearAllSongs = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('¿Estás seguro de que querés borrar TODAS las canciones? Esta acción no se puede deshacer.')) {
      setSongs({});
      localStorage.removeItem('songs'); // Asegurarse de limpiar el storage también
      setSongName('');
      setChords('');
      setCurrentEditingName(null);
      addToast('Todas las canciones fueron eliminadas.', 'error');
    }
  };

  const filteredSongs = Object.entries(songs)
    .filter(([name]) => name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

  return (
    <main className="max-w-xl mx-auto space-y-4 p-4">
      <h1 className="text-2xl font-bold text-center">Libreta de Progresiones</h1>

      <div className="mb-4 flex flex-col gap-2">
        <button onClick={handleExportSongs} className="btn btn-outline btn-accent w-full">
          Exportar como .txt
        </button>

        <input
          type="file"
          accept=".txt"
          onChange={handleImportSongs}
          className="file-input file-input-bordered w-full bg-base-200" // Ajustado para DaisyUI themes
        />

        <button onClick={handleClearAllSongs} className="btn btn-outline btn-error w-full">
          Borrar todo
        </button>
      </div>

      <input
        value={songName}
        onChange={(e) => setSongName(e.target.value)}
        type="text"
        placeholder="Nombre de la canción"
        className="input input-bordered w-full bg-base-200" // Ajustado
      />
      <textarea
        value={chords}
        onChange={(e) => setChords(e.target.value)}
        rows={5}
        placeholder="Progresión de acordes"
        className="textarea textarea-bordered w-full bg-base-200" // Ajustado
      ></textarea>
      <button onClick={handleAddOrUpdateSong} className="btn btn-success w-full">
        {currentEditingName ? 'Actualizar Canción' : 'Agregar Canción'}
      </button>

      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Buscar canción..."
        className="input input-bordered w-full bg-base-200 mt-4" // Ajustado
      />

      <div className="divider">Canciones guardadas ({filteredSongs.length})</div>
      {filteredSongs.length === 0 && searchTerm && (
         <p className="text-center text-gray-500">No se encontraron canciones con "{searchTerm}".</p>
      )}
      {filteredSongs.length === 0 && !searchTerm && Object.keys(songs).length > 0 && (
         <p className="text-center text-gray-500">Parece que el filtro no coincide con ninguna canción.</p>
      )}
       {Object.keys(songs).length === 0 && !searchTerm && (
         <p className="text-center text-gray-500">Aún no has guardado ninguna progresión. ¡Anímate a agregar una!</p>
      )}

      <ul className="space-y-2">
        {filteredSongs.map(([name, chordsValue]) => (
          <li key={name} className="bg-base-300 p-3 rounded shadow"> {/* Ajustado */}
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-accent text-lg break-all">{name}</span>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => handleSelectSongForEditing(name)}
                  className="btn btn-xs btn-info"
                >
                  Ver/Editar
                </button>
                <button
                  onClick={() => handleDeleteSong(name)}
                  className="btn btn-xs btn-error"
                >
                  Eliminar
                </button>
              </div>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-base-content"> {/* Ajustado */}
              {chordsValue}
            </pre>
          </li>
        ))}
      </ul>

      {/* Contenedor de Toasts */}
      <div aria-live="assertive" className="toast toast-top toast-end">
        {toasts.map(toast => (
          <div key={toast.id} className={`alert alert-${toast.type} shadow-lg`}>
            <div>
              <span>{toast.message}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default LibretaDeNotas;

