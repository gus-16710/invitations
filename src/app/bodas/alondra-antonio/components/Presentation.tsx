import { motion } from "framer-motion";
import { Great_Vibes, Titillium_Web, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Presentation() {
  return (
    <section
      className="flex justify-center items-center flex-col bg-[url('/img/bodas/alondra-antonio/background49.jpg')] bg-cover bg-center"
      style={{ height: "100svh" }}
    >
      <motion.div>
        <motion.h1
          className={`${greatVibes.className} text-5xl drop-shadow text-center text-zinc-800`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Nos Casamos
        </motion.h1>
        <motion.div
          className="relative flex items-center justify-center flex-col mt-4 mb-2 text-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}          
        >
          {/* Mes - Aparece con deslizamiento suave desde arriba */}
          <motion.label
            className={`${playFair.className} pb-1 text-lg mb-3`}
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.3,
            }}
          >
            Septiembre
          </motion.label>

          {/* Contenedor de fecha - Animación escalonada */}
          <motion.div
            className="flex  items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* Día de la semana */}
            <motion.label
              className={`${playFair.className} p-4 text-2xl w-32 text-center`}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "backOut",
              }}
            >
              SÁB
            </motion.label>

            {/* Día del mes - Efecto especial */}
            <motion.label
              className={`${greatVibes.className} py-2 px-6 border-l-1 border-r-1 border-zinc-500 text-6xl`}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              28
            </motion.label>

            {/* Hora - Entrada desde derecha */}
            <motion.label
              className={`${playFair.className} p-4 text-2xl w-32 text-center`}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "backOut",
              }}
            >
              12hrs
            </motion.label>
          </motion.div>

          {/* Año - Aparece con efecto de fade in */}
          <motion.label
            className={`${playFair.className} text-2xl text-center mt-3`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
          >
            2025
          </motion.label>
        </motion.div>
        <motion.p
          className={`${notoSans.className} text-center p-5 max-w-md text-zinc-800 mx-5`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          Después de tantos caminos recorridos juntos, llegó el momento de decir
          'Sí, acepto'. Queremos celebrar este nuevo comienzo rodeados de amor,
          risas y bailes sin fin. ¡Únanse a nuestra fiesta para hacerla aún más
          especial!                     
        </motion.p>
      </motion.div>
    </section>
  );
}
