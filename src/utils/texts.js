// NavBars
export const navigationItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Material",
    href: "/material", // Usaremos '#' o una ruta sin destino para el elemento principal
    submenu: [
      { label: "Tutoriales", href: "/tutorials" },
      { label: "Material Evangelístico", href: "/evangelism" },
      { label: "Contenido Edificante", href: "/edificante"}
    ],
  },
  { label: "Acerca de", href: "/about" },
  // { label: "Contacto", href: "/contact" },
  { label: "Apóyanos", href: "/support" },
];

// NOMBRE
export const proyectNames = { long: "4C-ForChrist", short: "4C" };

export const footerText =
  "© 2025 Mi Plataforma Cristiana. Todos los derechos reservados.";

export const Text = "";
