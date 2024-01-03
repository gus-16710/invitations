import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

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
    <section
      id="section-four"
      className="h-screen snap-center flex justify-center items-center flex-col"
    >
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow mb-10`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Itinerario
      </motion.h1>

      <motion.ol
        className="relative border-s border-gray-200 dark:border-gray-700"
        initial="hidden"
        whileInView="visible"
        variants={list}
      >
        {itinerary.map((item, index) => (
          <div key={index}>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <motion.div variants={element}>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {item.time}
                </time>
                <h3
                  className={`${playFair.className} text-base font-semibold text-gray-900 dark:text-white`}
                >
                  {item.event}
                </h3>
              </motion.div>
            </li>
          </div>
        ))}
      </motion.ol>
    </section>
  );
}
