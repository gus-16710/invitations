"use client";

import { motion } from "framer-motion";
import {
  Button,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import { greatVibes, playFair, notoSerif } from "./components/Fonts";
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
          <div className="bg-gradient-to-b from-blue-50 via-white to-yellow-50">
            {/* Top color bar */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-blue-700 via-yellow-400 to-red-500"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
            />

            <div className="flex flex-col items-center px-6 pt-6 pb-5 gap-1">
              {/* Crown */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
                className="mb-1"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center shadow-lg shadow-yellow-200">
                  <FaCrown className="text-blue-800 text-2xl" />
                </div>
              </motion.div>

              {/* La Familia */}
              <motion.p
                className={`${playFair.className} text-xs tracking-[0.25em] uppercase text-blue-600 font-semibold`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                La Familia
              </motion.p>

              {/* Landa Garrido */}
              <motion.h1
                className={`${greatVibes.className} text-4xl text-blue-800 leading-none`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                Landa Garrido
              </motion.h1>

              {/* te invita */}
              <motion.p
                className={`${playFair.className} text-xs text-slate-400 tracking-wide mt-1`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                te invita a celebrar
              </motion.p>

              {/* divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent my-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />

              {/* XV */}
              <motion.div
                className="flex items-baseline gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              >
                <span
                  className={`${playFair.className} font-bold text-6xl leading-none`}
                  style={{
                    background: "linear-gradient(135deg, #1d4ed8, #eab308)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    display: "inline-block",
                  }}
                >
                  XV
                </span>
                <span className={`${playFair.className} text-xl text-slate-500 tracking-widest`}>
                  AÑOS
                </span>
              </motion.div>

              {/* de */}
              <motion.p
                className={`${playFair.className} text-xs text-slate-400 tracking-wider`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                de
              </motion.p>

              {/* Kimberly Renata */}
              <motion.h2
                className={`${greatVibes.className} text-4xl text-red-600 leading-none -mt-1`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                Kimberly Renata
              </motion.h2>

              {/* Stars */}
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
                    <FaStar className="text-amber-400 text-sm" />
                  </motion.span>
                ))}
              </motion.div>

              {/* divider */}
              <motion.div
                className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent my-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              />

              {/* Date */}
              <motion.p
                className={`${playFair.className} text-sm tracking-[0.2em] text-slate-600 font-semibold`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                10 · MAYO · 2026
              </motion.p>

              {/* Button */}
              <motion.div
                className="mt-4 w-full"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.55 }}
              >
                <Button
                  fullWidth
                  className={`${playFair.className} bg-gradient-to-r from-blue-700 to-blue-900 text-white rounded-2xl font-semibold shadow-md shadow-blue-200 gap-2`}
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  <FaEye />
                  Ver invitación
                </Button>
              </motion.div>

              {/* hearts footer */}
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
                    <FaHeart className="text-red-400 text-xs" />
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* Bottom color bar */}
            <motion.div
              className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-700"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
  const [started, setStarted] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredModal = useRef(false);

  // Fallback: si el video ya estaba en caché y listo al montar, canPlay no vuelve a disparar
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState >= 3) setVideoReady(true);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !started) return;

    const handleTimeUpdate = () => {
      if (hasTriggeredModal.current) return;
      if (video.duration && video.duration - video.currentTime <= 4) {
        hasTriggeredModal.current = true;
        onOpen();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, [onOpen, started]);

  const handleStart = () => {
    setStarted(true);
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  };

  return (
    <main className="bg-[url('/img/festejos/kimberly-cristina/bg.jpg')] bg-center bg-cover bg-fixed h-screen">
      {!open && <div
        className="max-w-3xl m-auto shadow-large relative "
        style={{ height: "100svh" }}
      >
        <video
          ref={videoRef}
          muted={!started}
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          onCanPlay={() => setVideoReady(true)}
        >
          <source
            src="/img/festejos/kimberly-cristina/intro.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>

        {!started && (
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={videoReady ? handleStart : undefined}
          >
            {!videoReady ? (
              /* Loading */
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-white/80 animate-spin" />
                <p className={`${notoSerif.className} text-white/60 text-sm tracking-widest uppercase`}>
                  Cargando...
                </p>
              </div>
            ) : (
              /* Play */
              <>
                <motion.div
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center mb-4"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-10 h-10 ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <p className={`${notoSerif.className} text-white/80 text-sm tracking-widest uppercase`}>
                  Toca para comenzar
                </p>
              </>
            )}
          </motion.div>
        )}
      </div>}

      {open && <Main />}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
