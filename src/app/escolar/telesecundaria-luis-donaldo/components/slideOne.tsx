import "yet-another-react-lightbox/styles.css";

import { Image } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import { GiClick } from "react-icons/gi";

const images = [
  {
    src: "/img/escolar/telesecundaria-luis-donaldo/gallery-01.jpg",
    width: 800,
    height: 600,
  },
];

export default function SlideOne() {
  const [index, setIndex] = useState(-1);

  // Configuración de animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemUp = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.6,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5,
      },
    },
  };

  return (
    <section
      style={{ height: "100svh" }}
      className="flex justify-center items-center"
    >
      <motion.div
        className="flex flex-col justify-center items-center relative"
        initial="hidden"
        whileInView="show"
        variants={container}
        style={{ color: "#354c6b" }}
      >
        {/* Títulos principales */}
        <motion.div variants={itemUp} className="text-center">
          <h2 className={`${oleo.className} text-6xl custom-shadow`}>
            Ceremonia
          </h2>
          <h2 className={`${nobile.className} mb-4 custom-shadow`}>
            DE FIN DE CURSOS
          </h2>
        </motion.div>

        {/* Logo */}
        <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
          <div className="w-72 mb-4 relative">
            <PhotoAlbum
              layout="masonry"
              photos={images}
              onClick={({ index: current }) => setIndex(current)}
              renderPhoto={NextJsImage}
              columns={1}
            />
            <Lightbox
              index={index}
              slides={images}
              open={index >= 0}
              close={() => setIndex(-1)}
            />

            <motion.div
              className="absolute text-5xl  right-8 top-24"
              initial={{ scale: 1, x: 0, y: 0 }}
              animate={{
                scale: [1, 1.2, 1], // Escala: crece y vuelve a tamaño normal
                x: [-5, 0, -5], // Movimiento horizontal leve
                y: [-5, 0, -5], // Movimiento vertical leve
              }}
              transition={{
                repeat: Infinity, // Repetir indefinidamente
                repeatType: "loop", // Tipo de repetición
                duration: 1.5, // Duración de cada ciclo
                ease: "easeInOut", // Suavizado de movimiento
              }}
              whileHover={{ scale: 1.3 }} // Efecto al pasar el mouse
              style={{ color: "#486786" }}
            >
              <GiClick className="text-4xl"/>
            </motion.div>
          </div>
        </motion.div>

        {/* Información de la escuela */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className={`${nobile.className} text-lg`}>
            Escuela Telesecundaria
          </h2>
          <h1 className={`${ovo.className} text-3xl mt-1`}>
            "Luis Donaldo Colosio Murrieta"
          </h1>
          <h2 className={`${nobile.className} mb-5`}>CLAVE: 30DTV0540M</h2>
        </motion.div>

        {/* Años */}
        <motion.p
          variants={itemUp}
          transition={{ delay: 0.4 }}
          className={`${ovo.className} text-4xl px-2 tracking-widest`}
        >
          2022-2025
        </motion.p>

        {/* Director */}
        <motion.h2
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className={`${nobile.className} text-lg mt-5 mx-10 text-center`}
        >
          Directora: Dra. Flor de María Sánchez Ceballos
        </motion.h2>

        {/* Elemento decorativo (opcional) */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="w-20 h-1 bg-blue-950/30 rounded-full mt-8"
        ></motion.div>
      </motion.div>
    </section>
  );
}
