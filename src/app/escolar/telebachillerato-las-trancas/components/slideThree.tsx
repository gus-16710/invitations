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
        Invitados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] z-50">
        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Ing. Norma Rocío Nahle García</span> <br />
          Gobernadora del Estado de Veracruz
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">
            Lic. Ricardo Ahued Bardahuil
          </span>
          <br /> Secretario de Gobierno de Veracruz.
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Lic. Elías Calixto Armas</span> <br />
          Subsecretario de educación media superior
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Lic. Irving Illhuicamina Mendoza Ruiz</span> <br />
          Director General del TELEBACHILLERATO
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Arq. Luis Ignacio Vázquez Ramos</span> <br />
          Supervisor escolar de la zona Xalapa “D”
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Lic. Alberto Islas Reyes.</span>
          <br /> Presidente municipal de Xalapa D
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Arq. Erick Ruiz Hernandez</span>
          <br />
          Presidente municipal de “Emiliano Zapata”
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">
            T.S.U. Maribel López Hernández.
          </span>
          <br/>
          Directora de CECATI No.151
        </p>

        <p className="text-zinc-50 text-center mb-10 mx-5">
          <span className="font-bold">
            Ana Lilia Gómez Rodríguez
          </span>
          <br/>
          Presidenta del patronato escolar
        </p>
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>
    </motion.section>
  );
}
