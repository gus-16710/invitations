import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

const itinerary = [
  { time: "18:00 Hrs", event: "Ceremonia  Religiosa" },
  { time: "19:00 Hrs", event: "Boda Civil" },
  { time: "20:00 Hrs", event: "Recepción" },
  { time: "21:00 Hrs", event: "Cena" },
  { time: "22:00 Hrs", event: "Baile" },
  { time: "03:00 Hrs", event: "Termino del Evento" },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
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
      className="h-screen flex justify-center items-center flex-col"
    >
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow mb-10`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
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
          <motion.li className="mb-7 ms-4" key={index} variants={element}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.time}
            </time>
            <h3 className={`${playFair.className} text-base font-semibold text-gray-900 dark:text-white`}>
              {item.event}
            </h3>
          </motion.li>
        ))}
      </motion.ol>

      {/* <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Timeline>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>18:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Ceremonia Religiosa
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>19:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Boda Civil
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>20:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Recepción
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>21:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Cena
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>22:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Baile
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="mb-5">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>03:00 Hrs</Timeline.Time>
              <Timeline.Title className={`${playFair.className} text-base`}>
                Termino del Evento
              </Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </motion.div> */}
    </section>
  );
}
