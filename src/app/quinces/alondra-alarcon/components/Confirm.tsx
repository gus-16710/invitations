import { dancing, playFair, quickSand } from "./Fonts";
import { FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { confirm } from "./Animations";
import { useEffect, useState } from "react";

export default function Confirm() {
  const [particles, setParticles] = useState<
    Array<{ left: string; top: string }>
  >([]);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center overflow-clip z-10 relative min-h-[100svh]"     
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Partículas doradas - solo en cliente */}
        {particles.map((pos, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-yellow-500/50 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.h1
        className={`${dancing.className} text-yellow-600 text-6xl text-center`}
        variants={confirm.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp;Confirmar&nbsp; <br /> &nbsp;Asistencia&nbsp;
      </motion.h1>

      <motion.p
        className={`${quickSand.className} text-amber-800 text-lg px-5 text-center mt-5 max-w-md`}
        variants={confirm.text02}
        initial="hidden"
        whileInView="visible"
      >
        Espero que puedan venir a compartir con nosotros este día inolvidable.
        Por favor confirma tu presencia.
      </motion.p>

      <motion.p
        className={`${quickSand.className} text-amber-800 text-lg px-5 text-center mt-5 max-w-md`}
        variants={confirm.text03}
        initial="hidden"
        whileInView="visible"
      >
        ¡Muchas gracias!
      </motion.p>

      <motion.button
        role="button"
        className="golden-button mt-10 w-72"
        variants={confirm.button01}
        initial="hidden"
        whileInView="visible"
        onClick={() => window.open("https://wa.link/90tp3f", "_blank")}
      >
        <span className="golden-text flex justify-around items-center">
          <FaSquareWhatsapp className="text-2xl" /> Mensaje de Whatsapp
        </span>
      </motion.button>

      <motion.button
        role="button"
        className="golden-button mt-5 w-72"
        variants={confirm.button02}
        initial="hidden"
        whileInView="visible"
        onClick={() => window.open("tel:2285723757", "_blank")}
      >
        <span className="golden-text flex justify-around items-center ">
          <FaSquarePhone className="text-2xl" />
          Llamada Telefónica
        </span>
      </motion.button>
    </section>
  );
}
