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
        Telebachillerato
      </h2>
      <h1 className={`${cormorant.className} text-zinc-50 text-4xl`}>
        "Las Trancas"
      </h1>
      <h2 className={`${urbanist.className} text-zinc-300 mb-5`}>30ETH0517R</h2>

      <Image
        width={160}
        alt="NextUI hero Image"
        src="/img/escolar/telebachillerato-las-trancas/tebaev-logo.jpg"
        className="mb-5"
        isZoomed
        radius="full"
      />

      <h2 className={`${mea.className} text-zinc-50 text-6xl`}>Ceremonia</h2>
      <h2 className={`${urbanist.className} text-zinc-50 mb-3`}>
        DE GRADUACIÓN
      </h2>
      <h2 className={`${urbanist.className} text-zinc-50 mb-4 mx-5 text-center`}>
        Coord. plantel: Jesús W. Durán Zaleta
      </h2>
      <div className="w-full h-20 relative flex items-center justify-center">
        <div className="bg-[url('/img/escolar/telebachillerato-las-trancas/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
        <p className={`${bebas.className} text-zinc-50 text-4xl mb-5 z-10`}>
          2022 - 2025
        </p>
      </div>
      <p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-50 mt-2`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest text-xl">&nbsp;JULIO&nbsp;</span>
        <span className="text-4xl px-2 tracking-widest">08</span>
        <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest text-xl">          
          &nbsp;&nbsp;2025&nbsp;&nbsp;
        </span>
      </p>
      <p className={`${urbanist.className} z-20 text-zinc-300 mt-2`}>
        09:00 Hrs - Auditorio IMAC
      </p>
    </motion.section>
  );
}
