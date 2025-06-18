import { Image } from "@nextui-org/react";
import { dancing, open, sevillana, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

export default function SlideOne() {
  return (
    <section 
      className="flex flex-col justify-center items-center" 
      style={{ height: "100svh" }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className={`${open.className} text-zinc-800 text-lg`}>
          Jardin de Niños
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h1 className={`${sevillana.className} text-zinc-800 text-5xl`}>
          "Esperanza Osorio"
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className={`${open.className} text-zinc-800 mb-5 mt-2`}>
          30EJN0087V
        </h2>
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Image
          width={150}
          alt="NextUI hero Image"
          src="/img/escolar/jardin-esperanza-osorio/logo.png"
          className="mb-5"
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <h2 className={`${dancing.className} text-zinc-800 text-4xl text-center`}>
          Ceremonia de clausura
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <h2 className={`${urbanist.className} text-zinc-800 text-xl py-2 flex items-center gap-2`}>
          <CiCalendar className="rotate-6 text-2xl" /> 
          02 de Julio del 2025 
          <CiCalendar className="-rotate-6 text-2xl"/>
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [0, 10, 0], opacity: 1 }}
        transition={{ 
          y: { duration: 2, repeat: Infinity },
          opacity: { duration: 0.8, delay: 1.4 }
        }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-800 text-xl" />
      </motion.div>
    </section>
  );
}