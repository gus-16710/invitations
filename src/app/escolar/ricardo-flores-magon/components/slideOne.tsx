import { Image } from "@nextui-org/react";
import { bebas, cormorant, mea, urbanist } from "./Fonts";
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
        width={120}
        alt="NextUI hero Image"
        src="/img/escolar/ricardo-flores-magon/rfm_pefil.png"
        className="mb-5"
      />

      <h2 className={`${mea.className} text-zinc-50 text-7xl`}>Ceremonia</h2>
      <h2 className={`${urbanist.className} text-zinc-50 mb-5`}>
        🎓 DE FIN DE CURSOS 🎓
      </h2>

      <p className={`${bebas.className} text-zinc-50 text-4xl mb-5`}>
        2021 - 2024
      </p>
      <p className={`${urbanist.className} text-zinc-50 text-xl`}>
        11-Julio-2024, 10:00 Hrs
      </p>
    </motion.section>
  );
}
