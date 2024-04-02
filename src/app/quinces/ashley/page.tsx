"use client";

import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Presentation from "./components/Presentation";
import { motion } from "framer-motion";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import "./styles.css";
import { pinyion, playFair } from "./components/Fonts";
import { header } from "./components/Animations";
import AudioControl from "./components/AudioControl";

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
                variants={header.animationText01}
                initial="hidden"
                whileInView="visible"
              >
                MIS <span className="text-5xl text-yellow-400">XV</span> AÑOS
              </motion.h1>
            </ModalHeader>
            <ModalBody>
              <motion.p
                className={`${pinyion.className} flex justify-center text-7xl text-yellow-400 z-20 text-center`}
                style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
                variants={header.animationText03}
                initial="hidden"
                whileInView="visible"
              >
                Ashley Michelle
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Button
                color="secondary"
                variant="bordered"
                onPress={() => {
                  setOpen(true);
                  onClose();
                }}
              >
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
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className={`background-class ${open ? "" : "h-screen"}`}>
      {open && (
        <div className="max-w-3xl m-auto shadow-large bg-[url('/img/quinces/ashley/background.jpg')] bg-cover bg-center bg-fixed">
          <Header />
          <Presentation />
          <Locations />
          <GodParents />
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
