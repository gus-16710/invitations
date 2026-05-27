"use client";
import { Progress } from "@nextui-org/react";
import { FaPause, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "./AudioContext";
import { saira } from "./Fonts";
import { FaMusic } from "react-icons/fa";

const DURATION = 167;

export default function FloatingAudioPlayer() {
  const { playing, setPlaying, currentTime, headerVisible } = useAudio();
  const currentProgress = (Math.trunc(currentTime) * 100) / DURATION;

  return (
    <AnimatePresence>
      {!headerVisible && (
        <motion.div
          variants={{
            hidden: {
              y: 10,
              opacity: 0,
              transition: { duration: 0.6, ease: "easeOut" as const },
            },
            visible: {
              y: 0,
              opacity: 1,
              transition: { type: "spring" as const, stiffness: 280, damping: 28 },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-6"
        >
          <div className="bg-black/75 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-4 w-full max-w-sm shadow-2xl">
            {/* Icono musical */}
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
              <FaMusic className="text-white/70 text-sm" />
            </div>

            {/* Info + barra */}
            <div className="flex flex-col flex-1 gap-1.5 min-w-0">
              <p className={`${saira.className} text-white/60 text-[10px] tracking-[0.25em] uppercase`}>
                Nuestra Canción
              </p>
              <Progress
                size="sm"
                radius="full"
                classNames={{
                  track: "border border-white/10 bg-white/5",
                  indicator: "bg-white/80",
                }}
                aria-label="Progreso"
                value={Math.trunc(currentProgress)}
              />
            </div>

            {/* Play / Pause */}
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 transition-colors flex items-center justify-center flex-shrink-0"
            >
              {playing ? (
                <FaPause className="text-white text-sm" />
              ) : (
                <FaPlay className="text-white text-sm ml-0.5" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
