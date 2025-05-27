import GeneralHero from "@/components/GeneralHero";

const heroContent = {
  Title: "¡Material evangelistico",
  Subtitle: "Proximamente",
  parrafos: [""],
  Botton: "Inicio",
};

export default function Evangelism() {
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
