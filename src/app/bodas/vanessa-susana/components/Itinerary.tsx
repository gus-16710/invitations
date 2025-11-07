import { motion } from "framer-motion";
import { crimson, italianno, playfair } from "./Fonts";

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Ceremonia  Religiosa",
  },
  {
    time: "19:00 Hrs",
    event: "Boda Civil",
  },
  {
    time: "20:00 Hrs",
    event: "Recepción",
  },
  {
    time: "21:00 Hrs",
    event: "Cena",
  },
  {
    time: "22:00 Hrs",
    event: "Baile",
  },
  {
    time: "03:00 Hrs",
    event: "Termino del Evento",
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

export default function Itinerary() {
  return (
    <>
      <div className="flex items-center mt-10">
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Programa de boda
        </p>
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="flex mt-5 gap-3 flex-row-reverse">
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-gray-300 p-3 border-1 border-black rounded-sm">
            <p
              className={`${crimson.className} text-lg border-b-1 border-black mb-4 text-center`}
              style={{ fontWeight: "bolder" }}
            >
              Ceremonia Religiosa
            </p>

            <p className={`${crimson.className} text-center`}>
              Hora 06:00 pm <br />
              "Templo de San Francisco" <br />
              Ciudad de Mexico
            </p>

            <button className="bg-gray-900 py-2 w-full text-zinc-200 mt-4 rounded-sm">
              Ver mapa
            </button>
          </div>

          <div className="bg-gray-300 p-3 border-1 border-black rounded-sm">
            <p
              className={`${crimson.className} text-lg border-b-1 border-black mb-4 text-center`}
              style={{ fontWeight: "bolder" }}
            >
              Recepción
            </p>

            <p className={`${crimson.className} text-center`}>
              Hora 06:00 pm <br />
              "Templo de San Francisco" <br />
              Ciudad de Mexico
            </p>

            <button className="bg-gray-900 py-2 w-full text-zinc-200 mt-4 rounded-sm">
              Ver mapa
            </button>
          </div>
        </div>
        <div className="flex-1">
          <motion.ol
            className="relative border-s border-gray-600"
            initial="hidden"
            whileInView="visible"
            variants={list}
          >
            {itinerary.map((item, index) => (
              <div key={index}>
                <li className="mb-7 ms-4">
                  <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5  "></div>
                  <motion.div variants={element}>
                    <time className="mb-1 text-sm font-normal leading-none text-black">
                      {item.time}
                    </time>
                    <h3
                      className={`${playfair.className} text-base font-semibold text-gray-900 dark:text-white`}
                    >
                      {item.event}
                    </h3>
                  </motion.div>
                </li>
              </div>
            ))}
          </motion.ol>
        </div>
      </div>
    </>
  );
}
