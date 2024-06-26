import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import { motion } from "framer-motion";
import { dancing, playFair } from "./Fonts";
import "yet-another-react-lightbox/styles.css";
import { gallery } from "./Animations";

const images = [
  {
    src: "/img/quinces/sayuri/gallery-01.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/sayuri/gallery-02.jpeg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/quinces/sayuri/gallery-03.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/sayuri/gallery-04.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/sayuri/gallery-05.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/sayuri/gallery-06.jpeg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="flex flex-col items-center" style={{ height: "100svh" }}>
      <motion.h1
        className={`${dancing.className} text-golden text-6xl text-center pt-10`}
        variants={gallery.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp; Fotos &nbsp;
      </motion.h1>

      <motion.div
        id="alert-5"
        className="flex items-center justify-center p-3 rounded-lg bg-zinc-900 w-72 mt-5"
        role="alert"
        variants={gallery.alert}
        initial="hidden"
        whileInView="visible"
      >
        <svg
          className="flex-shrink-0 w-4 h-4 text-zinc-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className={`${playFair.className} ms-3 text-xs text-zinc-400 `}>
          Click sobre la imagen para ampliar
        </div>
      </motion.div>

      <div className="z-30 px-2 py-5 w-72 mx-auto">
        <PhotoAlbum
          layout="masonry"
          photos={images}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={NextJsImage}
          columns={2}
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
