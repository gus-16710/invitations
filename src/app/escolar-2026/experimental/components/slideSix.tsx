import { mea } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideSix() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-50 text-6xl mb-5`}>
        Egresados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-100" data-lenis-prevent>
        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "K"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Aburto Herrera Meridy Abril</li>
            <li>Alarcon Colorado Escarlet Amairani</li>
            <li>Beltrand Mancilla Harumi</li>
            <li>Bonilla Ortiz Luis Alberto</li>
            <li>Dominguez Alfonso Janely Samantha</li>
            <li>Duran Juan Hector</li>
            <li>Estudillo Aburto Javier Aziel</li>
            <li>Garcia Montiel Juan Pablo</li>
            <li>Garcia Ramirez Samara</li>
            <li>Garcia Solano Osvaldo</li>
            <li>Hernandez Soto Joel</li>
            <li>Jimenez Vasquez Mildred Aydee</li>
            <li>Juarez Maroto Armando Alberto</li>
            <li>Lopez Garcia Luis Angel</li>
            <li>Mendiola Santos Kevin Alfredo</li>
            <li>Miranda Tepetla Samuel Yashir</li>
            <li>Perez Ortega Johan Ulises</li>
            <li>Rivera Hernandez Sarai Xanthell</li>
            <li>Robles Mundo Gidalti</li>
            <li>Rodriguez Molina Areli Monserrat</li>
            <li>Sanchez Hernandez Gabriel</li>
            <li>Sanchez Ramirez Natalia</li>
            <li>Sanchez Rodriguez Laila Joselyn</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "I"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Ayala Quezada Isaac</li>
            <li>Bautista Gutierrez Citlalli</li>
            <li>Cortes Acosta Ayerim Guadalupe</li>
            <li>Delgado Garcia Alexandra Josselin</li>
            <li>Esteban Hernandez Ana Laura</li>
            <li>Galvan Medina Diana Itzel</li>
            <li>Garcia Gaspar Leonardo Gaston</li>
            <li>Gonzalez Aguilar Diana Itzel</li>
            <li>Gonzalez Camacho Jhonatan Jesua</li>
            <li>Gonzalez Ortega Mateo Emiliano</li>
            <li>Gonzalez Vasquez Noelia Nicole</li>
            <li>Landa Trujillo Danna Paola</li>
            <li>Montero Miranda Allam Persie</li>
            <li>Montiel Rodriguez Emily Ailyn</li>
            <li>Mora Hernandez Daniel</li>
            <li>Morales Bautista Aylin Guadalupe</li>
            <li>Mundo Gomez Alex Ivan</li>
            <li>Pena Dorantes Anny Guadalupe</li>
            <li>Portilla Garcia William Alan</li>
            <li>Quezada Romero Zaira Abigail</li>
            <li>Salazar Martinez Dania Fernanda</li>
            <li>Soto Falfan Vanessa</li>
            <li>Valencia Sanchez Angela Zoe</li>
            <li>Vargas Merida Bayoleth Guadalupe</li>
            <li>Vega Hernandez Cristopher Antonio</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "J"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Aburto Velez Jose Andres</li>
            <li>Ascencion Prado Erika Paulette</li>
            <li>Cervantes Jimenez Cristofer Rodrigo</li>
            <li>Cordoba Hernandez Johana Denisse</li>
            <li>Cordoba Rodriguez Adriana Monserrat</li>
            <li>Cuevas Grajales Maryory Dannae</li>
            <li>Fernandez Garcia Jesus</li>
            <li>Gallardo Mancilla Jade Jorley</li>
            <li>Gonzalez Morales Mavick</li>
            <li>Guiochin Benitez Andrea</li>
            <li>Hernandez Arellano Abraham Maximiliano</li>
            <li>Hernandez Santiago Georgina</li>
            <li>Lopez Amador Johnny</li>
            <li>Lopez Sanchez Quetzalli</li>
            <li>Lozada Dominguez Victor Javier</li>
            <li>Martinez Alonso Kevin Joel</li>
            <li>Martinez Martinez Mathias Jadiel</li>
            <li>Martinez Ramirez Valeria</li>
            <li>Martinez Rodriguez Dulce Valeria</li>
            <li>Mendoza Gonzalez Ian David</li>
            <li>Paredes Herrera Sharik Yareni</li>
            <li>Quintanar Tijerina Miranda</li>
            <li>Quinones Reyes Marcos Yair</li>
            <li>Reyes Aguilar Daira Izamar</li>
            <li>Rojas Hernandez Nahomi Michelle</li>
            <li>Sanchez Villanueva Alexa Regina</li>
            <li>Vazquez Martinez Brayson Daniel</li>
            <li>Velazquez Munoz Iker Leonel</li>
            <li>Zavaleta Lobato Joshua</li>
          </ol>
        </div>
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-100" />
      </motion.div>
    </motion.section>
  );
}
