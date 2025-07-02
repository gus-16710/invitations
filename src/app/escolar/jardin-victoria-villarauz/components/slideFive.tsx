import { motion } from "framer-motion";
import { cormorant } from "./Fonts";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    // transition: {
    //   when: "afterChildren",
    // },
  },
};

const item = {
  // visible: { opacity: 1, y: 0, scale: 1 },
  // hidden: { opacity: 0, y: 100, scale: 0 },
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

export default function SlideFive() {
  const text = `"Pequeños grandes campeones: Cada paso que dieron en el jardín fue el inicio de algo increíble. Sigan explorando, riendo y soñando en grande. El mundo espera sus ideas brillantes. ¡El primer capítulo de su aventura apenas comienza! 🌟"`;

  return (
    <section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}      
    >
      <motion.p
        className={`${cormorant.className} text-zinc-800 text-3xl mx-10 text-center max-w-3xl`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter === "_" ? <>&nbsp;</> : letter}
            </motion.span>
          );
        })}
      </motion.p>
      
    </section>
  );
}
