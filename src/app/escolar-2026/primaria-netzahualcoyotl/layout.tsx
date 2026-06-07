import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Primaria Netzahualcoyotl | Fin de Cursos 🎓",
  description:
    "Primaria Netzahualcoyotl “Fin de cursos” de la GENERACIÓN 2020-2026",
  openGraph: {
    title: "🎓 Primaria Netzahualcoyotl | Fin de Cursos 🎓",
    description:
      "Primaria Netzahualcoyotl “Fin de cursos” de la GENERACIÓN 2020-2026",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar-2026/primaria-netzahualcoyotl/generacion.jpeg`,
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
