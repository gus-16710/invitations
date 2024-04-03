import { header } from "./Animations";
import { notoSerif, pinyion, playFair, whisper } from "./Fonts";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <motion.h1
        className={`${playFair.className} text-2xl flex items-center text-zinc-600 z-20`}
        variants={header.animationText01}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-5xl text-yellow-400">XV</span> AÑOS
      </motion.h1>
      <div className="relative w-full h-96 flex items-center justify-center overflow-clip">
        <motion.div
          className="bg-[url('/img/quinces/ashley/floral-frame.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full opacity-80"
          variants={header.animationFrame}
          initial="hidden"
          whileInView="visible"
        />
        <motion.h2
          className={`${pinyion.className} text-7xl text-center z-10 text-slate-600`}
          variants={header.animationText02}
          initial="hidden"
          whileInView="visible"
        >
          Ashley
          <br />
          Michelle
        </motion.h2>
      </div>

      <motion.p
        className={`${notoSerif.className} mx-10 mt-1 text-center text-xs z-20 font-bolder tracking-widest text-zinc-900`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={header.animationText03}
        initial="hidden"
        whileInView="visible"
      >
        CELEBRA CONMIGO EN ESTE DÍA TAN ESPECIAL
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 flex items-center mt-3 font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={header.animationText04}
        initial="hidden"
        whileInView="visible"
      >
        <span className="border-y-1 border-y-yellow-400 py-2 w-16 text-center">
          SÁBADO
        </span>{" "}
        <span className="text-4xl mx-3 pb-2">15</span>{" "}
        <span className="border-y-1 border-y-yellow-400 py-2 w-16 text-center">
          JUNIO
        </span>
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 text-2xl text-yellow-400`}
        variants={header.animationText04}
        initial="hidden"
        whileInView="visible"
      >
        2024
      </motion.p>

      <motion.p
        className={`${whisper.className} text-center mx-10 text-2xl text-orange-800`}
        variants={header.animationText05}
        initial="hidden"
        whileInView="visible"
      >
        Su madre agradece tu asistencia
      </motion.p>
      <motion.p
        className={`${playFair.className} mb-3 text-orange-800`}
        variants={header.animationText05}
        initial="hidden"
        whileInView="visible"
      >
        Brenda Castro Melgarejo
      </motion.p>
    </section>
  );
}
