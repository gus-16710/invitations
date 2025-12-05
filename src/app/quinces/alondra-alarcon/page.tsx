"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ceremony from "./components/Ceremony";
import Confirm from "./components/Confirm";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";
import "./styles.css";
import ReactCanvasConfetti from "react-canvas-confetti";
import FloatinButton from "./components/FloatingButton";
import AudioControl from "./components/AudioControl";
import DressCode from "./components/DressCode";
import { TbHandClick } from "react-icons/tb";
import { great, quickSand } from "./components/Fonts";

export default function Alondra() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isButtonLoaded, setIsButtonLoaded] = useState(false);
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
        colors: [
          "#F6E17A",
          "#FFBD00",
          "#E89400",
          "#FFCA6C",
          "#FDFFB8",
          "#900C3F",
          "#F0F0F0",
        ],
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
    // Forzar el renderizado completo del botón después de un breve delay
    const timer = setTimeout(() => {
      setIsButtonLoaded(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isRevealed) {
      fire();
      const timer = setInterval(() => fire(), 10000);
      return () => clearInterval(timer);
    }
  }, [isRevealed]);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  // Animaciones para los paneles
  const leftPanelVariants = {
    hidden: { x: 0 },
    visible: {
      x: "-100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const rightPanelVariants = {
    hidden: { x: 0 },
    visible: {
      x: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
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

  const textVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0,
      },
    },
  };

  const dateVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: 0,
        ease: "easeOut",
      },
    },
  };

  const pulseStarAnimation = {
    animate: {
      scale: [1, 1.3, 1],
      opacity: [0.6, 1, 0.6],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const starAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      opacity: [0.7, 1, 0.7],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const floatingStarAnimation = {
    animate: {
      y: [0, -15, 0],
      x: [0, 10, 0],
      rotate: [0, 15, 0],
      scale: [1, 1.1, 1],
    },
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const goldenStarAnimation = {
    animate: {
      scale: [1, 1.4, 1],
      rotate: [0, 90, 180, 270, 360],
      opacity: [0.4, 0.9, 0.4],
    },
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  const particleAnimation = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 0.8, 0.3],
    },
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <div className="relative min-h-screen bg-[url('/img/quinces/alondra-alarcon/background.avif')] bg-center bg-cover h-screen">
      {/* Pantalla dividida inicial */}
      <AnimatePresence>
        {!isRevealed && (
          <div className="fixed inset-0 z-50 flex">
            {/* Panel izquierdo con backdrop-blur */}
            <motion.div
              key="left-panel"
              className="w-1/2 h-full relative overflow-hidden"
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
              variants={leftPanelVariants}
              exit="visible"
            >
              {/* Fondo con blur */}
              <div
                className="absolute inset-0"
                style={{
                  filter: "blur(8px)",
                  transform: "scale(1.05)",
                }}
              />

              {/* Overlay para mejorar legibilidad */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            </motion.div>

            {/* Panel derecho con backdrop-blur */}
            <motion.div
              key="right-panel"
              className="w-1/2 h-full relative overflow-hidden"
              initial="hidden"
              animate={isRevealed ? "visible" : "hidden"}
              variants={rightPanelVariants}
              exit="visible"
            >
              {/* Fondo con blur */}
              <div
                className="absolute inset-0"
                style={{
                  filter: "blur(8px)",
                  transform: "scale(1.05)",
                }}
              />

              {/* Overlay para mejorar legibilidad */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
            </motion.div>

            {/* Línea divisoria central */}
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-yellow-300/30 to-transparent z-20" />

            {/* Contenedor para textos y botón centrados */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
              {/* Texto "15 años" arriba del botón */}
              <motion.div
                key="top-text"
                className="mb-8 z-30"
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                variants={textVariants}
                exit="visible"
              >
                <p
                  className="text-white flex items-center z-20"
                  style={{
                    textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
                  }}
                >
                  <motion.label
                    className={`text-3xl ${quickSand.className}`}
                    variants={{
                      hidden: { x: 100, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                  >
                    MIS
                  </motion.label>
                  <motion.label
                    className={`text-7xl ${great.className}`}
                    variants={{
                      hidden: { y: -100, opacity: 0 },
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                  >
                    XV
                  </motion.label>
                  <motion.label
                    className={`text-3xl ${quickSand.className}`}
                    variants={{
                      hidden: { x: -100, opacity: 0 },
                      visible: {
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1,  },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                  >
                    AÑOS
                  </motion.label>
                </p>
              </motion.div>

              {/* Botón central - Con estado de carga */}
              {isButtonLoaded && (
                <div className="relative group mb-8">
                  <motion.button
                    key="reveal-button"
                    onClick={handleReveal}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={buttonVariants}
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      {/* Anillo exterior animado */}
                      <motion.div
                        className="absolute -inset-4 bg-pink-400 rounded-full opacity-40"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Botón principal */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 shadow-amber-500/30">
                        <TbHandClick size={40} color="white" />
                      </div>

                      {/* Efecto de pulso */}
                      <motion.div
                        className="absolute inset-0 bg-pink-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.button>
                </div>
              )}

              {/* Texto "Alondra" abajo del botón */}
              <motion.div
                key="bottom-text"
                className="z-30 mt-5"
                initial="hidden"
                animate={isRevealed ? "visible" : "hidden"}
                variants={textVariants}
                exit="visible"
              >
                <motion.p
                  className={`text-3xl ${great.className} text-pink-600 text-4xl font-bold tracking-wider drop-shadow-lg text-center`}
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1, },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  10/Enero/2026
                </motion.p>
              </motion.div>
            </div>

            {/* Estrellas animadas doradas adicionales */}
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-16 left-16 w-6 h-6 sm:w-7 sm:h-7"
              {...goldenStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFD700"
              />
            </motion.svg>

            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute bottom-20 right-20 w-5 h-5 sm:w-6 sm:h-6"
              {...goldenStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFD700"
              />
            </motion.svg>

            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-1/3 right-1/4 w-7 h-7 sm:w-8 sm:h-8"
              {...starAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFD700"
              />
            </motion.svg>

            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute bottom-1/3 left-20 w-4 h-4 sm:w-5 sm:h-5"
              {...pulseStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFD700"
              />
            </motion.svg>

            <motion.svg
              width="26"
              height="26"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-10 left-1/3 w-5 h-5 sm:w-6 sm:h-6"
              {...floatingStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>

            <motion.svg
              width="30"
              height="30"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute bottom-10 right-10 w-6 h-6 sm:w-7 sm:h-7"
              {...goldenStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFD700"
              />
            </motion.svg>

            {/* Estrellas blancas originales */}
            <motion.svg
              width="36"
              height="36"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-8 right-8 sm:right-12 w-7 h-7 sm:w-9 sm:h-9"
              {...starAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>

            <motion.svg
              width="22"
              height="22"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute bottom-12 right-1/3 w-5 h-5 sm:w-6 sm:h-6"
              {...pulseStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>

            <motion.svg
              width="30"
              height="30"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8"
              {...floatingStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>

            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-12 right-20 w-4 h-4 sm:w-5 sm:h-5"
              {...pulseStarAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>

            <motion.svg
              width="26"
              height="26"
              viewBox="0 0 68 68"
              fill="none"
              className="absolute top-1/2 left-10 w-5 h-5 sm:w-7 sm:h-7"
              {...starAnimation}
            >
              <path
                d="M34.3088 0.55798L36.1455 23.5444C36.4756 27.6642 39.7445 30.933 43.8642 31.2632L66.8507 33.0999C67.5947 33.1603 67.5947 34.2507 66.8507 34.3088L43.8642 36.1455C39.7445 36.4756 36.4756 39.7445 36.1455 43.8642L34.3088 66.8507C34.2484 67.5947 33.158 67.5947 33.0999 66.8507L31.2632 43.8642C30.933 39.7445 27.6642 36.4756 23.5444 36.1455L0.55798 34.3088C-0.185993 34.2484 -0.185993 33.158 0.55798 33.0999L23.5444 31.2632C27.6642 30.933 30.933 27.6642 31.2632 23.5444L33.0999 0.55798C33.158 -0.185993 34.2484 -0.185993 34.3088 0.55798Z"
                fill="#FFFFFF"
              />
            </motion.svg>
          </div>
        )}
      </AnimatePresence>

      {/* Contenido principal */}
      <AnimatePresence>
        {isRevealed && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            className="min-h-screen"
          >
            <main className="bg-[url('/img/quinces/alondra-alarcon/background.avif')] bg-center bg-cover bg-fixed">
              <div className="max-w-3xl m-auto shadow-large">
                <Header />
                <Presentation />
                <GodParents />
                <Ceremony />
                <Reception />
                <DressCode />
                <Confirm />

                <ReactCanvasConfetti
                  refConfetti={getInstance}
                  style={{
                    position: "fixed",
                    pointerEvents: "none",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                  }}
                />
              </div>
              <FloatinButton />
              <AudioControl />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
