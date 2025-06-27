import { oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Cambio de escolta.",
  },
  {
    time: "18:10 Hrs",
    event: "Honores a la bandera.",
  },
  {
    time: "18:20 Hrs",
    event: "Presentación del presídium y palabras del director.",
  },
  {
    time: "18:30 Hrs",
    event: "Presentación del ballet artístico de la SEV.",
  },
  {
    time: "18:40 Hrs",
    event:
      "Palabras por parte del padrino de generación Licencida en Contaduría Aldo Iván Ortigoza Medina.",
  },
  {
    time: "18:50 Hrs",
    event:
      "Palabras de despedida por la alumna Génesis Lucía Miranda Luna de 5° grado.",
  },
  {
    time: "19:10 Hrs",
    event:
      "Palabras de despedida por la alumna Ámbar Denix Salazar Valdés. De 6° grado. ",
  },
  {
    time: "19:25 Hrs",
    event:
      "Entrega de documentos 6° A",
  },
  {
    time: "19:35 Hrs",
    event: "Entrega de documentos 6° B",
  },  
  {
    time: "20:05 Hrs",
    event:
      "Entrega de documentos 6° C",
  },
  {
    time: "20:15 Hrs",
    event: "Entrega de diplomas de aprovechamiento de 1° a 6° grado.",
  },
  {
    time: "20:25 Hrs",
    event: "Despedida por parte del director.",
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

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-800 text-5xl`}>Programa</h1>

      <ScrollShadow
        hideScrollBar
        className="h-[400px] text-zinc-100 w-80 px-5 mt-5"
      >
        <motion.ol
          className="relative border-s border-gray-800  ml-5"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {itinerary.map((item, index) => (
            <div key={index}>
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3 bg-zinc-800 rounded-full mt-1.5 -start-1.5 border border-zinc-800"></div>
                <motion.div variants={element}>
                  <time className="mb-1 text-sm font-normal leading-none text-zinc-800">
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
        <IoIosArrowDown className="text-zinc-800 text-xl" />
      </motion.div>
    </motion.section>
  );
}
