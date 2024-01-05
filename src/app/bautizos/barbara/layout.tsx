import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Barbara | Bautizo",
  description:
    "Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija.",
  openGraph: {
    title: "Barbara | Bautizo",
    description:
      "Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija.",
    images: [
      `https://invitaciones.unaideamas.com/img/bautizos/annette/gallery-03.jpg`,
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
