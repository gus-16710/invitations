"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Main from "./components/Main";
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

import "./styles.css";
import { quickSand } from "./components/Fonts";
import { great } from "../camila/components/Fonts";

const ModalOpening = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const text = "Alondra Zuriel";

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
      placement="center"
      backdrop="opaque"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent
        className="bg-[url('/img/quinces/estefy/modal-background.jpg')] bg-cover bg-center"
        style={{ backgroundColor: "#740403", color: "#ffff" }}
      >
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex justify-center items-center overflow-clip">
              <p className="text-zinc-300 flex items-center z-20">
                <motion.label
                  className={`text-2xl ${quickSand.className}`}
                  variants={{
                    hidden: { x: 100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 1 },
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
                    hidden: { y: -100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 1 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  XV
                </motion.label>
                <motion.label
                  className={`text-2xl ${quickSand.className}`}
                  variants={{
                    hidden: { x: -100, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 1, delay: 1 },
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                >
                  AÑOS
                </motion.label>
              </p>
              <motion.p
                className={`text-center text-7xl z-20 text-golden p-5 relative`}
                style={{ fontFamily: "harryp", lineHeight: "100px" }}
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1, delay: 2 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                Estefy Hernandez
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { duration: 1, delay: 3 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                <Button
                  color="default"
                  variant="faded"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  Abrir Invitación
                </Button>
              </motion.div>
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
