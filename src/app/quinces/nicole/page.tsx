"use client";

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
import { pinyion, playFair } from "./components/Fonts";
import { animation01, animation03 } from "./components/Animations";

import "./styles.css";
import Main from "./components/Main";

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
                Nicole
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Button
                color="warning"
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
