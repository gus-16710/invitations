import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes, Oswald } from "next/font/google";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { LuZoomIn } from "react-icons/lu";

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
    <section
      className="justify-center items-center flex-col text-center"
      style={{ height: "100svh" }}
    >
      <div className="flex items-center justify-center pt-10">
        <motion.div
          id="alert-5"
          className="flex items-center justify-center p-2 rounded-lg bg-gray-500/50 w-80 mb-3"
          role="alert"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <span className="sr-only">Info</span>
          <div className={`${oswald.className} ms-3 text-sm text-white`}>
            Presiona sobre una imagen para ampliar
          </div>
          <LuZoomIn className="text-white ml-2" />
        </motion.div>
      </div>
      <div className="w-72 m-auto">
        <PhotoAlbum
          layout="masonry"
          photos={images}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={NextJsImage}
          columns={2}
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
