import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

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
      <button
        type="button"
        className="bg-gradient-to-r from-pink-400/80 via-pink-500/80 to-pink-600/80  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 p-3 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-10 mr-5 transition duration-150 ease-in-out focus:shadow-lg z-30"        
        onClick={() => setIsPlayed(!isPlayed)}
      >
        {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
      </button>

      <audio controls ref={audioPlayer} hidden>
        <source src="/media/mi_princesa_angel_melo.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
