// import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
// import { useState, useEffect, useRef } from "react";
// import { motion } from 'framer-motion';

// export default function AudioControl() {
//   const [isPlayed, setIsPlayed] = useState(true);
//   const audioPlayer = useRef<HTMLAudioElement>(null);

//   useEffect(() => {
//     if (isPlayed) {
//       audioPlayer.current?.play();
//     } else {
//       audioPlayer.current?.pause();
//     }
//   }, [isPlayed]);

//   return (
//     <>
//       <motion.button
//         type="button"
//         className="bg-yellow-900/50 p-3 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-5 mr-5 transition duration-150 ease-in-out hover:bg-yellow-700/50 hover:shadow-lg focus:bg-yellow-700/50 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800/50 active:shadow-lg z-10"
//         onClick={() => setIsPlayed(!isPlayed)}
//         initial={{ opacity: 0, scale: 0, y: -100 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1, ease: "anticipate" }} 
//       >
//         {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
//       </motion.button>

//       <audio controls ref={audioPlayer} hidden loop>
//         <source src="/media/video_games_lana_del_rey.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//     </>
//   );
// }

import { FaVolumeUp, FaVolumeOff } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioControl() {
  const [isPlayed, setIsPlayed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioPlayer = useRef<HTMLAudioElement>(null);
  const tooltipInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlayed) {
      audioPlayer.current?.play();
    } else {
      audioPlayer.current?.pause();
    }
  }, [isPlayed]);

  // Efecto para mostrar la burbuja cada 15 segundos
  useEffect(() => {
    // Limpiar intervalo previo
    if (tooltipInterval.current) {
      clearInterval(tooltipInterval.current);
    }

    // Configurar nuevo intervalo
    tooltipInterval.current = setInterval(() => {
      setShowTooltip(true);
      
      // Ocultar después de 4 segundos
      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 15000); // 15 segundos

    // Mostrar la burbuja al inicio después de 2 segundos
    const initialTimeout = setTimeout(() => {
      setShowTooltip(true);
      
      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 2000);

    // Limpiar intervalos al desmontar
    return () => {
      if (tooltipInterval.current) {
        clearInterval(tooltipInterval.current);
      }
      clearTimeout(initialTimeout);
    };
  }, []); // Solo se ejecuta al montar el componente

  const handleClick = () => {
    setIsPlayed(!isPlayed);
    // Ocultar tooltip al hacer clic
    setShowTooltip(false);
  };

  const tooltipText = isPlayed 
    ? "Clic para detener canción" 
    : "Clic para escuchar canción";

  return (
    <>
      <div className="fixed bottom-0 right-0 z-10 mb-5 mr-5 flex items-center">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative mr-3"
            >
              {/* Burbuja de texto */}
              <div className="bg-yellow-500 text-white px-4 py-3 rounded-2xl shadow-lg max-w-xs">
                <p className="text-sm font-medium whitespace-nowrap">
                  {tooltipText}
                </p>
                
                {/* Flecha apuntando al botón (ahora a la derecha) */}
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2">
                  <div className="w-4 h-4 bg-yellow-500 transform rotate-45"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          className="bg-yellow-500 p-3 rounded-full text-white font-medium shadow-md transition duration-150 ease-in-out hover:bg-yellow-700/50 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "anticipate" }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {isPlayed ? <FaVolumeUp /> : <FaVolumeOff />}
        </motion.button>
      </div>

      <audio controls ref={audioPlayer} hidden loop>
        <source src="/media/video_games_lana_del_rey.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}