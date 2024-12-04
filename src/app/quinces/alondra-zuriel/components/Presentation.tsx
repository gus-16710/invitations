import { header } from "./Animations";
import { league, vibes } from "./Fonts";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <motion.h2
        className={`${vibes.className} text-5xl mb-5`}
        style={{ color: "#513704" }}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padres:
      </motion.h2>
      <motion.p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Félix Alberto Serena
        <br />
        Rosa Isela Martínez
      </motion.p>

      <motion.p
        className={`${vibes.className} text-4xl bg-red-800 rounded-full w-12 h-12 m-10 pr-1 text-zinc-100 flex justify-center items-center`}
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        &
      </motion.p>

      <motion.h2
        className={`${vibes.className} text-5xl mb-5`}
        style={{ color: "#513704" }}
        variants={header.animation4}
        initial="hidden"
        whileInView="visible"
      >
        Mis Padrinos:
      </motion.h2>
      <motion.p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
        variants={header.animation5}
        initial="hidden"
        whileInView="visible"
      >
        Roberto Cardoza Martínez
        <br />
        Carolina Campos Campos
      </motion.p>
    </div>
  );
}
