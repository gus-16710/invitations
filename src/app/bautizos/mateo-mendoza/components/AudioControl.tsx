import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';

import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";

import { CiPause1, CiPlay1 } from "react-icons/ci";

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
        className="bg-zinc-900/50 p-2 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:bg-zinc-700/75 hover:shadow-lg focus:bg-zinc-700/75 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800/75 active:shadow-lg z-10"
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "anticipate" }} 
      >
        {isPlayed ? <CiPause1 size={24}/> : <CiPlay1 size={24} />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/el_regalo_mas_grande_angel_melo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

/**
 * 259 > 100
 * 175 > ? 
 */