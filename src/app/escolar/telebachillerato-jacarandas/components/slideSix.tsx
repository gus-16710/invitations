import { mea, oleo, ovo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { ImPointDown } from "react-icons/im";

export default function SlideSix() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center custom-shadow"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-50 text-6xl mb-5`}>
        Egresados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-100 w-72">
        {/* Químico Biológico */}
        <div className={`${ovo.className} mb-10 flex flex-col justify-center items-center`}>
          <h2 className="mb-4 text-xl font-bold">Químico Biológico</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>
              Galván Huerta Alejandra
              <br />
              <label className="ml-4">Ing. Juan Pablo Cardona Sánchez</label>
            </li>
            <li>
              García Mestizo Luis Enrique
              <br />
              <label className="ml-4">Sra. Marina Mestizo Rojas</label>
            </li>
            <li>
              Hernández García Juana Estefanía
              <br />
              <label className="ml-4">Sr. Salatiel Hernández Morales</label>
            </li>
            <li>
              Hernández Peredo Ángel David
              <br />
              <label className="ml-4">Ing. Ricardo Hernández Bello</label>
            </li>
            <li>
              Malpica de la Cruz Valeria
              <br />
              <label className="ml-4">Sr. José David Malpica Yeo</label>
            </li>
            <li>
              Obando Castañeda Ximena Alizée
              <br />
              <label className="ml-4">
                Mtra. Miriam de la Caridad Castañeda Hernández
              </label>
            </li>
            <li>
              Rodríguez Guzmán Marleny
              <br />
              <label className="ml-4">C. Evelyn León García</label>
            </li>
            <li>
              Ruiz Casiano María Fernanda
              <br />
              <label className="ml-4">Sr. Samuel Ruiz Castillo</label>
            </li>
            <li>
              Sánchez González Ana María
              <br />
              <label className="ml-4">Sra. Rosa Isela Reyes Méndez</label>
            </li>
            <li>
              Vargas Castañeda Sergio
              <br />
              <label className="ml-4">
                Lic. Marlory Trinidad Vargas Castañeda
              </label>
            </li>
            <li>
              Velasco Rivera Omar Abdias
              <br />
              <label className="ml-4">Lic. Juan Moreno Linares</label>
            </li>
          </ol>
        </div>

        {/* Humanidades y Ciencias Sociales */}
        <div className={`${ovo.className} mb-10 flex flex-col justify-center items-center`}>
          <h2 className="mb-4 text-xl font-bold text-center">
            Humanidades y Ciencias Sociales
          </h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>
              Arroyo Medrano Angélica
              <br />
              <label className="ml-4">Prof. Rui Anthuani Sosa Vásquez</label>
            </li>
            <li>
              Campos Báez Dominique
              <br />
              <label className="ml-4">Lic. Angéla Fernanda Campos Báez</label>
            </li>
            <li>
              Carmona Saenz Romina Meritxell
              <br />
              <label className="ml-4">Ing. Juan José Ruiz Valdez</label>
            </li>
            <li>
              Del Ángel Juárez Alan Gael
              <br />
              <label className="ml-4">
                Lic. Edgar Alberto Del Ángel Gutiérrez
              </label>
            </li>
            <li>
              Guapillo Pacheco Jonathan de Jesús
              <br />
              <label className="ml-4">Sra. María Alonso Briceño</label>
            </li>
            <li>
              Hernández Blanco Orlando
              <br />
              <label className="ml-4">Sra. Nancy Blanco González</label>
            </li>
            <li>
              Landa Chimal Yuzmani Alexandra
              <br />
              <label className="ml-4">Lic. Gloria Landa Aburto</label>
            </li>
            <li>
              Landa López Santiago
              <br />
              <label className="ml-4">Lic. María Luisa Landa Hernández</label>
            </li>
            <li>
              Lastra Juárez Kevin
              <br />
              <label className="ml-4">Sr. Héctor Lastra Hernández</label>
            </li>
            <li>
              Limón García Estrella Abigail
              <br />
              <label className="ml-4">Sra. Reyna García Guevara</label>
            </li>
            <li>
              López Mundo Dylan
              <br />
              <label className="ml-4">
                Lic. María de Lourdes Mundo Martínez
              </label>
            </li>
            <li>
              Ramírez Colorado Bernardo de Jesús
              <br />
              <label className="ml-4">Yhael Amor Baéz</label>
            </li>
            <li>
              Rivas Martínez Sandra Alondra
              <br />
              <label className="ml-4">
                Sra. María Teresa de Jesús Benítez Martínez
              </label>
            </li>
            <li>
              Tejeda Macías Pamela Vanessa
              <br />
              <label className="ml-4">Prof. Roger Bartolo Martínez</label>
            </li>
            <li>
              Toribio Felipe Araceli
              <br />
              <label className="ml-4">Srta. Anayeli Toribio Felipe</label>
            </li>
            <li>
              Zavala Andrade Seoanne
              <br />
              <label className="ml-4">
                Profa. Scarlett Sayam Zavala Andrade
              </label>
            </li>
          </ol>
        </div>

        {/* Físico-Matemático */}
        <div className={`${ovo.className} mb-10 flex flex-col justify-center items-center`}>
          <h2 className="mb-4 text-xl font-bold">Físico-Matemático</h2>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>
              Acosta Julio Efren Crescencio
              <br />
              <label className="ml-4">Sra. Cristina López Hernández</label>
            </li>
            <li>
              Andraca Cruz Melane Monserrat
              <br />
              <label className="ml-4">Sra. Elvia Hernández Salazar</label>
            </li>
            <li>
              Galván Pérez Yulihana
              <br />
              <label className="ml-4">Lic. Omar Ruiz García</label>
            </li>
            <li>
              Hernández Cruz Joshelyn
              <br />
              <label className="ml-4">Mtro. Williams Lagunes Amaya</label>
            </li>
            <li>
              Hernández García Natalia
              <br />
              <label className="ml-4">Sr. Salatiel Hernández Morales</label>
            </li>
            <li>
              Hernández Velázquez Ari Daniel
              <br />
              <label className="ml-4">Sr. Miguel Ángel Hernández Lucio</label>
            </li>
            <li>
              Jiménez Cuevas Brian Alexis
              <br />
              <label className="ml-4">Ing. Yoselin Uribe Simeón</label>
            </li>
            <li>
              López García Diego Bladimir
              <br />
              <label className="ml-4">Sr. Israel Rodríguez Libreros</label>
            </li>
            <li>
              Mújica Gutiérrez Carlos Uriel
              <br />
              <label className="ml-4">
                Srita. Alejandra Hernández Rodríguez
              </label>
            </li>
            <li>
              Sánchez López Enja Yanel
              <br />
              <label className="ml-4">Prof. Alfonso Figueroa Fernández</label>
            </li>
          </ol>
        </div>
      </ScrollShadow>

      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <ImPointDown className="text-zinc-200 text-xl" />
      </motion.div>
    </motion.section>
  );
}
