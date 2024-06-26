import { dancing, playFair } from "./Fonts";
import { FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { confirm } from "./Animations";

export default function Confirm() {
  return (
    <section className="h-screen flex flex-col items-center justify-center overflow-clip">
      <motion.h1
        className={`${dancing.className} text-golden text-6xl text-center`}
        variants={confirm.text01}
        initial="hidden"
        whileInView="visible"
      >
        &nbsp;Confirmar&nbsp; <br /> &nbsp;Asistencia&nbsp;
      </motion.h1>

      <motion.p
        className={`${playFair.className} text-zinc-400 text-base px-5 text-center mt-5 max-w-md`}
        variants={confirm.text02}
        initial="hidden"
        whileInView="visible"
      >
        Espero que puedan venir a compartir con nosotros este día inolvidable.
        Por favor confirma tu presencia.
      </motion.p>

      <motion.p
        className={`${playFair.className} text-zinc-400 text-base px-5 text-center mt-5 max-w-md`}
        variants={confirm.text03}
        initial="hidden"
        whileInView="visible"
      >
        ¡Muchas gracias!
      </motion.p>

      <motion.button
        role="button"
        className="golden-button mt-5 w-72"
        variants={confirm.button01}
        initial="hidden"
        whileInView="visible"
        onClick={() => window.open("https://wa.link/up6msa", "_blank")}
      >
        <span className="golden-text flex justify-around items-center">
          <FaSquareWhatsapp className="text-2xl" /> Mensaje de Whatsapp
        </span>
      </motion.button>

      <motion.button
        role="button"
        className="golden-button mt-5 w-72"
        variants={confirm.button02}
        initial="hidden"
        whileInView="visible"
        onClick={() => window.open("tel:2283612513", "_blank")}
      >
        <span className="golden-text flex justify-around items-center ">
          <FaSquarePhone className="text-2xl" />
          Llamada Telefónica
        </span>
      </motion.button>
    </section>
  );
}
