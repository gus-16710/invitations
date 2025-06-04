import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🥂 Alondra & Antonio 🥂",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "🥂 Alondra & Antonio 🥂",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://invitaciones.unaideamas.com/img/bodas/diana-ernesto/gallery-04.jpg"],
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
