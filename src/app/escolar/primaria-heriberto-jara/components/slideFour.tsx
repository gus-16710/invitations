import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import NextJsImage from "./NextJsImage";
import { LuZoomIn } from "react-icons/lu";

const images = [
  {
    src: "/img/escolar/primaria-heriberto-jara/gallery-01.jpeg",
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
      <motion.div
        className="flex items-center justify-center pt-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.3, duration: 0.6 },
        }}
      >
        <motion.div
          className="flex items-center justify-center p-2 rounded-lg bg-zinc-100/20 w-80 mb-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="ms-3 text-sm text-white">
            Presiona sobre una imagen para ampliar
          </div>
          <div className="text-white ml-2">
            <LuZoomIn />
          </div>
        </motion.div>
      </motion.div>

      <div className="mx-auto w-72 p-2">
        <ScrollShadow hideScrollBar className="h-[300px] z-50 pt-5">
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
        </ScrollShadow>
      </div>
    </motion.section>
  );
}
