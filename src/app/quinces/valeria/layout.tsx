import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Valeria | Mis XV Años 💗",
  description:
    "Hace 15 primaveras, Dios me regaló la vida. Por medio de esta tarjeta te invitó a que celebres conmigo mi gran fecha soñada en una noche llena de baladas.",
  openGraph: {
    title: "💗 Valeria | Mis XV Años 💗",
    description:
      "Hace 15 primaveras, Dios me regaló la vida. Por medio de esta tarjeta te invitó a que celebres conmigo mi gran fecha soñada en una noche llena de baladas.",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/valeria/preview.jpg`,
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
