import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "👶🏻 Megan Guadalupe | Mis 3 Años 👶🏻",
  description:
    "¡Celebremos los 3 añitos de Megan Guadalupe! Te esperamos. ¡No faltes, será una fiesta llena de diversión y alegría! 🎈🎉",
  openGraph: {
    title: "👶🏻 Megan Guadalupe | Mis 3 Años 👶🏻",
    description:
      "¡Celebremos los 3 añitos de Megan Guadalupe! Te esperamos. ¡No faltes, será una fiesta llena de diversión y alegría! 🎈🎉",
    images: [
      `https://invitaciones.unaideamas.com/img/festejos/megan-guadalupe/megan4.jpg`,
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
