import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { oswald } from "./Fonts";
import { useState } from "react";
import { motion } from "framer-motion";
import { gallery } from "./Animations";

const images = [
  {
    src: "/img/quinces/camila/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/camila/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/quinces/camila/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/camila/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/camila/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/camila/gallery-06.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      className="relative flex flex-col items-center justify-center pt-28 pb-20"
      style={{ backgroundColor: "#f4e1d1" }}
    >
      <div className="w-full absolute -top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="currentColor"
          fillRule="evenodd"
          viewBox="0 0 1000 137"
          style={{ fill: "#f3c5c5", rotate: "180deg" }}
        >
          <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
        </svg>
      </div>
      <motion.div
        id="alert-5"
        className="flex items-center justify-center p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800 w-72"
        role="alert"
        variants={gallery.svg}
        initial="hidden"
        whileInView="visible"
      >
        <svg
          className="flex-shrink-0 w-4 h-4 text-pink-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"          
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className={`${oswald.className} ms-3 text-sm text-pink-500 dark:text-gray-300`}>
          Click sobre la imagen para ampliar
        </div>
      </motion.div>
      <div className="z-30 px-2 py-5 w-72 m-auto">
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
