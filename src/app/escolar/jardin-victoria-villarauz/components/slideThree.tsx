import { mea, urbanist } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-800 text-4xl mb-3`}>
        Maestra & Directora
      </h1>
      <p className={`${urbanist.className} text-zinc-800 text-center mx-5 text-xl`}>
        María Fernanda Vázquez Santiago
      </p>

      <p className="h-14 w-14 rounded-full bg-pink-500 text-zinc-100 text-4xl text-center my-10 flex items-center justify-center pb-2 shadow-xl">&</p>

      <h1 className={`${mea.className} text-zinc-800 text-4xl mb-3`}>
        Padrinos de Generación
      </h1>
      <p className={`${urbanist.className} text-zinc-800 text-center mx-5 text-xl`}>
        Martha Laura Palmeros Báez <br />
        María Fernanda Vázquez Santiago
      </p>
     
    </motion.section>
  );
}
