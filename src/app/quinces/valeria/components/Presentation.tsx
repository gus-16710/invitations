import React from "react";
import { glass, mea, mystery } from "./Fonts";
import { motion } from "framer-motion";
import { header } from "./Animations";

function Presentation() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover">
      <motion.p
        className={`${mea.className} text-5xl mb-5 text-sky-800`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padres
      </motion.p>
      <motion.p
        className={`${glass.className} text-2xl text-zinc-700 text-center`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Emiliano Barradas Zavaleta <br />
        Teodora Falfan Ceballos
      </motion.p>

      <motion.p
        className={`${mystery.className} text-4xl bg-sky-800 rounded-full w-12 h-12 m-10 text-zinc-100 flex justify-center items-center`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        &
      </motion.p>

      <motion.p
        className={`${mea.className} text-5xl mb-5 text-sky-800`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padrinos
      </motion.p>
      <motion.p
        className={`${glass.className} text-2xl text-zinc-700 text-center`}
        variants={header.animation1}
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
