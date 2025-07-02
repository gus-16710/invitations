import "yet-another-react-lightbox/styles.css";

import { cormorant, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

import { GiClick } from "react-icons/gi";

const images = [
  {
    src: "/img/escolar/jardin-victoria-villarauz/gallery-01.jpg",
    width: 800,
    height: 600,
  },
];

export default function SlideOne() {
  const [index, setIndex] = useState(-1);

  return (
    <motion.section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h2 className={`${urbanist.className} text-zinc-800 text-lg`}>
        Jardín de Niños
      </h2>
      <h1
        className={`${cormorant.className} text-zinc-80 text-4xl text-center`}
      >
        "Victoria Villarauz Velazco"
      </h1>
      <h2 className={`${urbanist.className} text-zinc-800 mb-5 `}>
        CLAVE 30DJN0190I
      </h2>

      <div className="w-72 relative">
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
          className="absolute text-5xl text-blue-400 right-4 top-28"
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
        >
          <GiClick />
        </motion.div>
      </div>

      <h2
        className={`${mea.className} text-zinc-80 text-5xl mx-5 text-center mb-5`}
      >
        Ceremonia de Graduación
      </h2>
      <p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-800 mt-5`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest text-2xl">
          &nbsp;JULIO&nbsp;
        </span>
        <span className="text-5xl px-2 tracking-widest">15</span>
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest text-2xl">
          &nbsp;&nbsp;2025&nbsp;&nbsp;
        </span>
      </p>
      <p
        className={`${urbanist.className} z-20 text-zinc-800 mt-2 mb-5 text-xl`}
      >
        10:00 a.m.
      </p>      
    </motion.section>
  );
}
