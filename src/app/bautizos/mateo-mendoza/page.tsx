"use client";

import { motion } from "framer-motion";
import { Flowbite, FlowbiteCarouselTheme, Carousel } from "flowbite-react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Ceremony from "./components/Ceremony";
import Reception from "./components/Reception";
import GodParents from "./components/GodParents";
import Confirm from "./components/Confirm";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FaEye } from "react-icons/fa";
import { glass } from "./components/Fonts";
import AudioControl from "./components/AudioControl";

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-800/30 hover:bg-gray-800",
      on: "bg-gray-600",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/10 group-hover:bg-gray-800/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-gray-800  sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
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
  const [stars, setStars] = useState<
    { x: number; y: number; size: number; delay: number; opacity: number }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 0.5,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="flex flex-row mt-5 justify-center items-center ">
              {stars.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-orange-800/50"
                  style={{
                    width: star.size,
                    height: star.size,
                    top: `${star.y}%`,
                    left: `${star.x}%`,
                    opacity: star.opacity,
                    boxShadow: `0 0 ${
                      star.size * 2
                    }px rgba(255, 255, 255, 0.5)`,
                  }}
                  animate={{
                    opacity: [
                      star.opacity * 0.3,
                      star.opacity,
                      star.opacity * 0.3,
                    ],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: Math.random() * 4 + 3,
                    delay: star.delay,
                    ease: "easeInOut",
                  }}
                />
              ))}
              
              <motion.h1
                className={`${glass.className} text-4xl text-zinc-700 text-right`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Mateo Mendoza
              </motion.h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Divider
                  className="bg-slate-600 mx-4"
                  orientation="vertical"
                  style={{ height: "70px" }}
                />
              </motion.div>
              <motion.h1
                className={`${glass.className} text-4xl text-orange-600 text-left`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Mi Bautizo
              </motion.h1>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <button
                  type="button"
                  className="text-zinc-700 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
                  onClick={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaEye className="mr-1" />
                  Ver Invitación
                </button>
              </motion.div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Christening() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main
      className={`bg-[url('/img/bautizos/mateo-mendoza/background2.jpg')] bg-center bg-cover ${
        isOpen && "h-screen"
      } relative overflow-hidden`}
    >
      {open && (
        <div
          className="relative max-w-3xl m-auto z-10"
          style={{ height: "100svh" }}
        >
          <Flowbite>
            <Carousel theme={customTheme} slideInterval={5000} slide={false}>
              <div>
                <Header />
              </div>
              <div>
                <Presentation />
              </div>
              <div>
                <Ceremony />
              </div>
              <div>
                <Reception />
              </div>
              <div>
                <GodParents />
              </div>
              <div>
                <Confirm />
              </div>
            </Carousel>
          </Flowbite>
          <AudioControl />
        </div>
      )}

      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />

      {/* Nube animada de izquierda a derecha - SOLO PIXELS */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="150px"
        height="150px"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute top-10 z-0"
        animate={{
          x: ["-25vw", "110vw"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <path
          opacity="0.5"
          d="M16.2857 18C19.4416 18 22 15.4717 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18H16.2857Z"
          className="fill-white/50"
        />
        <path
          d="M18.2857 22C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344C19.2941 13.3711 17.7203 12 15.8095 12C13.7582 12 12.0952 13.5802 12.0952 15.5294C12.0952 15.9605 12.1766 16.3736 12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857Z"
          className="fill-white/40"
        />
      </motion.svg>

      {/* Segunda nube animada de derecha a izquierda - SOLO PIXELS */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="120px"
        height="120px"
        viewBox="0 0 24 24"
        fill="none"
        className="absolute top-64 z-0"
        animate={{
          x: ["110vw", "-50vw"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <path
          opacity="0.5"
          d="M16.2857 18C19.4416 18 22 15.4717 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18H16.2857Z"
          className="fill-white/40"
        />
        <path
          d="M18.2857 22C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344C19.2941 13.3711 17.7203 12 15.8095 12C13.7582 12 12.0952 13.5802 12.0952 15.5294C12.0952 15.9605 12.1766 16.3736 12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857Z"
          className="fill-white/30"
        />
      </motion.svg>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="100px"
        width="100px"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="absolute bottom-0 left-3/4 fill-white/30"
        animate={{
          y: ["25vh", "-100vh"],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        <g>
          <g>
            <path d="M256,0C159.826,0,81.582,78.244,81.582,174.418c0,60.686,17.555,117.932,49.432,161.193    c26.864,36.459,61.254,59.587,98.766,66.943c3.94,13.917,13.21,22.427,20.44,29.053c8.113,7.437,11.406,10.763,11.406,18.503    s-3.293,11.065-11.406,18.503c-9.433,8.647-22.352,20.489-22.352,43.387h33.758c0-7.739,3.293-11.065,11.406-18.503    c9.433-8.648,22.352-20.489,22.352-43.387c0-22.898-12.919-34.741-22.352-43.387c-0.93-0.852-1.788-1.644-2.594-2.401    c42.07-4.476,80.895-28.467,110.547-68.71c31.877-43.261,49.432-100.507,49.432-161.193C430.418,78.244,352.174,0,256,0z     M353.808,315.586c-26.492,35.955-61.229,55.755-97.808,55.755s-71.315-19.8-97.808-55.755    c-27.633-37.502-42.852-87.636-42.852-141.168c0-77.56,63.1-140.659,140.659-140.659s140.659,63.1,140.659,140.659    C396.659,227.949,381.441,278.084,353.808,315.586z" />
          </g>
        </g>
        <g>
          <g>
            <path d="M149.099,174.418h33.758c0-40.331,32.812-73.143,73.143-73.143V67.516C197.055,67.516,149.099,115.472,149.099,174.418z" />
          </g>
        </g>
      </motion.svg>
    </main>
  );
}
