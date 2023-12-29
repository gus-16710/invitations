import { Great_Vibes, Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";
import { Carousel, Flowbite } from "flowbite-react";
import { GiDiamondRing } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiLinksLine } from "react-icons/ri";

import type { FlowbiteCarouselTheme } from "flowbite-react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-800/50 hover:bg-gray-800",
      on: "bg-gray-800 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/10 group-hover:bg-gray-800/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-grat-800 dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function GodParents() {
  return (
    <section className="h-screen flex justify-center items-center flex-col">
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow text-center`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Padrinos
      </motion.h1>
      <motion.div
        className="h-96 sm:h-64 xl:h-80 2xl:h-96 w-full text-gray-800"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Flowbite>
          <Carousel theme={customTheme}>
            <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
              <GiDiamondRing className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-4`}>Anillos</p>
              <p className={`${playFair.className}`}>
                Mariela Macias Rincon <br />&<br /> Ignacio López Lozano
              </p>
            </div>
            <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
              <IoIosHeartEmpty className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-4`}>
                Velación
              </p>
              <p className={`${playFair.className}`}>
                Leticia Barragan Saldaña <br />&<br /> Juan Pablo Robles
                Castillo
              </p>
            </div>
            <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
              <RiLinksLine className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-4`}>Lazo</p>
              <p className={`${playFair.className}`}>
                Rocio Hernández García <br />&<br /> Pedro Ruíz Sanchez
              </p>
            </div>
          </Carousel>
        </Flowbite>
      </motion.div>
    </section>
  );
}
