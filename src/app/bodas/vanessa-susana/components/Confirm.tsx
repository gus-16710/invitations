import { motion } from "framer-motion";
import {
  alex,
  crimson,
  italianno,
  mate,
  playfair,
  saira,
  titillium,
} from "./Fonts";
import { FaHeart } from "react-icons/fa";

export default function Confirm({ guests }: { guests: string }) {
  return (
    <>
      <div className="w-full border-1 border-black mt-5" />
      <div
        className={`${crimson.className} flex items-center justify-center gap-2 text-center border-y-1 border-b-2 border-black my-1 py-3 text-lg sm:text-3xl md:text-4xl lg:text-4xl`}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        JUEVES, 11 DE DICIEMBRE 2025
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
      </div>
      <div className="w-full border-1 border-black" />

      <p className={`${playfair.className} text-justify mt-5`}>
        Es un honor y un privilegio invitarlos a Ser parte de este día tan
        significativo para nosotras. Su presencia hará de nuestra boda un evento
        aún más inolvidable y lleno de felicidad. Por favor confirma tu
        asistencia antes del 30 de noviembre.
      </p>

      {guests !== "" && (
        <p className="mt-10 p-5 bg-gradient-to-tl from-black via-gray-900 to-gray-600 text-white rounded-lg text-center text-sm">
          Hemos reservado{" "}
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-white text-lg font-semibold">
            {guests}
          </span>{" "}
          lugares en tu honor
        </p>
      )}

      <div className="flex justify-center mt-10">
        <button
          className={`${crimson.className} border-1 border-black p-4 rounded-lg bg-gray-300 text-lg`}
          onClick={() => window.open("https://wa.link/ixn1xv")}
        >
          CONFIRMAR ASISTENCIA
        </button>
      </div>

      <p className={`${playfair.className} text-center text-7xl mt-10`}>V&S</p>

      <p
        className={`${crimson.className} text-center bg-gray-300 mt-10 text-xs py-2 px-2`}
      >
        ÚNETE A NOSOTRAS PARA CELEBRAR UNA UNIÓN DE AMOR, RISAS Y FELICIDAD
      </p>

      <motion.p
        className={`${crimson.className} bg-gray-900 text-zinc-100 p-5 mt-5 text-center text-4xl`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ¡TE ESPERAMOS!
      </motion.p>
    </>
  );
}
