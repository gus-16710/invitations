// import { galada, mea, urbanist } from "./Fonts";
// import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import { IoIosArrowDown } from "react-icons/io";

// export default function SlideSix() {
//   return (
//     <section
//       className="flex flex-col justify-center items-center px-5 py-7"
//       style={{ height: "100svh" }}
//     >
//       <Card
//         className="border-none bg-background/5 h-full w-full"
//         shadow="sm"
//         radius="lg"
//         isBlurred
//       >
//         <CardBody className="flex items-center justify-center flex-col">
//           <h1 className={`${galada.className} text-zinc-800 text-6xl mb-5`}>
//             Egresados
//           </h1>
//           <ScrollShadow hideScrollBar className="h-[400px] text-zinc-800 w-72">
//             <div className="mb-10 flex flex-col justify-center items-center">
//               <h2 className="mb-2 text-2xl font-serif">Grupo 3° A</h2>
//               <h3 className="text-sm text-center">
//                 Educadora: Arisbe Hernández Portilla
//               </h3>
//               <h3 className="text-sm mb-3 text-center">
//                 Niñera: María del Pilar A. Jiménez Velasco
//               </h3>
//               <ol className={`list-disc list-inside space-y-1 ${urbanist.className}`}>
//                 <li>Liam Nain Aguilar Bonilla</li>
//                 <li>Helen Angélica Carmona Limón</li>
//                 <li>Zoe Mailen Cruz Figueroa</li>
//                 <li>Keendra Mackenzie Durán Ramírez</li>
//                 <li>Emily Gisel Gutiérrez Aguilar</li>
//                 <li>Quetzalli Hernández Gallardo</li>
//                 <li>Ximena Arsibeth Luna Ordoñez</li>
//                 <li>Dailany Luna Pérez</li>
//                 <li>André Méndez Yobal</li>
//                 <li>Mateo Moreno Flores</li>
//                 <li>Bruno Miguel Osorio Espinoza</li>
//                 <li>Yareli Paredes García</li>
//                 <li>José Franco Pineda Herrera</li>
//                 <li>Evelyn Geraldine Soto Aguilar</li>
//               </ol>
//             </div>

//             <div className="mb-10 flex flex-col justify-center items-center">
//               <h2 className="mb-2 text-2xl font-serif">Grupo 3° B</h2>
//               <h3 className="text-sm text-center">
//                 Educadora: Brenda Rodríguez Vidal
//               </h3>
//               <h3 className="text-sm mb-3 text-center">
//                 Niñera: Ariadna Segovia Ronzón
//               </h3>
//               <ol className={`list-disc list-inside space-y-1 ${urbanist.className}`}>
//                 <li>Brenda García Antonio</li>
//                 <li>Farid Barradas Arellano</li>
//                 <li>Diego Campos Zamora</li>
//                 <li>Yoali Ceballos Salas</li>
//                 <li>Diana Maritza Guillén Ortiz</li>
//                 <li>Daniela Aylin Jiménez García</li>
//                 <li>Ismael Landa Nieto</li>
//                 <li>María José Martínez Aguilar</li>
//                 <li>Jhordan De Jesús Martínez Marín</li>
//                 <li>Santiago Mavil Gamboa</li>
//                 <li>José David Olmos Cortés</li>
//                 <li>Génesis Giselle Pedraza López</li>
//                 <li>Daniela Pérez Landero</li>
//                 <li>Camila Michelle Vásquez Rodríguez</li>
//               </ol>
//             </div>

//             <div className="mb-10 flex flex-col justify-center items-center">
//               <h2 className="mb-2 text-2xl font-serif">Grupo 3° C</h2>
//               <h3 className="text-sm text-center">
//                 Educadora: Gabriela Patricia Sangabriel Martínez
//               </h3>
//               <h3 className="text-sm mb-3 text-center">
//                 Niñera: Laura Guadalupe Martínez Flores
//               </h3>
//               <ol className={`list-disc list-inside space-y-1 ${urbanist.className}`}>
//                 <li>Marian Fernández Cuéllar</li>
//                 <li>Arturo García Vargas</li>
//                 <li>Diego Herrera Hernández</li>
//                 <li>Kaily Sofía Hoyos García</li>
//                 <li>Alexa Samira López Maldonado</li>
//                 <li>Keiry Gisell López Fuentes</li>
//                 <li>Emir Ulises Mota Moreno</li>
//                 <li>Renata Reyes Manzanilla</li>
//                 <li>Jade Guadalupe Roldán Durán</li>
//                 <li>Yanesi Oassis Suárez Trujillo</li>
//                 <li>Eduardo Tlaxcalteco Texón</li>
//                 <li>Aitana Giselle Vázquez Flores</li>
//               </ol>
//             </div>

//             <div className="mb-10 flex flex-col justify-center items-center">
//               <h2 className="mb-2 text-2xl font-serif">Grupo 3° D</h2>
//               <h3 className="text-sm text-center">
//                 Educadora: Zaira Beatriz Yerena Vargas
//               </h3>
//               <h3 className="text-sm mb-3 text-center">
//                 Niñera: Esperanza Trujillo Armenta
//               </h3>
//               <ol className={`list-disc list-inside space-y-1 ${urbanist.className}`}>
//                 <li>Renata Ávila Carreto</li>
//                 <li>José Pablo Celis Rodríguez</li>
//                 <li>Carla Maylin Flores Fuentes</li>
//                 <li>Ian Rafael Fuentes Lozada</li>
//                 <li>Carlos Mateo Gándara Hernández</li>
//                 <li>Mateo Caín García González</li>
//                 <li>Romina Hernández González</li>
//                 <li>Santiago Hernández Márquez</li>
//                 <li>Erick Hernández Morales</li>
//                 <li>Elda Juquila Lozada Franceschy</li>
//                 <li>Romina Peredo Alcázar</li>
//                 <li>Emily Alondra Pérez Sánchez</li>
//                 <li>Ian Yoshue Quintero Trejo</li>
//                 <li>María Guadalupe Reyes Reyes</li>
//                 <li>Samadhi Sabino Mena</li>
//               </ol>
//             </div>

//             <div className="mb-10 flex flex-col justify-center items-center">
//               <h2 className="mb-2 text-2xl font-serif">Grupo 3° E</h2>
//               <h3 className="text-sm text-center">
//                 Educadora: Elsa Margarita Polanco Vasquez
//               </h3>
//               <h3 className="text-sm mb-3 text-center">
//                 Niñera: Floricel Hernández Pineda
//               </h3>
//               <ol className={`list-disc list-inside space-y-1 ${urbanist.className}`}>
//                 <li>Jatziri Itzayana Alcántara Báez</li>
//                 <li>Marcelo Daire Arriaga Miranda</li>
//                 <li>Camila Sofía Farías Juan</li>
//                 <li>Ángel Manuel Fernández Medina</li>
//                 <li>Lía Alsoris García Hernández</li>
//                 <li>Carlos Gael Hernández Contreras</li>
//                 <li>Erick Santiago Larraga Hernández</li>
//                 <li>Gerardo López Jaén</li>
//                 <li>Miranda Yuzmani Mariano Tepetla</li>
//                 <li>Adriana Geraldine Mendoza Hernández</li>
//                 <li>Hannia Morales Romero</li>
//                 <li>Maggie Ramírez Ochoa</li>
//                 <li>Karla Guadalupe Ronquillo Oliva</li>
//                 <li>Liah Yamileth Rosa Perea</li>
//                 <li>Leslie Danae Torres Jiménez</li>
//               </ol>
//             </div>
//           </ScrollShadow>
//           <motion.div
//             initial={{ y: 0 }}
//             whileInView={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="mt-5"
//           >
//             <IoIosArrowDown className="text-zinc-800 text-xl " />
//           </motion.div>
//         </CardBody>
//       </Card>
//     </section>
//   );
// }

import { galada, mea, urbanist } from "./Fonts";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

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
              className={`${galada.className} text-zinc-800 text-6xl mb-5`}
            >
              Egresados
            </motion.h1>

            <ScrollShadow
              hideScrollBar
              className="h-[400px] text-zinc-800 w-full max-w-md"
            >
              {/* Grupo 3° A */}
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="mb-2 text-2xl font-serif">
                  Grupo 3° A
                </motion.h2>
                <motion.h3 variants={fadeIn} className="text-sm text-center">
                  Educadora: Arisbe Hernández Portilla
                </motion.h3>
                <motion.h3
                  variants={fadeIn}
                  className="text-sm mb-3 text-center"
                >
                  Niñera: María del Pilar A. Jiménez Velasco
                </motion.h3>
                <motion.ol
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {[
                    "Liam Nain Aguilar Bonilla",
                    "Helen Angélica Carmona Limón",
                    "Zoe Mailen Cruz Figueroa",
                    "Keendra Mackenzie Durán Ramírez",
                    "Emily Gisel Gutiérrez Aguilar",
                    "Quetzalli Hernández Gallardo",
                    "Ximena Arsibeth Luna Ordoñez",
                    "Dailany Luna Pérez",
                    "André Méndez Yobal",
                    "Mateo Moreno Flores",
                    "Bruno Miguel Osorio Espinoza",
                    "Yareli Paredes García",
                    "José Franco Pineda Herrera",
                    "Evelyn Geraldine Soto Aguilar",
                  ].map((student, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {student}
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>

              {/* Grupo 3° B */}
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="mb-2 text-2xl font-serif">
                  Grupo 3° B
                </motion.h2>
                <motion.h3 variants={fadeIn} className="text-sm text-center">
                  Educadora: Brenda Rodríguez Vidal
                </motion.h3>
                <motion.h3
                  variants={fadeIn}
                  className="text-sm mb-3 text-center"
                >
                  Niñera: Ariadna Segovia Ronzón
                </motion.h3>
                <motion.ol
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {[
                    "Brenda García Antonio",
                    "Farid Barradas Arellano",
                    "Diego Campos Zamora",
                    "Yoali Ceballos Salas",
                    "Diana Maritza Guillén Ortiz",
                    "Daniela Aylin Jiménez García",
                    "Ismael Landa Nieto",
                    "María José Martínez Aguilar",
                    "Jhordan De Jesús Martínez Marín",
                    "Santiago Mavil Gamboa",
                    "José David Olmos Cortés",
                    "Génesis Giselle Pedraza López",
                    "Daniela Pérez Landero",
                    "Camila Michelle Vásquez Rodríguez",
                  ].map((student, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {student}
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>

              {/* Grupo 3° C */}
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="mb-2 text-2xl font-serif">
                  Grupo 3° C
                </motion.h2>
                <motion.h3 variants={fadeIn} className="text-sm text-center">
                  Educadora: Gabriela Patricia Sangabriel Martínez
                </motion.h3>
                <motion.h3
                  variants={fadeIn}
                  className="text-sm mb-3 text-center"
                >
                  Niñera: Laura Guadalupe Martínez Flores
                </motion.h3>
                <motion.ol
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {[
                    "Marian Fernández Cuéllar",
                    "Arturo García Vargas",
                    "Diego Herrera Hernández",
                    "Kaily Sofía Hoyos García",
                    "Alexa Samira López Maldonado",
                    "Keiry Gisell López Fuentes",
                    "Emir Ulises Mota Moreno",
                    "Renata Reyes Manzanilla",
                    "Jade Guadalupe Roldán Durán",
                    "Yanesi Oassis Suárez Trujillo",
                    "Eduardo Tlaxcalteco Texón",
                    "Aitana Giselle Vázquez Flores",
                  ].map((student, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {student}
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>

              {/* Grupo 3° D */}
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="mb-2 text-2xl font-serif">
                  Grupo 3° D
                </motion.h2>
                <motion.h3 variants={fadeIn} className="text-sm text-center">
                  Educadora: Zaira Beatriz Yerena Vargas
                </motion.h3>
                <motion.h3
                  variants={fadeIn}
                  className="text-sm mb-3 text-center"
                >
                  Niñera: Esperanza Trujillo Armenta
                </motion.h3>
                <motion.ol
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {[
                    "Renata Ávila Carreto",
                    "José Pablo Celis Rodríguez",
                    "Carla Maylin Flores Fuentes",
                    "Ian Rafael Fuentes Lozada",
                    "Carlos Mateo Gándara Hernández",
                    "Mateo Caín García González",
                    "Romina Hernández González",
                    "Santiago Hernández Márquez",
                    "Erick Hernández Morales",
                    "Elda Juquila Lozada Franceschy",
                    "Romina Peredo Alcázar",
                    "Emily Alondra Pérez Sánchez",
                    "Ian Yoshue Quintero Trejo",
                    "María Guadalupe Reyes Reyes",
                    "Samadhi Sabino Mena",
                  ].map((student, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {student}
                    </motion.li>
                  ))}
                </motion.ol>
              </motion.div>

              {/* Grupo 3° E */}
              <motion.div
                variants={container}
                className="mb-10 flex flex-col justify-center items-center"
              >
                <motion.h2 variants={item} className="mb-2 text-2xl font-serif">
                  Grupo 3° E
                </motion.h2>
                <motion.h3 variants={fadeIn} className="text-sm text-center">
                  Educadora: Elsa Margarita Polanco Vasquez
                </motion.h3>
                <motion.h3
                  variants={fadeIn}
                  className="text-sm mb-3 text-center"
                >
                  Niñera: Floricel Hernández Pineda
                </motion.h3>
                <motion.ol
                  variants={container}
                  className={`list-disc list-inside space-y-1 ${urbanist.className}`}
                >
                  {[
                    "Jatziri Itzayana Alcántara Báez",
                    "Marcelo Daire Arriaga Miranda",
                    "Camila Sofía Farías Juan",
                    "Ángel Manuel Fernández Medina",
                    "Lía Alsoris García Hernández",
                    "Carlos Gael Hernández Contreras",
                    "Erick Santiago Larraga Hernández",
                    "Gerardo López Jaén",
                    "Miranda Yuzmani Mariano Tepetla",
                    "Adriana Geraldine Mendoza Hernández",
                    "Hannia Morales Romero",
                    "Maggie Ramírez Ochoa",
                    "Karla Guadalupe Ronquillo Oliva",
                    "Liah Yamileth Rosa Perea",
                    "Leslie Danae Torres Jiménez",
                  ].map((student, index) => (
                    <motion.li
                      key={index}
                      variants={item}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {student}
                    </motion.li>
                  ))}
                </motion.ol>
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
                <IoIosArrowDown className="text-zinc-800 text-xl" />
              </motion.div>
            </motion.div>
          </motion.section>
        </CardBody>
      </Card>
    </section>
  );
}
