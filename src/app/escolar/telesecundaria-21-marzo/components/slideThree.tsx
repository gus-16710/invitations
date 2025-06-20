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
          <span className="font-bold">Mtra. Julieta Ester Palacios Villalobos</span> <br />
          Subdirectora del Departamento de Telesecundarias
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">
            Mtro. Inocencio Rosas Rivera
          </span>
          <br /> Jefe del sector 30FTS21N
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Mtro. José Juan García Landero</span> <br />
          Padrino de generación 
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. Claudia Hoyos Aburto</span> <br />
          Presidenta del CEPS 
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. Sandra Ruby Mendoza Pumarino</span> <br />
          Secretaria de la APF
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Ed. D. José Porfirio Solano García</span>
          <br /> Director de la escuela Telesecundaria “21 de Marzo”
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Lic. Ian Yoval Molina</span>
          <br />
          Responsable regional del programa "La escuela es nuestra"
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Mtra. Guadalupe Herrera Durán</span>
          <br />
          Supervisora escolar zona 30FTV077C
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. María Gonzala Flores Flores</span>
          <br />
          Presidenta de la APF
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">Ing. Cendai Martínez Portilla</span>
          <br />
          Vicepresidenta de la APF
        </p>

        <p className="text-zinc-50 text-center mb-5 mx-5">
          <span className="font-bold">C. Claudia Vera Aguilar</span>
          <br />
          Tesorera de la APF
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
