import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "⭐ Mateo | Mi Bautizo ⭐",
  description:
    "Tenemos el gusto de invitarte al bautizo de nuestro pequeño hijo.",
  openGraph: {
    title: "⭐ Mateo | Mi Bautizo ⭐",
    description:
      "Tenemos el gusto de invitarte al bautizo de nuestro pequeño hijo.",
    images: [
      `https://invitaciones.unaideamas.com/img/bautizos/mateo-mendoza/preview-mateo.jpg`,
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
