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
import { league, playFair } from "./components/Fonts";
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
      <ModalContent className="bg-[url('/img/quinces/alondra/modal-background.jpg')] bg-cover bg-center" style={{backgroundColor: "#740403", "color": "#ffff", }}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              <motion.h1
                className={`${league.className} text-2xl flex items-center justify-center z-20 font-thin`}
              >
                MIS <span className={`${great.className} text-5xl px-4`}>XV</span> AÑOS
              </motion.h1>
            </ModalHeader>
            <ModalBody className="flex justify-center items-center">
              <motion.p
                className={`flex text-center text-8xl z-20 text-golden p-5`}
                style={{ fontFamily: "candlescript" }}
              >
                Alondra Zuriel
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <Button
                color="default"
                variant="faded"
                onPress={() => {
                  setOpen(true);
                  onClose();
                }}
                style={{ color: "#6f0603"}}
              >
                Abrir Invitación
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
