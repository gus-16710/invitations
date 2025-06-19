import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Telebachillerato Jacarandas | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2022-2025",
  openGraph: {
    title: "🎓 Telebachillerato Jacarandas | Fin de Cursos 🎓",
    description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2022-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-francisco-madero/gallery-01.jpg`,
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
