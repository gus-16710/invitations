// import { Image } from "@nextui-org/react";
// import { glass, luxurious, mea, playFair } from "./Fonts";
// import { motion } from "framer-motion";

// export default function Header() {
//   return (
//     <motion.section
//       className="flex flex-col justify-center items-center"
//       initial={{ scale: 0, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 1.5, delay: 0.5 }}
//     >
//       <Image
//         width={125}
//         alt="Floral Cross"
//         src="/img/bautizos/mateo-mendoza/angel.png"
//         style={{ filter: "drop-shadow(4px 4px 6px rgba(39, 170, 245, 0.8))" }} 
//       />
//       <p className={`${glass.className} text-xl text-zinc-700 mt-2`}>
//         ACOMPAÑANOS A SER PARTE DEL
//       </p>
//       <p className={`${glass.className} text-3xl text-zinc-700 mt-2`}>
//         BAUTIZO
//       </p>
//       <p className={`${glass.className} text-xl text-zinc-700 mt-2`}>
//         DE NUESTRO HIJO
//       </p>
//       <h1 className={`${mea.className} text-6xl text-orange-800 mt-5`}>
//         Mateo Mendoza
//       </h1>      

//       <p
//         className={`${luxurious.className} text-zinc-700 mt-5 text-sm px-5 text-center max-w-md`}
//       >
//         "Señor, hoy me presentan ante ti para ser bañado con la gracia de tu
//         amor, toma mi pequeño corazón en tus benditas manos y jamás te separes
//         de mí.""
//       </p>

//       <p
//         className={`${playFair.className} z-20 flex items-center mt-5 font-bold text-orange-800`}        
//       >
//         <span className="border-y-1 border-y-orange-400 py-2 w-32 text-center" style={{letterSpacing: "5px"}}>SÁBADO</span>{" "}
//         <span className="text-5xl px-3 pb-2">27</span>{" "}
//         <span className="border-y-1 border-y-orange-400 py-2 w-32 text-center" style={{letterSpacing: "5px"}}>DICIEMBRE</span>
//       </p>
//       <p className={`${playFair.className} z-20 text-2xl text-orange-800`}>
//         2025
//       </p>
//     </motion.section>
//   );
// }

import { Image } from "@nextui-org/react";
import { glass, luxurious, mea, playFair } from "./Fonts";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center "
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          width={125}
          alt="Floral Cross"
          src="/img/bautizos/mateo-mendoza/angel.png"
          style={{ filter: "drop-shadow(4px 4px 6px rgba(39, 170, 245, 0.8))" }} 
        />
      </motion.div>
      
      <p className={`${glass.className} text-xl text-zinc-700 mt-2`}>
        ACOMPAÑANOS A SER PARTE DEL
      </p>
      <p className={`${glass.className} text-3xl text-zinc-700 mt-2`}>
        BAUTIZO
      </p>
      <p className={`${glass.className} text-xl text-zinc-700 mt-2`}>
        DE NUESTRO HIJO
      </p>
      <h1 className={`${mea.className} text-6xl text-orange-800 mt-5`}>
        Mateo Mendoza
      </h1>      

      <p
        className={`${luxurious.className} text-zinc-700 mt-5 text-sm px-5 text-center max-w-md`}
      >
        "Señor, hoy me presentan ante ti para ser bañado con la gracia de tu
        amor, toma mi pequeño corazón en tus benditas manos y jamás te separes
        de mí.""
      </p>

      <p
        className={`${playFair.className} z-20 flex items-center mt-5 font-bold text-orange-800`}        
      >
        <span className="border-y-1 border-y-orange-400 py-2 w-32 text-center" style={{letterSpacing: "5px"}}>SÁBADO</span>{" "}
        <span className="text-5xl px-3 pb-2">27</span>{" "}
        <span className="border-y-1 border-y-orange-400 py-2 w-32 text-center" style={{letterSpacing: "5px"}}>DICIEMBRE</span>
      </p>
      <p className={`${playFair.className} z-20 text-2xl text-orange-800`}>
        2025
      </p>
    </motion.section>
  );
}