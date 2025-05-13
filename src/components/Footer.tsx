import { footerText } from "@/utils/texts";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      {/* Puedes mantener esta sección de enlaces si los necesitas */}
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/about">Acerca de</a>
        {/* <a className="link link-hover">Contacto</a> */}
        <a className="link link-hover" href="apoyanos">Apóyanos</a>
        {/* Puedes agregar más enlaces aquí */}
      </nav>
      {/* Puedes mantener esta sección de redes sociales si las necesitas */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Enlaces a tus redes sociales (puedes usar íconos de Daisy UI) */}
          {/* <a><svg ...></svg></a> */}
        </div>
      </nav>
      <aside>
        <p>{footerText}</p>
      </aside>
    </footer>
  );
}