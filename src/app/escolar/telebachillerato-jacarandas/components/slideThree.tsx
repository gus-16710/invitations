import { greatVibes, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { Carousel, Flowbite, type FlowbiteCarouselTheme } from "flowbite-react";

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-96 w-full",
    leftControl:
      "absolute top-0 left-3 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-3 flex h-full items-center justify-center px-4 focus:outline-none",
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

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <Flowbite>
        <Carousel theme={customTheme}>
          <div className="flex h-full items-center justify-center pb-10 text-gray-800 flex-col px-5 text-center">
            <p
              className={`${oleo.className} text-zinc-50 text-4xl mb-10 custom-shadow`}
            >
              Padrinos de Generación
            </p>
            <p
              className={`${ovo.className} text-zinc-50 text-lg custom-shadow`}
            >
              Mariela Macias Rincon <br /> 
              Ignacio López Lozano <br />
            </p>
          </div>
          {/* <div className="flex h-full items-center justify-center pb-10 text-gray-800 flex-col px-5 text-center">
            <p className={` text-4xl pb-4`}>Coronación</p>
            <p className={``}>
              Leticia Barragan Saldaña <br />&<br /> Juan Pablo Robles Castillo
            </p>
          </div> */}
        </Carousel>
      </Flowbite>
      {/* <h1 className={`${oleo.className} text-zinc-50 text-4xl mb-2 custom-shadow`}>
        Maestra Sexto A
      </h1>

      <p className={`${ovo.className} text-zinc-50 text-lg custom-shadow`}> María Del Carmen Trujillo Hernández</p>
      <p className="text-white bg-blue-950 px-2 py-1 rounded-2xl text-xs mt-2 border-gray-400">~ Madrina ~</p>

      <p
        className={`${greatVibes.className} pt-2 text-4xl bg-zinc-100 rounded-full w-12 h-12 my-8 pr-1 text-blue-950 flex justify-center items-center shadow-2xl`}
      >
        &
      </p>

      <h1 className={`${oleo.className} text-zinc-50 text-4xl mb-2 custom-shadow`}>
        Maestro Sexto B
      </h1>      

      <p className={`${ovo.className} text-zinc-50 text-lg custom-shadow`}>Sergio Edgar Cabrera Jiménez</p>
      <p className="text-white bg-blue-950 px-2 py-1 rounded-2xl text-xs mt-2 border-gray-400">~ Padrino ~</p> */}
    </motion.section>
  );
}
