import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '🎓 Primaria "Ignacio Manuel Altamirano" | Graduación 🎓',
  description: "Ceremonia de “Fin de Cursos” de la GENERACIÓN 2019-2025",
  openGraph: {
    title: '🎓 Primaria "Ignacio Manuel Altamirano" | Graduación 🎓',
  description: "Ceremonia de “Fin de Cursos” de la GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-ignacio-altamirano/gallery.jpeg`,
    ],
  },
  icons: {
    icon: "https://invitaciones.unaideamas.com/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
