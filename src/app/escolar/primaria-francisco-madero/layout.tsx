import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Francisco I. Madero | Fin de Cursos 🎓",
  description: "Francisto I. Madero “Fin de cursos” de la GENERACIÓN 2019-2025",
  openGraph: {
    title: "🎓 Francisco I. Madero | Fin de Cursos 🎓",
    description:
      "Francisto I. Madero “Fin de cursos” de la GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-francisco-madero/generacion_preview.jpg`,
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
