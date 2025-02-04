import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nicole | Mis XV Años",
  description:
    "Con mucha alegría y emoción, quiero compartir contigo este momento tan especial en mi vida.",
  openGraph: {
    title: "Nicole | Mis XV Años",
    description:
      "Con mucha alegría y emoción, quiero compartir contigo este momento tan especial en mi vida.",
    images: [`https://invitaciones.unaideamas.com/img/quinces/nicole/preview.jpg`],
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
