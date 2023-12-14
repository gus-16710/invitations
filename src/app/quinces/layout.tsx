import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitaciones | Quince Años ",
  description: "Catálogo de invitaciones digitales con la tematica Quince años.",
  openGraph: {
    title: "Invitaciones | Quince Años",
    description: "Catálogo de invitaciones digitales con la tematica Bautizos.",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/fifteen.jpg`,
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
