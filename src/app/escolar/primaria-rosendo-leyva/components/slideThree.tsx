import { imperial } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideThree() {
  // Configuración de animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-md flex justify-center items-center flex-col"
      >
        {/* Título */}
        <motion.h1
          variants={fadeIn}
          className={`${imperial.className} text-zinc-800 text-6xl mb-5 text-center`}
        >
          Egresados
        </motion.h1>

        {/* Lista de alumnos */}
        <ScrollShadow
          hideScrollBar
          className="h-[400px] z-50 text-zinc-800 w-72"
        >
          {/* Grupo A */}
          <motion.div
            variants={container}
            className="mb-10 flex flex-col justify-center items-center"
          >
            <motion.h2 variants={item} className="mb-4 text-xl font-bold">
              Sexto grado grupo "A"
            </motion.h2>
            <motion.ol
              variants={container}
              className="list-disc list-inside space-y-1 w-full px-5"
            >
              {[
                "Rafael Moisés Acosta Sánchez",
                "Génesis Abril Aguilar Hernández",
                "Ian Daniel Aguilar Sangabriel",
                "Iker Gustavo Ceballos Mora",
                "Yahel De la Cruz Del Moral",
                "Dahiana Díaz Rico",
                "Valentina Flores Solano",
                "Óscar Zaid García Mendoza",
                "Marco González Lara",
                "Dylan Hernández Lara",
                "Emily Camila Hernández Salas",
                "Victoria Huesca Jiménez",
                "Leslie Natalia Jácome Mendoza",
                "Iker Isaías Jiménez Gabriel",
                "Alexa Juárez González",
                "América Aymar Martínez Méndez",
                "Alberto Imalán Ortega Montiel",
                "Maximiliano Ramón Hernández",
                "Luis Rodrigo Rivera Romero",
                "Montserrat Ruiz Ortega",
                "Rafael Ruiz Ortega",
                "Luis Fernando Saavedra Sánchez",
                "Luisa Giselle Valdez Frutos",
                "Emilio Vallejo Rojano",
              ].map((student, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="text-sm md:text-base"
                >
                  {student}
                </motion.li>
              ))}
            </motion.ol>

            <motion.p variants={fadeIn} className="mt-2 font-medium">
              Mtro. Roger Bartolo Martínez
            </motion.p>
          </motion.div>

          {/* Grupo B */}
          <motion.div
            variants={container}
            className="mb-10 flex flex-col justify-center items-center"
          >
            <motion.h2 variants={item} className="mb-4 text-xl font-bold">
              Sexto grado grupo "B"
            </motion.h2>

            <motion.ol
              variants={container}
              className="list-disc list-inside space-y-1 w-full px-5"
            >
              {[
                "Rafael De Jesús Alducín Hernández",
                "Sara Barrientos García",
                "Bastian Caleb Carmona Saénz",
                "Auner Kaleb Clemente Salas",
                "Gael Fernández Cruz",
                "Ana Sofía Filobello Vela",
                "Edrik Kamil Gerón Montes",
                "Aylin Mayte Hernández Acosta",
                "Regina Hernández De Los Santos",
                "Adrián Rafael Hernández Fragoso",
                "Mateo Hernández Macías",
                "Zoe Samara Jiménez Flores",
                "Jesús Antonio Mapel Uscanga",
                "Leonardo Farid Ortiz Iñiguez",
                "Jenifer Alexa Pale Castillo",
                "Josué Adiel Pérez Morales",
                "Aldo Alexander Quinto Mariano",
                "Rafael Roldán Migoni",
                "Yetzalí Salvador Méndez",
                "Zoe Sosa Castro",
                "Dylan Alejandro Suárez Reyes",
                "Isis Karmin Zameza Retureta",
              ].map((student, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="text-sm md:text-base"
                >
                  {student}
                </motion.li>
              ))}
            </motion.ol>

            <motion.p variants={fadeIn} className="mt-2 font-medium">
              Mtra. Ana Luisa Cabrera
            </motion.p>
          </motion.div>
        </ScrollShadow>

        {/* Flecha indicadora */}
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-5 flex justify-center"
        >
          <IoIosArrowDown className="text-zinc-800 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
