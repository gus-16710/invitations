import "yet-another-react-lightbox/styles.css";

import { Avatar, Card, CardBody } from "@nextui-org/react";
import { cormorant, galada, lora, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";
import { GiClick } from "react-icons/gi";

const images = [
  {
    src: "/img/escolar/primaria-ignacio-altamirano/gallery-01.jpeg",
    width: 800,
    height: 600,
  },
];

export default function SlideOne() {
  const [index, setIndex] = useState(-1);

  // Configuración de animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.6,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5,
      },
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center px-5 py-7"
      style={{ height: "100svh" }}
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
      >
        <CardBody className="flex items-center justify-center flex-col">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="flex flex-col items-center"
          >
            {/* Institución */}
            <motion.h2
              variants={itemUp}
              className={`${urbanist.className} text-zinc-100 text-lg`}
            >
              Escuela Primaria
            </motion.h2>

            {/* Nombre */}
            <motion.h1
              variants={scaleIn}
              transition={{ delay: 0.1 }}
              className={`${cormorant.className} text-zinc-100 text-3xl text-center`}
            >
              "Ignacio Manuel Altamirano"
            </motion.h1>

            {/* Clave */}
            <motion.h2
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className={`${urbanist.className} text-zinc-100`}
            >
              CLAVE: 30EPR0876Y
            </motion.h2>
            
            <div className="w-72 my-5 relative">
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
          <motion.div
            className="absolute text-5xl text-zinc-100 right-5 top-32"
            initial={{ scale: 1, x: 0, y: 0 }}
            animate={{
              scale: [1, 1.2, 1], // Escala: crece y vuelve a tamaño normal
              x: [-5, 0, -5], // Movimiento horizontal leve
              y: [-5, 0, -5], // Movimiento vertical leve
            }}
            transition={{
              repeat: Infinity, // Repetir indefinidamente
              repeatType: "loop", // Tipo de repetición
              duration: 1.5, // Duración de cada ciclo
              ease: "easeInOut", // Suavizado de movimiento
            }}
            whileHover={{ scale: 1.3 }} // Efecto al pasar el mouse
          >
            <GiClick className="text-4xl"/>
          </motion.div>
        </div>

            {/* Título principal */}
            <motion.h2
              variants={itemUp}
              transition={{ delay: 0.4 }}
              className={`${galada.className} text-zinc-100 text-5xl mx-10 text-center mb-5`}
            >
              Ceremonia de Fin de Cursos
            </motion.h2>

            {/* Generación */}
            <motion.h2
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className={`${urbanist.className} text-zinc-100 text-xl text-center`}
            >
              GENERACIÓN 2019-2025
            </motion.h2>

            {/* Fecha */}
            <motion.p
              variants={scaleIn}
              transition={{ delay: 0.6 }}
              className={`${lora.className} z-20 flex items-center font-bold text-zinc-100 mt-2`}
              //style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
            >
              <span className="border-y-1 border-y-zinc-100 py-2 tracking-widest text-xl">
                &nbsp;JULIO&nbsp;
              </span>
              <span className="text-4xl px-2 tracking-widest">10</span>
              <span className="border-y-1 border-y-zinc-100 py-2 tracking-widest text-xl">
                &nbsp;&nbsp;2025&nbsp;&nbsp;
              </span>
            </motion.p>

            {/* Hora */}
            <motion.p
              variants={fadeIn}
              transition={{ delay: 0.7 }}
              className={`${urbanist.className} z-20 text-zinc-100 mt-2`}
            >
              10:00 hrs
            </motion.p>
           
          </motion.div>
        </CardBody>
      </Card>
    </section>
  );
}
