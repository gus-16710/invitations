"use client";

import { crimson, italianno, mate, } from "./components/Fonts";
import { FaPersonHalfDress } from "react-icons/fa6";
import { motion } from "framer-motion";

import AudioControl from "./components/AudioControl";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import AboutUs from "./components/AboutUs";
import Itinerary from "./components/Itinerary";

import "./styles.css";

export default function Wedding() {
  return (
    <main className="max-w-3xl m-auto p-4 shadow-2xl overflow-clip">
      <AudioControl />
      <Header />
      <Presentation />
      <AboutUs />
      <Itinerary />

      <motion.p
        className={`${crimson.className} bg-gray-900 text-zinc-100 p-5 mt-5 text-center text-lg`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Amamos a los niños, pero creemos que esta noche se merecen disfrutar
        solo como pareja, por eso en esta ocasión será solo para adultos.
      </motion.p>

      <motion.div
        className="bg-gray-300 p-5 mt-5 border-1 border-gray-800 rounded-sm"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <div className="flex-1 border-b-1 border-gray-800" />
          <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
            Dress Code
          </p>
          <div className="flex-1 border-b-1 border-gray-800" />
        </div>
        <p className={`${mate.className} text-center`}>Elengate - Formal</p>
        <div className="flex justify-center m-5">
          <FaPersonHalfDress size={40} />
        </div>
        <p className={`${mate.className} text-center`}>Ellas: Vestido largo</p>
        <p className={`${mate.className} text-center`}>
          Ellos: Traje y corbata
        </p>

        <p className={`${crimson.className} text-center mt-5`}>
          (Se reserva el color blanco para las Novias)
        </p>
      </motion.div>
    </main>
  );
}
