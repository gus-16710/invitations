import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';

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
        className="bg-yellow-900/50 p-3 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:bg-yellow-700/50 hover:shadow-lg focus:bg-yellow-700/50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800/50 active:shadow-lg z-10"
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "anticipate" }} 
      >
        {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/video_games_lana_del_rey.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
