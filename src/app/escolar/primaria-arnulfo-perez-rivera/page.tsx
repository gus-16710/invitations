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
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import "./styles.css";
import { nobile, ovo } from "./components/Fonts";
import AudioControl from "./components/AudioControl";

const OpeningModal = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // Animaciones
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemUp = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}     
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative"
            >
              {/* Elemento decorativo SVG */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                height="250px"
                width="250px"
                viewBox="0 0 58.743 58.743"
                className="absolute -left-10 -top-10 fill-slate-700/10 -rotate-12"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{
                  opacity: 0.1,
                  rotate: -12,
                  transition: { delay: 0.5, duration: 1 },
                }}
              >
                {/* Contenido del SVG... */}
              </motion.svg>

              <ModalBody>
                {/* Escuela */}
                <motion.h2
                  variants={itemUp}
                  className={`${nobile.className} text-blue-950 text-lg text-center`}
                >
                  Escuela Primaria Vespertina
                </motion.h2>

                {/* Nombre */}
                <motion.h1
                  variants={itemUp}
                  transition={{ delay: 0.1 }}
                  className={`${ovo.className} text-blue-950 text-4xl text-center mt-2`}
                >
                  "Profr. Arnulfo Pérez Rivera"
                </motion.h1>

                {/* Clave */}
                <motion.h2
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className={`${nobile.className} text-blue-950 text-center mt-1`}
                >
                  CLAVE: 30EPR3978P
                </motion.h2>

                {/* Evento */}
                <motion.h2
                  variants={itemUp}
                  transition={{ delay: 0.3 }}
                  className={`${nobile.className} text-blue-950 text-center mt-4`}
                >
                  CEREMONIA DE FIN DE CURSOS
                </motion.h2>
              </ModalBody>

              {/* Botón */}
              <ModalFooter className="flex justify-center">
                <motion.button
                  variants={fadeIn}
                  transition={{ delay: 0.4 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(29, 78, 216, 0.9)", // darken blue-950
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center gap-2 text-white border border-blue-900 bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                  onClick={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  Ver Invitación
                </motion.button>
              </ModalFooter>
            </motion.div>
          </>
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
    <main className="bg-[url('/img/escolar/primaria-arnulfo-perez-rivera/background2.avif')] bg-center bg-cover h-screen">
      {open && (
        <div className="relative">
          <Splide
            aria-label="Francisco I. Madero"
            options={{
              rewind: true,
              direction: "ttb",
              height: "100svh",
              wheel: true,
              releaseWheel: true,
              type: "loop",
              waitForTransition: true,
              arrows: false,
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
