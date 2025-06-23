import {  oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideSeven() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-50 text-5xl mb-10 text-center`}>Padrimos de Generación</h1>

      <p className={`${ovo.className} text-zinc-50 text-lg custom-shadow text-center`}>
        Mtra. Leonor Herrera García <br/>
        Mtra. Ma Magdalena Gómez Austria <br/>
        Mtro. Jesús Isaac García Arvizo        
      </p>
    </motion.section>
  );
}
