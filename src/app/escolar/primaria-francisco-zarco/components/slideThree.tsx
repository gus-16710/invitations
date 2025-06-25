// import { imperial } from "./Fonts";
// import { ScrollShadow } from "@nextui-org/react";
// import { motion } from "framer-motion";
// import { IoIosArrowDown } from "react-icons/io";

// export default function SlideThree() {
//   return (
//     <motion.section
//       className="flex flex-col justify-center items-center"
//       style={{ height: "100svh" }}
//       initial={{ scale: 0, opacity: 0 }}
//       whileInView={{ scale: 1, opacity: 1 }}
//       transition={{ duration: 1.5, delay: 0.5 }}
//     >
//       <h1 className={`${imperial.className} text-zinc-800 text-6xl mb-5`}>
//         Egresados
//       </h1>
//       <ScrollShadow hideScrollBar className="h-[400px] z-50 text-zinc-800 w-72">
//         <div className="mb-10 flex flex-col justify-center items-center">
//           <h2 className="mb-4 text-xl font-bold">Sexto grado grupo "A"</h2>
//           <ol className="list-disc list-inside space-y-1">
//             <li>Ávila Victoria Maricela</li>
//             <li>Barreda Morales Roberto</li>
//             <li>Carvajal Meza Alizé Yarely</li>
//             <li>Cervantes Hernández Giselle</li>
//             <li>Chávez García Cristian</li>
//             <li>Estudillo Barrales Dania Joseline</li>
//             <li>Fernández González José Antonio</li>
//             <li>Flores Murrieta María Fernanda</li>
//             <li>Hernández Cantú Joed Saúl</li>
//             <li>Hernández Guzmán Elizabeth</li>
//             <li>Hernández Laíz César</li>
//             <li>Hernández Ramírez Julissa</li>
//             <li>Huerta Martínez Aidee</li>
//             <li>León Macín María Inés</li>
//             <li>López Díaz Ximena Samai</li>
//             <li>Lozano Trujillo Kelly Dennis</li>
//             <li>Márquez Tepetla Ian Daniel</li>
//             <li>Monroy Maruri Camila</li>
//             <li>Morales Aldana Renata</li>
//             <li>Navarro Hernández María José</li>
//             <li>Salazar Martínez Ingrid Dailin</li>
//             <li>Sánchez Barradas Renata</li>
//             <li>Tejeda Landa María Fernanda</li>
//             <li>Zamora Barradas Maximiliano</li>
//             <li>Zurita Miranda Mía Fernanda</li>
//           </ol>
//           <p className="mt-2">Mtra. María del Carmen Hernández Gonzalez</p>
//         </div>

//         <div className="mb-10 flex flex-col justify-center items-center">
//           <h2 className="mb-4 text-xl font-bold">Sexto grado grupo "B"</h2>
//           <ol className="list-disc list-inside space-y-1">
//             <li>Aguilar Hernández Diego</li>
//             <li>Alarcón Martínez Santiago</li>
//             <li>Alducin Zamora Santiago</li>
//             <li>Carreón Grijalva Estefany</li>
//             <li>Ceballos Guzmán Sofía Kristel</li>
//             <li>Conde García Juan Renato</li>
//             <li>Cortés Sayago Jesús Israel</li>
//             <li>Cuevas Ramón Yéshua Miguel</li>
//             <li>Fuentes Ramos Ángel Rafael</li>
//             <li>Gregorio Nava Ximena</li>
//             <li>Hernández Domínguez Giselle</li>
//             <li>Landa Aguilar Iker Leonardo</li>
//             <li>Landa Márquez Estrella Zareth</li>
//             <li>Landa Montiel Ángel Josué</li>
//             <li>López González Novalfe Itzamara</li>
//             <li>Martínez Viveros Derek Alexander</li>
//             <li>Meza González Andrea</li>
//             <li>Pérez Zágada Diego</li>
//             <li>Portilla Hernández Iker Aldair</li>
//             <li>Romero Saldaña Aylen Sofía</li>
//             <li>Sánchez Durán José Alfredo</li>
//             <li>Sánchez Ponce de León Mariana Adali</li>
//             <li>Sánchez Sánchez Kelly Naomy</li>
//             <li>Sánchez Soto Alondra Angélica</li>
//             <li>Tapia Rodríguez Axel Yael</li>
//             <li>Trasancos Pérez Nathaly Monserrat</li>
//             <li>Ventura Mateo María José</li>
//             <li>Villa Nava Iván David</li>
//           </ol>

//           <p className="mt-2">Mtro. Erick Fernando Hernández M.</p>
//         </div>
//       </ScrollShadow>
//       <motion.div
//         initial={{ y: 0 }}
//         whileInView={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="mt-5"
//       >
//         <IoIosArrowDown className="text-zinc-800 text-xl" />
//       </motion.div>
//     </motion.section>
//   );
// }

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
                "Ávila Victoria Maricela",
                "Barreda Morales Roberto",
                "Carvajal Meza Alizé Yarely",
                "Cervantes Hernández Giselle",
                "Chávez García Cristian",
                "Estudillo Barrales Dania Joseline",
                "Fernández González José Antonio",
                "Flores Murrieta María Fernanda",
                "Hernández Cantú Joed Saúl",
                "Hernández Guzmán Elizabeth",
                "Hernández Laíz César",
                "Hernández Ramírez Julissa",
                "Huerta Martínez Aidee",
                "León Macín María Inés",
                "López Díaz Ximena Samai",
                "Lozano Trujillo Kelly Dennis",
                "Márquez Tepetla Ian Daniel",
                "Monroy Maruri Camila",
                "Morales Aldana Renata",
                "Navarro Hernández María José",
                "Salazar Martínez Ingrid Dailin",
                "Sánchez Barradas Renata",
                "Tejeda Landa María Fernanda",
                "Zamora Barradas Maximiliano",
                "Zurita Miranda Mía Fernanda",
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
              Mtro. Hernández Maldonado Maldonado.
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
                "Aguilar Hernández Diego",
                "Alarcón Martínez Santiago",
                "Alducin Zamora Santiago",
                "Carreón Grijalva Estefany",
                "Ceballos Guzmán Sofía Kristel",
                "Conde García Juan Renato",
                "Cortés Sayago Jesús Israel",
                "Cuevas Ramón Yéshua Miguel",
                "Fuentes Ramos Ángel Rafael",
                "Gregorio Nava Ximena",
                "Hernández Domínguez Giselle",
                "Landa Aguilar Iker Leonardo",
                "Landa Márquez Estrella Zareth",
                "Landa Montiel Ángel Josué",
                "López González Novalle Itzamara",
                "Martínez Viveros Derek Alexander",
                "Meza González Andrea",
                "Pérez Zágada Diego",
                "Portilla Hernández Iker Aldair",
                "Romero Saldaña Aylen Sofía",
                "Sánchez Durán José Alfredo",
                "Sánchez Ponce de León Mariana Adalid",
                "Sánchez Sánchez Kelly Naomy",
                "Sánchez Soto Alondra Angélica",
                "Tapia Rodríguez Axel Yael",
                "Trasancos Pérez Nathaly Monserrat",
                "Ventura Mateo María José",
                "Villa Nava Iván David",
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
              Mtra. María del Carmen Hernández González
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
