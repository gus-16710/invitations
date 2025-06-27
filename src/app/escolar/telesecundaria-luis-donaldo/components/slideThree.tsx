import { greatVibes, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideThree() {
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
      className="flex justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.div
        className="flex flex-col justify-center items-center "
        initial="hidden"
        whileInView="show"
        variants={container}
        style={{color: "#354c6b"} }
      >
        {/* Docente 6° A */}
        <motion.div variants={itemUp} className="text-center mb-4">
          <h1 className={`${oleo.className} text-4xl mb-2 custom-shadow`}>
            Docente 3° A
          </h1>
          <motion.p
            className={`${ovo.className} text-xl custom-shadow`}
            whileHover={{ scale: 1.03 }}
          >
            Wendy Elizabeth Carreño Meza
          </motion.p>
        </motion.div>

        {/* Símbolo & */}
        <motion.div
          variants={scaleIn}
          transition={{ delay: 0.2 }}
          className="relative my-6"
        >
          <motion.p
            className={`${greatVibes.className} text-4xl  rounded-full w-12 h-12 text-zinc-50 flex justify-center items-center shadow-2xl`}
            style={{ backgroundColor: "#486786" }}
            whileHover={{
              scale: 1.1,
              rotate: [0, 10, -10, 0],
              transition: { duration: 0.6 },
            }}
          >
            &
          </motion.p>
        </motion.div>

        {/* Docente 6° B */}
        <motion.div
          variants={itemUp}
          transition={{ delay: 0.3 }}
          className="text-center mt-4"
        >
          <h1 className={`${oleo.className} text-4xl mb-2 custom-shadow`}>
            Docente 3° B
          </h1>
          <motion.p
            className={`${ovo.className} text-xl custom-shadow`}
            whileHover={{ scale: 1.03 }}
          >
            Danny Ernesto Santiago Belin
          </motion.p>
        </motion.div>

        {/* Elemento decorativo (opcional) */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.5 }}
          className="w-20 h-1 bg-blue-950/30 rounded-full mt-10"
        ></motion.div>
      </motion.div>
    </section>
  );
}
