import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🥂 Diana & Ernesto 🥂",
  description:
    "Nos casamos y deseamos compartir con ustedes este día tan especial.",
  openGraph: {
    title: "🥂 Diana & Ernesto 🥂",
    description:
      "Nos casamos y deseamos compartir con ustedes este día tan especial.",
    images: ["https://gus16710.000webhostapp.com/img/wedding/gallery-04.jpg"],
  },
  icons: {
    icon: "https://gus16710.000webhostapp.com/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
