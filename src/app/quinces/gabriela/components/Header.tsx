import { motion } from "framer-motion";
import { league, mea, notoSerif, playFair, standard } from "./Fonts";
import {
  animation01,
  animation02,
  animation03,
  animation04,
} from "./Animations";
import NumberFlow from "@number-flow/react";

export default function Header() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.h1
        className={`${playFair.className} text-2xl flex items-center z-20`}
        variants={animation01}
        initial="hidden"
        whileInView="visible"
        style={{ color: "#513704" }}
      >
        MIS <span className="text-5xl text-golden">XV</span> AÑOS
      </motion.h1>

      <div className="relative h-72 w-72 flex items-center justify-center mt-5">
        <motion.div
          className="bg-[url('/img/quinces/gabriela/gabriela-03.jpg')] bg-contain bg-no-repeat bg-center absolute w-60 h-60 rounded-full mb-1"
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
        className={`${mea.className} text-7xl z-20 text-golden pb-4 mb-4 mt-2 pl-2`}
        variants={animation03}
        initial="hidden"
        whileInView="visible"
      >
        Gabriela
      </motion.p>
      <motion.p
        className={`${notoSerif.className} mx-10 text-center text-xs z-20 font-bolder tracking-widest text-zinc-900`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={animation03}
        initial="hidden"
        whileInView="visible"
      >
        CELEBRA CONMIGO EN ESTE DÍA TAN ESPECIAL
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 flex my-5 items-center font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        variants={animation04}
        initial="hidden"
        whileInView="visible"
      >
        <span
          className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
          style={{
            borderTopColor: "rgb(165, 125, 53, 0.5)",
            borderBottomColor: "rgb(165, 125, 53, 0.5)",
            color: "#513704",
          }}
        >
          Sábado
        </span>
        <span className={`${standard.className} text-5xl mx-3 text-golden`}>
          26
        </span>
        <span
          className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
          style={{
            borderTopColor: "rgb(165, 125, 53, 0.5)",
            borderBottomColor: "rgb(165, 125, 53, 0.5)",
            color: "#513704",
          }}
        >
          Abril
        </span>
      </motion.p>
      <motion.p
        className={`${league.className} z-20 text-xl text-yellow-400 font-thin text-center`}
        style={{ color: "#513704" }}
        variants={animation04}
        initial="hidden"
        whileInView="visible"
      >
        ~ 2025 ~
      </motion.p>
    </section>
  );
}
