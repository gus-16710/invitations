import { galada, mea, urbanist } from "./Fonts";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const guests01 = [
  {
    name: "Miguel Darío Miranda Gómez",
    role: "Supervisor escolar de la zona 071 Rinconada",
  },
  {
    name: "Luis Ernesto de la Torre Arcos",
    role: "Supervisor de Educación Física Estatal",
  },
  {
    name: "PROFRA. María Fernanda Vásquez Santiago",
    role: "Directora del Jardín de Niños Victoria Villarauz Velasco",
  },
  {
    name: "PROFRA. Laura Paola Esther González Meza",
    role: "Directora de la Escuela Telesecundaria “Justo Sierra”",
  },
  {
    name: "Ing. Bruno Pérez Acosta",
    role: "Director del Telebachillerato Buena Vista",
  },
  {
    name: "Ing. Mily Saray Morales Belmonte",
    role: "Presidente de la Asociación de Padres de Familia",
  },
  {
    name: "C. Itzayana Tejeda Montero",
    role: "Tesorera de la Asociación de Padres de Familia",
  },
  {
    name: "Reina Jácome Alemán",
    role: "Presidenta del Consejo de Participación Escolar",
  },
];

const guests02 = [
  {
    name: "Sr. Abel Amaya Lagunes",
    role: "Comisariado Ejidal",    
  },
  {
    name: "Profr. Miguel Ángel Lagunes Pérez",
    role: "Agente Municipal",
  },
  {
    name: "Ing. Juan Carlos Mejía Pérez",
    role: "H. Junta de mejoras",
  }
];

export default function SlideSix() {
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
              Invitados de Honor
            </motion.h1>

            <ScrollShadow
              hideScrollBar
              className="h-[350px] text-zinc-100 w-full max-w-md"
            >
              <motion.div
                variants={container}
                className="mb-5 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="text-xl font-serif mb-5">
                  ~ Autoridades Educativas ~ 
                </motion.h2>
                <motion.div
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {guests01.map((student, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors text-center"
                    >
                      <p className="mb-5 flex flex-col">
                        <label className="font-semibold">{student.name}</label>
                        <label>{student.role} </label>
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="text-xl font-serif mb-5">
                  ~ Autoridades Civiles ~ 
                </motion.h2>
                <motion.div
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {guests02.map((student, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors text-center"
                    >
                      <p className="mb-5 flex flex-col">
                        <label className="font-semibold">{student.name}</label>
                        <label>{student.role} </label>
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
