import { proyectNames } from "@/utils/texts";

export default function Home() {
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
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold">{proyectNames.long}</h1>
            <p className="mb-5">
              Un lugar de ayuda para los que recién comienzan en su llamado a
              servir a Dios a trabes de la música y evangelizmo
            </p>
            <button className="btn btn-primary">Get Started</button>
            <p className="mb-5 mt-5">
              Bienvenidos a 4Ctutoriales, en esta página encontraras tutoriales
              cristianos para distintos instrumentos, al igual que material para
              que tus ensayos y aprendizaje sea de la mejor manera posible.
              Estos tutoriales en su mayoría están orientados a músicos que
              recién comienzan o que lo quieren hacer, la idea es brindarles
              material y tutoriales explicados de una forma sencilla y fácil,
              así tener un punto de apoyo en el cual arrancar, pues hay muchas
              canciones que son de tremenda bendición, ministran muchísimo de la
              presencia de Dios, y a su vez se pueden interpretar en el
              instrumento de una forma muy fácil y sencilla.
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
