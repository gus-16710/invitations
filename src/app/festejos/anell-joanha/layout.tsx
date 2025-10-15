import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎃 Anell Joanha | Mi cumpleaños 🎃",
  description:
    "¡Mi cumpleaños no sería lo mismo sin ti 💕 Te invito a celebrar conmigo este día tan especial. 🎈🎉",
  openGraph: {
    title: "🎃 Anell Joanha | Mi cumpleaños 🎃",
    description:
      "¡Mi cumpleaños no sería lo mismo sin ti 💕 Te invito a celebrar conmigo este día tan especial. 🎈🎉",
    images: [
      `https://invitaciones.unaideamas.com/img/festejos/anell-joanha/preview.jpg`,
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
