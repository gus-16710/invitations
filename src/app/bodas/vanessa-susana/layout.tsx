import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "💗 Vanessa & Susana 💗",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "💗 Vanessa & Susana 💗",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://invitaciones.unaideamas.com/img/bodas/vanessa-susana/image05.jpeg"],
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
  return <div className="bg-[url('/img/bodas/vanessa-susana/background_main.jpg')] bg-center bg-cover bg-fixed">{children}</div>;
}
