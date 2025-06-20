import { mea, oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// GRUPO A
const alumnos6a = [
  { nombre: "Aburto Ortiz Maria Guadalupe", padrino: "Srta. Arisai Ortiz Sánchez" },
  { nombre: "Bautista Sandria Itziri Bricel", padrino: "Joven Miguel Ángel López Sadria" },
  { nombre: "Beatriz Vazquez Eder Zahir", padrino: "Sara Beatriz Vázquez" },
  { nombre: "Estrada Jimenez Lesly", padrino: "Prof. José Luis Ochoa Utrera" },
  { nombre: "Gonzalez Castillo Ivan", padrino: "Sra. Gavina Hernández Gómez" },
  { nombre: "Hernandez Fernandez Heidi Solanyi", padrino: "Sra. María Magdalena Fernández Burgos" },
  { nombre: "Hernandez Sanchez Juan Carlos", padrino: "Profa. Adriana Matla Valdez" },
  { nombre: "Huesca Marin Santiago", padrino: "Joven Héctor Adrián Huesca Marín" },
  { nombre: "Martinez Hernandez Brian Haziel", padrino: "Lic. Mónica Itzel Ramos Soto" },
  { nombre: "Morales Leal Jorge Santos", padrino: "Srta. Kristal Dalila Huerta Leal" },
  { nombre: "Perez Lopez Azul Scarett", padrino: "Sr. José Alfredo Baizabal Cuz" },
  { nombre: "Rodriguez Aguilar Erica Valeria", padrino: "Señorita. Andrea Selena Aguilar Cruz" },
  { nombre: "Salazar Valdes Ambar Denix", padrino: "Srta. Esmeralda Valdes Cervantes" },
  { nombre: "Vazquez Aburto Erick Gabriel", padrino: "Sra. Eva Esmeralda Rodríguez Vega" },
];

// GRUPO B
const alumnos6b = [
  { nombre: "Badillo Landa Fernando", padrino: "Sr. Antonio Landa Rodríguez" },
  { nombre: "Baez Bautista Sinai", padrino: "Sra. Joselin Zarate Baez" },
  { nombre: "Campos Hernandez Iker Manuel", padrino: "Srta. Wendi Belen Rosas Campos" },
  { nombre: "Galan Enriquez Deymar Yunnet", padrino: "Lic. Anais Martinez Quiroz" },
  { nombre: "Lagunes Melchor Luis Francisco", padrino: "Sra. Aidee Velázquez Rodríguez" },
  { nombre: "Lara Suarez Ivan", padrino: "Sra. Genoveva Suarez Contreras" },
  { nombre: "Mejia Gamboa Jose Bayron", padrino: "Joven Josep Jimenez Gamboa" },
  { nombre: "Meza Diaz Allisson Aime", padrino: "Sra. María Inés Hernández Morales y Sr. Joaquín Díaz Escobedo" },
  { nombre: "Ortiz Velazquez Maria Jose", padrino: "Sra. Ana Luisa Velázquez Melchor" },
  { nombre: "Retureta Trujillo Daniel Heriberto", padrino: "Sra. Elvia Contreras Baez" },
  { nombre: "Rodriguez Juarez Salvador", padrino: "Srta. Lizbeth Barrera Herrera" },
  { nombre: "Suarez Saiza Zoe", padrino: "Srta. Mildred Ariadna Suárez Hernández" },
  { nombre: "Valdes Cervantes Julie", padrino: "Profr. Cesar Jesús Retureta Pozos" },
];

const alumnos6c = [
  { nombre: "Emmanuel Figueroa Carrasco", padrino: "Señora Mariam Itzel Cordoba Carrasco" },
  { nombre: "Zulma Victoria Jazmin Garcia Guevara", padrino: "Señora Maria Araceli Solis Hernandez" },
  { nombre: "Ashlyn Denisse Gutierrez Ruiz", padrino: "Ing. Juan Jesus Orduña Martinez" },
  { nombre: "Melany Nahomy Landa Hernandez", padrino: "Señorita Marbella Halaid Landa Hernandez" },
  { nombre: "Angel Adolfo Lopez Gomez", padrino: "Joven Juan Carlos Lopez Gomez" },
  { nombre: "Manuel Tadeo Mota Sagrero", padrino: "Joven Jan Carlos Diaz Cruz" },
  { nombre: "Marcos Ivan Perez Cortes", padrino: "Señor Reyes Perez Cuteño" },
  { nombre: "Megan Larissa Ramos Morales", padrino: "Señora Gloria Ruiz Libreros" },
  { nombre: "Alondra Denisse Rosas Muñoz", padrino: "Joven Alexis Rosas Mendez" },
  { nombre: "Areli Sanchez Rodriguez", padrino: "Señora Raquel Rodriguez Mendez" }
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
              Profesor: Epigmeo Hernández Romero
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
