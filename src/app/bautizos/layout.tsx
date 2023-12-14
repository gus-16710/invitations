import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitaciones | Bautizos ",
  description: "Catálogo de invitaciones digitales con la tematica Bautizos.",
  openGraph: {
    title: "Invitaciones | Bautizos",
    description: "Catálogo de invitaciones digitales con la tematica Bautizos.",
    images: [
      `https://invitaciones.unaideamas.com/img/bautizos/christening.jpg`,
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
