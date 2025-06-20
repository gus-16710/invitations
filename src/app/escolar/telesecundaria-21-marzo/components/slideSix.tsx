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
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-100">
        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "A"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Aguilar Aguilar Marco Antonio</li>
            <li>Flores Flores Bárbara Yareni</li>
            <li>Fuentes García Evelyn Maraly</li>
            <li>Gabriel Sánchez Cristopher Alexander</li>
            <li>Hernández Montiel Diego Selim</li>
            <li>Jiménez Fuentes Carlos Adrián</li>
            <li>Rivera López Ángel Arturo</li>
            <li>Rodríguez García Adriana Licyeri</li>
            <li>Rodríguez Hernández Yamiri Yectlanetzi</li>
            <li>Sánchez Avilés Naomi Ester</li>
            <li>Sánchez Escalante Lesly Sajani</li>
            <li>Valencia Movis Mayrani Sinai</li>
            <li>Varela Beltrán Josué</li>
            <li>Vázquez Ferrer Valeria Victoria</li>
            <li>Vela Martínez Christian Jared</li>
            <li>Ventura Mendoza Samira Joselyn</li>
            <li>Victory Cuevas Carlo Alejandro</li>
            <li>Viveros Camacho Juan Pablo</li>
            <li>Viveros Sangabriel Angelica Maricela</li>
          </ol>
          <p className="mt-2">Mtra. Mónica Marisol Ceballos López</p>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "B"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Barradas Díaz Carlos Adán</li>
            <li>Ceballos Toto Aldo</li>
            <li>Colín Hernández Silvia Julieth</li>
            <li>Cortez Solano Fernando</li>
            <li>Cuellar Hernández Ximena</li>
            <li>De Jesús González Karla María</li>
            <li>García Dávila Alisson Brianda</li>
            <li>García Salazar Zuri Janeth</li>
            <li>González Ramírez Diana Denisse</li>
            <li>Guerrero Hernández Ingrid Zoe</li>
            <li>Hernández Flores Katia</li>
            <li>Landa Hernández Israel</li>
            <li>López González Javier Antonio</li>
            <li>Martínez López Paulina Montserrat</li>
            <li>Morales Hoyos Let Azariel</li>
            <li>Rodríguez Vásquez Atzel Roberto</li>
            <li>Salazar Zavaleta Yamil</li>
            <li>Velasco Sorcia Maribel Guadalupe</li>
            <li>Villegas Soto Aldo Sebastián</li>
          </ol>
          <p className="mt-2">Mtra. Elizabeth Hernández Viveros</p>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "C"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Aburto Pedro Jorge Luis</li>
            <li>Aparicio Salas José Isaí</li>
            <li>Castillo Hernández Iván Yair</li>
            <li>Cruz De La Cruz Jensy Quetzali</li>
            <li>Galindo Wadgymar Marco Adriel</li>
            <li>Galván Cantera Claudia Paola</li>
            <li>González Sánchez Braian Uriel</li>
            <li>Lobato Vázquez Demian</li>
            <li>López Hidalgo Kevin De Jesús</li>
            <li>López Melgarejo Cristhian Octavio</li>
            <li>López Soto Yoel</li>
            <li>López Timoteo Luis</li>
            <li>Marcelino Sánchez Luis Fernando</li>
            <li>Martínez Galindo Ambher Yulehidy</li>
            <li>Reyes Aguilera Andrea Michelle</li>
            <li>Sánchez Martínez María Fernanda</li>
            <li>Sánchez Ortega Omar Erasto</li>
            <li>Soto Domínguez Paulette Iraí</li>
            <li>Trujillo Zavaleta Dari Yuliana</li>
          </ol>
          <p className="mt-2">Mtra. Martha Ofelia Roa Íñiguez</p>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4 text-xl font-bold">Tercer grado grupo "D"</h2>
          <ol className="list-disc list-inside space-y-1">
            <li>Amaro Durán Aurora</li>
            <li>Barradas Joachín Sergio Junior</li>
            <li>Domínguez Méndez Agustín</li>
            <li>Durán Hernández Jocelyn</li>
            <li>García Morales Alondra Yoliet</li>
            <li>García Morales Britany Marazul</li>
            <li>Jiménez Peña Carlos Alexis</li>
            <li>Macin Gumecindo Valeria</li>
            <li>Mendizabal Hinojosa Naomi Yoselin</li>
            <li>Miranda Hernández Diego Azael</li>
            <li>Morales Alvarado Zoe</li>
            <li>Morales Pozos Jonathan</li>
            <li>Murrieta Carmona Arlette</li>
            <li>Nieva Guzmán Aisha Abigail</li>
            <li>Ochoa Fuentes Christopher Geovanni</li>
            <li>Rentería Luna Allison Wendolyn</li>
            <li>Rodríguez García Flor Esmeralda</li>
            <li>Soto Parra Fernando Michel</li>
            <li>Valencia Movis Pablo Uriel</li>
            <li>Zavaleta Carballo Abril Lisbeth</li>
            <li>Zendejas Ávila Alondra</li>
          </ol>
          <p className="mt-2">Mtra. Liliana Irene Márquez Solano</p>
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
