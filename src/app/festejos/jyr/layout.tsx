import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "✨ Jess & Rafa ✨",
  description: "Nada es para llevar, todo es para vivir aquí 🌸✨",
  openGraph: {
    title: "✨ Jess & Rafa ✨",
    description: "Nada es para llevar, todo es para vivir aquí 🌸✨",
    images: [`https://invitaciones.unaideamas.com/img/festejos/jyr/preview.jpg`],
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
