import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Great_Vibes, Titillium_Web } from "next/font/google";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });

export default function Confirm() {
  return (
    <section className="snap-start bg-zinc-900 flex items-center justify-center flex-col text-gray-50" style={{ height: "100svh"}}>
      <motion.h1
        className={`${greatVibes.className} text-5xl drop-shadow text-center`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Confirmar Asistencia
      </motion.h1>
      <motion.p
        className={`${notoSans.className} text-center mt-10 pb-2 px-5`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Espero que puedas venir a compartir con nosotros este día inolvidable.
      </motion.p>
      <motion.p
        className={`${notoSans.className} text-center p-2`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Favor de confirmar tu presencia.
      </motion.p>
      <motion.p
        className={`${notoSans.className} text-center p-2`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ¡Muchas Gracias!
      </motion.p>

      <motion.div
        className="pt-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          color="success"
          onClick={() => window.open("https://wa.link/xk0ea6", "_blank")}
          className="w-60"
        >
          <FaWhatsapp className="text-2xl" />
          Mensaje de Whatsapp
        </Button>
      </motion.div>

      <motion.div
        className="pt-5"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button
          color="success"
          onClick={() => window.open("tel:5511422546", "_blank")}
          className="w-60"
        >
          <FaPhoneAlt className="text-2xl" />
          Llamada Telefonica
        </Button>
      </motion.div>
    </section>
  );
}
