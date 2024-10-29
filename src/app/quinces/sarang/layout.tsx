import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sarang Gómez | Quinceañera Celebration",
  description:
    "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
  openGraph: {
    title: "Sarang Gómez | Mis XV Años",
    description:
      "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
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
