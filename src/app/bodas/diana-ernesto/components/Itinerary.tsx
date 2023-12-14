import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import { Great_Vibes, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

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
      <motion.div
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
      </motion.div>
    </section>
  );
}
