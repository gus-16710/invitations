import { galada, mea, urbanist } from "./Fonts";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const alumnosYPadrinos = [
  {
    alumno: "Almanza Delgado Karely Mariel",
    padrinos: ["Leilani Ailani Almanza Delgado"],
  },
  {
    alumno: "Amaya Hoyos Agatha Quetzaly",
    padrinos: ["Karla Ruby Hoyos López", "Juan Carlos Hoyos López"],
  },
  {
    alumno: "Arellano Vega Ricardo Yael",
    padrinos: ["Yesica Vega Mejía", "Dulce María Mejía Delgado"],
  },
  {
    alumno: "Cruz Villa Amelie",
    padrinos: ["Liliana Jácome Jácome"],
  },
  {
    alumno: "Jácome Falfán Edson",
    padrinos: ["Erika Jácome Amaya"],
  },
  {
    alumno: "Juárez Pacheco Levi Samuel",
    padrinos: ["Alicia León Velázquez"],
  },
  {
    alumno: "Lagunes Tejeda Yerenesi Ileana",
    padrinos: ["Naxhieli Jarvio Jácome", "Francisco Javier Tejeda Amaya"],
  },
  {
    alumno: "Mejía Ferto Alondra Lineth",
    padrinos: ["Juan Carlos Mejía Pérez", "Heidi Laudeth Villa Jarvio"],
  },
  {
    alumno: "Mejía Jácome Gerson de Jesús",
    padrinos: ["Heber Pérez Jácome", "Diana Jemaliel Sánchez Tejeda"],
  },
  {
    alumno: "Orihuela Hernández Jade Valeria",
    padrinos: ["Evelyn María Jarvio García", "Delia García Delgado"],
  },
  {
    alumno: "Palafox Villa Alexander",
    padrinos: ["María Josefina Flores Rodríguez"],
  },
  {
    alumno: "Pérez Tecan Juan Alexis",
    padrinos: ["José Raúl Zavala Pérez", "Saraí Padilla Tecan"],
  },
  {
    alumno: "Sosa Cardeña Josué",
    padrinos: ["Cristina Huerta Montiel", "Abel Acosta Domínguez"],
  },
  {
    alumno: "Vázquez Garrido Horeb",
    padrinos: ["Fernando Garrido Cruz"],
  },
];



export default function SlideSeven() {
  // Animaciones
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
      className="flex flex-col justify-center items-center px-5 py-7"
      style={{ height: "100svh" }}
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
        as={motion.div}
        variants={fadeIn}
      >
        <CardBody className="flex items-center justify-center flex-col">
          <motion.section
            className="flex flex-col justify-center items-center px-5 py-7"
            style={{ height: "100svh" }}
            initial="hidden"
            whileInView="show"
            variants={container}
          >
            {/* Título */}
            <motion.h1
              variants={item}
              className={`${galada.className} text-zinc-100 text-6xl mb-5 text-center`}
            >
              Padrinos
            </motion.h1>

            <ScrollShadow
              hideScrollBar
              className="h-[350px] text-zinc-100 w-full max-w-md"
            >
              <motion.div
                variants={container}
                className="mb-5 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="font-serif mb-5">
                  Lista de alumnos y padrinos
                </motion.h2>
                <motion.div
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {alumnosYPadrinos.map((elment, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors text-center"
                    >
                      <p className="mb-5 flex flex-col">
                        <label className="font-semibold">{elment.alumno}</label>
                        {/* <label>{student.role} </label> */}
                        <ul className="list-disc list-inside">
                          {elment.padrinos.map((padrino, idx) => (
                            <li key={idx}>{padrino}</li>
                          ))}
                        </ul>
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
                          
            </ScrollShadow>

            {/* Flecha indicadora */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 1 },
              }}
              className="mt-5"
            >
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  transition: {
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              >
                <IoIosArrowDown className="text-zinc-100 text-xl" />
              </motion.div>
            </motion.div>
          </motion.section>
        </CardBody>
      </Card>
    </section>
  );
}
