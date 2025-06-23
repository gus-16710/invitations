import { oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center custom-shadow"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-50 text-5xl mb-10`}>Docentes</h1>

      <p className={`${ovo.className} text-zinc-50 text-lg custom-shadow text-center`}>
        Williams Lagunes Amaya <br/>
        Leonor Herrera García <br/>
        Diana Vianey Rosas Reyna <br />
        Ma. Magdalena Gómez Austria <br/>
        Kenia de Jesús Cuervo Lara <br />
        Migdalia Orduña López <br/>        
        Jorge de Jesús Amaya Aguilar <br />        
        Jesús Isaac García Arvizo
        
      </p>
    </motion.section>
  );
}
