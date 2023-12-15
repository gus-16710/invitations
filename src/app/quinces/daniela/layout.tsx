import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniela | Mis XV Años",
  description:
    "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
  openGraph: {
    title: "Daniela | Mis XV Años",
    description:
      "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
    images: [`https://invitaciones.unaideamas.com/img/quinces/daniela/gallery-03.jpg`],
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
