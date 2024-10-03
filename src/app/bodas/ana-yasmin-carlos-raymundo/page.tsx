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
import Main from "./components/Main";

import "./styles.css";
import { abril, bebas, greatVibes } from "./components/Fonts";
import { FaEye } from "react-icons/fa";

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
      className="rounded-lg shadow-xl bg-gradient-to-b from-pink-100 via-white to-blue-100"
    >
      <ModalContent className="p-6">
        {(onClose) => (
          <>
            <ModalBody className="flex flex-col items-center">
              <motion.h1
                className={`${abril.className} text-6xl text-gray-700 tracking-wider text-center`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Ana & Carlos
              </motion.h1>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="w-full my-4"
              >
                <Divider className="bg-pink-300" style={{ height: "2px" }} />
              </motion.div>
              <motion.h2
                className={`${greatVibes.className} text-4xl text-blue-500`}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Nuestra Boda
              </motion.h2>
            </ModalBody>

            <ModalFooter className="flex justify-center mt-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <button
                  type="button"
                  className={`${bebas.className} flex justify-center items-center bg-transparent border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-4 focus:ring-pink-200 rounded-lg px-6 py-3 shadow-md transition-all transform hover:scale-105`}
                  onClick={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaEye className="mr-2 text-lg" />
                  Ver Invitación
                </button>
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
