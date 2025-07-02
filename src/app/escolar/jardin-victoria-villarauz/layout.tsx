import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '🎓 Jardín de Niños "Victoria Villarauz Velazco" | Graduación 🎓',
  description: "Ceremonia de Graduación",
  openGraph: {
    title: '🎓 Jardín de Niños "Victoria Villarauz Velazco" | Graduación 🎓',
    description: "Ceremonia de Graduación",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/jardin-victoria-villarauz/gallery-01.jpg`,
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
