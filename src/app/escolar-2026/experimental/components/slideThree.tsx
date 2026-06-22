import { mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-50 text-6xl mb-5`}>
        Directivos
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] z-50" data-lenis-prevent>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Mtra. María de Jesús Sánchez Flores</span> <br />
          Directora
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Ing. José Moctezuma Topke Cancino</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Mtro. Benjamín Callejas Hernández</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Víctor Hugo Verástegui Guillen</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Paul Morales Sandoval</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Jesús Lozada Hernández</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Estephani Josepha Barradas Rojas</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Yanett del Carmen Salas Salas</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Lidia Adriana Ramos Maldonado</span>
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Francisco Gutiérrez Huerta</span>
        </p>

      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-100" />
      </motion.div>
    </motion.section>
  );
}
