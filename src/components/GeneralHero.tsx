import Link from "next/link";
import MaterialCards from "@/components/MaterialCards";

// 1. Define la interfaz para las props
interface GeneralHeroProps {
  Title: string;
  Subtitle: string;
  parrafos: string[]; // Asumimos que es un array de strings
  Botton: string;
  // Si en el futuro el Link del botón fuera dinámico, podrías añadir:
  // buttonLink?: string; // Prop opcional para el href del botón
}

// 2. Asigna la interfaz a las props de la función
export default function GeneralHero({
  Title,
  Subtitle,
  parrafos,
  Botton,
}: GeneralHeroProps) {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('/forChristWP3.png')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h2 className="mb-5 text-3xl font-bold">{Title}</h2>
            <h1 className="mb-5 text-5xl font-bold">{Subtitle}</h1>
            {parrafos.map((parrafo, index) => (

              <p key={index} className="mb-5">
                {parrafo}
              </p>
            ))}
            {/* Si 'buttonLink' fuera dinámico: <Link href={buttonLink || "/"} ...> */}
            <Link href="/" className="btn btn-primary">
              {Botton}
            </Link>
          </div>
        </div>
      </div>
      <MaterialCards />
    </div>
  );
}