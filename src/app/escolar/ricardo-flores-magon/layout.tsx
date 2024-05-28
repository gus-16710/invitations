import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Ricardo Flores Magón | Fin de Cursos 🎓",
  description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2021-2024",
  openGraph: {
    title: "🎓 Ricardo Flores Magón | Fin de Cursos 🎓",
    description: "Ceremonia de “Fin de cursos” de la GENERACIÓN 2021-2024",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/ricardo-flores-magon/rfm.jpg`,
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
