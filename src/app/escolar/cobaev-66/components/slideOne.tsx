import { Image } from "@nextui-org/react";
import { bebas, cormorant, dancing, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import ReactSVG from "../graduation-mortarboard.svg";

export default function SlideOne() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h2
        className={`${urbanist.className} text-zinc-100 text-lg mx-10 text-center`}
      >
        El COBAEV Plantel 66 Xalapa II le invita a la
      </h2>
      <Image
        width={140}
        alt="NextUI hero Image"
        src="/img/escolar/cobaev-66/graduation-mortarboard.svg"
        className="my-5"
      />

      <h2 className={`${dancing.className} text-zinc-50 text-7xl`}>Clausura</h2>
      <h2 className={`${dancing.className} text-zinc-50 mb-4 text-2xl`}>
        2022B - 2025A
      </h2>

      <h2
        className={`${urbanist.className} text-zinc-300 text-lg mx-10 text-center max-w-xl`}
      >
        Cada gota de sudor invertida en el camino es una semilla de éxito que
        florecerá con el tiempo.
      </h2>

      <h2 className={`${dancing.className} text-zinc-300 text-3xl mx-10 mt-10 text-center`}>
        Martes 29 de Julio 2025
      </h2> 
    </motion.section>
  );
}
