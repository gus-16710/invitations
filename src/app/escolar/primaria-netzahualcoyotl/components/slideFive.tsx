import { mea, oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// GRUPO A
const alumnos6a = [
  { nombre: "Aburto Ortiz María Guadalupe", padrino: "Srta. Arisai Ortiz Sánchez" },
  { nombre: "Bautista Sandria Itziri Bricel", padrino: "Joven Miguel Ángel López Sandria" },
  { nombre: "Beatriz Vázquez Eder Zahir", padrino: "Sra. Beatriz Vázquez" },
  { nombre: "Estrada Jiménez Lesly", padrino: "Prof. José Luis Ochoa Utrera" },
  { nombre: "González Castillo Iván", padrino: "Sra. Gavina Hernández Gómez" },
  { nombre: "Hernández Fernández Heidi Solanyi", padrino: "Sra. María Magdalena Fernández Burgos" },
  { nombre: "Hernández Sánchez Juan Carlos", padrino: "Profa. Adriana Matla Valdez" },
  { nombre: "Huesca Marín Santiago", padrino: "Joven Héctor Adrián Huesca Marín" },
  { nombre: "Martínez Hernández Brian Haziel", padrino: "Lic. Mónica Itzel Ramos Soto" },
  { nombre: "Morales Leal Jorge Santos", padrino: "Srta. Kristal Dalila Huerta Leal" },
  { nombre: "Pérez López Azul Scarett", padrino: "Sr. José Alfredo Baizabal Cuz" },
  { nombre: "Rodríguez Aguilar Érica Valeria", padrino: "Srta. Andrea Selena Aguilar Cruz" },
  { nombre: "Salazar Valdés Ámbar Denix", padrino: "Srta. Esmeralda Valdés Cervantes" },
  { nombre: "Vázquez Aburto Erick Gabriel", padrino: "Sra. Eva Esmeralda Rodríguez Vega" },
];

// GRUPO B
const alumnos6b = [
  { nombre: "Badillo Landa Fernando", padrino: "Sr. Antonio Landa Rodríguez" },
  { nombre: "Báez Bautista Sinaí", padrino: "Sra. Joselin Zárate Báez" },
  { nombre: "Campos Hernández Iker Manuel", padrino: "Srta. Wendi Belén Rosas Campos" },
  { nombre: "Galán Enríquez Deymar Yunnet", padrino: "Lic. Anaís Martínez Quiróz" },
  { nombre: "Lagunes Melchor Luis Francisco", padrino: "Sra. Aidé Velázquez Rodríguez" },
  { nombre: "Lara Suárez Iván", padrino: "Sra. Genoveva Suárez Contreras" },
  { nombre: "Mejía Gamboa José Bayron", padrino: "Joven Josep Jiménez Gamboa" },
  { nombre: "Meza Díaz Allisson Aimeé", padrino: "Sra. María Inés Hernández Morales y Sr. Joaquín Díaz Escobedo" },
  { nombre: "Ortiz Velázquez María José", padrino: "Sra. Ana Luisa Velázquez Melchor" },
  { nombre: "Retureta Trujillo Daniel Heriberto", padrino: "Sra. Elvia Contreras Báez" },
  { nombre: "Rodríguez Juárez Salvador", padrino: "Srta. Lizbeth Barrera Herrera" },
  { nombre: "Suárez Saiza Zoé", padrino: "Srta. Mildred Ariadna Suárez Hernández" },
  { nombre: "Valdés Cervantes Julie", padrino: "Profr. César Jesús Retureta Pozos" },
];

const alumnos6c = [
  { nombre: "Emmanuel Figueroa Carrasco", padrino: "Sra. Mariam Itzel Córdoba Carrasco" },
  { nombre: "Zulma Victoria Jazmín García Guevara", padrino: "Sra. María Araceli Solís Hernández" },
  { nombre: "Ashlyn Denisse Gutiérrez Ruiz", padrino: "Ing. Juan Jesús Orduña Martínez" },
  { nombre: "Melany Nahomy Landa Hernández", padrino: "Srta. Marbella Halaid Landa Hernández" },
  { nombre: "Ángel Adolfo López Gómez", padrino: "Joven Juan Carlos López Gómez" },
  { nombre: "Manuel Tadeo Mota Sagrero", padrino: "Joven Jan Carlos Díaz Cruz" },
  { nombre: "Marcos Iván Pérez Cortés", padrino: "Sr. Reyes Pérez Cuteño" },
  { nombre: "Megan Larissa Ramos Morales", padrino: "Sra. Gloria Ruiz Libreros" },
  { nombre: "Alondra Denisse Rosas Muñoz", padrino: "Joven Alexis Rosas Méndez" },
  { nombre: "Areli Sánchez Rodríguez", padrino: "Sra. Raquel Rodríguez Méndez" },
];

export default function SlideFive() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${oleo.className} text-zinc-800 text-5xl mb-5`}>
        Padrinos
      </h1>

      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-800 w-72">
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Grupo A */}
          <div>
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Sexto grado grupo "A"
            </h2>
            <div className="space-y-4">
              {alumnos6a.map((alumno, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-base">
                    <FaGraduationCap className="text-xl" />
                    <span>{alumno.nombre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 text-sm mt-2 md:mt-0">
                    <FaUserTie className="text-lg" />
                    <span>{alumno.padrino}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-zinc-800">
              Profesora: Adriana Iveth Matla Valdez
            </p>
          </div>

          {/* Grupo B */}
          <div>
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Sexto grado grupo "B"
            </h2>
            <div className="space-y-4">
              {alumnos6b.map((alumno, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-base">
                    <FaGraduationCap className="text-xl" />
                    <span>{alumno.nombre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 text-sm mt-2 md:mt-0">
                    <FaUserTie className="text-lg" />
                    <span>{alumno.padrino}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-zinc-800">
              Profesora: María del Rosario Amaya Acosta
            </p>
          </div>

          {/* Grupo B */}
          <div>
            <h2 className="text-center text-xl font-bold text-gray-800 mb-4">
              Sexto grado grupo "C"
            </h2>
            <div className="space-y-4">
              {alumnos6c.map((alumno, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-base">
                    <FaGraduationCap className="text-xl" />
                    <span>{alumno.nombre}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-700 text-sm mt-2 md:mt-0">
                    <FaUserTie className="text-lg" />
                    <span>{alumno.padrino}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-zinc-800">
              Profesor: Epigmenio Hernández Romero
            </p>
          </div>
        </div>
      </ScrollShadow>

      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown className="text-zinc-800 text-xl" />
      </motion.div>
    </motion.section>
  );
}
