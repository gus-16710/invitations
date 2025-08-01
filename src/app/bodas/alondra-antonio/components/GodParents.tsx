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
    base: "relative h-96 w-full",
    leftControl:
      "absolute top-0 left-4 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-4 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-pink-100/50 hover:bg-gray-800",
      on: "bg-pink-100",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/10 group-hover:bg-gray-800/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-gray-100 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function GodParents() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow text-center text-zinc-300`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        Padrinos
      </motion.h1>
      <Flowbite>
        <Carousel theme={customTheme}>
          <div className="flex h-full items-center justify-center pb-10 flex-col px-5 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center flex-col"
            >
              <GiDiamondRing className="text-7xl pb-5 text-zinc-100/50" />
              <p className={`${greatVibes.className} text-4xl pb-4 text-zinc-300`}>Anillos</p>
            </motion.div>
            <motion.p
              className={`${playFair.className} text-zinc-300`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}              
            >
              Mariela Macias Rincon <br />&<br /> Ignacio López Lozano
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center flex-col"
            >
              <IoIosHeartEmpty className="text-7xl pb-5 text-zinc-100/50" />
              <p className={`${greatVibes.className} text-4xl pb-4 text-zinc-300`}>
                Velación
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className} text-zinc-300`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Leticia Barragan Saldaña <br />&<br /> Juan Pablo Robles Castillo
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center flex-col px-5 text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex items-center flex-col"
            >
              <RiLinksLine className="text-7xl pb-5 text-zinc-100/50" />
              <p className={`${greatVibes.className} text-4xl pb-4 text-zinc-300`}>Lazo</p>
            </motion.div>
            <motion.p
              className={`${playFair.className} text-zinc-300`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Rocio Hernández García <br />&<br /> Pedro Ruíz Sanchez
            </motion.p>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
}
