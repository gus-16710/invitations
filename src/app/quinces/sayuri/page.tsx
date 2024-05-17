"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Header from "./components/Header";
import Ceremony from "./components/Ceremony";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";
import Confirm from "./components/Confirm";
import { dancing, great, playFair, quickSand } from "./components/Fonts";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import FloatinButton from "./components/FloatingButton";
import AudioControl from "./components/AudioControl";

import "./styles.css";
import GodParents from "./components/GodParents";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
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
  const text = "Sayuri";

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
      <ModalContent className="bg-[url('/img/quinces/sayuri/background-golden.jpg')] bg-cover bg-center">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center justify-center">
              <p className="text-zinc-400 flex items-center z-20">
                <motion.label
                  className={`text-2xl ${quickSand.className}`}
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 3 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  MIS
                </motion.label>
                <motion.label
                  className={`text-6xl ${great.className}`}
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 3 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  XV
                </motion.label>
              </p>
              <motion.h1
                className={`text-8xl ${dancing.className} text-center`}
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
              </motion.h1>
              <motion.div
                className="w-72 bg-yellow-800 mt-3"
                style={{ height: "2px" }}
                variants={{
                  hidden: { scale: 0 },
                  visible: {
                    scale: 1,
                    transition: { duration: 1, delay: 2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              />
              <motion.p
                className={`${playFair.className} text-zinc-400 text-center text-xl`}
                variants={{
                  hidden: { opacity: 0, y: -25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, delay: 2.5 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                21 | SEPTIEMBRE | 2024
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.button
                type="button"
                className="mt-5 golden-button"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 3 },
                  },
                }}
                initial="hidden"
                animate="visible"
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
              >
                <span className="golden-text flex justify-around items-center w-40">
                  - Ver invitación -
                </span>
              </motion.button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Fifteen() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className={`background-class ${open ? "" : "h-screen"}`}>
      {open && (
        <div className="max-w-3xl m-auto bg-golden bg-[url('/img/quinces/sayuri/background-floral.jpg')] bg-cover bg-center bg-fixed shadow-large">
          <Header />
          <Presentation />
          <div className="bg-[url('/img/quinces/sayuri/background-paper.jpg')] bg-cover bg-center">
            <Ceremony />
            <Reception />
          </div>
          <GodParents />
          <Gallery />
          <Confirm />
          <FloatinButton />
          <AudioControl />
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
