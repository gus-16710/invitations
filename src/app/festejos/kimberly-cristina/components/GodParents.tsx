import { motion } from "framer-motion";
import { Carousel, Flowbite } from "flowbite-react";
import { GiDiamondRing } from "react-icons/gi";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiLinksLine } from "react-icons/ri";
import { PiCoinsThin } from "react-icons/pi";
import { IoIosMale } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import { PiCrossLight } from "react-icons/pi";

import type { FlowbiteCarouselTheme } from "flowbite-react";
import { greatVibes, playFair } from "./Fonts";
import { godParents } from "./Animations";
import { MdFamilyRestroom } from "react-icons/md";
import { FaFemale, FaUserFriends } from "react-icons/fa";

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
      <Flowbite>
        <Carousel theme={customTheme} slide={false}>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <FaFemale className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>Madre</p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Jessica Landa Garrido
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <MdFamilyRestroom className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Abuelos
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Yolanda Garrido Cervantes <br />&<br /> Santos Landa Hernández
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <FaUserFriends className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrinos de la Quinceañera
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Laura Fabiola Prieto Guerrero <br />&<br /> César Aldair García
              Rodríguez
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center text-gray-800 flex-col px-5 text-center">
            <motion.div
              variants={godParents.text02}
              initial="hidden"
              whileInView="visible"
              className="flex items-center flex-col"
            >
              <FaUserFriends className="text-7xl pb-5 text-gray-800/50" />
              <p className={`${greatVibes.className} text-4xl pb-10`}>
                Padrinos de Bautizo
              </p>
            </motion.div>
            <motion.p
              className={`${playFair.className}`}
              variants={godParents.text03}
              initial="hidden"
              whileInView="visible"
            >
              Cristian Jesús <br />&<br /> Cruz Garrido
            </motion.p>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
}
