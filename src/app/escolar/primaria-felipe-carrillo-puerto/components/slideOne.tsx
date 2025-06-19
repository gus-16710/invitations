import "yet-another-react-lightbox/styles.css";

import { cormorant, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

const images = [
  {
    src: "/img/escolar/primaria-felipe-carrillo-puerto/generacion.jpeg",
    width: 800,
    height: 600,
  },
];

export default function SlideOne() {
  const [index, setIndex] = useState(-1);
  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      {/* Primera línea - Tipo de escuela */}
      <motion.h2
        className={`${urbanist.className} text-zinc-800 text-lg`}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Escuela Prim. Urb. Estatal
      </motion.h2>

      {/* Nombre de la escuela */}
      <motion.h1
        className={`${cormorant.className} text-zinc-800 text-4xl mt-2`}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        "Felipe Carrillo Puerto"
      </motion.h1>

      {/* Código de la escuela */}
      <motion.h2
        className={`${urbanist.className} text-zinc-800 mb-5 text-center mx-10`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        30EPR0881J
      </motion.h2>

      <div className="w-72">
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

      {/* Título "Ceremonia" */}
      <motion.h2
        className={`${mea.className} text-zinc-800 text-6xl`}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Ceremonia
      </motion.h2>

      {/* Subtítulo "DE FIN DE CURSOS" */}
      <motion.h2
        className={`${urbanist.className} text-zinc-800 mb-3`}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        DE FIN DE CURSOS
      </motion.h2>

      {/* Generación */}
      <motion.h2
        className={`${urbanist.className} text-zinc-800 text-center mx-10`}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        Generación
        <br /> 2019-2025 <br /> "Mtro. Aldo Azuara Moreno"
      </motion.h2>

      {/* Fecha */}
      <motion.p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-800 mt-5`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">
          &nbsp;JULIO&nbsp;
        </span>
        <span className="text-4xl px-2 tracking-widest">10</span>
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">
          &nbsp;&nbsp;2025&nbsp;&nbsp;
        </span>
      </motion.p>

      {/* Hora */}
      <motion.p
        className={`${urbanist.className} z-20 text-zinc-800 mt-2`}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
      >
        09:00 Hrs
      </motion.p>
    </section>
  );
}
