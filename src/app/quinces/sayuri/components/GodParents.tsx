import { godParents } from "./Animations";
import { dancing, playFair } from "./Fonts";
import { motion } from "framer-motion";
import { Carousel, Flowbite, FlowbiteCarouselTheme } from "flowbite-react";

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-96 w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
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
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute w-full -top-1"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"
          fill="#d9ccaa"
        ></path>
      </svg>
      <motion.h1
        className={`${dancing.className} text-golden text-5xl text-center`}
        variants={godParents.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp; Padrinos &nbsp;
      </motion.h1>

      <motion.div
        className="w-full"
        variants={godParents.caousel}
        initial="hidden"
        whileInView="visible"
      >
        <Flowbite>
          <Carousel theme={customTheme}>
            <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
              <p className={`${dancing.className} text-4xl pb-4`}>Honor</p>
              <p className={`${playFair.className}`}>
                Abraham Hernández Sánchez
              </p>
            </div>
            <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
              <p className={`${dancing.className} text-4xl pb-4`}>Honor</p>
              <p className={`${playFair.className}`}>
                Xóchitl Miranda Nolasco
              </p>
            </div>
            <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
              <p className={`${dancing.className} text-4xl pb-4`}>Brindis</p>
              <p className={`${playFair.className}`}>
                Hipolito Portilla <br />&<br /> Verónica Martinez
              </p>
            </div>
            <div className="flex h-full items-center justify-center pb-10 text-zinc-400 flex-col px-5 text-center">
              <p className={`${dancing.className} text-4xl pb-4`}>Muñeca</p>
              <p className={`${playFair.className}`}>
                Mia Yuritzy Castillo Hernández
              </p>
            </div>
          </Carousel>
        </Flowbite>
      </motion.div>
    </section>
  );
}
