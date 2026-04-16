"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";

import "./styles.css";
import { abril, greatVibes, playFair, glass } from "./components/Fonts";
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
      size="sm"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
      classNames={{
        base: "rounded-3xl overflow-hidden m-5",
        body: "p-0",
        footer: "p-0",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <div className="bg-gradient-to-b from-rose-50 to-pink-100 px-8 pt-8 pb-6 flex flex-col items-center">

            {/* Línea decorativa */}
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="h-px w-10 bg-rose-300" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              <div className="h-px w-10 bg-rose-300" />
            </motion.div>

            {/* Familia */}
            <motion.p
              className={`${glass.className} text-rose-400 text-sm tracking-widest uppercase`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              La Familia
            </motion.p>

            <motion.h1
              className={`${greatVibes.className} text-5xl text-rose-600 leading-tight text-center`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
            >
              Landa Garrido
            </motion.h1>

            <motion.p
              className={`${glass.className} text-gray-500 text-sm mt-1 mb-5`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              te invitan a celebrar
            </motion.p>

            {/* Separador */}
            <motion.div
              className="w-full h-px bg-rose-200 mb-5"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            />

            {/* Eventos */}
            <motion.div
              className="flex flex-col items-center gap-3 mb-5 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="bg-white/70 rounded-2xl px-5 py-3 w-full text-center shadow-sm">
                <p className={`${abril.className} text-rose-500 text-lg leading-none`}>Quinceaños</p>
                <p className={`${playFair.className} text-gray-600 text-sm mt-1`}>Kimberly Renata</p>
              </div>
              <div className="bg-white/70 rounded-2xl px-5 py-3 w-full text-center shadow-sm">
                <p className={`${abril.className} text-purple-400 text-lg leading-none`}>Bautizo</p>
                <p className={`${playFair.className} text-gray-600 text-sm mt-1`}>Cristina Yoleth</p>
              </div>
            </motion.div>

            {/* Fecha */}
            <motion.p
              className={`${playFair.className} text-gray-400 text-xs tracking-widest mb-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              16 · MAYO · 2026
            </motion.p>

            {/* Botón */}
            <motion.button
              className={`${playFair.className} w-full py-3 rounded-2xl bg-gradient-to-r from-rose-400 to-pink-500 text-white text-sm tracking-wide shadow-md hover:shadow-lg active:scale-95 transition-all`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.6 }}
              onClick={() => { setOpen(true); onClose(); }}
            >
              Abrir Invitación
            </motion.button>

          </div>
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
