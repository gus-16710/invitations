import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Titulo",
  description: "Descripción",
  openGraph: {
    title: "Titulo",
    description: "Descripción",    
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
