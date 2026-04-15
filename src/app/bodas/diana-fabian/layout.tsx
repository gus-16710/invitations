import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Diana & Fabián 💗",
  description:
    "El amor nos juntó y queremos que ustedes sean parte de esta hermosa historia. ¡Nos casamos!",
  openGraph: {
    title: "💗 Diana & Fabián 💗",
    description:
      "El amor nos juntó y queremos que ustedes sean parte de esta hermosa historia. ¡Nos casamos!",
    images: ["https://invitaciones.unaideamas.com/img/bodas/diana-fabian/preview_image.jpg"],
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
