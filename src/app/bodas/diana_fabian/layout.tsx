import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Diana & Fabián 💗",
  description:
    "El amor nos juntó y queremos que ustedes sean parte de esta hermosa historia. ¡Nos casamos!",
  openGraph: {
    title: "💗 Diana & Fabián 💗",
    description:
      "El amor nos juntó y queremos que ustedes sean parte de esta hermosa historia. ¡Nos casamos!",
    images: [
      {
        url: "https://invitaciones.unaideamas.com/img/bodas/diana_fabian/preview_image.jpg",
        width: 1200,
        height: 630,
        alt: "Diana y Fabián",
      },
    ],
  },
   twitter: {
    card: "summary_large_image",
    title: "💗 Diana & Fabián 💗",
    description: "El amor nos juntó y queremos que ustedes sean parte de esta hermosa historia. ¡Nos casamos!",
    images: ["https://invitaciones.unaideamas.com/img/bodas/diana_fabian/preview_image.jpg"],
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
