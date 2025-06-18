
import { sevillana, urbanist } from "./Fonts";
import { motion } from "framer-motion";


export default function SlideThree() {
  return (
    <section 
      className="flex flex-col justify-center items-center" 
      style={{ height: "100svh" }}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className={`${sevillana.className} text-zinc-800 text-6xl mb-5`}>
          Profesores
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-zinc-800 text-center mb-5 mx-5 font-medium">
          <span className={`${urbanist.className}`}>Blanca Patricia Martínez Segura</span>{" "}
          <br />
          Profesora 3o "A"
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="text-zinc-800 text-center mb-5 mx-5 font-medium">
          <span className={`${urbanist.className}`}>Miriam Martínez Rosete</span> <br />
          Profesora 3o "B"
        </p>
      </motion.div>

      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-zinc-800 text-center mb-5 mx-5 font-medium">
          <span className={`${urbanist.className}`}>Yadira Ortega Alonso</span> <br />
          Profesora 3o "C"
        </p>
      </motion.div>

      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-zinc-800 text-center mb-5 mx-5 font-medium">
          <span className={`${urbanist.className}`}>Verónica Moreno Martínez</span> <br />
          Profesora 3o "D"
        </p>
      </motion.div>     
    </section>
  );
}