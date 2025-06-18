import { Image } from "@nextui-org/react";
import { bebas, cormorant, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideOne() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}      
    >
      <h2 className={`${urbanist.className} text-zinc-800 text-lg`}>
        Escuela Prim. Urb. Estatal
      </h2>
      <h1 className={`${cormorant.className} text-zinc-800 text-4xl`}>
        "Felipe Carrillo Puerto"
      </h1>
      <h2 className={`${urbanist.className} text-zinc-800 mb-5`}>Generación 2019-2025</h2>

      <Image
        width={110}
        alt="NextUI hero Image"
        src="/img/escolar/primaria-felipe-carrillo-puerto/felipe_carrillo.png"
        className="mb-5"
      />

      <h2 className={`${mea.className} text-zinc-800 text-7xl`}>Ceremonia</h2>
      <h2 className={`${urbanist.className} text-zinc-800 mb-4`}>
        DE FIN DE CURSOS
      </h2>
      <p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-800 mt-2`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">&nbsp;JULIO&nbsp;</span>
        <span className="text-4xl px-2 tracking-widest">11</span>
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">          
          &nbsp;&nbsp;2024&nbsp;&nbsp;
        </span>
      </p>
      <p className={`${urbanist.className} z-20 text-zinc-800 mt-2`}>
        10:00 Hrs
      </p>
    </motion.section>
  );
}
