import "yet-another-react-lightbox/styles.css";
import { dancing, imperial, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import PhotoAlbum from "react-photo-album";
import { useState } from "react";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

import { GiClick } from "react-icons/gi";
import { Image } from "@nextui-org/react";

const images = [
  {
    src: "/img/escolar/primaria-francisco-zarco/gallery-01.jpeg",
    width: 800,
    height: 600,
  },
];

export default function SlideOne() {
  const [index, setIndex] = useState(-1);
  // Configuración de animaciones con tiempos más lentos
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Aumentado el tiempo entre elementos
        delayChildren: 0.5, // Mayor delay inicial
      },
    },
  };

  const itemUp = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10, // Más suave
        stiffness: 80, // Menos rígido
        mass: 0.8, // Añadido masa para más fluidez
        duration: 1.2, // Más largo
      },
    },
  };

  const itemDown = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.8,
        duration: 1.2,
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
        stiffness: 80,
        damping: 10,
        mass: 0.8,
        duration: 1.5, // Animación más prolongada
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1.5, // Más lento
        ease: [0.16, 0.77, 0.47, 0.97], // Curva de easing más suave
      },
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center"
      >
        {/* Primer texto */}
        <motion.h2
          variants={itemUp}
          className={`${urbanist.className} text-zinc-800 text-lg mx-10 text-center`}
        >
          La escuela primaria Profr. Rosendo Leyva Lara le invita a la
        </motion.h2>

        <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
          <Image
            width={140}
            alt="NextUI hero Image"
            src="/img/escolar/primaria-rosendo-leyva/logo.png"
            className="my-5"
            style={{ filter: "drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.5))" }}
          />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={itemDown}
          className={`${imperial.className} text-zinc-800 text-7xl`}
          transition={{ delay: 0.2 }} // Pequeño delay adicional
        >
          Generación
        </motion.h2>

        {/* Años */}
        <motion.h2
          variants={itemUp}
          className={`${imperial.className} text-zinc-800 mb-4 text-5xl`}
          transition={{ delay: 0.25 }}
        >
          2019 - 2025
        </motion.h2>

        {/* Cita */}
        <motion.h2
          variants={fadeIn}
          className={`${urbanist.className} text-zinc-800 text-lg mx-16 text-center max-w-xl`}
          transition={{ delay: 0.4 }} // Delay más pronunciado
        >
          "La educación es el arma más poderosa que puedes usar para cambiar el
          mundo."
        </motion.h2>

        {/* Fecha */}
        <motion.h2
          variants={{
            hidden: { y: -30, opacity: 0 },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 8,
                mass: 0.7,
                delay: 0.6, // Delay más largo
              },
            },
          }}
          className={`${dancing.className} text-zinc-800 text-3xl mx-10 mt-10 text-center`}
        >
          Lunes 07 de Julio 2025
        </motion.h2>
      </motion.div>
    </section>
  );
}
