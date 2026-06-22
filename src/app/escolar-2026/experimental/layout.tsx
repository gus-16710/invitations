import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Escuela Secundaria Experimental | Ceremonia de Graduación 🎓",
  description: "Ceremonia de Graduación - GENERACIÓN 2023-2026",
  openGraph: {
    title: "🎓 Escuela Secundaria Experimental | Ceremonia de Graduación 🎓",
    description: "Ceremonia de Graduación - GENERACIÓN 2023-2026",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar-2026/experimental/gallery-04.jpeg`,
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
