import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Oswald } from "next/font/google";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const oswald = Oswald({ subsets: ["latin"], weight: "400" });

const images = [
  {
    src: "/img/bodas/diana-ernesto/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-06.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="justify-center items-center flex-col text-center py-20">
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow mb-10`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Nosotros
      </motion.h1>
      <div className="flex items-center justify-center">
        <motion.div
          id="alert-5"
          className="flex items-center justify-center p-2 rounded-lg bg-gray-500/50 w-80 mb-3"
          role="alert"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <svg
            className="flex-shrink-0 w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div className={`${oswald.className} ms-3 text-sm text-white`}>
            Presiona una imagen para ampliar
          </div>
        </motion.div>
      </div>
      <div className="mx-4">
        <PhotoAlbum
          layout="rows"
          photos={images}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={NextJsImage}
        />
      </div>
      <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </section>
  );
}
