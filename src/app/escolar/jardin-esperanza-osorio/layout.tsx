import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Jardín de niños Esperanza Osorio | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” ",
  openGraph: {
    title: "🎓 Jardín de niños Esperanza Osorio | Fin de Cursos 🎓",
    description: "Ceremonia de “Fin de cursos” ",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/jardin-esperanza-osorio/preview.jpg`,
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
