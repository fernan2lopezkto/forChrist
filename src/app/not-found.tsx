// pages/404.js
import GeneralHero from "@/components/GeneralHero";

export default function Custom404() {
  const heroContent = {
    Title: "404 - Página no encontrada",
    Subtitle: "Lo sentimos,",
    parrafos: ["no pudimos encontrar lo que estabas buscando."],
    Botton: "Volver al inicio",
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <GeneralHero
        Title={heroContent.Title}
        Subtitle={heroContent.Subtitle}
        parrafos={heroContent.parrafos}
        Botton={heroContent.Botton}
      />
    </div>
  );
}
