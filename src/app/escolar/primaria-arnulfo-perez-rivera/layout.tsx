import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Profr. Arnulfo Pérez Rivera | Fin de Cursos 🎓",
  description: "“Fin de cursos” de la GENERACIÓN 2019-2025",
  openGraph: {
    title: "🎓 Profr. Arnulfo Pérez Rivera | Fin de Cursos 🎓",
    description: "“Fin de cursos” de la GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-arnulfo-perez-rivera/preview.jpg`,
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
