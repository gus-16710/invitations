import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🌹 Meily | Mis XV Años 🌹",
  description:
    "Mis 15 primaveras han llegado y lo que más me llena de emoción es celebrarlo a tu lado.",
  openGraph: {
    title: "🌹 Meily | Mis XV Años 🌹",
    description:
      "Mis 15 primaveras han llegado y lo que más me llena de emoción es celebrarlo a tu lado.",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/meily/meily-preview.jpg`,
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
      {/* Marco floral de camila, re-coloreado de rosa a rojo */}
      <div
        className="bg-[url('/img/quinces/meily/floral-background.png')] bg-cover bg-no-repeat bg-center h-screen top-0 fixed w-full z-10 pointer-events-none"
        style={{ filter: "hue-rotate(18deg) saturate(1.6) brightness(0.95)" }}
      />
    </>
  );
}
