import "yet-another-react-lightbox/styles.css";

import { motion } from "framer-motion";
import { cormorant } from "./Fonts";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, // Aumenté un poco el stagger para palabras
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 30 }, // Reduje la animación para hacerla más sutil
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function SlideFour() {
  const text = `Hoy culmina una etapa llena de aprendizajes, juegos, retos y amistades. No es un adiós, sino un “hasta pronto” lleno de gratitud y esperanza. Llévense en el corazón cada recuerdo vivido en la Escuela Primaria Gral. Heriberto Hara Corona, su primer hogar de sueños y descubrimientos. Sigan su camino con valentía, confianza y la mirada puesta en un futuro brillante. ¡Nunca dejen de soñar en grande, generación 2019–2025! 🌟`;

  return (
    <section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
    >
      <motion.p
        className={`${cormorant.className} text-zinc-50 text-xl mx-10 text-center z-10 max-w-xl custom-shadow`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
