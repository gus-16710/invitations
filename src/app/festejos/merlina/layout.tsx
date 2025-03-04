import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "👶🏻 Merlina | Mis 3 Años 👶🏻",
  description:
    "¡Celebremos los 3 añitos de Merlina! Te esperamos. ¡No faltes, será una fiesta llena de diversión y alegría! 🎈🎉",
  openGraph: {
    title: "👶🏻 Merlina | Mis 3 Años 👶🏻",
    description:
      "¡Celebremos los 3 añitos de Merlina! Te esperamos. ¡No faltes, será una fiesta llena de diversión y alegría! 🎈🎉.",
    images: [`https://invitaciones.unaideamas.com/img/festejos/merlina/preview.jpg`],
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
