import { mea } from "./Fonts";
import { Chip, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaPencilAlt } from "react-icons/fa";

export default function SlideThree() {
  return (
    <section 
      className="flex flex-col justify-center items-center" 
      style={{ height: "100svh" }}
    >
      {/* Título "Maestros" */}
      <motion.h1
        className={`${mea.className} text-zinc-800 text-6xl mb-5`}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Maestros
      </motion.h1>

        {/* Primer maestro */}
        <motion.div
          className="text-zinc-800 text-center mb-5 mx-5"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="flex gap-2 items-center justify-center">
            <FaPencilAlt /> Mtra Mayra Lizbeth Elizalde Vázquez
          </span>
          <Chip color="warning">6° A</Chip>
        </motion.div>

        {/* Segundo maestro */}
        <motion.div
          className="text-zinc-800 text-center mb-5 mx-5"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="flex gap-2 items-center justify-center">
            <FaPencilAlt /> Mtro Omar Jesús Juárez Montero
          </span>
          <Chip color="warning">6° B</Chip>
        </motion.div>

        {/* Tercer maestro */}
        <motion.div
          className="text-zinc-800 text-center mb-5 mx-5"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="flex gap-2 items-center justify-center">
            <FaPencilAlt /> Mtra Virginia Mata Miranda
          </span>
          <Chip color="warning">6° C</Chip>
        </motion.div>

        {/* Cuarto maestro */}
        <motion.div
          className="text-zinc-800 text-center mb-5 mx-5"
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <span className="flex gap-2 items-center justify-center">
            <FaPencilAlt /> Mtrp Mary Celsa Lendechy Gonzáles
          </span>
          <Chip color="warning">6° D</Chip>
        </motion.div>
      
    </section>
  );
}