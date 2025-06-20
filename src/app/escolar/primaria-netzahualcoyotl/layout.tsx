import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Primaria Netzahualcoyótl | Fin de Cursos 🎓",
  description:
    "Primaria Netzahualcoyotl “Fin de cursos” de la GENERACIÓN 2019-2025",
  openGraph: {
    title: "🎓 Primaria Netzahualcoyótl | Fin de Cursos 🎓",
    description:
      "Primaria Netzahualcoyotl “Fin de cursos” de la GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-netzahualcoyotl/generacion.jpeg`,
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
