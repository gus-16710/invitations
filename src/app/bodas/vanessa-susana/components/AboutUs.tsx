import "yet-another-react-lightbox/styles.css";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import { italianno, playfair } from "./Fonts";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";

const images = [
  {
    src: "/img/bodas/vanessa-susana/image01.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/vanessa-susana/image06.jpeg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/vanessa-susana/image04.jpeg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/bodas/vanessa-susana/image02.jpeg",
    width: 800,
    height: 600,
  }, 
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

export default function AboutUs() {
  const text = "¡LLEGA LA BODA MÁS ESPERADA!";

  const [index, setIndex] = useState(-1);

  return (
    <>
      <motion.p
        className={`${playfair.className} text-center mt-5 text-xl sm:text-3xl md:text-4xl `}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter}
            </motion.span>
          );
        })}
      </motion.p>

      <motion.div
        className="w-100 border-t-2 border-black mt-2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      />
      <motion.div
        className="w-100 border-t-1 border-black mt-1"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          alt="Wedding"
          src="/img/bodas/vanessa-susana/image03.jpeg"
          width="100%"
          className="rounded-none border-t-1 pb-5 border-black pt-5"
        />
      </motion.div>

      <div className="flex items-center">
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Nuestra Historia
        </p>
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="flex flex-col mt-5">
        <div className="flex-1">
          <p className={`${playfair.className} text-justify`}>
            Nos conocimos en el trabajo, sin imaginar que, entre tareas, y
            convivencias encontraríamos algo mucho más importante: la una a la
            otra… Desde aquel 28 de diciembre hemos reído, madurado, llorado un
            poquito pero siempre juntas y aprendimos que el amor verdadero se
            construye día a día.
          </p>
          <p className={`${playfair.className} text-justify mt-3`}>
            ¡Poco a poco empezamos a crecer emocionalmente hasta que llego el
            capítulo más emocionante!! “NOS CASAMOS” y porque en algún momento
            fuiste cómplice de una risa, un consejo, un abrazo o una anécdota,
            tú también eres parte de esta historia.
          </p>
          <p className={`${playfair.className} text-justify mt-3`}>
            Es por eso que estas cordialmente invitado/a a celebrar con nosotras
            este día tan especial.
          </p>
        </div>
        <div className="flex-1 mt-5">
          <PhotoAlbum
            layout="columns"
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
      </div>
    </>
  );
}
