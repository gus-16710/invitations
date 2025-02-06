import { motion } from "framer-motion";
import { greatVibes, notoSerif, pinyion, playFair, quickSand } from "./Fonts";
import {
  animation00,
  animation01,  
  animation03,
  animation04, 
} from "./Animations";

export default function Header() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.h1
        className={`${quickSand.className} text-2xl flex items-center text-zinc-700 z-20`}
        variants={animation01}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className={`${greatVibes.className} text-5xl text-yellow-400`}>XV</span> AÑOS
      </motion.h1>

      <div className="relative h-72 w-72 flex items-center justify-center">
        <motion.div
          className="bg-[url('/img/quinces/nicole/header-girl.png')] bg-contain bg-no-repeat bg-center absolute w-36 h-36 mt-5"
          variants={animation00}
          initial="hidden"
          whileInView="visible"
        />
        <motion.div
          className="bg-[url('/img/quinces/nicole/header-04.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full"
          variants={animation01}
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
        Nicole
      </motion.p>
      <motion.p
        className={`${notoSerif.className} mx-10 mt-1 text-center text-xs z-20 font-bolder tracking-widest text-zinc-700`}        
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
        <span className="border-y-1 border-y-yellow-500 py-2 w-24 text-center" style={{letterSpacing: "2px"}}>SÁBADO</span>{" "}
        <span className="text-4xl px-2 pb-2">01</span>{" "}
        <span className="border-y-1 border-y-yellow-500 py-2 w-24 text-center" style={{letterSpacing: "2px"}}>MARZO</span>
      </motion.p>
      <motion.p
        className={`${playFair.className} z-20 text-2xl text-yellow-400`}
        variants={animation04}
        initial="hidden"
        whileInView="visible"
      >
        2025
      </motion.p>            
    </section>
  );
}
