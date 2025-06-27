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
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  },
};

export default function SlideFour() {  
  const text = `Hoy no decimos adiós, sino damos paso a un nuevo comienzo. Cada risa, cada reto superado, cada amistad forjada en estos años quedará como huella imborrable de su paso por esta etapa. Llévense lo mejor de esta experiencia: el esfuerzo, la unión y la confianza en ustedes mismos. El camino apenas empieza, y el futuro se abre ante ustedes lleno de oportunidades. Sigan avanzando con la frente en alto, con el corazón valiente y la convicción de que pueden lograr lo que se propongan. ¡El mundo los espera, generación 2022–2025! 🌟`;

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
          src="/img/escolar/telesecundaria-luis-donaldo/video.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/80 to-transparent"></div>   
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
