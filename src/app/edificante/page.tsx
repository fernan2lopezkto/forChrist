import GeneralHero from "@/components/GeneralHero";

const heroContent = {
  Title: "¡Contenido Edificante",
  Subtitle: "Proximamente",
  parrafos: [""],
  Botton: "Inicio",
};

export default function Edificante() {
    return (
      <div>
                <GeneralHero
                  Title={heroContent.Title}
                  Subtitle={heroContent.Subtitle}
                  parrafos={heroContent.parrafos}
                  Botton={heroContent.Botton}
                />
      </div>
    );
  }
  