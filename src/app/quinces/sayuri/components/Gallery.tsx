import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import { motion } from "framer-motion";
import { dancing } from "./Fonts";
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
    <section className="h-screen relative">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute w-full -top-1"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          fill="#d9ccaa"
        ></path>
      </svg>

      <motion.h1
        className={`${dancing.className} text-golden text-5xl text-center pt-20`}
        variants={gallery.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp; Galería &nbsp;
      </motion.h1>

      <div className="z-30 px-2 py-10 w-72 m-auto">
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
