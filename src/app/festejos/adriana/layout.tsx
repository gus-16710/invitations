import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Rosca de Reyes ✨",
  description: "Tu amiga Adriana te invita a la rosca de reyes ✨",
  openGraph: {
    title: "✨ Rosca de Reyes ✨",
    description: "Tu amiga Adriana te invita a la rosca de reyes ✨",
    images: [
      `https://invitaciones.unaideamas.com/img/festejos/adriana/preview.jpg`,
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
