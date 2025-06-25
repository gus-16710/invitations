import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { LuZoomIn } from "react-icons/lu";

const images = [
  {
    src: "/img/escolar/telebachillerato-buena-vista/gallery-01.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-buena-vista/gallery-02.jpeg",
    width: 1600,
    height: 900,
  },
];

export default function SlideFour() {
  const [index, setIndex] = useState(-1);
  const [showHint, setShowHint] = useState(true);

  // Animaciones
  const zoomIconAnimation = {
    hover: { scale: 1.2, rotate: 10 },
    tap: { scale: 0.9 },
  };

  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      }}      
    >
      {/* Notificación con animación */}
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
          className="flex items-center justify-center p-2 rounded-lg bg-red-800/50 w-80 mb-3"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="ms-3 text-sm text-white">
            Presiona sobre una imagen para ampliar
          </div>
          <motion.div
            className="text-white ml-2"
            variants={zoomIconAnimation}
            whileHover="hover"
            whileTap="tap"
          >
            <LuZoomIn />
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollShadow hideScrollBar className="h-[400px] z-30 mx-auto w-72">
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
    </motion.section>
  );
}
