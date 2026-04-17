import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Kimberly Renata & Cristina Yoleth 💗",
  description:
    "Te invitamos a celebrar con nosotras este día tan especial, lleno de amor, alegría y momentos inolvidables. ¡Esperamos contar con tu presencia para hacer de este día un recuerdo eterno! 🎉👶🏻💖",
  openGraph: {
    title: "💗 Kimberly Renata & Cristina Yoleth 💗",
    description:
      "Te invitamos a celebrar con nosotras este día tan especial, lleno de amor, alegría y momentos inolvidables. ¡Esperamos contar con tu presencia para hacer de este día un recuerdo eterno! 🎉👶🏻💖",
    images: [
      `https://invitaciones.unaideamas.com/img/festejos/kimberly-cristina/preview.jpg`,
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
