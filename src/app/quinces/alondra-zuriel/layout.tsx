import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Alondra Zuriel | Mis XV Años 💗",
  description:
    "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
  openGraph: {
    title: "💗 Alondra Zuriel | Mis XV Años 💗",
    description:
      "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/ashley/ashley.jpg`,
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
