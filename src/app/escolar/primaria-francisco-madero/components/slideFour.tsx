import "yet-another-react-lightbox/styles.css";

import { motion } from "framer-motion";
import { cormorant } from "./Fonts";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

const images = [
  {
    src: "/img/escolar/primaria-francisco-madero/generacion.jpg",
    width: 800,
    height: 600,
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

export default function SlideFour() {
  const [index, setIndex] = useState(-1);

  const text = `Hoy no decimos adiós, sino hasta pronto. Llévense en el corazón los recuerdos, las risas y todo lo aprendido en estos años. La Escuela Primaria Francisco I. Madero siempre será su casa. ¡Vuelen alto y sigan soñando en grande!`;

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
          src="/img/escolar/primaria-francisco-madero/video-background.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/80 to-transparent"></div>

      <motion.p
        className={`${cormorant.className} text-zinc-50 text-2xl mx-10 text-center z-10 max-w-xl custom-shadow`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter === "_" ? <>&nbsp;</> : letter}
            </motion.span>
          );
        })}
      </motion.p>
      
      <div className="h-32 w-72 mt-5">
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
    </section>
  );
}
