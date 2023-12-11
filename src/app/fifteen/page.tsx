"use client";

import Ceremony from "./components/Ceremony";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import { motion } from "framer-motion";
import Reception from "./components/Reception";
import GodParents from "./components/GodParents";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";
import { pinyion, playFair } from "./components/Fonts";
import { animation01, animation03 } from "./components/Animations";
import AudioControl from "./components/AudioControl";

const ModalFull = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
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
            <ModalHeader className="flex flex-col gap-1">
              <motion.h1
                className={`${playFair.className} text-2xl flex items-center justify-center text-zinc-600 z-20`}
                variants={animation01}
                initial="hidden"
                whileInView="visible"
              >
                MIS <span className="text-5xl text-yellow-400">XV</span> AÑOS
              </motion.h1>
            </ModalHeader>
            <ModalBody>
              <motion.p
                className={`${pinyion.className} flex justify-center text-7xl text-yellow-400 z-20`}
                style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
                variants={animation03}
                initial="hidden"
                whileInView="visible"
              >
                Daniela
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Button color="warning" variant="bordered" onPress={onClose}>
                Ver Invitación
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Fifteen() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <div
      className={`max-w-3xl m-auto bg-[url('/img/fifteen/background-paper.jpg')] bg-center bg-cover bg-fixed ${
        isOpen ? "h-screen" : ""
      }`}
    >
      {!isOpen && (
        <>
          <Header />
          <Presentation />
          <Ceremony />
          <Reception />
          <GodParents />
          <Gallery />
          <Gifts />
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </>
      )}

      <ModalFull isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}
