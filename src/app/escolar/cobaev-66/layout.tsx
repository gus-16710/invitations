import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 COBAEV Plantel 66 | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2022B-2025A",
  openGraph: {
    title: "🎓 COBAEV Plantel 66 | Fin de Cursos 🎓",
    description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2022B-2025A",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/cobaev-66/generacion.jpeg`,
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
