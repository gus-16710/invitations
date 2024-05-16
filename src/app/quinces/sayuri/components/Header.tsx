import { dancing, playFair } from "./Fonts";
import { delay, motion } from "framer-motion";
import { header } from "./Animations";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 1,      
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

export default function Header() {
  const text = "Sayuri";

  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-96 flex items-center justify-center overflow-clip mt-16">
        <motion.div
          className="bg-[url('/img/quinces/sayuri/round-frame.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full opacity-80"
          variants={header.roundFrame}
          initial="hidden"
          whileInView="visible"
        />
        <motion.h1
          className={`${dancing.className} z-10 text-center text-8xl h-32 flex`}
          variants={list}
          initial="hidden"
          whileInView="visible"
        >
          {text.split("").map((letter, index) => {
            return (
              <motion.span key={index} variants={item} className="text-golden">
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>
      <motion.p
        className={`${playFair.className} text-golden mt-5`}
        variants={header.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp; - Estas invitado a celebrar - &nbsp;
      </motion.p>
      <motion.h2
        className={`${playFair.className} text-2xl flex items-center text-zinc-400 z-20 mt-2`}
        variants={header.text02}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-golden text-5xl">XV</span> AÑOS
      </motion.h2>
      <motion.p
        className={`${playFair.className} text-zinc-400 mt-2 text-xl`}
        variants={header.text03}
        initial="hidden"
        whileInView="visible"
      >
        21.SEP.2024
      </motion.p>
    </section>
  );
}
