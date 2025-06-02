"use client"; // This directive is necessary for client-side components like ReactPlayer

import LibretaDeNotas from "@/components/LibretaDeNotas";
import MaterialCards from "@/components/MaterialCards";
import VideoPlayer from "@/components/VideoPlayer";
export default function VenEspirituSanto() {
  // REPLACE with your actual YouTube video URL
  const tutorial = {
    tutoTitle : "Ven Espiritu Santo",
    youtubeVideoUrl : "https://youtu.be/gV7RkJtBOjU?si=zXjqhDBQ7FLIKT59",
    guitarraVideoUrl : "https://www.youtube.com/watch?v=aSfTqN1c_z8",
    bajoVideoUrl : "https://www.youtube.com/watch?v=5dNZ4iv36_Q&t=11s",
    arreglo1PianoVideoUrl : "https://www.youtube.com/watch?v=JfQRXy0O5xw",
    description : 'En este video, aprenderás a tocar "Ven Espíritu Santo" de Barak. Te guiaremos paso a paso con la pista y los tutoriales necesarios para que puedas dominar esta hermosa canción. ¡Esperamos que te sea de gran bendición!',
    verso : "De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso que llenó toda la casa donde estaban sentados, 3y se les aparecieron lenguas como de fuego que, repartiéndose, se posaron sobre cada uno de ellos. 4Todos fueron llenos del Espíritu Santo y comenzaron a hablar en otras lenguas, según el Espíritu les daba habilidad para expresarse.",
    versoRef : "Hechos 2:2-4",
    
    letra : `INTRO:      MIm      RE     DO     SI 7
    8 TIEMPOS CADA NOTA


    MIm                     RE
    Estoy aquí, desesperado por ti
          DO                SI 7
Con un corazón sediento, que espera beber de ti

DO
Cuando tu gloria desciende a un lugar
RE
Toda la tierra tiene que adorar
         LAm
Resucitan los muertos se sanan enfermos
       SI
por tu poder.
DO
Queremos de ti llénanos de ti
RE
Espíritu santo envuélvenos en ti
   LAm              SI 7
Derrama tu gloria, Esperamos por ti

CORO:
MIm
Ven, ven, ven espíritu santo
RE
Ven, ven, ven espíritu santo
DO                       SI 7
Ven, ven, ven llena este lugar`
}

  return (
    <div className="text-center pt-15 px-0.5">
      <h1 className="text-4xl font-bold mb-4">{tutorial.tutoTitle}</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Pista y Tutorial</h2>

      {/* Description */}
      <p className="mt-8 px-4 text-lg leading-relaxed text-gray-400">
        {tutorial.description}
      </p>

      {/* Main container for video and lyrics - centered and max-width */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="md:flex md:gap-8 items-start">
          {/* Video Player (left on desktop, top on mobile) */}
          {/* ACORDION */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Pista */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title font-semibold">
                Pista de {tutorial.tutoTitle}
              </div>
              <div className="collapse-content text-sm">
                <VideoPlayer
                  videoUrl={tutorial.youtubeVideoUrl}
                  title="Tutorial de Ven Espíritu Santo"
                />
              </div>
            </div>
            {/* Guitarra */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Tutorial de {tutorial.tutoTitle} en guitarra
              </div>
              <div className="collapse-content text-sm">
                <VideoPlayer
                  videoUrl={tutorial.guitarraVideoUrl}
                  title="Tutorial de Ven Espíritu Santo en guitarra"
                />
              </div>
            </div>
            {/* Bajo */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Tutorial de {tutorial.tutoTitle} en Bajo
              </div>
              <div className="collapse-content text-sm">
                <VideoPlayer
                  videoUrl={tutorial.bajoVideoUrl}
                  title="Tutorial de Ven Espíritu Santo en guitarra"
                />
              </div>
            </div>
            {/* Piano */}
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Tutorial de la intro en piano
              </div>
              <div className="collapse-content text-sm">
                <VideoPlayer
                  videoUrl={tutorial.arreglo1PianoVideoUrl}
                  title="Tutorial de Ven Espíritu Santo en guitarra"
                />
              </div>
            </div>
            {/* fin de la lista de videos */}
          </div>
          {/* Lyrics (right on desktop, bottom on mobile) */}
          <div className="md:w-1/2 text-left">
            <pre className="whitespace-pre-wrap font-mono text-xs text-gray-300 leading-relaxed">
              {tutorial.letra}
            </pre>
          </div>
        </div>
      </div>

      {/* versiculo */}
      <div className="pt-4 text-center">
        <pre className="whitespace-pre-wrap font-mono text-md text-gray-300 leading-relaxed">
          {tutorial.verso}
        </pre>
        <h3>{tutorial.versoRef}</h3>
      </div>

      {/* Libreta de progresiones */}
      <LibretaDeNotas />

      {/* Material Cards component */}
      <MaterialCards />
    </div>
  );
}
