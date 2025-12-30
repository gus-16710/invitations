"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import { great, quickSand } from "./components/Fonts";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./styles.css";
import "@splidejs/react-splide/css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Ceremony from "./components/Ceremony";
import Reception from "./components/Reception";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const list2 = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 10,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

const ModalOpening = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  // Variantes combinadas para las imágenes (entrada + baile)
  const jessImageVariants = {
    hidden: {
      x: -200,
      opacity: 0,
      rotate: -15,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.5,
        duration: 1.5,
      },
    },
    dance: {
      y: [0, -10, 0, -5, 0],
      rotate: [0, -3, 3, -2, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const rafaImageVariants = {
    hidden: {
      x: 200,
      opacity: 0,
      rotate: 15,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.7,
        duration: 1.5,
      },
    },
    dance: {
      y: [0, -8, 0, -6, 0],
      rotate: [0, 3, -3, 2, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };

  const text = `"Nada es para llevar, todo es para vivir aquí"`;
  const text2 = `Atte. La Vida`;

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 13,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const [snowflakes, setSnowflakes] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const generatedSnowflakes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 50,
      size: 10 + Math.random() * 20,
    }));
    setSnowflakes(generatedSnowflakes);
  }, []);

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
      <ModalContent className="bg-[url('/img/festejos/jyr/background4.jpg')] bg-cover bg-center overflow-clip">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center justify-center">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
                {/* Contenedor para las imágenes */}
                <motion.div
                  className="mb-8 z-30 flex justify-center items-center gap-2 relative"
                  initial="hidden"
                  animate={["visible", "dance"]}
                >
                  {/* Imagen de Jess */}
                  <motion.div
                    initial="hidden"
                    animate={["visible", "dance"]}
                    variants={jessImageVariants}
                    className="relative"
                  >
                    <Image
                      width={140}
                      height={140}
                      alt="Jess"
                      src="/img/festejos/jyr/jess.png"
                    />
                  </motion.div>

                  {/* Imagen de Rafa */}
                  <motion.div
                    initial="hidden"
                    animate={["visible", "dance"]}
                    variants={rafaImageVariants}
                    className="relative"
                  >
                    <Image
                      width={140}
                      height={140}
                      alt="Rafa"
                      src="/img/festejos/jyr/rafa.png"
                    />
                  </motion.div>
                </motion.div>

                {/* Texto de fecha */}
                <div className="z-30 mb-10">
                  <motion.p
                    className={`text-3xl ${great.className} text-white text-4xl font-bold tracking-wider drop-shadow-lg text-center mx-10`}
                    variants={list}
                    initial="hidden"
                    animate="visible"
                  >
                    {text.split("").map((letter, index) => {
                      return (
                        <motion.span
                          key={index}
                          variants={item}
                          className="text-golden"
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </motion.p>

                  <motion.p
                    className={`text-3xl ${great.className} text-white text-4xl font-bold tracking-wider drop-shadow-lg text-center mt-5`}
                    variants={list2}
                    initial="hidden"
                    animate="visible"
                  >
                    {text2.split("").map((letter, index) => {
                      return (
                        <motion.span
                          key={index}
                          variants={item}
                          className="text-golden"
                        >
                          {letter}
                        </motion.span>
                      );
                    })}
                  </motion.p>
                </div>

                {/* Copos de nieve animados - solo se renderizan en cliente */}
                {snowflakes.map((snowflake) => (
                  <motion.div
                    key={snowflake.id}
                    className="absolute pointer-events-none z-0"
                    style={{
                      left: `${snowflake.left}%`,
                      top: "-5%",
                      width: `${snowflake.size}px`,
                      height: `${snowflake.size}px`,
                    }}
                    animate={{
                      y: ["0vh", "100vh"],
                      x: [0, Math.random() * 50 - 25],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: snowflake.duration,
                      repeat: Infinity,
                      delay: snowflake.delay,
                      ease: "linear",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-full h-full opacity-20"
                    >
                      <path
                        className="fill-white"
                        d="M422.804,332.819c-34.87-7.132-11.07-25.884,15.846-33.085c26.899-7.201,16.591-45.641-11.708-35.981   c-28.308,9.634-56.711,41.967-71.333,33.514c-11.69-6.746-31.178-17.982-38.502-22.217c1.881-6.02,2.888-12.425,2.888-19.049   c0-6.624-1.006-13.029-2.888-19.041c7.324-4.226,26.811-15.48,38.502-22.226c14.622-8.435,43.025,23.888,71.333,33.531   c28.298,9.643,38.606-28.798,11.708-35.999c-26.916-7.202-50.717-25.936-15.846-33.086c34.861-7.114,66.187-31.65,54.899-51.18   c-11.288-19.531-48.17-4.673-71.797,21.955c-23.582,26.618-27.913-3.369-20.712-30.267c7.202-26.908-31.212-37.189-37.014-7.858   c-5.819,29.332,7.98,70.116-6.633,78.543c-11.717,6.764-31.212,18.018-38.528,22.244c-8.637-9.38-20.056-16.145-32.954-19.05   c0-8.435,0-30.959,0-44.469c0-16.871,42.186-25.315,64.709-45.004c22.497-19.688-5.626-47.828-25.332-28.141   c-19.697,19.706-47.812,30.95-36.559-2.817C284.128,39.385,278.554,0,255.987,0c-22.55,0-28.132,39.385-16.88,73.135   c11.253,33.767-16.862,22.523-36.55,2.817c-19.706-19.688-47.83,8.453-25.332,28.141c22.515,19.689,64.708,28.133,64.708,45.004   c0,13.51,0,36.034,0,44.469c-12.898,2.905-24.326,9.669-32.954,19.05c-7.315-4.226-26.811-15.48-38.528-22.244   c-14.613-8.426-0.84-49.211-6.632-78.543c-5.802-29.331-44.225-19.05-37.014,7.858c7.193,26.898,2.896,56.886-20.712,30.267   C82.468,123.327,45.585,108.469,34.297,128c-11.288,19.531,20.038,44.067,54.899,51.18c34.853,7.15,11.052,25.884-15.855,33.086   c-26.881,7.201-16.591,45.642,11.708,35.999c28.308-9.643,56.72-41.966,71.333-33.531c11.7,6.746,31.186,18,38.493,22.226   c-1.873,6.012-2.87,12.416-2.87,19.041c0,6.624,0.997,13.029,2.87,19.049c-7.306,4.236-26.793,15.471-38.493,22.217   c-14.613,8.453-43.026-23.879-71.333-33.514c-28.299-9.66-38.589,28.78-11.708,35.981c26.907,7.202,50.725,25.954,15.855,33.085   c-34.861,7.115-66.188,31.65-54.899,51.181c11.288,19.54,48.171,4.673,71.797-21.955c23.608-26.618,27.904,3.369,20.712,30.268   c-7.21,26.907,31.213,37.188,37.014,7.858c5.792-29.323-7.981-70.091,6.632-78.543c11.717-6.764,31.213-18.018,38.528-22.235   c8.628,9.38,20.056,16.136,32.954,19.041c0,8.435,0,30.959,0,44.469c0,16.87-42.194,25.315-64.708,45.003   c-22.498,19.689,5.626,47.83,25.332,28.141c19.688-19.706,47.803-30.95,36.55,2.818c-11.253,33.758-5.67,73.135,16.88,73.135   c22.567,0,28.141-39.377,16.897-73.135c-11.253-33.768,16.862-22.524,36.559-2.818c19.706,19.688,47.829-8.452,25.332-28.141   c-22.523-19.688-64.709-28.133-64.709-45.003c0-13.51,0-36.034,0-44.469c12.898-2.905,24.317-9.66,32.954-19.041   c7.315,4.218,26.811,15.471,38.528,22.235c14.613,8.452,0.814,49.22,6.633,78.543c5.802,29.331,44.215,19.05,37.014-7.858   c-7.201-26.899-2.896-56.886,20.712-30.268c23.627,26.628,60.509,41.494,71.797,21.955   C488.991,364.469,457.665,339.934,422.804,332.819z M255.987,292.27c-20.012,0-36.253-16.232-36.253-36.27   c0-20.03,16.241-36.262,36.253-36.262c20.038,0,36.27,16.232,36.27,36.262C292.257,276.038,276.025,292.27,255.987,292.27z"
                      />
                    </svg>
                  </motion.div>
                ))}

                {/* Copos estáticos */}
                <motion.div
                  className="absolute top-10 left-10 text-white text-4xl opacity-60 z-10"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ❄️
                </motion.div>

                <motion.div
                  className="absolute bottom-10 right-16 text-white text-3xl opacity-60 z-10"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  ❄️
                </motion.div>

                {/* Estrellas */}
                <motion.div
                  className="absolute top-20 right-10 text-yellow-300 text-3xl opacity-60 z-10"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ⭐
                </motion.div>
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <div className="relative group mb-8 z-30">
                <motion.button
                  key="reveal-button"
                  onClick={() => {
                    setOpen(true);
                    onClose();
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={buttonVariants}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative">
                    <motion.div
                      className="absolute -inset-3 bg-red-500  rounded-large  opacity-40"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <div className="relative px-5 rounded-large h-14 bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 shadow-amber-500/30">
                      <label className={`${quickSand.className} text-white`}>
                        ¡Comencemos a vivirla!
                      </label>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-red-500 rounded-large"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default function JYR() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className={`background-class ${open ? "" : "h-screen"}`}>
      {open && (
        <div className="max-w-3xl m-auto bg-[url('/img/bodas/diana-ernesto/background-main.jpg')] bg-cover bg-center shadow-large">
          <Splide
            aria-label="J & R"
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
              <Header />
            </SplideSlide>
            <SplideSlide>
              <Presentation />
            </SplideSlide>
            <SplideSlide>
              <Ceremony />
            </SplideSlide>
            <SplideSlide>
              <Reception />
            </SplideSlide>
            {/*<SplideSlide>
              <Confirm />
            </SplideSlide> */}
          </Splide>
          {/* <AudioControl /> */}
        </div>
      )}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
