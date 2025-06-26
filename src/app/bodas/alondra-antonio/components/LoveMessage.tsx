import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });
//const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

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

export default function LoveMessage() {
  const text = `"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor. El amor no se deleita en la maldad, sino que se regocija con la verdad. Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta. El amor jamás se extingue."`;

  return (
    <section
      id="section-four"
      className="bg-[url('/img/bodas/alondra-antonio/gallery-02.jpg')] bg-center bg-cover flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/100 to-transparent"></div>

      <motion.p
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`${playFair.className} text-zinc-50 mb-5 text-xl custom-shadow z-10 custom-shadow`}
      >
        1 Corintios 13:4-8
      </motion.p>

      <motion.p
        className={`${playFair.className} text-zinc-50 text-xl mx-10 text-center z-10 max-w-xl custom-shadow`}
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
