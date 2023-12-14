import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invitaciones | Bodas ",
  description: "Catálogo de invitaciones digitales con la tematica Bodas.",
  openGraph: {
    title: "Invitaciones | Bodas",
    description: "Catálogo de invitaciones digitales con la tematica Bodas.",
    images: [
      `https://invitaciones.unaideamas.com/img/bodas/wedding.jpg`,
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
