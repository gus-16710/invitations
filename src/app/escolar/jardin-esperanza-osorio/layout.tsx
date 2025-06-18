import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "🎓 Jardín de Niños Esperanza Osorio | Clausura 🎓",
  description: "Ceremonia de Clausura",
  openGraph: {
    title: "🎓 Jardín de Niños Esperanza Osorio | Clausura 🎓",
    description: "Ceremonia de Clausura ",
    images: [
      `https://invitaciones.unaideamas.com/img/escolar/jardin-esperanza-osorio/preview.jpg`,
    ],
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
