import { cormorant, greatVibes, mea, oleo, ovo, playFair, urbanist } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-50 text-4xl mb-2 custom-shadow`}>
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
      <p className="text-white bg-blue-950 px-2 py-1 rounded-2xl text-xs mt-2 border-gray-400">~ Padrino ~</p>

    </motion.section>
  );
}
