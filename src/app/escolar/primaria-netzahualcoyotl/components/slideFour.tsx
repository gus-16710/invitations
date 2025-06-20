import "yet-another-react-lightbox/styles.css";

import { motion } from "framer-motion";
import { cormorant } from "./Fonts";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

const images = [
  {
    src: "/img/escolar/primaria-netzahualcoyotl/generacion.jpeg",
    width: 800,
    height: 600,
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, // Aumenté un poco el stagger para palabras
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 30 }, // Reduje la animación para hacerla más sutil
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function SlideFour() {
  const [index, setIndex] = useState(-1);

  const text = `Queridos alumnos de la generación 2019–2025, han dejado huella en cada rincón de la Escuela Primaria Netzahualcóyotl. Se llevan con ustedes no solo aprendizajes, sino también risas, amistades y momentos que vivirán para siempre en su corazón. ¡Sigan adelante, con sueños grandes y alas fuertes para alcanzarlos!`;

  return (
    <section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/escolar/primaria-netzahualcoyotl/video.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/80 to-transparent"></div>

      <div className="h-40 w-40 mb-5">
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
      </div>

      <motion.p
        className={`${cormorant.className} text-zinc-50 text-xl mx-10 text-center z-10 max-w-xl custom-shadow`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>      
    </section>
  );
}
