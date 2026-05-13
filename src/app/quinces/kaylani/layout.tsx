import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨Mis XV Años: Kaylani Gabriell ✨",
  description:
    "Te invitamos a celebrar con nosotros este día tan especial, lleno de amor, alegría y momentos inolvidables. ¡Esperamos contar con tu presencia para hacer de este día un recuerdo eterno! 🎉💖",
  openGraph: {
    title: "✨Mis XV Años: Kaylani Gabriell ✨",
    description:
      "Te invitamos a celebrar con nosotros este día tan especial, lleno de amor, alegría y momentos inolvidables. ¡Esperamos contar con tu presencia para hacer de este día un recuerdo eterno! 🎉💖",
    images: [
      `https://invitaciones.unaideamas.com/img/quinces/kaylani/previewimg_.jpg`,
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
