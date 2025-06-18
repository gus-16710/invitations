import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

const images = [
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-06.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-07.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-08.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-09.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-10.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-las-trancas/gallery-11.jpg",
    width: 800,
    height: 600,
  }, 
];

export default function SlideFour() {
  const [index, setIndex] = useState(-1);

  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >      
      <ScrollShadow hideScrollBar className="h-[450px] z-30 mx-auto w-72">
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
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>      
    </motion.section>
  );
}
