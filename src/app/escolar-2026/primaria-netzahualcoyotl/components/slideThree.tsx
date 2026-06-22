import { nobile, oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const GREEN = "#006847";

const itinerary = [
  { event: "Cambio de escolta." },
  { event: "Honores a la bandera." },
  { event: "Presentación del presidium." },
  { event: "Programa artístico." },
  { event: "Palabras por parte del padrino de generación:\nLic. en Contaduría: Aldo Iván Ortigoza Medina." },
  { event: "Palabras de despedida por la alumna:\nAlizon Ximena Hernández López de 5° 'C'." },
  { event: "Palabras de despedida por la alumna:\nNaydeline Morales Ríos." },
  { event: "Entrega de documentos 6° A." },
  { event: "Entrega de documentos 6° B." },
  { event: "Entrega de documentos 6° C." },
  { event: "Diplomas de 1° a 6° grado." },
  { event: "Despedida del director." },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
};

const element = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -20 },
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
      <h1 className={`${oleo.className} text-5xl`} style={{ color: GREEN }}>
        Programa
      </h1>

      <ScrollShadow hideScrollBar className="h-[400px] w-80 px-5 mt-5" data-lenis-prevent>
        <motion.ol
          className="relative border-s ml-5"
          style={{ borderColor: `${GREEN}40` }}
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {itinerary.map((item, index) => (
            <li key={index} className="mb-6 ms-4">
              <div
                className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border"
                style={{ background: GREEN, borderColor: GREEN }}
              />
              <motion.div variants={element}>
                <p className={`${nobile.className} text-sm leading-snug`} style={{ color: GREEN }}>
                  {item.event.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </motion.div>
            </li>
          ))}
        </motion.ol>
      </ScrollShadow>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown style={{ color: GREEN }} className="text-xl" />
      </motion.div>
    </motion.section>
  );
}
