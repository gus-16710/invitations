import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { CiVolumeHigh, CiVolumeMute  } from "react-icons/ci";

export default function AudioControl() {
  const [isPlayed, setIsPlayed] = useState(true);
  const audioPlayer = useRef<HTMLAudioElement>(null);

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
        type="button"
        className={`bg-slate-200/50 p-3 rounded-full text-zinc-800 fixed bottom-0 right-0 font-medium shadow-md mb-10 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-10`}
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "anticipate" }} 
      >
        {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/mi_princesa_angel_melo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

/**
 * 259 > 100
 * 175 > ? 
 */