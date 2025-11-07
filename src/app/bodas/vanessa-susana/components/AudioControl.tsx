import { motion } from "framer-motion";
import { playfair } from "./Fonts";
import { FaRegPauseCircle, FaRegPlayCircle, FaVolumeOff } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function AudioControl() {
  const [isPlayed, setIsPlayed] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isPlayed) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  }, [isPlayed]);

  return (
    <div className="flex items-center justify-center gap-5 bg-gray-200 p-3">
      <p className={`${playfair.className} text-sm md:text-xl lg:text-2xl`}>
        Dale play para escuchar nuestra canción
      </p>
      <motion.button
        onClick={() => setIsPlayed(!isPlayed)}
        type="button"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1 * 0.5,
        }}
      >
        {isPlayed ? <FaRegPauseCircle size={30}/> : <FaRegPlayCircle size={30} /> }
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/lo_tienes_todo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
