import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '🎓 Telebachillerato "Las Trancas" | Graduación 🎓',
  description: "Ceremonia de “Graduación” de la GENERACIÓN 2022-2025",
  openGraph: {
    title: '🎓 Telebachillerato "Las Trancas" | Graduación 🎓',
    description: "Ceremonia de “Graduación” de la GENERACIÓN 2022-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/telebachillerato-las-trancas/gallery-01.jpg`,
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
