import { Avatar } from "@nextui-org/react";
import { luxurious, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideTwo() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-50 text-6xl`}>Ubicación</h1>
      <Avatar
        isBordered
        color="default"
        src="/img/escolar/ricardo-flores-magon/telesecundaria-rfm-1.jpg"
        className="h-40 w-40 my-4 shadow-lg"
      />
      <p
        className={`${urbanist.className} text-zinc-50 text-xl px-5 text-center mx-10`}
      >
        Escuela Telesecundaria "Ricardo Flores Magón"
      </p>
      <p
        className={`${luxurious.className} text-zinc-50 mt-3 text-sm text-center mx-10 max-w-md`}
      >
        Calle Libertad N° 24, Colonia Centro, 91350 Tlacolulan, Veracruz.
      </p>

      <button
        type="button"
        className="text-gray-100 hover:text-white border border-gray-100 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
      >
        Ubicación
      </button>
    </motion.section>
  );
}
