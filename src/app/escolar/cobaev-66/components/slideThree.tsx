import { dancing, mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${dancing.className} text-zinc-50 text-6xl mb-10`}>
        Egresados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] z-50">
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Aguilar Segovia Adriana
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Argüello Clemente Melanie Aime
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Barrientos Burgos Lizeth Esperanza
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Bautista Vega Arisbeth
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Bello Suárez Rodrigo
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Bravo Grimaldo Luis Noé
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Campusano Guzmán Daniela Janai
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Carreón Cornejo Karla Lizeth
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Conde Montero Marely
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Contreras Navarro Natalia Guadalupe
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">Díaz Gálvez Donají</p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Fernández Ojeda Karol Itzel
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Filobello Rivera Dulce Victoria
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          García Cervantes Héctor Zabdiel
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Gómez Santamaría Omar Antuán
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Guzmán Lárruz Pedro Joaquín
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Hernández Alarcón Iván
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Hernández Lozano Carolina Itzel
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Jiménez Martín Eliel
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Landa Hernández Karen Lizeth
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Landa Murrieta Javier
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Lozada Contreras Paola
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">Marín Díaz Sayuri</p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Martínez Libreros Alan
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Melo Martínez Alexis
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Méndez Carballo Ximena
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Monfil Caballero Omar
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Montero Ramírez Luis Alberto
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Morales Espinoza Jorge Luis
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Morales López Elidia Analit
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Morales Martínez Natividad Mario
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Ochoa Rosendo Yeudiel
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Palestina Viveros Josselyn
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Palestina Viveros Oralis
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Pantoja Castillo Viridiana
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">Pérez Loeza Sergio</p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Prieto Castillo Paola Isidora
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Rivera Viveros Cristopher
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Rivero Prieto Melany
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Rodríguez Aguilar Julio Alberto
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Romero Romero Karol Mariana
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Salazar Badillo Arlette Marisol
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Saldaña Rosales Grisel Alexandra
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Sánchez Hernández Juan De Jesús
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Santamaría Timoteo Berenice
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Utrera García Dionne
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Vázquez Aguilar Paola Fernanda
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Velasco Monroy Oriana
        </p>
        <p className="text-zinc-50 text-center mb-5 mx-5">
          Villa Pérez Darin Quimey
        </p>
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-100 text-xl" />
      </motion.div>
    </motion.section>
  );
}
