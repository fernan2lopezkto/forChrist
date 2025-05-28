import { footerText } from "@/utils/texts";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover" href="/about">
          Acerca de
        </a>
        <a className="link link-hover" href="apoyanos">
          Apóyanos
        </a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4"></div>
      </nav>
      <aside>
        <p>{footerText}</p>
      </aside>
    </footer>
  );
}
