import { MdOutlineVolumeOff, MdOutlineVolumeUp  } from "react-icons/md";
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
        className="bg-red-800/80 p-3 rounded-full text-zinc-200 fixed bottom-0 right-0 font-medium shadow-md transition duration-150 ease-in-out hover:bg-red-500/75 hover:shadow-lg focus:bg-red-500/75 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-500/75 active:shadow-lg z-30 mb-10 mr-5"
        onClick={() => setIsPlayed(!isPlayed)}
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 2, ease: "anticipate" }}
      >
        {isPlayed ? <MdOutlineVolumeUp /> : <MdOutlineVolumeOff />}
      </motion.button>

      <audio controls ref={audioPlayer} hidden loop>
        <source
          src="/media/wildest_dreams_taylor_swift.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
