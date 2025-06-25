"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import SlideFive from "./components/slideFive";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import {motion} from "framer-motion";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { bebas, cormorant, galada, luxurious, mea, urbanist } from "./components/Fonts";
import AudioControl from "./components/AudioControl";

import { GrFormViewHide } from "react-icons/gr";

const OpeningModal = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // Configuración de animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6
      }
    }
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
        mass: 0.6
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}      
    >
      <ModalContent className="overflow-clip bg-white/0">
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
                {/* Nombre de la institución */}
                <motion.h2
                  variants={itemUp}
                  className={`${urbanist.className} text-zinc-100 text-xl text-center`}
                >
                  Jardín de Niños
                </motion.h2>

                {/* Nombre específico */}
                <motion.h1
                  variants={scaleIn}
                  transition={{ delay: 0.2 }}
                  className={`${cormorant.className} text-zinc-100 text-5xl text-center mt-2`}
                >
                  "María Montessori"
                </motion.h1>

                {/* Clave */}
                <motion.h2 
                  variants={fadeIn}
                  transition={{ delay: 0.3 }}
                  className={`${urbanist.className} text-zinc-50 text-center text-lg`}
                >
                  CLAVE: 30EJN0092G
                </motion.h2>

                {/* Título principal */}
                <motion.h2
                  variants={itemUp}
                  transition={{ delay: 0.4 }}
                  className={`${galada.className} text-zinc-100 text-center text-6xl italic mt-7 mb-10`}
                >
                  Ceremonia de Graduación
                </motion.h2>

                {/* Generación */}
                <motion.h2
                  variants={fadeIn}
                  transition={{ delay: 0.5 }}
                  className={`${urbanist.className} text-zinc-100 text-xl text-center`}
                >
                  GENERACIÓN 2025
                </motion.h2>

                {/* Fecha */}
                <motion.h1
                  variants={scaleIn}
                  transition={{ delay: 0.6 }}
                  className={`${luxurious.className} text-zinc-100 text-3xl text-center`}
                >
                  11/JULIO/2025
                </motion.h1>
              </ModalBody>

              {/* Botón */}
              <ModalFooter className="flex justify-center">
                <motion.button
                  variants={fadeIn}
                  transition={{ delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "rgba(255, 255, 255, 0.8)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 text-gray-100 border border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center backdrop-blur-sm"
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

  return (
    <main className="bg-[url('/img/escolar/jardin-maria-montessori/background6.avif')] bg-center bg-cover h-screen">
      {open && (
        <div className="relative">
          <Splide
            aria-label="Telebachillerato Buena Vista"
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
              <SlideThree />
            </SplideSlide> 
            {/* <SplideSlide>
              <SlideFour />
            </SplideSlide> */}
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
    </main>
  );
}
