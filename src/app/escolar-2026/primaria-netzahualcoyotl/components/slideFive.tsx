import { nobile, oleo } from "./Fonts";
import { ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaUserTie } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const GREEN = "#006847";
const GREEN_LIGHT = "#00684725";

const alumnos6a = [
  {
    nombre: "MARYAM DEL ROSARIO CONTRERAS CONTRERAS",
    padrino: "BIÓLOGA NORMA ALICIA CONTRERAS SÁNCHEZ",
  },
  {
    nombre: "KIMBERLY MONSERRAT FLORES VELÁZQUEZ",
    padrino: "JOVEN FRANCISCO JAVIER HERNÁNDEZ ALEMÁN",
  },
  {
    nombre: "ALEXIS MIGUEL GONZÁLEZ TEOSOL",
    padrino: "SEÑORITA CINTHIA ESTEFANNY GONZÁLEZ TEOSOL",
  },
  {
    nombre: "PAOLA KRISTELL LEÓN DURÁN",
    padrino:
      "ING. AGRÓNOMO YAEL ADÁN BÁEZ SOSA y LIC. ADM. EMP. KAREN LIZBETH DURÁN NÁJERA",
  },
  {
    nombre: "GÉNESIS LUCÍA MIRANDA LUNA",
    padrino: "SEÑORITA ASHLEY TAMARA ROSAS CAMPOS",
  },
  {
    nombre: "HALIE ALEXANDRA MOLINA MORA",
    padrino:
      "SEÑORA BRENDA MADAI ANDRADE CONTRERAS y SEÑOR JORGE LUIS LARA MORA",
  },
  {
    nombre: "AXEL GUADALUPE MORALES HERNÁNDEZ",
    padrino: "SEÑORITA BEATRIZ ADRIANA MORALES HERNÁNDEZ",
  },
  {
    nombre: "JULIETTE MORAYMA PALMEROS MORA",
    padrino: "SEÑORA ANAHÍ MORA VALDÉS",
  },
  {
    nombre: "JOSUÉ PÉREZ CASTILLO",
    padrino: "JOVEN BYRON DANIEL PÉREZ SÁNCHEZ",
  },
  {
    nombre: "GAEL PÉREZ RODRÍGUEZ",
    padrino: "JOVEN BARUC DAVID OLVERA AGUILAR",
  },
  {
    nombre: "JUNIOR ANTONIO RAMOS ORTIZ",
    padrino: "SEÑORA DALILA ORTIZ SÁNCHEZ",
  },
  {
    nombre: "DULCE LIZBETH REYES ORTIZ",
    padrino: "SEÑOR LUIS ARTURO GUTIÉRREZ ALARCÓN",
  },
  {
    nombre: "AQUETZALLY GESABEL REYNA GALLEGOS",
    padrino: "SEÑORITA LUZ DEL CARMEN REYNA GALLEGOS",
  },
];

const alumnos6b = [
  {
    nombre: "AMERICA ITZEL CARMONA GONZÁLEZ",
    padrino: "SRITA. LESLY VIVIANA CAMPOS RODRÍGUEZ",
  },
  {
    nombre: "EBER ENRIQUE GARCÍA PULIDO",
    padrino: "PROFA. JUANA ISABEL PLATAS HERNÁNDEZ",
  },
  {
    nombre: "MICHEL LARA REYES",
    padrino: "SRITA. YURIDIA JOCELIN GUZMÁN SÁNCHEZ",
  },
  { nombre: "ESCARLET LÓPEZ VALDÉS", padrino: "JOVEN OMAR VALDÉS CERVANTES" },
  {
    nombre: "NAYDELINE MORALES RÍOS",
    padrino: "SR. ABRAHAM MORALES ALEMÁN y SRA. SURI SADAÍ VALLEJOS MAPIL",
  },
  {
    nombre: "KENDRA MILENY RODRÍGUEZ CAMPOS",
    padrino: "PROF. JONNY VÁZQUEZ CRUZ",
  },
  {
    nombre: "NHASLY YANAHÍ RODRÍGUEZ DÍAZ",
    padrino: "SRA. EDITH MÉNDEZ LÓPEZ",
  },
  {
    nombre: "LUIS IKER ROSAS HERRERA",
    padrino: "JOVEN JUAN FERNANDO ROSAS MOTA",
  },
  {
    nombre: "MÍA SACBÉ SOLORZANO MOTA",
    padrino: "SRA. DULCE OLIVIA CORTEZ VILLEGAS",
  },
  {
    nombre: "DANIEL UTRERA PÉREZ",
    padrino: "SRITA. WENDY DANIELA UTRERA PÉREZ",
  },
  { nombre: "PERLA VARELA RODRÍGUEZ", padrino: "SR. OSCAR VARELA DURÁN" },
];

const alumnos6c = [
  {
    nombre: "ZAIRA DENISE ALVARADO MENESES",
    //padrino: "LUIS GUSTAVO SÁNCHEZ MARTÍNEZ",
    padrino: "YATZIRIS COSTEÑO MENESES",
  },
  {
    nombre: "FRAN DAVID AMECA RODRÍGUEZ",
    padrino: "MARÍA ISABEL AMECA DELGADO",
  },
  { nombre: "JADE DENISE BADILLO SÁNCHEZ", padrino: "RENÉ MERAZ RIVERA" },
  { nombre: "IAN CAMPOS PÉREZ", padrino: "DENISE PÉREZ MERINO" },
  {
    nombre: "SARAI CONTRERAS PACHECO",
    padrino: "LUIS GUSTAVO SÁNCHEZ MARTÍNEZ",
  },
  { nombre: "ANAÍ CORTÉS ALFAYO", padrino: "MAITE ALFAYO BÁEZ" },
  {
    nombre: "JADE GUADALUPE DURÁN VALDÉS",
    padrino: "EUSEBIA VALDÉS CERVANTES",
  },
  {
    nombre: "CHRISTOPHER NOÉ HERNÁNDEZ LÓPEZ",
    padrino: "YOSELIN LÓPEZ PERALTA",
  },
  {
    nombre: "SEBASTIÁN MAY UTRERA",
    padrino: "BRIAN GAEL SANTAMARÍA HERNÁNDEZ",
  },
  {
    nombre: "GÉNESIS PÉREZ HERNÁNDEZ",
    padrino: "AMÉRICA BETSABETH PÉREZ SÁNCHEZ",
  },
  {
    nombre: "JOSÉ LUIS RODRÍGUEZ RUIZ",
    padrino: "FRUCTUOSO EMANUEL PÉREZ VILLA y JUAN ALBERTO HERNÁNDEZ JUNCO",
  },
  { nombre: "BENJAMÍN SAMOANO MENDOZA", padrino: "ALBINO MENDOZA HERNÁNDEZ" },
];

const GrupoCard = ({
  titulo,
  alumnos,
  docente,
}: {
  titulo: string;
  alumnos: { nombre: string; padrino: string }[];
  docente: string;
}) => (
  <div className="mb-10">
    <h2
      className={`${oleo.className} text-center text-2xl mb-4`}
      style={{ color: GREEN }}
    >
      {titulo}
    </h2>
    <div className="space-y-4">
      {alumnos.map((alumno, index) => (
        <div
          key={index}
          className="flex flex-col pb-3 border-b-[1px]"
          style={{ borderColor: GREEN_LIGHT }}
        >
          <div className="flex items-center gap-2">
            <FaGraduationCap style={{ color: GREEN, flexShrink: 0 }} />
            <span
              className={`${nobile.className} text-xs font-semibold`}
              style={{ color: GREEN }}
            >
              {alumno.nombre}
            </span>
          </div>
          <div className="flex items-start gap-2 mt-1.5 ml-0.5">
            <FaUserTie style={{ color: GREEN, flexShrink: 0, marginTop: 2 }} />
            <span
              className={`${nobile.className} text-xs`}
              style={{ color: GREEN }}
            >
              {alumno.padrino}
            </span>
          </div>
        </div>
      ))}
    </div>
    {docente && (
      <p
        className={`${nobile.className} mt-5 text-center text-xs tracking-[0.12em] uppercase`}
        style={{ color: GREEN }}
      >
        Docente: {docente}
      </p>
    )}
  </div>
);

export default function SlideFive() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1
        className={`${oleo.className} text-5xl mb-5`}
        style={{ color: GREEN }}
      >
        Padrinos
      </h1>

      <ScrollShadow hideScrollBar className="h-[400px] w-72" data-lenis-prevent>
        <div className="px-2">
          <GrupoCard
            titulo='Sexto "A"'
            alumnos={alumnos6a}
            docente="Epigmenio Hernández Romero"
          />
          <GrupoCard titulo='Sexto "B"' alumnos={alumnos6b} docente="" />
          <GrupoCard titulo='Sexto "C"' alumnos={alumnos6c} docente="" />
        </div>
      </ScrollShadow>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-5"
      >
        <IoIosArrowDown style={{ color: GREEN }} className="text-xl" />
      </motion.div>
    </motion.section>
  );
}
