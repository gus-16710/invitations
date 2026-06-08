"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,        // suavidad del scroll (0 = sin suavizado, 1 = inmediato)
        smoothWheel: true, // suaviza la rueda del mouse
        duration: 1.2,     // duración de la animación de scroll
      }}
    >
      {children}
    </ReactLenis>
  );
}
