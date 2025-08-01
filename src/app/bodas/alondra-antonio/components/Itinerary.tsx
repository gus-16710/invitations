import { motion } from "framer-motion";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

const itinerary = [
  {
    time: "12:00 Hrs",
    event: "Ceremonia Religiosa",
  },
  {
    time: "15:00 Hrs",
    event: "Recepción (Invitados)",
  },  
  {
    time: "15:30 Hrs",
    event: "Entrada (Novios)",
  },
  {
    time: "15:40 Hrs",
    event: "Brindis (Palabras)",
  },
  {
    time: "15:50 Hrs",
    event: "Comida (Música DJ)",
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
      className="flex justify-center items-center flex-col bg-[url('/img/bodas/alondra-antonio/background46.jpg')] bg-cover bg-center relative"
      style={{ height: "100svh" }}
    >
      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/100 to-transparent"></div>

      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow mb-10 text-zinc-100`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Itinerario
      </motion.h1>

      <motion.ol
        className="relative border-s border-pink-600"
        initial="hidden"
        whileInView="visible"
        variants={list}
      >
        {itinerary.map((item, index) => (
          <div key={index}>
            <li className="mb-7 ms-4">
              <div className="absolute w-3 h-3 bg-pink-600 rounded-full mt-1.5 -start-1.5 border border-pink-700"></div>
              <motion.div variants={element}>
                <time className="mb-1 text-sm font-semibold leading-none text-gray-100 custom-shadow">
                  {item.time}
                </time>
                <h3
                  className={`${playFair.className} text-base font-semibold text-zinc-100 custom-shadow`}
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
