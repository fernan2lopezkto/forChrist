import { navigationItems, proyectNames } from "@/utils/texts";

export default function Contact() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('/forChristWP3.png')",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{proyectNames.short}</h1>
            <p className="mb-5">
              Un lugar de ayuda para los que recién comienzan en su llamado a
              servir a Dios a trabes de la música y evangelizmo
            </p>
            <p className="mb-5 mt-5">
              
            </p>
            <p>
              Si te interesa te aconsejo suscribirte a nuestro canal de YouTube
              y actives la campanita
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
