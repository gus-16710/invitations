import { motion } from "framer-motion";
import { Carousel, Flowbite } from "flowbite-react";
import { GiDiamondRing } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiLinksLine } from "react-icons/ri";
import { PiCoinsThin } from "react-icons/pi";
import { IoIosFemale, IoIosMale } from "react-icons/io";

import type { FlowbiteCarouselTheme } from "flowbite-react";
import { greatVibes, playFair } from "./Fonts";
import { godParents } from "./Animations";

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-96 w-full",
    leftControl:
      "absolute -bottom-5 left-1/3 flex  items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute -bottom-5 right-1/3 flex items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-gray-800/50 hover:bg-gray-800",
      on: "bg-gray-800 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full hidden",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded bg-gray-800/10 group-hover:bg-gray-800/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-grat-800 dark:text-gray-800 sm:h-6 sm:w-6",
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
        className={`${greatVibes.className} text-5xl drop-shadow text-center`}
        variants={godParents.text01}
        initial="hidden"
        whileInView="visible"
      >
        Padres & Padrinos
      </motion.h1>
      <Flowbite>
        <Carousel theme={customTheme}>
          <div className="flex h-full items-center justify-center pb-10 text-gray-800 flex-col px-5 text-center">
            <motion.div
              className="flex items-center flex-col"
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
            >
              <IoIosFemale className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padres de la Novia
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              María Magdalena Esteves Arellano <br />&<br /> Paulino Colorado
              Duran
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-gray-800 flex-col px-5 text-center">
            <motion.div
              className="flex items-center flex-col"
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
            >
              <IoIosMale className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padres del Novio
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Isabel Osorio León <br />&<br /> Carlos Osorio Platas
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-gray-800 flex-col px-5 text-center">
            <motion.div
              className="flex items-center flex-col"
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
            >
              <GiDiamondRing className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrino de Anillos
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Demetrio Tecalt Ruiz
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <IoIosHeartEmpty className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrinos de Velación
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Miguel Ángel Zavaleta Sánchez <br />&<br /> Gloria Virués Colotl
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <RiLinksLine className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrinos de Lazo
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              María Teresa León Colorado <br />&<br /> Laura Estela Osorio León
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <PiCoinsThin className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrino de Arras
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Jesús Hernández Hernández <br />&<br /> María Vasquez Lucido
            </motion.p>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
}