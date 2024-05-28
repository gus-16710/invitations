import { mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";

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
      <ScrollShadow hideScrollBar className="h-[350px] z-50">
        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Dra. Renata Roldan Cuevas</span> <br />
          Jefa del Sector 02 de Telesecundarias
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">
            Dra. Nohelia Martina Montalvo Aguilar
          </span>
          <br /> Supervisora Escolar de la Zona 05 de Telesecundarias
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Prof. Felder Jiménez Tadeo</span> <br />
          Secretario General de la Delegación D-II-040
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. Raúl Velasco Hernández</span> <br />
          Presidente Municipal de Tlacolulan
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. Abel Hernández Pérez</span> <br />
          Regidor Único
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. María Guadalupe Carmona Díaz</span>
          <br /> Presidenta del DIF
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Luis Rufino Hernández Alarcón</span>
          <br />
          Presidente de la Asociación de Padres de Familia
        </p>

        <p className="text-zinc-50 text-center mb-10 mx-5">
          <span className="font-bold">
            Directores de los Diferentes Niveles Educatios de Tlacolulan, Ver.
          </span>
        </p>
      </ScrollShadow>
    </motion.section>
  );
}
