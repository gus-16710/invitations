import { mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Protocolo de cambio de escolta y honores a la bandera",
  },
  {
    time: "18:10 Hrs",
    event: "Presentación del presídium",
  },
  {
    time: "18:20 Hrs",
    event: "Mensaje de bienvenida por el director de la institución, Maestro José Porfirio Solano García",
  },
  {
    time: "18:30 Hrs",
    event: "Entrega de reconocimientos a los alumnos destacados de primer grado",
  },
  {
    time: "18:40 Hrs",
    event: "Palabras a cargo del padrino de generación",
  },
  {
    time: "18:50 Hrs",
    event: "Pase de lista y entrega de diplomas al tercer grado grupo 'A'",
  },
  {
    time: "19:10 Hrs",
    event: "Pequeña estampa de Nayarit: 'El caballito', 'La Majahua' y 'El buey' por alumnas de segundo grado",
  },
  {
    time: "19:25 Hrs",
    event: "Entrega de reconocimientos a los alumnos destacados de segundo grado",
  },
  {
    time: "19:35 Hrs",
    event: "Pase de lista y entrega de diplomas al tercer grado grupo 'B'",
  },
  {
    time: "19:55 Hrs",
    event: "Salsa 'Llorarás' por alumnos de 1° 'B'",
  },
  {
    time: "20:05 Hrs",
    event: "Entrega de reconocimientos a los alumnos destacados de tercer grado",
  },
  {
    time: "20:15 Hrs",
    event: "Merengue 'El pelotero' por alumnos de 1° 'A'",
  },
  {
    time: "20:25 Hrs",
    event: "Pase de lista y entrega de diplomas al tercer grado grupo 'C'",
  },
  {
    time: "20:45 Hrs",
    event: "'Mambo número 8' por alumnos de 1° 'C'",
  },
  {
    time: "20:55 Hrs",
    event: "Pase de lista y entrega de reconocimientos al tercer grado grupo 'D'",
  },
  {
    time: "21:15 Hrs",
    event: "'Comparsa jarocha' por alumnos de 1° 'B'",
  },
  {
    time: "21:25 Hrs",
    event: "Palabras de despedida por el alumno Teodoro Ricardo Sánchez Fernández",
  },
  {
    time: "21:35 Hrs",
    event: "'Clases del cha cha cha' por alumnos de 1° 'D'",
  },
  {
    time: "21:45 Hrs",
    event: "Palabras de agradecimiento por la alumna Arlette Murrieta Carmona",
  },
  {
    time: "21:55 Hrs",
    event: "Clausura de la ceremonia de graduación por la autoridad educativa",
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const element = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export default function SlideFive() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-50 text-6xl mb-5`}>
        Programa
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-100 w-80 px-5 mt-5">
        <motion.ol
          className="relative border-s border-gray-200 dark:border-gray-700 ml-5"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {itinerary.map((item, index) => (
            <div key={index}>
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <motion.div variants={element}>
                  <time className="mb-1 text-sm font-normal leading-none text-zinc-100" >
                    {item.event}
                  </time>
                
                </motion.div>
              </li>
            </div>
          ))}
        </motion.ol>
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
