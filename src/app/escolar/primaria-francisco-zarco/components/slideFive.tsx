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
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function SlideFive() {

  const text = `Queridos alumnos de la generación 2019–2025 de la Primaria Francisco Zarco, hoy culminan una etapa muy especial en su vida: la infancia escolar. Durante estos años crecieron, aprendieron, jugaron y formaron amistades que llevarán siempre en el corazón. ¡Sigan su camino con alegría, curiosidad y confianza en todo lo que pueden lograr! ¡Lo mejor apenas comienza!`;

  return (
    <section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/escolar/primaria-francisco-zarco/video.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/100 to-transparent"></div>     

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
