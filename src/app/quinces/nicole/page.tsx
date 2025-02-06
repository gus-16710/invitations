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
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { greatVibes, pinyion, quickSand } from "./components/Fonts";
import { animation01, animation03 } from "./components/Animations";

import "./styles.css";
import Main from "./components/Main";

const ModalOpening = ({
  isOpen,
  onOpenChange,
  setOpen,
  guests,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  guests: string;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
      shadow="lg"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className="flex flex-col gap-1"
              style={{ fontWeight: "200" }}
            >
              <motion.h1
                className={`${quickSand.className} text-2xl flex items-center justify-center text-zinc-700 z-20 mt-5`}
                variants={animation01}
                initial="hidden"
                whileInView="visible"
              >
                MIS{" "}
                <span
                  className={`${greatVibes.className} text-5xl text-yellow-400`}
                >
                  XV
                </span>{" "}
                AÑOS
              </motion.h1>
            </ModalHeader>
            <ModalBody>
              <motion.p
                className={`${pinyion.className} flex justify-center text-8xl text-yellow-400 z-20 my-5`}
                style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
                variants={animation03}
                initial="hidden"
                whileInView="visible"
              >
                Nicole
              </motion.p>
            </ModalBody>
            <ModalFooter className="flex justify-center flex-col items-center">
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
              {guests && <p className={`${quickSand.className} text-zinc-500`}>Pase para ({guests}) </p>}
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

  const searchParams = useSearchParams();
  const guests = searchParams.get("invitados") || "";

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
        guests={guests}
      />
    </main>
  );
}
