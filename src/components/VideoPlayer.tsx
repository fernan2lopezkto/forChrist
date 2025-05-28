// src/components/VideoPlayer.tsx

import React, { useEffect, useState } from 'react';
// Ya NO importamos ReactPlayer directamente aquí.
// import ReactPlayer from "react-player/youtube"; // ¡Comenta o elimina esta línea!

interface VideoPlayerProps {
  videoUrl: string; // La URL del video a reproducir
  title?: string;   // Título opcional para accesibilidad o visualización
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  // Estado para verificar si estamos en el navegador (hay ventana)
  const [hasWindow, setHasWindow] = useState(false);
  // Estado para guardar el componente ReactPlayer una vez que se cargue dinámicamente
  const [ClientSideReactPlayer, setClientSideReactPlayer] = useState<any>(null);

  // useEffect se ejecuta SOLAMENTE en el lado del cliente (en el navegador)
  useEffect(() => {
    if (typeof window !== 'undefined') { // Verificamos que 'window' exista
      setHasWindow(true);
      // Importamos dinámicamente ReactPlayer cuando estamos seguros de estar en el navegador
      import('react-player/youtube').then((mod) => {
        setClientSideReactPlayer(() => mod.default); // Guardamos el componente importado
      });
    }
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar

  // Si no estamos en el navegador o ReactPlayer aún no se ha cargado, mostramos un placeholder
  if (!hasWindow || !ClientSideReactPlayer) {
    return (
      <div className="relative pt-[56.25%] overflow-hidden bg-black rounded-lg shadow-xl flex items-center justify-center">
        {/* Puedes poner un spinner de carga o un mensaje aquí */}
        <p className="text-white">Cargando video...</p>
      </div>
    );
  }

  // Si ya estamos en el navegador y ReactPlayer está cargado, renderizamos el componente real
  return (
    <div className="relative pt-[56.25%] overflow-hidden bg-black rounded-lg shadow-xl">
      <ClientSideReactPlayer // Usamos el componente importado dinámicamente
        url={videoUrl}
        controls={true}
        volume={0.5}
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        aria-label={title || "Reproductor de Video"}
        config={{
          youtube: {
            playerVars: {
              // Tus variables de reproductor de YouTube aquí
            },
          },
        }}
      />
    </div>
  );
};

export default VideoPlayer;
