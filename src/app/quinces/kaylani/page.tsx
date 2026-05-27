"use client";

import { motion } from "framer-motion";
import { Button, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { greatVibes, playFair } from "./components/Fonts";
import "./styles.css";
import Main from "./components/Main";
import { FaEye, FaCrown, FaStar, FaHeart } from "react-icons/fa";

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
      classNames={{ base: "rounded-3xl overflow-hidden m-5" }}
    >
      <ModalContent className="p-0 overflow-hidden">
        {(onClose) => (
          <div className="bg-gradient-to-b from-[#FFF8FC] via-white to-[#F5EAFF]">
            {/* Top bar */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-[#4A2C63] via-[#9B6DDB] to-[#CDA6F5]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              style={{ transformOrigin: "left" }}
            />

            <div className="flex flex-col items-center px-6 pt-6 pb-5 gap-1">
              {/* Corona */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring" as const, stiffness: 260, damping: 18, delay: 0.2 }}
                className="mb-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#9B6DDB] to-[#4A2C63] flex items-center justify-center shadow-lg shadow-purple-200">
                  <FaCrown className="text-white text-2xl" />
                </div>
              </motion.div>

              {/* La Familia */}
              <motion.p
                className={`${playFair.className} text-xs tracking-[0.25em] uppercase font-semibold`}
                style={{ color: "#9B6DDB" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                La Familia
              </motion.p>

              {/* Apellido */}
              <motion.h1
                className={`${greatVibes.className} text-4xl leading-none`}
                style={{ color: "#4A2C63" }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                Chávez García
              </motion.h1>

              {/* te invita */}
              <motion.p
                className={`${playFair.className} text-xs tracking-wide mt-1`}
                style={{ color: "#CDA6F5" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                te invita a celebrar
              </motion.p>

              {/* Divisor */}
              <motion.div
                className="w-full h-px my-2"
                style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.4), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />

              {/* XV */}
              <motion.div
                className="flex items-baseline gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring" as const, stiffness: 200 }}
              >
                <span
                  className={`${playFair.className} font-bold text-6xl leading-none`}
                  style={{
                    background: "linear-gradient(135deg, #4A2C63, #9B6DDB)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  XV
                </span>
                <span
                  className={`${playFair.className} text-xl tracking-widest`}
                  style={{ color: "#9B6DDB" }}
                >
                  AÑOS
                </span>
              </motion.div>

              {/* de */}
              <motion.p
                className={`${playFair.className} text-xs tracking-wider`}
                style={{ color: "#CDA6F5" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                de
              </motion.p>

              {/* Nombre */}
              <motion.h2
                className={`${greatVibes.className} text-4xl leading-none -mt-1`}
                style={{ color: "#7B4FA3" }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Kaylani Gabriell
              </motion.h2>

              {/* Estrellas */}
              <motion.div
                className="flex gap-2 mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.25 }}
              >
                {[0, 0.1, 0.2].map((d, i) => (
                  <motion.span
                    key={i}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: d }}
                  >
                    <FaStar className="text-sm" style={{ color: "#CDA6F5" }} />
                  </motion.span>
                ))}
              </motion.div>

              {/* Divisor */}
              <motion.div
                className="w-full h-px my-2"
                style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.4), transparent)" }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              />

              {/* Fecha */}
              <motion.p
                className={`${playFair.className} text-sm tracking-[0.2em] font-semibold`}
                style={{ color: "#4A2C63" }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                18 · JULIO · 2026
              </motion.p>

              {/* Botón */}
              <motion.div
                className="mt-4 w-full"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.55 }}
              >
                <Button
                  fullWidth
                  className={`${playFair.className} text-white rounded-2xl font-semibold shadow-md gap-2`}
                  style={{
                    background: "linear-gradient(135deg, #9B6DDB, #7E4CC7)",
                    boxShadow: "0 4px 14px rgba(123,79,163,0.40)",
                  }}
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaEye />
                  Ver invitación
                </Button>
              </motion.div>

              {/* Corazones */}
              <motion.div
                className="flex gap-3 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 }}
              >
                {[0, 0.15, 0.3].map((d, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, delay: d }}
                  >
                    <FaHeart className="text-xs" style={{ color: "#D8B18A" }} />
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Bottom bar */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-[#CDA6F5] via-[#9B6DDB] to-[#4A2C63]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              style={{ transformOrigin: "right" }}
            />
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Jannia() {
  const [open, setOpen] = useState(false);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="bg-[url('/img/quinces/kaylani/bg.jpg')] bg-center bg-cover bg-fixed h-screen ">
      {open && <Main />}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
