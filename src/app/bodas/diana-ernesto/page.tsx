"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Bebas_Neue } from "next/font/google";
import { FaEye } from "react-icons/fa";
import Main from "./components/Main";

import "./styles.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

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
            <ModalBody className="flex flex-row mt-5 justify-center">
              <motion.h1
                className={`${bebas.className} text-5xl text-zinc-700`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Ana & Carlos
              </motion.h1>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Divider
                  className="bg-slate-600"
                  orientation="vertical"
                  style={{ height: "94px" }}
                />
              </motion.div>
              <motion.h1
                className={`${bebas.className} text-5xl text-orange-600`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Nuestra Boda
              </motion.h1>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Button
                  color="warning"
                  variant="flat"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaEye /> Ver Invitación
                </Button>
              </motion.div>
            </ModalFooter>
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
