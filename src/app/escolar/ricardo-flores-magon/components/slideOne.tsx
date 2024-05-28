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
      <h2 className={`${urbanist.className} text-zinc-300 text-lg`}>
        Escuela Telesecundaria
      </h2>
      <h1 className={`${cormorant.className} text-zinc-50 text-4xl`}>
        "Ricardo Flores Magón"
      </h1>
      <h2 className={`${urbanist.className} text-zinc-300 mb-5`}>30DTV0056S</h2>

      <Image
        width={110}
        alt="NextUI hero Image"
        src="/img/escolar/ricardo-flores-magon/rfm_pefil.png"
        className="mb-5"
      />

      <h2 className={`${mea.className} text-zinc-50 text-7xl`}>Ceremonia</h2>
      <h2 className={`${urbanist.className} text-zinc-50 mb-4`}>
        DE FIN DE CURSOS
      </h2>
      <div className="w-full h-20 relative flex items-center justify-center">
        <div className="bg-[url('/img/escolar/ricardo-flores-magon/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
        <p className={`${bebas.className} text-zinc-50 text-3xl mb-5 z-10`}>
          2021 - 2024
        </p>
      </div>
      <p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-50 mt-2`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest">&nbsp;JULIO&nbsp;</span>
        <span className="text-4xl px-2 tracking-widest">11</span>
        <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest">          
          &nbsp;&nbsp;2024&nbsp;&nbsp;
        </span>
      </p>
      <p className={`${urbanist.className} z-20 text-zinc-300 mt-2`}>
        10:00 Hrs
      </p>
    </motion.section>
  );
}
