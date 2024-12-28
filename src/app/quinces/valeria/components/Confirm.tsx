import React from "react";
import { luxurious, mea } from "./Fonts";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { header } from "./Animations";

function Confirm() {
  return (
    <section className="h-screen flex flex-col items-center justify-center overflow-clip bg-gradient-to-t from-blue-950 via-blue-900 to-blue-950">
      <motion.h1
        className={`${mea.className} text-6xl text-metallic text-center py-7`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Asistencia
      </motion.h1>
      <motion.p
        className={`${luxurious.className} text-lg z-10 text-center mt-3 text-zinc-300 max-w-md px-10`}
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Te espero este día que será mágico, único e inolvidable, y sólo estará
        completo si estás tú. Por favor confirma tu asistencia.
      </motion.p>

      <motion.p
        className={`${luxurious.className} text-lg z-10 text-center mt-5 text-zinc-300 max-w-md px-10`}
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        ¡Muchas Gracias!
      </motion.p>

      <motion.button
        type="button"
        className="w-60 mt-10 text-gray-700 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        onClick={() => window.open("https://wa.link/z97mc6", "_blank")}
        variants={header.animation4}
        initial="hidden"
        whileInView="visible"
      >
        <FaWhatsapp className="mr-3 text-2xl" />
        Mensaje de Whatsapp
      </motion.button>
      <motion.button
        type="button"
        className="w-60 mt-5 text-gray-700 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        onClick={() => window.open("tel:2281320003", "_blank")}
        variants={header.animation5}
        initial="hidden"
        whileInView="visible"
      >
        <FaPhoneAlt className="mr-3 text-2xl" />
        Llamada Telefonica
      </motion.button>
    </section>
  );
}

export default Confirm;
