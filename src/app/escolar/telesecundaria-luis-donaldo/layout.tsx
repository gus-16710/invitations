import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "🎓 Escuela Telesecundaria Luis Donaldo Colosio Murrieta | Fin de Cursos 🎓",
  description: "“Fin de cursos” de la GENERACIÓN 2022-2025",
  openGraph: {
    title:
      "🎓 Escuela Telesecundaria Luis Donaldo Colosio Murrieta | Fin de Cursos 🎓",
    description: "“Fin de cursos” de la GENERACIÓN 2022-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/telesecundaria-luis-donaldo/gallery-01.jpg`,
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
