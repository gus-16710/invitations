import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 María & Pedro 💗",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "💗 María & Pedro 💗",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://invitaciones.unaideamas.com/img/bodas/example/gallery-01.jpg"],
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
  return <div className="bg-[url('/img/bodas/example/background_main.jpg')] bg-center bg-cover bg-fixed">{children}</div>;
}
