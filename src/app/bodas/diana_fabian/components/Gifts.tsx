import { Avatar, Button, Code } from "@nextui-org/react";
import { mate, roboto, titillium } from "./Fonts";
import { useRef, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

export default function Gifts() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const clipBoard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100, // rigidez (menor = más lento)
    damping: 30, // amortiguación
    mass: 1, // masa (mayor = más lento)
  });

  // Aplicar la escala sobre el valor suavizado
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <motion.section
      className="h-screen flex justify-center items-center flex-col"
      ref={ref}
      style={{
        scale: scale,
        opacity: opacity,
        willChange: "transform, opacity",
      }}
    >
      <h1 className={`${mate.className} text-gray-100 text-3xl mt-5`}>
        Mesa de Regalos
      </h1>

      <p
        className={`${roboto.className} text-gray-100 mt-5 mx-10 text-center max-w-md`}
      >
        Lo más valioso para nosotros es compartir este día contigo. En caso de
        que desees hacernos un obsequio, hemos preparado estas opciones.
      </p>

      <div className="mt-4 w-72 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm overflow-hidden">
        {/* Encabezado */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <Avatar
            isBordered
            color="warning"
            radius="lg"
            src="/img/bodas/isabel-alan/credit-logo.png"
          />
          <div className="flex flex-col">
            <span className={`${titillium.className} text-white font-semibold text-base leading-tight`}>
              Efectivo
            </span>
            <span className={`${roboto.className} text-white/70 text-xs`}>
              Transferencia Bancaria
            </span>
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-3 px-4 py-4">
          <div>
            <label className={`${titillium.className} ml-1 text-sm text-gray-100`}>
              Beneficiario:
            </label>
            <Code className="block mt-1 w-full">Diana Laura H</Code>
          </div>

          <div>
            <label className={`${titillium.className} ml-1 text-sm text-gray-100`}>
              Banco:
            </label>
            <Code className="block mt-1 w-full">Banco BBVA</Code>
          </div>

          <div>
            <label className={`${titillium.className} ml-1 text-sm text-gray-100`}>
              Número de Tarjeta:
            </label>
            <div className="flex gap-2 items-center mt-1">
              <Code className="flex-1">4152 3138 7148 3207</Code>
              <Button
                size="sm"
                variant="faded"
                color={copiedField === "account" ? "success" : "default"}
                onClick={() => clipBoard("4152 3138 7148 3207", "account")}
                className="min-w-[70px]"
              >
                {copiedField === "account" ? "✓ Copiado" : "Copiar"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mensaje adicional opcional */}
      <p
        className={`${roboto.className} text-gray-100 text-xs mt-6 text-center mx-10`}
      >
        ¡Gracias por tu generosidad! Tu presencia es el mejor regalo.
      </p>
    </motion.section>
  );
}
