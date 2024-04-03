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
import { FaRegEye } from "react-icons/fa";
import Gifts from "./components/Gifts";

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
      backdrop="opaque"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent style={{ backgroundColor: "#ba60f0" }}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <motion.p
                className={`${pinyion.className} flex justify-center text-7xl text-slate-50 z-20 text-center`}
                variants={header.animationText01}
                initial="hidden"
                whileInView="visible"
              >
                Ashley Michelle
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                variants={header.animationButton01}
                initial="hidden"
                whileInView="visible"
              >
                <Button
                  color="secondary"
                  variant="solid"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaRegEye /> Ver Invitación
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
    <main className={`background-class ${open ? "" : "h-screen"}`}>
      {open && (
        <div className="max-w-3xl m-auto shadow-large bg-[url('/img/quinces/ashley/background.jpg')] bg-cover bg-center bg-fixed">
          <Header />
          <Presentation />
          <Locations />
          <GodParents />
          <Gifts />
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
