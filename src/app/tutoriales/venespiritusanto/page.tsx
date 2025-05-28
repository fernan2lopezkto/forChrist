"use client"; // This directive is necessary for client-side components like ReactPlayer

import MaterialCards from "@/components/MaterialCards";
import VideoPlayer from "@/components/VideoPlayer"; // Adjust the path as needed

export default function VenEspirituSanto() {
  // REPLACE with your actual YouTube video URL
  const youtubeVideoUrl = "https://youtu.be/gV7RkJtBOjU?si=zXjqhDBQ7FLIKT59"; // Example URL, change this!
  const guitarraVideoUrl = ""

  const letra = `INTRO:      MIm      RE     DO     SI 7
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
Ven, ven, ven llena este lugar`;

  return (
    <div className="text-center pt-15 px-0.5">
      <h1 className="text-4xl font-bold mb-4">Ven Espíritu Santo</h1>
      <h2 className="text-2xl text-gray-400 mb-8">Pista y Tutorial</h2>

      {/* Main container for video and lyrics - centered and max-width */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="md:flex md:gap-8 items-start">
          {/* Video Player (left on desktop, top on mobile) */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <VideoPlayer
              videoUrl={youtubeVideoUrl}
              title="Tutorial de Ven Espíritu Santo"
            />
            <VideoPlayer
              videoUrl={guitarraVideoUrl}
              title="Tutorial de Ven Espíritu Santo en guitarra"
            />
          </div>
          {/* Lyrics (right on desktop, bottom on mobile) */}
          <div className="md:w-1/2 text-left">
            <pre className="whitespace-pre-wrap font-mono text-xs text-gray-300 leading-relaxed">
              {letra}
            </pre>
          </div>
        </div>
        {/* Description below video and lyrics */}
        <p className="mt-8 text-lg leading-relaxed text-gray-400">
          En este video, aprenderás a tocar "Ven Espíritu Santo" de Barak. Te
          guiaremos paso a paso con la pista y los tutoriales necesarios para
          que puedas dominar esta hermosa canción. ¡Esperamos que te sea de gran
          bendición!
        </p>
      </div>

      {/* Material Cards component */}
      <MaterialCards />
    </div>
  );
}
