import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '🎓 Telebachillerato "Buena Vista" | Graduación 🎓',
  description: "Ceremonia de “Graduación” de la GENERACIÓN 2022-2025",
  openGraph: {
    title: '🎓 Telebachillerato "Buena Vista" | Graduación 🎓',
    description: "Ceremonia de “Graduación” de la GENERACIÓN 2022-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/telebachillerato-buena-vista/gallery-01.jpeg`,
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
