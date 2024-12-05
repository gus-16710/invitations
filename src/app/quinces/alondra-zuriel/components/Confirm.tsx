import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { header } from "./Animations";
import { league, vibes } from "./Fonts";
import { motion } from "framer-motion";

export default function Confirm() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <motion.h2
        className={`${vibes.className} text-5xl mb-5 text-center`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
        style={{ color: "#513704" }}
      >
        Confirma tu <br /> Asistencia
      </motion.h2>

      <motion.p
        className={`${league.className} text-xl text-center mt-5 max-w-md px-10 mb-5`}
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
        style={{ color: "#a57d35" }}
      >
        Te espero este dia que será mágico, único e inolvidable, y sólo estará
        completa si estás tú. ¿Me vas acompañar?. Por favor confirma tu
        asistencia.
      </motion.p>

      <motion.button
        type="button"
        className="w-60 mt-5 bg-white/0 border border-yellow-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        style={{ color: "#a57d35" }}
        onClick={() => window.open("https://wa.link/zj1xeb", "_blank")}
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        <FaWhatsapp className="text-2xl mr-3" />
        Mensaje de Whatsapp
      </motion.button>

      <motion.button
        type="button"
        className="w-60 mt-5 bg-white/0 border border-yellow-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        style={{ color: "#a57d35" }}
        onClick={() => window.open("tel:2283612256", "_blank")}
        variants={header.animation4}
        initial="hidden"
        whileInView="visible"
      >
        <FaPhoneAlt className="text-2xl mr-3" />
        Llamada Telefonica
      </motion.button>
    </div>
  );
}
