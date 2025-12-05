import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Alondra: Un Sueño de XV Años ✨",
  description:
    "Mis XV están por llegar y quiero que formes parte de este día tan especial, lleno de luz, sonrisas y recuerdos inolvidables. 🌸✨",
  openGraph: {
    title: "✨ Alondra: Un Sueño de XV Años ✨",
    description:
      "Mis XV están por llegar y quiero que formes parte de este día tan especial, lleno de luz, sonrisas y recuerdos inolvidables. 🌸✨",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/alondra-alarcon/preview.jpg`,
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
