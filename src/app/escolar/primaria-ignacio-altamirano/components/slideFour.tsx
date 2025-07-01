import { galada, mea } from "./Fonts";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Honores a la bandera.",
  },
  {
    time: "18:10 Hrs",
    event: "Presentación del presidium.",
  },
  {
    time: "18:20 Hrs",
    event: "Presentación del programa artístico.",
  },
  {
    time: "18:30 Hrs",
    event: "Entrega de diplomas de aprovechamiento a los alumnos de 1° a 6°.",
  },
  {
    time: "18:40 Hrs",
    event: "Palabras de despedida por alumnas de 5° y 6°.",
  },
  {
    time: "18:50 Hrs",
    event: "Entrega de documentos a los alumnos de 6° A.",
  },
  {
    time: "19:10 Hrs",
    event: "Palabras de la directora de la escuela.",
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
    <section
      className="flex flex-col justify-center items-center px-5 py-7"
      style={{ height: "100svh" }}
      
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
      >
        <CardBody className="flex items-center justify-center flex-col">
          <h1 className={`${galada.className} text-zinc-50 text-6xl mb-10`}>
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
        </CardBody>
      </Card>
    </section>
  );
}
