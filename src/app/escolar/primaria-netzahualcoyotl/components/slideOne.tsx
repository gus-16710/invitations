import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";

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

export default function SlideOne() {
  const [index, setIndex] = useState(-1);

  return (
    <motion.section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h2 className={`${nobile.className} text-zinc-800 text-lg`}>
        Escuela Primaria Vespertina
      </h2>
      <h1 className={`${ovo.className} text-zinc-800 text-4xl`}>
        "Netzahualcoyotl"
      </h1>
      <h2 className={`${nobile.className} text-zinc-800`}>30EPR3551M</h2>

      <div className="w-72 mt-8 mb-4">
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

      <h2 className={`${oleo.className} text-zinc-800 text-6xl`}>Ceremonia</h2>
      <h2 className={`${nobile.className} text-zinc-800 mb-5`}>DE FIN DE CURSOS</h2>

      <p
        className={`${ovo.className} text-zinc-800 text-4xl px-2 tracking-widest`}
      >
        2019-2025
      </p>
    </motion.section>
  );
}
