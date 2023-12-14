import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { notoSerif, pinyion, playFair } from "./Fonts";
import {
  animation01,
  animation02,
  animation03,
  animation04,
  animation05,
} from "./Animations";

export default function Header() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const background01 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 500, 1000]
  );
  const background02 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -500, -1000]
  );

  return (
    <section
      ref={ref}
      className="w-full h-screen overflow-hidden relative flex justify-center items-center flex-col"
    >
      <motion.h1
        className={`${playFair.className} text-2xl flex items-center text-zinc-600 z-20`}
        variants={animation01}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-5xl text-yellow-400">XV</span> AÑOS
      </motion.h1>

      <div className="relative h-72 w-72 flex items-center justify-center mt-5">
        <motion.div
          className="bg-[url('/img/quinces/daniela/fifteen-girl.jpg')] bg-contain bg-no-repeat bg-center absolute w-60 h-60 rounded-full mb-2"
          variants={animation01}
          initial="hidden"
          whileInView="visible"
        />
        <motion.div
          className="bg-[url('/img/quinces/daniela/header-03.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full"
          variants={animation02}
          initial="hidden"
          whileInView="visible"
        />
      </div>
      <motion.p
        className={`${pinyion.className} text-7xl text-yellow-400 mt-5 z-20`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={animation03}
        initial="hidden"
        whileInView="visible"
      >
        Daniela
      </motion.p>
      <motion.p
        className={`${notoSerif.className} mx-10 mt-1 text-center text-xs z-20 font-bolder tracking-widest text-zinc-900`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={animation03}
        initial="hidden"
        whileInView="visible"
      >
        CELEBRA CONMIGO EN ESTE DÍA TAN ESPECIAL
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 flex items-center mt-3 font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={animation04}
        initial="hidden"
        whileInView="visible"
      >
        <span className="border-y-1 border-y-yellow-400 py-2">DOMINGO</span>{" "}
        <span className="text-4xl px-2 pb-2">30</span>{" "}
        <span className="border-y-1 border-y-yellow-400 py-2">OCTUBRE</span>
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 text-2xl text-yellow-400`}
        variants={animation04}
        initial="hidden"
        whileInView="visible"
      >
        2023
      </motion.p>

      <motion.div
        className="bg-[url('/img/quinces/daniela/header-01.png')] bg-cover bg-bottom absolute inset-0 z-0"
        variants={animation05}
        initial="hidden"
        whileInView="visible"
        style={{ y: background01 }}
      />
      <motion.div
        className="bg-[url('/img/quinces/daniela/header-02.png')] bg-cover bg-bottom absolute inset-0 z-10"
        variants={animation05}
        initial="hidden"
        whileInView="visible"
        style={{ y: background02 }}
      />
    </section>
  );
}
