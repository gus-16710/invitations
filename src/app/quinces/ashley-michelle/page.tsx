"use client";

import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Locations from "./components/Locations";
import Presentation from "./components/Presentation";
import { motion } from "framer-motion";
import { useEffect, useState, Dispatch, SetStateAction, Suspense } from "react";
import { pinyion } from "./components/Fonts";
import { header } from "./components/Animations";
import AudioControl from "./components/AudioControl";
import { FaRegEye } from "react-icons/fa";
import Gifts from "./components/Gifts";
import { useSearchParams } from "next/navigation";
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import "./styles.css";

const ModalOpening = ({
  isOpen,
  onOpenChange,
  setOpen,
  guest,
  companions,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  guest: string;
  companions: string;
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
            <ModalBody className="relative">
              <motion.p
                className={`${pinyion.className} flex justify-center text-7xl text-slate-50 z-20 text-center`}
                variants={header.animationText01}
                initial="hidden"
                whileInView="visible"
              >
                Ashley Michelle
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex flex-col items-center justify-center">
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
              {guest && (
                <p className="text-slate-50 text-xs mt-3">
                  - {guest.replaceAll("-", " ")} -
                </p>
              )}

              {companions && (
                <p className="text-slate-50 text-xs">{companions} Personas</p>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const Fifteen = () => {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const searchParams = useSearchParams();
  const guest = searchParams.get("invitado") || "";
  const companions = searchParams.get("pases") || "";

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
        guest={guest}
        companions={companions}
      />
    </main>
  );
};

const SuspenseWrapper = () => {
  <Suspense>
    <Fifteen />
  </Suspense>;
};

export default SuspenseWrapper;
