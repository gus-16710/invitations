import { motion } from "framer-motion";
import { galada, lora, urbanist } from "./Fonts";
import { Card, CardBody } from "@nextui-org/react";

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
      className="flex justify-center items-center px-5 py-7"
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
            className="flex flex-col justify-center items-center text-zinc-100"
            initial="hidden"
            whileInView="show"
            variants={container}
          >
            {/* Docente 6° A */}
            <motion.div variants={itemUp} className="text-center mb-4">
              <h1 className={`${galada.className} text-5xl mb-2 custom-shadow`}>
                Director
              </h1>
              <motion.p
                className={`${urbanist.className} text-xl custom-shadow`}
                whileHover={{ scale: 1.03 }}
              >
                Ma. Del Rosario Amaya Acosta
              </motion.p>
            </motion.div>

            {/* Símbolo & */}
            <motion.div
              variants={scaleIn}
              transition={{ delay: 0.2 }}
              className="relative my-6"
            >
              <motion.p
                className={`${lora.className} text-4xl bg-zinc-100 rounded-full w-12 h-12 text-blue-800 flex justify-center items-center shadow-2xl`}
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
              <h1 className={`${galada.className} text-5xl mb-2 custom-shadow`}>
                Maestra
              </h1>
              <motion.p
                className={`${urbanist.className} text-xl custom-shadow`}
                whileHover={{ scale: 1.03 }}
              >
                Eli del Carmen Hernández Torres
              </motion.p>
            </motion.div>

            {/* Elemento decorativo (opcional) */}
            <motion.div
              variants={fadeIn}
              transition={{ delay: 0.5 }}
              className="w-20 h-1 bg-zinc-800/30 rounded-full mt-10"
            ></motion.div>
          </motion.div>
        </CardBody>
      </Card>
    </section>
  );
}
