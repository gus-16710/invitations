import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Code,
} from "@nextui-org/react";
import { mate, roboto, titillium } from "./Fonts";
import { useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";

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

  return (
    <motion.section
      className="h-screen flex justify-center items-center flex-col"
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <h1 className={`${mate.className} text-gray-800 text-3xl mt-5`}>
        Mesa de Regalos
      </h1>

      <p
        className={`${roboto.className} text-gray-800 mt-5 mx-10 text-center max-w-md`}
      >
        Lo más valioso para nosotros es compartir este día contigo. En caso de
        que desees hacernos un obsequio, hemos preparado estas opciones.
      </p>

      <div className="mt-2 w-72">
        <Accordion defaultExpandedKeys={["1"]}>          
          <AccordionItem
            key="1"
            aria-label="Transferencia Bancaria"
            startContent={
              <Avatar
                isBordered
                color="warning"
                radius="lg"
                src="/img/bodas/isabel-alan/credit-logo.png"
              />
            }
            subtitle="Transferencia Bancaria"
            title="Efectivo"
          >
            <div className="flex flex-col gap-3">
              {/* Beneficiario */}
              <div>
                <label className={`${titillium.className} ml-1 text-sm text-gray-600`}>
                  Beneficiario:
                </label>
                <Code className="block mt-1 w-full">Nombre del Titular</Code>
              </div>
              
              {/* Banco */}
              <div>
                <label className={`${titillium.className} ml-1 text-sm text-gray-600`}>
                  Banco:
                </label>
                <Code className="block mt-1 w-full">Nombre del Banco</Code>
              </div>
              
              {/* Número de Cuenta */}
              <div>
                <label className={`${titillium.className} ml-1 text-sm text-gray-600`}>
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
          </AccordionItem>
        </Accordion>
      </div>

      {/* Mensaje adicional opcional */}
      <p className={`${roboto.className} text-gray-500 text-xs mt-6 text-center mx-10`}>
        ¡Gracias por tu generosidad! Tu presencia es el mejor regalo.
      </p>
    </motion.section>
  );
}