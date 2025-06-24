import { Image } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function SlideOne() {
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
    hidden: { y: 50, opacity: 0 },
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
    hidden: { scale: 0.9, opacity: 0 },
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

  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
        colors: [
          "FFFFFF",
          "173869",
          "FFFFFF",
          "000000",       
          "f03f20",         
        ],
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    const timer = setInterval(() => fire(), 5000);
    () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{ height: "100svh" }}
      className="flex justify-center items-center"
    >
      <motion.div
        className="flex flex-col justify-center items-center relative text-blue-950"
        initial="hidden"
        whileInView="show"
        variants={container}
      >
        {/* Títulos principales */}
        <motion.div variants={itemUp} className="text-center">
          <h2 className={`${oleo.className} text-6xl custom-shadow`}>
            Ceremonia
          </h2>
          <h2 className={`${nobile.className} mb-4 custom-shadow`}>
            DE FIN DE CURSOS
          </h2>
        </motion.div>

        {/* Logo */}
        <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
          <Image
            width={130}
            alt="Logo Escuela"
            src="/img/escolar/primaria-arnulfo-perez-rivera/logo.png"
            className="mb-4"
            style={{ filter: "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5))" }}
          />
        </motion.div>

        {/* Información de la escuela */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className={`${nobile.className} text-lg`}>
            Escuela Primaria Vespertina
          </h2>
          <h1 className={`${ovo.className} text-4xl mt-1`}>
            "Profr. Arfulfo Pérez Rivera"
          </h1>
          <h2 className={`${nobile.className} mb-5`}>CLAVE: 30EPR3978P</h2>
        </motion.div>

        {/* Años */}
        <motion.p
          variants={itemUp}
          transition={{ delay: 0.4 }}
          className={`${ovo.className} text-4xl px-2 tracking-widest`}
        >
          2019-2025
        </motion.p>

        {/* Director */}
        <motion.h2
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className={`${nobile.className} text-lg mt-5 mx-10 text-center`}
        >
          Director: Jesús Reynaldo León Hernández
        </motion.h2>

        {/* Elemento decorativo (opcional) */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="w-20 h-1 bg-blue-950/30 rounded-full mt-8"
        ></motion.div>
      </motion.div>

      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </section>
  );
}
