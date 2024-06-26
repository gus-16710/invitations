import { allura, dancing, mea, playFair } from "./Fonts";
import { motion } from "framer-motion";
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
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.h2
        className={`${playFair.className} text-2xl flex items-center text-zinc-400 z-20 mt-2`}
        variants={header.text02}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-golden text-5xl">XV</span> AÑOS
      </motion.h2>
      <div className="relative w-full h-96 flex items-center justify-center overflow-clip mt-2">
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
      <div
        className={`${playFair.className} flex items-center flex-col mt-5`}
        style={{ color: "#96814e" }}
      >
        <motion.span
          className="px-2 pb-2"
          variants={header.month}
          initial="hidden"
          whileInView="visible"
        >
          SEPTIEMBRE
        </motion.span>
        <p className="flex items-center">
          <motion.span
            className="border-y-1 border-y-yellow-800 py-2 w-28 text-center text-zinc-400"
            style={{ letterSpacing: "2px" }}
            variants={header.day}
            initial="hidden"
            whileInView="visible"
          >
            SÁBADO
          </motion.span>
          <motion.span
            className="text-golden text-5xl px-2 pb-2"
            variants={header.dayNumber}
            initial="hidden"
            whileInView="visible"
          >
            21
          </motion.span>
          <motion.span
            className="border-y-1 border-y-amber-800 py-2 w-28 text-center text-zinc-400"
            style={{ letterSpacing: "2px" }}
            variants={header.time}
            initial="hidden"
            whileInView="visible"
          >
            12:00 Hrs
          </motion.span>
        </p>
        <motion.p
          className={`${playFair.className} text-2xl`}
          variants={header.year}
          initial="hidden"
          whileInView="visible"
        >
          2023
        </motion.p>
      </div>
    </section>
  );
}
