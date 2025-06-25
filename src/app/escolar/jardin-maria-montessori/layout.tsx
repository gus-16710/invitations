import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '🎓 Jardín de Niños "María Montessori" | Graduación 🎓',
  description: "Ceremonia de “Graduación” de la GENERACIÓN 2025",
  openGraph: {
    title: '🎓 Jardín de Niños "María Montessori" | Graduación 🎓',
    description: "Ceremonia de “Graduación” de la GENERACIÓN 2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/jardin-maria-montessori/preview.jpg`,
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
