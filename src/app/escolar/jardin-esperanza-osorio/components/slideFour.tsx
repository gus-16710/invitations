import { motion } from "framer-motion";
import { sevillana, urbanist, dancing } from "./Fonts";

export default function SlideFour() {
  return (
    <section
      className="flex flex-col justify-center items-center px-5 overflow-clip"
      style={{height: "100dvh"}}
    >
      {/* Título principal */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className={`${sevillana.className} text-zinc-800 text-6xl mb-10 text-center`}
        >
          ¡Felicidades!
        </h1>
      </motion.div>

      {/* Mensaje a padres - Parte 1 */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-8"
      >
        <p
          className={`${urbanist.className} text-zinc-800 text-xl text-center leading-relaxed`}
        >
          Queridos padres de familia,
        </p>
      </motion.div>

      {/* Mensaje a padres - Parte 2 */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-2xl"
      >
        <p
          className={`${urbanist.className} text-zinc-800 text-lg text-center leading-relaxed`}
        >
          Hoy celebramos un logro muy especial en la vida de sus pequeños. Esos
          niños que llegaron con manitas temblorosas ahora se preparan para dar
          su primer gran paso hacia la primaria.
        </p>
      </motion.div>

      {/* Mensaje destacado */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
        className="my-6"
      >
        <p
          className={`${dancing.className} text-zinc-800 text-3xl text-center`}
        >
          "El mejor regalo que les podemos dar es raíces y alas"
        </p>
      </motion.div>
    </section>
  );
}
