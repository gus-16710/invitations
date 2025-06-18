import { Image } from "@nextui-org/react";
import { bebas, cormorant, lora, mea, nobile, oleo, ovo, urbanist } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideOne() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center relative custom-shadow"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >      

      <h2 className={`${oleo.className} text-zinc-50 text-6xl`}>Ceremonia</h2>
      <h2 className={`${nobile.className} text-zinc-50 mb-4`}>
        DE FIN DE CURSOS
      </h2>

      <Image
        width={130}
        alt="NextUI hero Image"
        src="/img/escolar/primaria-francisco-madero/logo.png"
        className="mb-4"
      />

      <h2 className={`${nobile.className} text-zinc-50 text-lg`}>
        Escuela Primaria
      </h2>
      <h1 className={`${ovo.className} text-zinc-50 text-4xl`}>
        "Francisco I. Madero"
      </h1>
      <h2 className={`${nobile.className} text-zinc-50 mb-5`}>30EPR0877X</h2>          

      <p className={`${ovo.className} text-zinc-50 text-4xl px-2 tracking-widest`}>2019-2025</p>

      <h2 className={`${nobile.className} text-zinc-50 text-lg mt-5`}>
        Director: Mauricio Santamaría Flores
      </h2>      
    </motion.section>
  );
}
