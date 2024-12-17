import React from "react";
import { glass, mea, mystery } from "./Fonts";
import { motion } from "framer-motion";
import { header2 } from "./Animations";

function Presentation() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover overflow-clip">
      <motion.p
        className={`${mea.className} text-5xl mb-5 text-sky-800`}
        variants={header2.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padres
      </motion.p>
      <motion.p
        className={`${glass.className} text-2xl text-zinc-700 text-center`}
        variants={header2.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Emiliano Barradas Zavaleta <br />
        Teodora Falfan Ceballos
      </motion.p>

      <motion.p
        className={`${mystery.className} text-4xl bg-sky-800 rounded-full w-12 h-12 m-10 text-zinc-100 flex justify-center items-center`}
        variants={header2.animation3}
        initial="hidden"
        whileInView="visible"
      >
        &
      </motion.p>

      <motion.p
        className={`${mea.className} text-5xl mb-5 text-sky-800`}
        variants={header2.animation4}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padrinos
      </motion.p>
      <motion.p
        className={`${glass.className} text-2xl text-zinc-700 text-center`}
        variants={header2.animation5}
        initial="hidden"
        whileInView="visible"
      >
        Ricardo Alba Monfil <br />
        Deylhy Alba Peña
      </motion.p>
    </section>
  );
}

export default Presentation;
