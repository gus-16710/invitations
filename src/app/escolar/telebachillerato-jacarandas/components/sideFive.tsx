import {  oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideFive() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center custom-shadow"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-50 text-5xl mb-10`}>Administrativas</h1>

      <p className={`${ovo.className} text-zinc-50 text-lg custom-shadow text-center`}>
        Ana Bertha Gonzáles Marín <br/>
        Anabel Cortina Salazar <br/>
        Areli J. Pérez Solorza        
      </p>
    </motion.section>
  );
}
