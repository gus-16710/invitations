import "yet-another-react-lightbox/styles.css";

import { useState } from "react";
import { motion } from "framer-motion";
import { Great_Vibes } from "next/font/google";
import NextJsImage from "@/app/components/NextJsImage";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

const images = [
  {
    src: "/img/wedding/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/wedding/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/wedding/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/wedding/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/wedding/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/wedding/gallery-06.jpg",
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
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Nosotros
      </motion.h1>
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
