import { mea, urbanist } from "./Fonts";
import { Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function SlideSix() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h1 className={`${mea.className} text-zinc-800 text-6xl mb-5`}>
        Egresados
      </h1>
      <ScrollShadow hideScrollBar className="h-[400px] text-zinc-800 w-72 z-10">
        <div className={`${urbanist.className} mb-10 flex flex-col justify-center items-center`}>
          <h2 className="mb-4">Alumnos y Padrinos</h2>

          <Card className="shadow-none mb-3 w-full" >
            <CardBody>
              <p>Niña: Leah Sharik Tejeda Pérez </p>
              <p>Padrinos: Alma Delfina Jasso Soto y Enrique Reyes Pacheco </p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Isis Guadalupe Garrido cruz </p>
              <p>Madrina: Lic. Liza adayanis jarvio sosa</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Romina Lagunes Acosta </p>
              <p>
                Padrinos: Mtra. Karla Maleny Tejeda Dorantes y Joven Josué Pérez
                Jarvio
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Wendy Nahid Lagunes Ordaz</p>
              <p>Padrinos: Naian Tejeda Acosta y Luis Manuel Villa García</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Sarah Tejeda Montero </p>
              <p>Madrina: Yesika Marlem Arellano Cadena</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Alaia Ileana Tejeda Cervantes</p>
              <p>
                Padrinos: Mtra. Quetzalli Amaya Sanchez y Lic. Said Villa Amaya
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Heidi Yazareth Valdes Romero </p>
              <p>Padrinos: Maestra Marisela Tejeda Amaya y Luis Salas Zamora</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Maya Guadalupe García Delgado</p>
              <p>
                Padrinos: Ana Rebeca Rosas Hernandez y Marinthia Tejeda Jarvio
              </p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niña: Valeria Amaya García </p>
              <p>Madrina: Rosa Aydé García Amaya</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niño: Jorge Kemuel Lagunes Jarvio </p>
              <p>Padrinos: Aranza Jarvio rivera y Isaías Jarvio rivera</p>
            </CardBody>
          </Card>

          <Card className="shadow-none mb-3 w-full">
            <CardBody>
              <p>Niño: Íker Domínguez Castillo</p>
              <p>
                Padrinos: Paola Jaquelin Bravo Domínguez y Melany lucero Bravo
                Dominguez
              </p>
            </CardBody>
          </Card>
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
