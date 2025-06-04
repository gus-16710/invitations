"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {  
  Roboto_Condensed,
  Playfair_Display,
  Abril_Fatface, 
} from "next/font/google";
import { RxEyeOpen } from "react-icons/rx";

import Main from "./components/Main";

import "./styles.css";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: ["400"] });
const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
});
const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: ["400"],
});

const ModalOpening = ({
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
      size="full"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
      className="bg-pink-500/0"
    >
      <ModalContent className="bg-[url('/img/bodas/alondra-antonio/background24.jpg')] bg-cover bg-center">
        {(onClose) => (
          <>
            <ModalBody className="flex mt-5 justify-center items-center">
              {/* Texto "LA BODA DE" - Aparece primero */}
              <motion.p
                className={`${playFair.className} font-bold text-2xl mt-10`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.3, // Retraso inicial
                }}
                style={{ color: "#129c59" }}
              >
                LA BODA DE
              </motion.p>

              {/* Nombres - Animación más lenta con rebote suave */}
              <motion.h1
                className={`${abril.className} text-7xl text-zinc-200 text-center z-10`}
                initial={{ y: -80, opacity: 0 }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 80,
                  delay: 0.8, // Mayor retraso
                  duration: 1.5,
                }}
                style={{ lineHeight: 1 }}
              >
                Alondra <br />&<br /> Antonio
              </motion.h1>
             
              <div className="relative flex justify-center mt-16 rotate-6 z-10">
                <div className="bg-[url('/img/bodas/alondra-antonio/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16 flex items-center justify-center">
                  <p className="text-center text-white font-semibold text-lg">
                    26 ● Septiembre ● 2025
                  </p>
                </div>
              </div>
       
            </ModalBody>

            {/* Botón - Aparece muy suavemente */}
            <ModalFooter className="flex justify-center items-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 2.2, // Retraso más largo
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.4 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  color="success"
                  variant="solid"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                  //radius="none"
                  className="z-10 border-l-8 border-pink-800"
                  style={{ backgroundColor: "#e4007c" }}
                >
                  <RxEyeOpen className="text-xl text-white" />
                  <label className={`${roboto.className} text-white`}>
                    Ver invitación
                  </label>
                </Button>
              </motion.div>
            </ModalFooter>

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#fff"
              version="1.1"
              id="Capa_1"
              width="400px"
              height="400px"
              viewBox="0 0 182.818 182.818"
              xmlSpace="preserve"
              className="absolute bottom-12 -left-10"
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <g>
                <g>
                  <path d="M178.978,86.928c-6.006-10.392-18.004-16.119-33.786-16.119c-12.117,0-25.487,3.458-38.267,9.789    c-5.054-14.26-14.156-26.031-25.649-33.151c-2.911,4.105-6.289,7.616-9.472,10.495c10.518,5.544,18.767,16.384,22.825,29.793    c-27.86,18.675-41.027,46.373-30.118,65.275c0.665,1.164,1.433,2.246,2.252,3.286c-3.544,1.229-7.253,1.933-11.109,1.933    c-23.017,0-41.739-23.4-41.739-52.174c0-22.824,11.804-42.218,28.153-49.281c-3.198-3.038-6.473-6.729-9.232-10.938    C13.509,56.212,0,79.268,0,106.049c0,36.439,24.967,66.088,55.653,66.088c8.547,0,16.609-2.37,23.85-6.466    c5.373,2.229,11.674,3.452,18.788,3.452c14.049,0,29.791-4.623,44.325-13.01c14.735-8.506,26.705-19.996,33.68-32.332    C183.955,110.288,184.894,97.195,178.978,86.928z M76.553,146.053c-6.36-11.023,2.894-29.116,20.652-42.995    c0.053,1.005,0.186,1.98,0.186,2.997c0,17.904-7.255,33.721-18.285,43.119C78.117,148.235,77.218,147.211,76.553,146.053z     M164.189,116.931c-5.78,10.214-15.918,19.86-28.537,27.142c-12.46,7.188-25.724,11.148-37.368,11.148    c-1.841,0-3.579-0.143-5.249-0.349c11.195-12.1,18.264-29.472,18.264-48.812c0-3.925-0.378-7.731-0.934-11.473    c11.715-6.304,23.974-9.868,34.826-9.868c6.147,0,17.13,1.186,21.733,9.165C171.465,101.741,167.168,111.7,164.189,116.931z" />
                  <path d="M57.574,60.389c0,0,26.915-15.962,25.021-36.552C81.122,7.839,65.228,8.082,57.574,15.804    c-7.657-7.716-23.552-7.958-25.023,8.033C30.656,44.426,57.574,60.389,57.574,60.389z" />
                </g>
              </g>
            </motion.svg>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Wedding() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="background-class">           
      {open && <Main />}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
