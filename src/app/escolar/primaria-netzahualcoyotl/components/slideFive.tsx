import { mea, oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// // GRUPO A
// const alumnos6a = [
//   { nombre: "Aburto Ortiz Maria Guadalupe", padrino: "Srta. Arisai Ortiz Sánchez" },
//   { nombre: "Bautista Sandria Itziri Bricel", padrino: "Joven Miguel Ángel López Sadria" },
//   { nombre: "Beatriz Vazquez Eder Zahir", padrino: "Sara Beatriz Vázquez" },
//   { nombre: "Estrada Jimenez Lesly", padrino: "Prof. José Luis Ochoa Utrera" },
//   { nombre: "Gonzalez Castillo Ivan", padrino: "Sra. Gavina Hernández Gómez" },
//   { nombre: "Hernandez Fernandez Heidi Solanyi", padrino: "Sra. María Magdalena Fernández Burgos" },
//   { nombre: "Hernandez Sanchez Juan Carlos", padrino: "Profa. Adriana Matla Valdez" },
//   { nombre: "Huesca Marin Santiago", padrino: "Joven Héctor Adrián Huesca Marín" },
//   { nombre: "Martinez Hernandez Brian Haziel", padrino: "Lic. Mónica Itzel Ramos Soto" },
//   { nombre: "Morales Leal Jorge Santos", padrino: "Srta. Kristal Dalila Huerta Leal" },
//   { nombre: "Perez Lopez Azul Scarett", padrino: "Sr. José Alfredo Baizabal Cuz" },
//   { nombre: "Rodriguez Aguilar Erica Valeria", padrino: "Señorita. Andrea Selena Aguilar Cruz" },
//   { nombre: "Salazar Valdes Ambar Denix", padrino: "Srta. Esmeralda Valdes Cervantes" },
//   { nombre: "Vazquez Aburto Erick Gabriel", padrino: "Sra. Eva Esmeralda Rodríguez Vega" },
// ];

// // GRUPO B
// const alumnos6b = [
//   { nombre: "Badillo Landa Fernando", padrino: "Sr. Antonio Landa Rodríguez" },
//   { nombre: "Baez Bautista Sinai", padrino: "Sra. Joselin Zarate Baez" },
//   { nombre: "Campos Hernandez Iker Manuel", padrino: "Srta. Wendi Belen Rosas Campos" },
//   { nombre: "Galan Enriquez Deymar Yunnet", padrino: "Lic. Anais Martinez Quiroz" },
//   { nombre: "Lagunes Melchor Luis Francisco", padrino: "Sra. Aidee Velázquez Rodríguez" },
//   { nombre: "Lara Suarez Ivan", padrino: "Sra. Genoveva Suarez Contreras" },
//   { nombre: "Mejia Gamboa Jose Bayron", padrino: "Joven Josep Jimenez Gamboa" },
//   { nombre: "Meza Diaz Allisson Aime", padrino: "Sra. María Inés Hernández Morales y Sr. Joaquín Díaz Escobedo" },
//   { nombre: "Ortiz Velazquez Maria Jose", padrino: "Sra. Ana Luisa Velázquez Melchor" },
//   { nombre: "Retureta Trujillo Daniel Heriberto", padrino: "Sra. Elvia Contreras Baez" },
//   { nombre: "Rodriguez Juarez Salvador", padrino: "Srta. Lizbeth Barrera Herrera" },
//   { nombre: "Suarez Saiza Zoe", padrino: "Srta. Mildred Ariadna Suárez Hernández" },
//   { nombre: "Valdes Cervantes Julie", padrino: "Profr. Cesar Jesús Retureta Pozos" },
// ];

// const alumnos6c = [
//   { nombre: "Emmanuel Figueroa Carrasco", padrino: "Señora Mariam Itzel Cordoba Carrasco" },
//   { nombre: "Zulma Victoria Jazmin Garcia Guevara", padrino: "Señora Maria Araceli Solis Hernandez" },
//   { nombre: "Ashlyn Denisse Gutierrez Ruiz", padrino: "Ing. Juan Jesus Orduña Martinez" },
//   { nombre: "Melany Nahomy Landa Hernandez", padrino: "Señorita Marbella Halaid Landa Hernandez" },
//   { nombre: "Angel Adolfo Lopez Gomez", padrino: "Joven Juan Carlos Lopez Gomez" },
//   { nombre: "Manuel Tadeo Mota Sagrero", padrino: "Joven Jan Carlos Diaz Cruz" },
//   { nombre: "Marcos Ivan Perez Cortes", padrino: "Señor Reyes Perez Cuteño" },
//   { nombre: "Megan Larissa Ramos Morales", padrino: "Señora Gloria Ruiz Libreros" },
//   { nombre: "Alondra Denisse Rosas Muñoz", padrino: "Joven Alexis Rosas Mendez" },
//   { nombre: "Areli Sanchez Rodriguez", padrino: "Señora Raquel Rodriguez Mendez" }
// ];

// // GRUPO A
// const alumnos6a = [
//   { nombre: "Aburto Ortiz María Guadalupe", padrino: "Srta. Arisai Ortiz Sánchez" },
//   { nombre: "Bautista Sandria Itziri Bricel", padrino: "Joven Miguel Ángel López Sandria" },
//   { nombre: "Beatriz Vázquez Eder Zahir", padrino: "Sra. Beatriz Vázquez" },
//   { nombre: "Estrada Jiménez Lesly", padrino: "Prof. José Luis Ochoa Utrera" },
//   { nombre: "González Castillo Iván", padrino: "Sra. Gavina Hernández Gómez" },
//   { nombre: "Hernández Fernández Heidi Solanyi", padrino: "Sra. María Magdalena Fernández Burgos" },
//   { nombre: "Hernández Sánchez Juan Carlos", padrino: "Profa. Adriana Matla Valdez" },
//   { nombre: "Huesca Marín Santiago", padrino: "Joven Héctor Adrián Huesca Marín" },
//   { nombre: "Martínez Hernández Brian Haziel", padrino: "Lic. Mónica Itzel Ramos Soto" },
//   { nombre: "Morales Leal Jorge Santos", padrino: "Srta. Kristal Dalila Huerta Leal" },
//   { nombre: "Pérez López Azul Scarett", padrino: "Sr. José Alfredo Baizabal Cuz" },
//   { nombre: "Rodríguez Aguilar Érica Valeria", padrino: "Srta. Andrea Selena Aguilar Cruz" },
//   { nombre: "Salazar Valdés Ámbar Denix", padrino: "Srta. Esmeralda Valdés Cervantes" },
//   { nombre: "Vázquez Aburto Erick Gabriel", padrino: "Sra. Eva Esmeralda Rodríguez Vega" },
// ];

// // GRUPO B
// const alumnos6b = [
//   { nombre: "Badillo Landa Fernando", padrino: "Sr. Antonio Landa Rodríguez" },
//   { nombre: "Báez Bautista Sinaí", padrino: "Sra. Joselin Zárate Báez" },
//   { nombre: "Campos Hernández Iker Manuel", padrino: "Srta. Wendi Belén Rosas Campos" },
//   { nombre: "Galán Enríquez Deymar Yunnet", padrino: "Lic. Anaís Martínez Quiróz" },
//   { nombre: "Lagunes Melchor Luis Francisco", padrino: "Sra. Aidé Velázquez Rodríguez" },
//   { nombre: "Lara Suárez Iván", padrino: "Sra. Genoveva Suárez Contreras" },
//   { nombre: "Mejía Gamboa José Bayron", padrino: "Joven Josep Jiménez Gamboa" },
//   { nombre: "Meza Díaz Allisson Aimeé", padrino: "Sra. María Inés Hernández Morales y Sr. Joaquín Díaz Escobedo" },
//   { nombre: "Ortiz Velázquez María José", padrino: "Sra. Ana Luisa Velázquez Melchor" },
//   { nombre: "Retureta Trujillo Daniel Heriberto", padrino: "Sra. Elvia Contreras Báez" },
//   { nombre: "Rodríguez Juárez Salvador", padrino: "Srta. Lizbeth Barrera Herrera" },
//   { nombre: "Suárez Saiza Zoé", padrino: "Srta. Mildred Ariadna Suárez Hernández" },
//   { nombre: "Valdés Cervantes Julie", padrino: "Profr. César Jesús Retureta Pozos" },
// ];

// const alumnos6c = [
//   { nombre: "Emmanuel Figueroa Carrasco", padrino: "Sra. Mariam Itzel Córdoba Carrasco" },
//   { nombre: "Zulma Victoria Jazmín García Guevara", padrino: "Sra. María Araceli Solís Hernández" },
//   { nombre: "Ashlyn Denisse Gutiérrez Ruiz", padrino: "Ing. Juan Jesús Orduña Martínez" },
//   { nombre: "Melany Nahomy Landa Hernández", padrino: "Srta. Marbella Halaid Landa Hernández" },
//   { nombre: "Ángel Adolfo López Gómez", padrino: "Joven Juan Carlos López Gómez" },
//   { nombre: "Manuel Tadeo Mota Sagrero", padrino: "Joven Jan Carlos Díaz Cruz" },
//   { nombre: "Marcos Iván Pérez Cortés", padrino: "Sr. Reyes Pérez Cuteño" },
//   { nombre: "Megan Larissa Ramos Morales", padrino: "Sra. Gloria Ruiz Libreros" },
//   { nombre: "Alondra Denisse Rosas Muñoz", padrino: "Joven Alexis Rosas Méndez" },
//   { nombre: "Areli Sánchez Rodríguez", padrino: "Sra. Raquel Rodríguez Méndez" },
// ];

const alumnos6a = [
  { nombre: "ABURTO ORTIZ MARIA GUADALUPE", padrino: "SRTA. ARISAI ORTIZ SANCHEZ" },
  { nombre: "BAUTISTA SANDRIA ITZIRI BRICEL", padrino: "JOVEN MIGUEL ANGEL LOPEZ SANDRIA" },
  { nombre: "BEATRIZ VAZQUEZ EDER ZAHIR", padrino: "SRA. BEATRIZ VAZQUEZ" },
  { nombre: "ESTRADA JIMENEZ LESLY", padrino: "PROF. JOSE LUIS OCHOA UTRERA" },
  { nombre: "GONZALEZ CASTILLO IVAN", padrino: "SRA. GAVINA HERNANDEZ GOMEZ" },
  { nombre: "HERNANDEZ FERNANDEZ HEIDI SOLANYI", padrino: "SRA. MARIA MAGDALENA FERNANDEZ BURGOS" },
  { nombre: "HERNANDEZ SANCHEZ JUAN CARLOS", padrino: "PROFA. ADRIANA MATLA VALDEZ" },
  { nombre: "HUESCA MARIN SANTIAGO", padrino: "JOVEN HECTOR ADRIAN HUESCA MARIN" },
  { nombre: "MARTINEZ HERNANDEZ BRIAN HAZIEL", padrino: "LIC. MONICA ITZEL RAMOS SOTO" },
  { nombre: "MORALES LEAL JORGE SANTOS", padrino: "SRTA. KRISTAL DALILA HUERTA LEAL" },
  { nombre: "PEREZ LOPEZ AZUL SCARETT", padrino: "SR. JOSE ALFREDO BAIZABAL CUZ" },
  { nombre: "RODRIGUEZ AGUILAR ERICA VALERIA", padrino: "SRTA. ANDREA SELENA AGUILAR CRUZ" },
  { nombre: "SALAZAR VALDES AMBAR DENIX", padrino: "SRTA. ESMERALDA VALDES CERVANTES" },
  { nombre: "VAZQUEZ ABURTO ERICK GABRIEL", padrino: "SRA. EVA ESMERALDA RODRIGUEZ VEGA" },
];

const alumnos6b = [
  { nombre: "BADILLO LANDA FERNANDO", padrino: "SR. ANTONIO LANDA RODRIGUEZ" },
  { nombre: "BAEZ BAUTISTA SINAI", padrino: "SRA. JOSELIN ZARATE BAEZ" },
  { nombre: "CAMPOS HERNANDEZ IKER MANUEL", padrino: "SRTA. WENDI BELEN ROSAS CAMPOS" },
  { nombre: "GALAN ENRIQUEZ DEYMAR YUNNET", padrino: "LIC. ANAIS MARTINEZ QUIROZ" },
  { nombre: "LAGUNES MELCHOR LUIS FRANCISCO", padrino: "SRA. AIDE VELAZQUEZ RODRIGUEZ" },
  { nombre: "LARA SUAREZ IVAN", padrino: "SRA. GENOVEVA SUAREZ CONTRERAS" },
  { nombre: "MEJIA GAMBOA JOSE BAYRON", padrino: "JOVEN JOSEP JIMENEZ GAMBOA" },
  { nombre: "MEZA DIAZ ALLISSON AIMEE", padrino: "SRA. MARIA INES HERNANDEZ MORALES Y SR. JOAQUIN DIAZ ESCOBEDO" },
  { nombre: "ORTIZ VELAZQUEZ MARIA JOSE", padrino: "SRA. ANA LUISA VELAZQUEZ MELCHOR" },
  { nombre: "RETURETA TRUJILLO DANIEL HERIBERTO", padrino: "SRA. ELVIA CONTRERAS BAEZ" },
  { nombre: "RODRIGUEZ JUAREZ SALVADOR", padrino: "SRTA. LIZBETH BARRERA HERRERA" },
  { nombre: "SUAREZ SAIZA ZOE", padrino: "SRTA. MILDRED ARIADNA SUAREZ HERNANDEZ" },
  { nombre: "VALDES CERVANTES JULIE", padrino: "PROFR. CESAR JESUS RETURETA POZOS" },
];

const alumnos6c = [
  { nombre: "EMMANUEL FIGUEROA CARRASCO", padrino: "SRA. MARIAM ITZEL CORDOBA CARRASCO" },
  { nombre: "ZULMA VICTORIA JAZMIN GARCIA GUEVARA", padrino: "SRA. MARIA ARACELI SOLIS HERNANDEZ" },
  { nombre: "ASHLYN DENISSE GUTIERREZ RUIZ", padrino: "ING. JUAN JESUS ORDUNA MARTINEZ" },
  { nombre: "MELANY NAHOMY LANDA HERNANDEZ", padrino: "SRTA. MARBELLA HALAID LANDA HERNANDEZ" },
  { nombre: "ANGEL ADOLFO LOPEZ GOMEZ", padrino: "JOVEN JUAN CARLOS LOPEZ GOMEZ" },
  { nombre: "MANUEL TADEO MOTA SAGRERO", padrino: "JOVEN JAN CARLOS DIAZ CRUZ" },
  { nombre: "MARCOS IVAN PEREZ CORTES", padrino: "SR. REYES PEREZ CUTENO" },
  { nombre: "MEGAN LARISSA RAMOS MORALES", padrino: "SRA. GLORIA RUIZ LIBREROS" },
  { nombre: "ALONDRA DENISSE ROSAS MUÑOZ", padrino: "JOVEN ALEXIS ROSAS MENDEZ" },
  { nombre: "ARELI SANCHEZ RODRIGUEZ", padrino: "SRA. RAQUEL RODRIGUEZ MENDEZ" },
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
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b-1 pb-3 border-zinc-500/40">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-sm">
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
            <p className="mt-6 text-center text-sm text-zinc-800 uppercase">
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
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b-1 pb-3 border-zinc-500/40">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-sm">
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
            <p className="mt-6 text-center text-sm text-zinc-800 uppercase">
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
                <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b-1 pb-3 border-zinc-500/40">
                  <div className="flex items-center gap-2 text-zinc-800 font-semibold text-sm">
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
            <p className="mt-6 text-center text-sm text-zinc-800 mb-10 uppercase">
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
