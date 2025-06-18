import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Primaria Felipe Carrillo Puerto | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2019-2025",
  openGraph: {
    title: "🎓 Primaria Felipe Carrillo Puerto | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-felipe-carrillo-puerto/preview.jpg`,
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
