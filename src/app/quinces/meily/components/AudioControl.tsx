import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useOverDark } from "./useOverDark";

export default function AudioControl() {
  const [isPlayed, setIsPlayed] = useState(true);
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overDark = useOverDark(buttonRef);

  useEffect(() => {
    if (isPlayed) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  }, [isPlayed]);

  return (
    <>
      <motion.button
        ref={buttonRef}
        type="button"
        aria-label={isPlayed ? "Pausar música" : "Reproducir música"}
        className={`${
          overDark
            ? "bg-[#f5ebe0]/95 text-red-900 hover:bg-white"
            : "bg-red-800/90 text-white hover:bg-red-700"
        } focus:ring-4 focus:outline-none focus:ring-red-300 p-3 rounded-full fixed bottom-0 right-0 font-medium shadow-md mb-10 mr-5 transition-colors duration-300 ease-in-out focus:shadow-lg z-30`}
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 3, ease: "anticipate" as const }}
      >
        {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden>
        <source src="/media/mi_princesa_angel_melo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
