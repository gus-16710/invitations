import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import Lightbox from "yet-another-react-lightbox";

import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import NextJsImage from "./NextJsImage";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
  {
    src: "/img/escolar-2026/experimental/gallery-01.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar-2026/experimental/gallery-02.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar-2026/experimental/gallery-03.jpeg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/escolar-2026/experimental/gallery-04.jpeg",
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
      <div className="mx-auto w-72 p-2">
        <ScrollShadow
          hideScrollBar
          className="h-[450px] z-50 pt-5"
          data-lenis-prevent
        >
          <PhotoAlbum
            layout="masonry"
            photos={images}
            onClick={({ index: current }) => setIndex(current)}
            render={{ photo: NextJsImage }}
            columns={1}
          />
          <Lightbox
            index={index}
            slides={images}
            open={index >= 0}
            close={() => setIndex(-1)}
            controller={{
              closeOnBackdropClick: true,
              closeOnPullDown: true,
              closeOnPullUp: true,
            }}
            plugins={[Thumbnails, Zoom, Fullscreen]}
          />
        </ScrollShadow>
      </div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-100" />
      </motion.div>
    </motion.section>
  );
}
