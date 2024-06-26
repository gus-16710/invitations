import { godParents } from "./Animations";
import { dancing, playFair } from "./Fonts";
import { motion } from "framer-motion";
import { Carousel, Flowbite, FlowbiteCarouselTheme } from "flowbite-react";

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
      off: "bg-zinc-800/50 hover:bg-gray-800",
      on: "bg-zinc-400 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400/10 group-hover:bg-zinc-400/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-zinc-400 dark:text-zinc-400 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function GodParents() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <motion.h1
        className={`${dancing.className} text-golden text-6xl text-center`}
        variants={godParents.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp; Padrinos &nbsp;
      </motion.h1>
      <Flowbite>
        <Carousel theme={customTheme}>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
            <motion.p
              className={`${dancing.className} text-4xl pb-4`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Honor
            </motion.p>
            <motion.p
              className={`${playFair.className}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Abraham Hernández Sánchez
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
            <motion.p
              className={`${dancing.className} text-4xl pb-4`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Honor (2)
            </motion.p>
            <motion.p
              className={`${playFair.className}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Xóchitl Miranda Nolasco
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
            <motion.p
              className={`${dancing.className} text-4xl pb-4`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Brindis
            </motion.p>
            <motion.p
              className={`${playFair.className}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Hipolito Portilla <br />&<br /> Verónica Martinez
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
            <motion.p
              className={`${dancing.className} text-4xl pb-4`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Muñeca
            </motion.p>
            <motion.p
              className={`${playFair.className}`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Mia Yuritzy Castillo Hernández
            </motion.p>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
}
