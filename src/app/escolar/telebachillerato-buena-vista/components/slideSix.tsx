import { mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideSix() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-50 text-6xl mb-10`}>
        Egresados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-100 w-72 text-sm">
        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">ÁREA QUÍMICO BIOLÓGICO </h2>
          <ol className="list-disc list-inside space-y-1">
            <li>AMAYA / MONTERO * ARAM</li>
            <li>CABALLERO / PEREZ * FRIDA MICHELLE</li>
            <li>TEJEDA * MICHELLE</li>
            <li>VIVEROS / RODRIGUEZ * FABIOLA ESTEFANIA </li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">ÁREA ECONÓMICO ADMINISTRATIVO</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>PEREZ / LAGUNES * DONOVAN HENRY</li>
            <li>VAZQUEZ / MARTINEZ * BRIAN</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">ÁREA HUMANIDADES Y CIENCIAS SOCIALES</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>ALFALLO / MORA * MARIA GUADALUPE</li>

            <li>AMAYA / NAPE * MARIA FERNANDA</li>
            <li>BADILLO / DIAZ * CARLOS ALEXANDER</li>
            <li>BRAVO / DOMINGUEZ * PAOLA JAQUELINE</li>
            <li>CRUZ / HERNANDEZ * WENDOLIN</li>
            <li>ESCOTO / CARMONA * AILEN GUADALUPE</li>
            <li>JAEN / TECAN * MARIA FERNANDA</li>
            <li>OREA / REYES * ARATXA CONCEPCION</li>
            <li>GUTIERREZ / RAMIREZ * CHRISTOPHER</li>
            <li>ROSAS / GABRIEL * CRISTOBAL PRASAD</li>
            <li>SANDOVAL / PERALTA * ISIS LILIETH</li>
            <li>SOLANO / GERONIMO * EMILIANO ALDEHIR</li>
            <li>VASQUEZ / GARRIDO * HILDA JAHOMI</li>
          </ol>
        </div>
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>
    </motion.section>
  );
}
