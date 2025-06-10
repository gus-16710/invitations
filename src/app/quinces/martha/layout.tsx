import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🍾 Martha Itzel | Mis XV Años 🍾",
  description:
    "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
  openGraph: {
    title: "🍾 Martha Itzel | Mis XV Años 🍾",
    description:
      "Mis 15 primaveras han llegado y lo que más me llena de emoción es pasarlo con risas a tu lado.",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/martha/gallery-05.jpg`,
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
  return (
    <>
      {children}
      <div className="bg-[url('/img/quinces/martha/floral-background.png')] bg-cover bg-no-repeat bg-center h-screen top-0 fixed w-full z-10" />
    </>
  );
}
