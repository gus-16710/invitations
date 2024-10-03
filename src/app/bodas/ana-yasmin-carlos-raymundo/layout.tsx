import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🥂 Ana Yasmin & Carlos Raymundo 🥂",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "🥂 Ana Yasmin & Carlos Raymundo 🥂",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://invitaciones.unaideamas.com/img/bodas/ana-carlos/background-header.jpg"],
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
