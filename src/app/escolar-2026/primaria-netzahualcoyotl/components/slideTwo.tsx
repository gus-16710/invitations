import { Spinner } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const GREEN = "#006847";
const GREEN_MID = "#00684780";
const GREEN_LIGHT = "#00684730";

const enter = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" as const },
  viewport: { once: false, amount: 0.3 },
});

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3455913580024!2d-96.56807789999999!3d19.3541831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4ae07e1bdc35f%3A0x6fd21fe3acba9dc9!2sNezahualcoyotl!5e0!3m2!1ses!2smx!4v1750439205105!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="z-20"
  />
);

const ModalMap = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => (
  <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xs" placement="center" backdrop="blur">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className={`${oleo.className} flex justify-center text-2xl`} style={{ color: GREEN }}>
            Ubicación
          </ModalHeader>
          <ModalBody className="relative flex justify-center items-center">
            <MapCeremony />
            <Spinner className="absolute z-10" />
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <button
              type="button"
              className={`${nobile.className} text-[0.6rem] tracking-[0.28em] uppercase px-6 py-2.5 rounded-full border transition-all duration-200`}
              style={{ color: GREEN, borderColor: GREEN_MID }}
              onClick={onClose}
            >
              Cerrar
            </button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
);

export default function SlideTwo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="flex flex-col justify-center items-center px-8 gap-4"
        style={{ height: "100svh" }}
      >
        {/* Título */}
        <motion.p
          className={`${oleo.className} text-5xl leading-none`}
          style={{ color: GREEN }}
          {...enter(0)}
        >
          Fecha y Lugar
        </motion.p>

        {/* Divisor */}
        <motion.div className="flex items-center gap-3 w-full max-w-xs" {...enter(1)}>
          <div className="flex-1 h-px" style={{ background: GREEN_LIGHT }} />
          <span className="text-[9px]" style={{ color: GREEN_MID }}>✦</span>
          <div className="flex-1 h-px" style={{ background: GREEN_LIGHT }} />
        </motion.div>

        {/* Bloque de fecha */}
        <motion.div
          className={`${ovo.className} flex items-center gap-0 mt-2`}
          {...enter(2)}
        >
          {/* Día de la semana */}
          <div className="flex flex-col items-center" style={{ width: "90px" }}>
            <span className="text-[0.7rem] tracking-[0.3em] uppercase" style={{ color: GREEN }}>
              día
            </span>
            <span className="text-xl mt-1 text-center" style={{ color: GREEN }}>Viernes</span>
          </div>

          {/* Número del día */}
          <div
            className="flex flex-col items-center px-7 py-2"
            style={{
              borderLeft: `1px solid ${GREEN_LIGHT}`,
              borderRight: `1px solid ${GREEN_LIGHT}`,
            }}
          >
            <span className="text-[5.5rem] leading-none" style={{ color: GREEN }}>
              10
            </span>
          </div>

          {/* Mes y hora */}
          <div className="flex flex-col items-center gap-2" style={{ width: "90px" }}>
            <span className="text-xl text-center" style={{ color: GREEN }}>Julio</span>
            <span
              className="text-[0.7rem] tracking-[0.15em]"
              style={{ color: GREEN, borderTop: `1px solid ${GREEN_LIGHT}`, paddingTop: "6px", width: "100%", textAlign: "center" }}
            >
              15:00 hrs
            </span>
          </div>
        </motion.div>

        {/* Año */}
        <motion.p
          className={`${ovo.className} text-2xl tracking-[0.3em]`}
          style={{ color: GREEN }}
          {...enter(3)}
        >
          2026
        </motion.p>

        {/* Divisor */}
        <motion.div className="flex items-center gap-3 w-full max-w-xs" {...enter(4)}>
          <div className="flex-1 h-px" style={{ background: GREEN_LIGHT }} />
          <span className="text-[9px]" style={{ color: GREEN_MID }}>✦</span>
          <div className="flex-1 h-px" style={{ background: GREEN_LIGHT }} />
        </motion.div>

        {/* Lugar */}
        <motion.p
          className={`${nobile.className} text-sm tracking-[0.08em] text-center font-extrabold`}
          style={{ color: GREEN }}
          {...enter(5)}
        >
          Explanada de la Escuela Primaria
        </motion.p>

        {/* Dirección */}
        <motion.p
          className={`${nobile.className} text-xs text-center max-w-xs -mt-2 font-extrabold`}
          style={{ color: GREEN_MID }}
          {...enter(6)}
        >
          16 de Septiembre, Centro, 91639 Rinconada, Ver.
        </motion.p>

        {/* Botón mapa */}
        <motion.button
          type="button"
          className={`${nobile.className} mt-2 text-xs tracking-[0.28em] uppercase px-7 py-3 rounded-full border transition-all duration-200 active:scale-95`}
          style={{ color: GREEN, borderColor: GREEN_MID }}
          onClick={onOpen}
          {...enter(7)}
        >
          Ver ubicación
        </motion.button>

      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
