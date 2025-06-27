"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFive from "./components/slideFive";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

import {
  useDisclosure,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { GrFormViewHide } from "react-icons/gr";
import { dancing, imperial, urbanist } from "./components/Fonts";
import AudioControl from "./components/AudioControl";
import SlideFour from "./components/slideFour";
import SlideSix from "./components/slideSix";
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
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.6,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
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
      <ModalContent className="overflow-clip bg-slate-50/0">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center justify-center h-full"
            >
              <ModalBody className="flex flex-col justify-center items-center">
                {/* Texto principal */}
                <motion.div variants={itemUp} className="text-center">
                  <p className={`${imperial.className} text-zinc-800 text-4xl`}>
                    La Primaria Profr. Rosendo Leyva Lara
                  </p>
                  <p className={`${urbanist.className} text-zinc-600 text-xl`}>
                    les hace el honor de invitar a la ceremonia de
                  </p>
                </motion.div>

                {/* Título */}
                <motion.h2
                  variants={itemUp}
                  className={`${imperial.className} text-zinc-800 text-7xl my-5`}
                >
                  Graduación
                </motion.h2>

                {/* Detalles */}
                <motion.div
                  variants={fadeIn}
                  className={`${urbanist.className} text-center`}
                >
                  <p className="text-2xl">Generación 2019-2025</p>
                  <p className={`${dancing.className} text-3xl mt-2`}>
                    07 de Julio 2025
                  </p>
                  <p className="text-zinc-600 mt-10">
                    Instalaciones de la escuela | 10:00 am
                  </p>
                  <p className="text-sm mt-2 text-zinc-500">
                    "El conocimiento es el regalo más valioso que llevan
                    nuestros graduados"
                  </p>
                </motion.div>
              </ModalBody>

              {/* Botón */}
              <ModalFooter className="flex justify-center">
                <motion.button
                  variants={fadeIn}
                  transition={{ delay: 0.7 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(17, 24, 39, 1)", // bg-gray-900
                    color: "rgba(255, 255, 255, 1)", // text-white
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 text-gray-800 bg-gray-100/0 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <GrFormViewHide className="text-xl" />
                  <span>Ver Invitación</span>
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
        colors: ["EFBF04", "FFFFFF", "de3a4b", "FFFFFF", "e0b690", "EFBF04", "de3a4b",],
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
    <main className="bg-[url('/img/escolar/primaria-rosendo-leyva/background7.jpg')] m-auto bg-center bg-cover h-screen">
      {open && (
        <div className="relative">
          <Splide
            aria-label="COBAEV Plantel 66"
            options={{
              rewind: true,
              direction: "ltr",
              height: "100svh",
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
              <SlideFour />
            </SplideSlide>
            <SplideSlide>
              <SlideThree />
            </SplideSlide>
            <SplideSlide>
              <SlideSix />
            </SplideSlide>
            <SplideSlide>
              <SlideFive />
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
