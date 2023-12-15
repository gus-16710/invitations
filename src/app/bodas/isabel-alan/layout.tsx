import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Isabel & Alan 💗",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "💗 Isabel & Alan 💗",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://invitaciones.unaideamas.com/img/bodas/isabel-alan/gallery-03.jpg"],
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
