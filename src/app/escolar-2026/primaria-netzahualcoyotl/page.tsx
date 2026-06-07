"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";

import "./styles.css";
import { nobile, ovo } from "./components/Fonts";
import AudioControl from "./components/AudioControl";
import SlideFive from "./components/slideFive";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const OpeningModal = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
      classNames={{
        base: "bg-transparent shadow-none border-none w-auto min-h-0 max-w-none",
        body: "p-0",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            {/* Círculo principal */}
            <div
              className="relative flex flex-col items-center justify-center overflow-hidden bg-slate-900"
              style={{
                width: 300,
                height: 300,
                borderRadius: "50%",
                //boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 25px 60px rgba(0,0,0,0.6)",
              }}
            >
            <div className="flex flex-col items-center justify-center w-full h-full px-12 gap-2.5">

              {/* Etiqueta superior */}
              <motion.p
                className={`${nobile.className} text-[0.48rem] tracking-[0.35em] text-slate-500 uppercase text-center`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                Escuela Primaria Vespertina
              </motion.p>

              {/* Nombre de la escuela */}
              <motion.h1
                className={`${ovo.className} text-white text-[1.55rem] leading-snug text-center`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                Netzahualcoyotl
              </motion.h1>

              {/* Clave */}
              <motion.p
                className={`${nobile.className} text-[0.48rem] tracking-[0.22em] text-slate-600`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                30EPR3551M
              </motion.p>

              {/* Divisor */}
              <motion.div
                className="flex items-center gap-2 w-full"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <div className="flex-1 h-px bg-slate-700" />
                <span className="text-slate-600 text-[7px]">✦</span>
                <div className="flex-1 h-px bg-slate-700" />
              </motion.div>

              {/* Tipo de evento */}
              <motion.p
                className={`${nobile.className} text-[0.48rem] tracking-[0.28em] text-slate-500 uppercase text-center`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={4}
              >
                Ceremonia de Fin de Cursos
              </motion.p>

              {/* Botón CTA */}
              <motion.button
                type="button"
                onClick={() => { setOpen(true); onClose(); }}
                className={`${nobile.className} mt-1 border border-slate-700 hover:border-slate-400 text-slate-400 hover:text-white text-[0.48rem] tracking-[0.28em] uppercase px-5 py-2 rounded-full transition-all duration-200 active:scale-95`}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={5}
              >
                Ver Invitación
              </motion.button>

            </div>
            </div>{/* fin círculo */}
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function School() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="bg-[url('/img/escolar-2026/primaria-netzahualcoyotl/background01.jpg')] bg-center bg-cover h-screen">
      {open && (
        <div className="relative">
          <Splide
            aria-label="Francisco I. Madero"
            options={{
              rewind: true,
              direction: "ltr",
              height: "100svh",
              wheel: false,
              releaseWheel: true,
              type: "loop",
              waitForTransition: true,
              arrows: true,
              classes: {
                page: "splide__pagination__page custom-class-page", // each button
              },
            }}
          >
            <SplideSlide>
              <SlideOne />
            </SplideSlide>
            <SplideSlide>
              <SlideTwo />
            </SplideSlide>
            <SplideSlide>
              <SlideThree />
            </SplideSlide>
            <SplideSlide>
              <SlideFive />
            </SplideSlide>
            <SplideSlide>
              <SlideFour />
            </SplideSlide>
          </Splide>
          <AudioControl />
        </div>
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
