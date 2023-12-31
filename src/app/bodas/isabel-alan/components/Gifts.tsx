import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Code,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { mate, roboto, titillium } from "./Fonts";
import { useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";

export default function Gifts() {
  const [openCount, setOpenCount] = useState(false);
  const [openCL, setOpenCL] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const clipBoard = (text: string) => {
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setOpenCount(false);
      setOpenCL(false);
    }, 1000);
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

      <p className={`${roboto.className} text-gray-800 mt-5 mx-10 text-center`}>
        Nuestro mayor regalo será tu presencia, pero si deseas obsequiarnos un
        detalle te dejamos las siguientes opciones:
      </p>

      <div className="mx-10 mt-2">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="Liverpool"
            startContent={
              <Avatar
                isBordered
                color="primary"
                radius="lg"
                src="/img/bodas/isabel-alan/liverpool-logo.png"
              />
            }
            subtitle="Lista de Regalos"
            title="Liverpool"
          >
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                // onClick={() => {
                //   onOpen();
                // }}
              >
                Ir a la tienda
              </button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Amazon"
            startContent={
              <Avatar
                isBordered
                color="success"
                radius="lg"
                src="/img/bodas/isabel-alan/amazon-logo.png"
              />
            }
            subtitle="Lista de Regalos"
            title="Amazon"
          >
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                // onClick={() => {
                //   onOpen();
                // }}
              >
                Ir a la tienda
              </button>
            </div>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Zoey Lang"
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
            <div className="flex flex-col ">
              <label className={`${titillium.className} ml-1`}>
                Beneficiario:
              </label>
              <Code>Isabel López Aguilar</Code>{" "}
              <label className={`${titillium.className} ml-1 mt-2`}>
                Banco:
              </label>
              <Code>BBVA Bancomer</Code>{" "}
              <label className={`${titillium.className} ml-1 mt-2`}>
                Cuenta:
              </label>
              <div className="flex justify-between items-center">
                <Code className="w-full">655030651102</Code>
                <Popover
                  placement="top"
                  color="foreground"
                  isOpen={openCount}
                  onOpenChange={(open) => setOpenCount(open)}
                >
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      className="ml-1"
                      variant="faded"
                      onClick={() => clipBoard("655030651102")}
                    >
                      Copiar
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny">Cuenta copiada</div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <label className={`${titillium.className} ml-1 mt-2`}>
                CLABE:
              </label>
              <div className="flex justify-between items-center">
                <Code className="w-full">0145806550365110265</Code>
                <Popover
                  placement="top"
                  color="foreground"
                  isOpen={openCL}
                  onOpenChange={(open) => setOpenCL(open)}
                >
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      className="ml-1"
                      variant="faded"
                      onClick={() => clipBoard("0145806550365110265")}
                    >
                      Copiar
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny">CLABE copiada</div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.section>
  );
}
