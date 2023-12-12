import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annete Rivera | Mi Bautizo",
  description:
    "Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija.",
  openGraph: {
    title: "Annete Rivera | Mis Bautizo",
    description:
      "Tenemos el gusto de invitarte al bautizo de nuestra pequeña hija.",
    images: [`https://invitaciones.unaideamas.com/img/fifteen/gallery-03.jpg`],
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
  return <main>{children}</main>;
}
