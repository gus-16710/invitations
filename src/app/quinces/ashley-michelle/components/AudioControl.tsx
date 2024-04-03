import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 p-3 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-10 mr-5 transition duration-150 ease-in-out focus:shadow-lg z-30"
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "anticipate" }}        
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
