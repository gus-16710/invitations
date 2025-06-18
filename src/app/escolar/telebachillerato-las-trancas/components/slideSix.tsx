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
          <h2 className="mb-4">
            Área Humanidades y Ciencias Sociales – 1
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Aguilar Martínez Jennifer</li>
            <li>Callejas Colorado Carlos Yair</li>
            <li>Carmona García Lessly Nicole</li>
            <li>Domínguez Pedraza Miguel</li>
            <li>García Báez Dania</li>
            <li>García García Briseyda Yareth</li>
            <li>Hernández Fernández Avril Estefania</li>
            <li>Hernández Jacome Jordy</li>
            <li>Macedo Vázquez Fatima Valeria</li>
            <li>Ojeda Hernández Christian Yael</li>
            <li>Rivera Ávila Erica Edith</li>
            <li>Rivera Ávila Eunice Shirel</li>
            <li>Rodríguez Cano Aurora Sahad</li>
            <li>Rodríguez Landa Christopher Johan</li>
            <li>Torales Hueto Luis Alejandro</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">
            Área Humanidades y Ciencias Sociales – 2
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Anastasio García Alexis Mandian</li>
            <li>Arroyo Villanueva Alonso</li>
            <li>Becerra Antemate Gabriel</li>
            <li>Casas López Vieri Ronaldo</li>
            <li>Castañeda Aguilar Armando</li>
            <li>Cruz Vázquez Mirna Lizbeth</li>
            <li>Del Moral Ruiz Brandon Eliseo</li>
            <li>Deloya Romero Braulio Denill</li>
            <li>Diaz Juárez Yanesa Airan</li>
            <li>Duran Aragón María Fernanda</li>
            <li>Estrada Álvarez Aldemaro</li>
            <li>García Molina Yaretzi Yamileth</li>
            <li>Gutiérrez Duran Samuel Eli</li>
            <li>Hernández Pereda Luis Alexis</li>
            <li>Hernández Rodríguez Alexis Nahum</li>
            <li>López Arcos Lúa Fernanda</li>
            <li>López Sánchez Melissa Guadalupe</li>
            <li>Lozano Ruiz Yosman</li>
            <li>Martínez Rosas Claudia Alexandra</li>
            <li>Mora Mota Ana Patricia</li>
            <li>Mora Vásquez Estefanía</li>
            <li>Morales Luna Ángel Luis</li>
            <li>Pacheco Caballero Michael</li>
            <li>Rodríguez Melchor Kevin Jalil</li>
            <li>Rodríguez Rivas Rubén Erubiel</li>
            <li>Romero Guízar Helen Naomi</li>
            <li>Tejeda Vásquez Ángel Daniel</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">
            Área Químico – Biológico
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Báez Benítez José Jafet</li>
            <li>Castillo Canche Roandy Alexander</li>
            <li>Corrales Ortiz Eduardo</li>
            <li>Delgado Domínguez Cesar Jahir</li>
            <li>Estrella Ramírez Luz Guadalupe</li>
            <li>Gómez Mota Enzo Vicente</li>
            <li>Hernández Hernández Pamela</li>
            <li>Hernández Mora Megan Danae</li>
            <li>Hernández Ventura Vanesa Mayte</li>
            <li>López Hernández Rubén Daniel</li>
            <li>Merino Rodríguez Leydi Ivette</li>
            <li>Montes Arguello Natalia</li>
            <li>Murillo Murillo Mariela</li>
            <li>Pérez Marín Jesús Eduardo</li>
            <li>Pérez Mavil María Fernanda</li>
            <li>Reyes Jaen Brenda</li>
            <li>Rodríguez Trujillo Karla Pamela</li>
            <li>Saldaña Méndez Laura Yazmin</li>
            <li>Solano Hernández Luz Estrella</li>
            <li>Topal Álvarez Dulce Sugey</li>
            <li>Valencia Reyes Daira Guadalupe</li>
            <li>Valencia Rico Nahomi Estrella</li>
            <li>Vega Rosas Diego Alexander</li>
            <li>Villa Escobedo Osvaldo</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">
            Área Económico – Administrativo
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Chávez Rosas Omar Humberto</li>
            <li>Del Carmen Bautista Lesli Anahí</li>
            <li>García Eliosa David</li>
            <li>García Hernández Luz Estrella</li>
            <li>García Martínez Carlos Daniel</li>
            <li>García Rizo Erick</li>
            <li>Guerrero Domínguez Arizbeth</li>
            <li>Hernández De Jesús Alessandra</li>
            <li>Hernández Galindo Guadalupe</li>
            <li>Jacome Zubizarreta Rafael</li>
            <li>López Saldaña Yesica Guadalupe</li>
            <li>Martínez Cervantes Brian</li>
            <li>Ortega Contreras Paola</li>
            <li>Vázquez Romero Diego Danahel</li>
            <li>Vázquez Trujillo Juan Sebastián</li>
            <li>Velázquez Chávez Ivanna Elizabeth</li>
          </ol>
        </div>

        <div className="mb-10 flex flex-col justify-center items-center">
          <h2 className="mb-4">
            Área Físico – Matemático
          </h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Aburto López Yesenia Saray</li>
            <li>Báez Guzmán Marjoree del Carmen</li>
            <li>Castillo Luria Montserrat</li>
            <li>Clemente Sánchez David</li>
            <li>Clemente Tlapa José Alberto</li>
            <li>De la cruz Zaragoza Angelica</li>
            <li>García Martínez Vania</li>
            <li>Gómez Guzmán Luz María</li>
            <li>Jiménez Flores Axel Gregory</li>
            <li>Ruiz Ku Inci Yolotzin</li>
            <li>Solano Ramírez Irving Arthur</li>
            <li>Tapia Paulino José Ángel</li>
            <li>Trujillo Luna Lesly Yaretzi</li>
            <li>Uriarte Loeza Luis Arturo</li>
            <li>Vásquez Cardeña Alexandra Julieth</li>
            <li>Vázquez Diaz Jacob Esaú</li>
            <li>Velásquez López Naomi Saraí</li>
          </ol>
        </div>
      </ScrollShadow>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>
    </motion.section>
  );
}
