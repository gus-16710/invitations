import { Image } from "@nextui-org/react";
import { cormorant, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideOne() {
  // Configuración de animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3
      }
    }
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
        mass: 0.6
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
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
        mass: 0.5
      }
    }
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
        {/* Institución */}
        <motion.h2 
          variants={itemUp}
          className={`${urbanist.className} text-zinc-100 text-lg`}
        >
          Telebachillerato
        </motion.h2>

        {/* Nombre */}
        <motion.h1 
          variants={scaleIn}
          transition={{ delay: 0.1 }}
          className={`${cormorant.className} text-zinc-50 text-4xl mt-1`}
        >
          "Buena Vista"
        </motion.h1>

        {/* Clave */}
        <motion.h2 
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className={`${urbanist.className} text-zinc-100 mb-5`}
        >
          CLAVE: 30ETH0517R
        </motion.h2>

        {/* Logo */}
        <motion.div 
          variants={scaleIn}
          transition={{ delay: 0.3 }}
          className="mb-5"
        >
          <Image
            width={160}
            alt="Logo Telebachillerato"
            src="/img/escolar/telebachillerato-buena-vista/tebaev-logo.jpg"
            radius="full"
            className="shadow-lg"
          />
        </motion.div>

        {/* Título principal */}
        <motion.h2
          variants={itemUp}
          transition={{ delay: 0.4 }}
          className={`${mea.className} text-zinc-50 text-5xl mx-10 text-center mb-10`}
        >
          Ceremonia de Graduación
        </motion.h2>

        {/* Generación */}
        <motion.h2
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className={`${urbanist.className} text-zinc-50 text-xl text-center`}
        >
          GENERACIÓN 2022-2025
        </motion.h2>

        {/* Fecha */}
        <motion.p
          variants={scaleIn}
          transition={{ delay: 0.6 }}
          className={`${lora.className} z-20 flex items-center font-bold text-zinc-50 mt-2`}
          style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        >
          <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest text-xl">
            &nbsp;JULIO&nbsp;
          </span>
          <span className="text-4xl px-2 tracking-widest">04</span>
          <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest text-xl">
            &nbsp;&nbsp;2025&nbsp;&nbsp;
          </span>
        </motion.p>

        {/* Hora */}
        <motion.p
          variants={fadeIn}
          transition={{ delay: 0.7 }}
          className={`${urbanist.className} z-20 text-zinc-100 mt-2`}
        >
          05:00 p.m.
        </motion.p>

        {/* Elemento decorativo (opcional) */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.8 }}
          className="w-20 h-1 bg-zinc-100/50 rounded-full mt-6"
        ></motion.div>
      </motion.div>
    </section>
  );
}