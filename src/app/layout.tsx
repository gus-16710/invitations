import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invitaciones",
  description: "Invitaciones digitales para toda ocasión.",
  openGraph: {
    title: "Invitaciones",
    description:
      "Invitaciones digitales para toda ocasión.",
    images: ["https://q9h7k7d8.rocketcdn.me/app/uploads/2021/08/digital-wedding-invite-728x546.jpg"],
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
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="This is my website ✅" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
