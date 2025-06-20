import { dancing, mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Presentación del Presidium.",
  },
  {
    time: "18:10 Hrs",
    event: "Acto Cívico.",
  },
  {
    time: "18:20 Hrs",
    event: "Mensaje de la Dirección.",
  },
  {
    time: "18:30 Hrs",
    event: "Último pase de lista del grupo 601.",
  },
  {
    time: "18:40 Hrs",
    event: "Presentación artística.",
  },
  {
    time: "18:50 Hrs",
    event: "Último pase de lista del grupo 602",
  },
  {
    time: "19:10 Hrs",
    event: "Presentación artística.",
  },
  {
    time: "19:25 Hrs",
    event: "Último pase de lista del grupo 603",
  },
  {
    time: "19:35 Hrs",
    event: "Presentación musical.",
  },
  {
    time: "20:05 Hrs",
    event: "Entrega de mejores promedios.",
  },
  {
    time: "20:15 Hrs",
    event: "Palabras de despedida.",
  },
  {
    time: "20:25 Hrs",
    event: "Himno a COBAEV.",
  },
  {
    time: "20:25 Hrs",
    event: "Cierre.",
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

export default function SlideFour() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${dancing.className} text-zinc-50 text-6xl mb-10`}>
        Programa
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] z-50 w-72">
        <motion.ol
          className="relative border-s border-zinc-100  ml-5"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {itinerary.map((item, index) => (
            <div key={index}>
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3 bg-zinc-100 rounded-full mt-1.5 -start-1.5 border border-zinc-100"></div>
                <motion.div variants={element}>
                  <time className="mb-1 text-sm font-normal leading-none text-zinc-100">
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
        <IoIosArrowDown className="text-zinc-100 text-xl" />
      </motion.div>
    </motion.section>
  );
}
