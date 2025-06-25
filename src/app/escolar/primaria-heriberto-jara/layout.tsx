import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Gral. Heriberto Jara Corona | Ceremonia de Graduación 🎓",
  description: "Ceremonia de Graduación - GENERACIÓN 2019-2025",
  openGraph: {
    title: "🎓 Gral. Heriberto Jara Corona | Ceremonia de Graduación 🎓",
    description: "Ceremonia de Graduación - GENERACIÓN 2019-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/primaria-heriberto-jara/gallery-01.jpeg`,
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
