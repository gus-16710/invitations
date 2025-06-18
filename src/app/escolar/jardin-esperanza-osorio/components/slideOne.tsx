import { Image } from "@nextui-org/react";
import { lora, mea, playfair, poppins, urbanist } from "./Fonts";
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
      <h2 className={`${poppins.className} text-zinc-800 text-lg`}>
        Jardin de Niños
      </h2>
      <h1 className={`${playfair.className} text-zinc-800 text-4xl`}>
        "Esperanza Osorio"
      </h1>
      <h2 className={`${poppins.className} text-zinc-800 mb-5`}>30EJN0087V</h2>

      <Image
        width={150}
        alt="NextUI hero Image"
        src="/img/escolar/jardin-esperanza-osorio/logo.png"
        className="mb-5"
      />

      <h2 className={`${mea.className} text-zinc-800 text-7xl`}>Ceremonia</h2>
      <h2 className={`${poppins.className} text-zinc-800 mb-4 text-xl`}>
        DE CLAUSURA 2022-2024
      </h2>

      {/* <div className="w-full h-20 relative flex items-center justify-center">
        <div className="bg-[url('/img/escolar/ricardo-flores-magon/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
        <p className={`${bebas.className} text-zinc-50 text-3xl mb-5 z-10`}>
          2021 - 2024
        </p>
      </div>  */}
      {/* <p
        className={`${lora.className} z-20 flex items-center font-bold text-zinc-800 mt-2`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">
          &nbsp;JULIO&nbsp;
        </span>
        <span className="text-4xl px-2 tracking-widest">11</span>
        <span className="border-y-1 border-y-zinc-800 py-2 tracking-widest">
          &nbsp;&nbsp;2024&nbsp;&nbsp;
        </span>
      </p>
      <p className={`${urbanist.className} z-20 text-zinc-800 mt-2`}>
        10:00 Hrs
      </p> */}
     
    </motion.section>
  );
}
