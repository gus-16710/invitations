import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invitaciones Digitales",
  description: "Invitaciones digitales para toda ocasión.",
  openGraph: {
    title: "Invitaciones",
    description: "Invitaciones digitales para toda ocasión.",
    images: ["https://invitaciones.unaideamas.com/img/invitations.jpg"],
  },
  icons: {
    icon: "https://invitaciones.unaideamas.com/img/favicon.png",
  },
  metadataBase: new URL("https://invitaciones.unaideamas.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      style={{ scrollSnapType: "y mandatory" }}
      className="scroll-smooth"
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is my website ✅" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
