import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Jess & Roberto ✨",
  description:
    "Jess Y Roberto están por llegar y quiero que formes parte de este día tan especial, lleno de luz, sonrisas y recuerdos inolvidables. 🌸✨",
  openGraph: {
    title: "✨ Jess y Roberto ✨",
    description:
      "Jess Y Roberto están por llegar y quiero que formes parte de este día tan especial, lleno de luz, sonrisas y recuerdos inolvidables. 🌸✨",
    images: [
      `https://invitaciones.unaideamas.com/img/festejos/jyr/main.jpg`,
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
