"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import {
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useRef,
} from "react";
import { motion } from "framer-motion";

import {
  Image,
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
import SlideFive from "./components/slideFive";
import ReactCanvasConfetti from "react-canvas-confetti";

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
      size="full"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent className="bg-white/0 ">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="relative flex flex-col items-center justify-center h-full w-full"
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

              <ModalBody
                className="flex flex-col items-center justify-center"
                style={{ color: "#354c6b" }}
              >                
                {/* Escuela */}
                <motion.h2
                  variants={itemUp}
                  className={`${nobile.className} text-2xl text-center`}
                >
                  Escuela Telesecundaria
                </motion.h2>

                {/* Logo */}
                <motion.div variants={itemUp}>
                  <Image
                    width={130}
                    alt="Logo Escuela"
                    src="/img/escolar/telesecundaria-luis-donaldo/logo.png"
                    className="mb-3"
                  />
                </motion.div>

                {/* Nombre */}
                <motion.h1
                  variants={itemUp}
                  transition={{ delay: 0.1 }}
                  className={`${ovo.className} text-bluee text-3xl text-center`}
                >
                  "Luis Donaldo Colosio Murrieta"
                </motion.h1>

                {/* Clave */}
                <motion.h2
                  variants={fadeIn}
                  transition={{ delay: 0.2 }}
                  className={`${nobile.className}  text-center`}
                >
                  CLAVE: 30DTV0540M
                </motion.h2>

                {/* Evento */}
                <motion.h2
                  variants={itemUp}
                  transition={{ delay: 0.3 }}
                  className={`${nobile.className} text-center mt-4`}
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
                  className="flex items-center gap-2 text-white border border-blue-900  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                  style={{ backgroundColor: "#486786" }}
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

  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
        colors: ["EFBF04", "FFFFFF", "173869", "FFFFFF", "000000", "EFBF04"],
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    const timer = setInterval(() => fire(), 5000);
    () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[url('/img/escolar/telesecundaria-luis-donaldo/background3.jpg')] bg-center bg-cover h-screen">
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

      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </main>
  );
}
