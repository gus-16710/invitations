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
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 5, type: "spring" as const, stiffness: 200, damping: 18 }}
        whileTap={{ scale: 0.88 }}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "20px",
          zIndex: 50,
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #9B6DDB, #7E4CC7)",
          boxShadow: "0 4px 16px rgba(74,44,99,0.45), 0 0 0 3px rgba(205,166,245,0.2)",
          border: "1px solid rgba(255,255,255,0.22)",
          color: "#FFF8FC",
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/golden_brown_cut.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
