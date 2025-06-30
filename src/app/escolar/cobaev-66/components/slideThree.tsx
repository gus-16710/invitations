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
      <ScrollShadow hideScrollBar className="h-[400px] z-50 text-zinc-100">
        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">603</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Alvarado Jiménez Damían</li>
            <li>Alvarado Mendoza Deniss Jacqueline</li>
            <li>Arrieta Cruz José Mariano</li>
            <li>Ávila Ortíz Yeimi Victoria</li>
            <li>Callejas Navarro Felipe de Jesús</li>
            <li>Candelario Hernández Erick Alexander</li>
            <li>Castañeda López Israel</li>
            <li>Castillo Hernández Zuleima Angelyn</li>
            <li>Cerón Pérez Génesis Valeria</li>
            <li>Domínguez Domínguez Azucena</li>
            <li>Domínguez Guerrero Uriel</li>
            <li>Escobar Viveros Carlos</li>
            <li>García Huerta Carlos de Jesús</li>
            <li>García Reyes Heriberto Isaac</li>
            <li>Hernández Carmona Angel Armando</li>
            <li>Juárez Sarabia Estrella</li>
            <li>Marcial Cerón Oscar Norberto</li>
            <li>Martínez Ocotl José Alvaro</li>
            <li>Moreno Luna Dayra Jimena</li>
            <li>Paulino Salazar Luis Manuel</li>
            <li>Rincón Callejas Axel Rodrigo</li>
            <li>Roa Espinoza Juan Carlos</li>
            <li>Rodríguez Salas Ángel Yahir</li>
            <li>Torres López Miguel Ángel</li>
          </ol>
        </div>

        
        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">602</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Aguilar Segovia Adriana</li>
            <li>Argüello Clemente Melanie Aime</li>
            <li>Barrientos Burgos Lizeth Esperanza</li>
            <li>Bautista Vega Arisbeth</li>
            <li>Bello Suárez Rodrigo</li>
            <li>Bravo Grimaldo Luis Noé</li>
            <li>Campusano Guzmán Daniela Janai</li>
            <li>Carreón Cornejo Karla Lizeth</li>
            <li>Conde Montero Marely</li>
            <li>Contreras Navarro Natalia Guadalupe</li>
            <li>Díaz Gálvez Donají</li>
            <li>Fernández Ojeda Karol Itzel</li>
            <li>Filobello Rivera Dulce Victoria</li>
            <li>García Cervantes Héctor Zabdiel</li>
            <li>Gómez Santamaría Omar Antuán</li>
            <li>Guzmán Lárruz Pedro Joaquín</li>
            <li>Hernández Alarcón Iván</li>
            <li>Hernández Lozano Carolina Itzel</li>
            <li>Jiménez Martín Eliel</li>
            <li>Landa Hernández Karen Lizeth</li>
            <li>Landa Murrieta Javier</li>
            <li>Lozada Contreras Paola</li>
            <li>Marín Díaz Sayuri</li>
            <li>Martínez Libreros Alan</li>
            <li>Melo Martínez Alexis</li>
            <li>Méndez Carballo Ximena</li>
            <li>Monfil Caballero Omar</li>
            <li>Montero Ramírez Luis Alberto</li>
            <li>Morales Espinoza Jorge Luis</li>
            <li>Morales López Elidia Analit</li>
            <li>Morales Martínez Natividad Mario</li>
            <li>Ochoa Rosendo Yeudiel</li>
            <li>Palestina Viveros Josselyn</li>
            <li>Palestina Viveros Oralis</li>
            <li>Pantoja Castillo Viridiana</li>
            <li>Pérez Loeza Sergio</li>
            <li>Prieto Castillo Paola Isidora</li>
            <li>Rivera Viveros Cristopher</li>
            <li>Rivero Prieto Melany</li>
            <li>Rodríguez Aguilar Julio Alberto</li>
            <li>Romero Romero Karol Mariana</li>
            <li>Salazar Badillo Arlette Marisol</li>
            <li>Saldaña Rosales Grisel Alexandra</li>
            <li>Sánchez Hernández Juan De Jesús</li>
            <li>Santamaría Timoteo Berenice</li>
            <li>Utrera García Dionne</li>
            <li>Vázquez Aguilar Paola Fernanda</li>
            <li>Velasco Monroy Oriana</li>
            <li>Villa Pérez Darin Quimey</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">601</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Acuña Villalobos Silvia Paola</li>
            <li>Aguilar Rodríguez Berenice</li>
            <li>Arriola Rosas Nely Vanessa</li>
            <li>Bárcenas López Saúl</li>
            <li>Bravo Martínez Diego Gilberto</li>
            <li>Ceballos Rivera Miriam</li>
            <li>Chávez García Sofía Nicole</li>
            <li>Cortez Leal Alondra</li>
            <li>Domínguez Baizabal Kristyell Monserrat</li>
            <li>García López Axel Ivane</li>
            <li>García Sánchez Luz Angélica</li>
            <li>García Zendejas Leilani Yeraldine</li>
            <li>Gómez Herrera Ángel de Jesús</li>
            <li>Gutiérrez Meza Lesly Johana</li>
            <li>Hernández Cruz Vanessa</li>
            <li>Hernández Lara Aranza</li>
            <li>Hernández Molina Laura Marbella</li>
            <li>Hernández Villegas Fanny Ailin</li>
            <li>Jiménez Domínguez Miguel Ángel</li>
            <li>Juárez Viveros Arlet Ivonne</li>
            <li>Julián Ramírez Abigail</li>
            <li>Lagunes Vera Silvia</li>
            <li>Landa Gómez Luis Alejandro</li>
            <li>Landa Trujillo Sandra Yasmín</li>
            <li>Landa Zárate Damaris Vanessa</li>
            <li>López González Jaxiri Jamiled</li>
            <li>Martínez Domínguez Ángel Jesús</li>
            <li>Martínez Flores Azul Guadalupe</li>
            <li>Martínez Flores Mayana Evelyn</li>
            <li>Martínez Huerta Óscar de Jesús</li>
            <li>Martínez Téllez Valeria Anahí</li>
            <li>Méndez Gómez Dara Dominique</li>
            <li>Méndez Trujillo Vannelli Danniel</li>
            <li>Mendoza Gándara Brenda Anahí</li>
            <li>Morales Vásquez Diego Alexis</li>
            <li>Munguía Ochoa Leonardo Gabriel</li>
            <li>Quiroz Delgado Ángel Cristobal</li>
            <li>Reyes Gallegos Milena Mahareth</li>
            <li>Rincón Callejas Kevin Yahir</li>
            <li>Rivera Hernández Michell</li>
            <li>Rodríguez Sosa Alexa Michel</li>
            <li>Romero Avilés Eva Cristina</li>
            <li>Salas Viveros Héctor Antonio</li>
            <li>Saldaña Rosales Leslie Carelly</li>
            <li>Sayago Conde Brayan Daniel</li>
            <li>Vega Ortega Luis Alberto</li>
            <li>Velásquez Fernández Viniza Daniela</li>
          </ol>
        </div>
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

{
  /* <p className="text-zinc-50 text-center mb-5 mx-5">
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
        </p> */
}
