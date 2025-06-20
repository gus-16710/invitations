import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Telesecundaria 21 de Marzo | Ceremonia de Graduación 🎓",
  description: "Ceremonia de Graduación - GENERACIÓN 2022-2025",
  openGraph: {
    title: "🎓 Telesecundaria 21 de Marzo | Ceremonia de Graduación 🎓",
    description: "Ceremonia de Graduación - GENERACIÓN 2022-2025",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/telesecundaria-21-marzo/gallery-01.jpg`,
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
