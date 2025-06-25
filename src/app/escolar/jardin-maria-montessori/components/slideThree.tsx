import { mea } from "./Fonts";
import { Accordion, AccordionItem, Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GiTeacher, GiGraduateCap } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

import { IoWomanSharp } from "react-icons/io5";

export default function SlideThree() {
  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center px-5 py-7"
      style={{ height: "100svh" }}
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
      >
        <CardBody className="flex items-center justify-center flex-col">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className="w-72 px-2"
          >
            <motion.div variants={fadeIn} className="w-full m-auto">
              <Accordion
                itemClasses={{
                  base: "text-zinc-800",
                  title: "text-zinc-800",
                  subtitle: "text-zinc-800",
                  indicator: "text-zinc-800",
                }}
                defaultExpandedKeys={["1"]}
              >
                {/* Director */}
                <AccordionItem
                  key="1"
                  aria-label="Directora"
                  subtitle="Presiona para expandir/contraer"
                  title={
                    <motion.div
                      variants={item}
                      className="flex items-center gap-3"
                    >
                      <IoWomanSharp className="text-xl text-zinc-950/50" />
                      <span>Directora</span>
                    </motion.div>
                  }
                >
                  <motion.ol
                    variants={container}
                    className="list-disc list-inside space-y-2 text-zinc-800 text-sm pl-2 mt-2 mb-5"
                  >
                    <motion.li
                      variants={item}
                      className="hover:text-amber-100 transition-colors"
                    >
                      Laura Rebeca González Lima
                    </motion.li>
                  </motion.ol>
                </AccordionItem>

                {/* Madrina */}
                <AccordionItem
                  key="2"
                  aria-label="Subdirectora"
                  subtitle="Presiona para expandir/contraer"
                  title={
                    <motion.div
                      variants={item}
                      className="flex items-center gap-3"
                    >
                      <IoWomanSharp className="text-xl text-zinc-950/50" />
                      <span>Subdirectora</span>
                    </motion.div>
                  }
                >
                  <motion.ol
                    variants={container}
                    className="list-disc list-inside space-y-2 text-zinc-800 text-sm pl-2 mb-5"
                  >
                    <motion.li
                      variants={item}
                      className="hover:text-amber-100 transition-colors"
                    >
                      Rebeca Aguas Pérez
                    </motion.li>
                  </motion.ol>
                </AccordionItem>

                {/* Maestros */}
                <AccordionItem
                  key="3"
                  aria-label="Educadoras"
                  subtitle="Presiona para expandir/contraer"
                  title={
                    <motion.div
                      variants={item}
                      className="flex items-center gap-3"
                    >
                      <GiTeacher className="text-xl text-zinc-950/50" />
                      <span>Educadoras</span>
                    </motion.div>
                  }
                >
                  <motion.ol
                    variants={container}
                    className="list-none list-inside space-y-2 text-zinc-800 text-sm mb-5"
                  >
                    {[
                      { id: 1, name: "Arisbe Henández Portilla", label: "3A" },
                      { id: 2, name: "Brenda Rodríguez Vidal", label: "3B" },
                      {
                        id: 3,
                        name: "Gabriela Patricia Sangabriel Martínez",
                        label: "3C",
                      },
                      {
                        id: 4,
                        name: "Zaira Beatriz Yerena Vargas",
                        label: "3D",
                      },
                      {
                        id: 5,
                        name: "Elsa Margarita Polanco Vasquez",
                        label: "3E",
                      },
                    ].map((teacher, index) => (
                      <motion.li
                        key={index}
                        variants={item}
                        className="hover:text-amber-100 transition-colors flex items-center"
                      >
                        <div className="text-xs h-6 w-6 text-zinc-800 flex items-center justify-center mr-2">
                          {teacher.label}
                        </div>
                        <div className="border-b-1 w-full pb-1 border-zinc-200/40 border-dashed">
                        {teacher.name}
                        </div>
                      </motion.li>
                    ))}
                  </motion.ol>
                </AccordionItem>

                {/* Maestros */}
                <AccordionItem
                  key="4"
                  aria-label="Educadoras"
                  subtitle="Presiona para expandir/contraer"
                  title={
                    <motion.div
                      variants={item}
                      className="flex items-center gap-3"
                    >
                      <FaHandHoldingHeart className="text-xl text-zinc-950/50" />
                      <span>Niñeras</span>
                    </motion.div>
                  }
                >
                  <motion.ol
                    variants={container}
                    className="list-disc list-inside space-y-2 text-zinc-800 text-sm mb-5"
                  >
                    {[
                      { id: 1, name: "María del Pilar A. Jiménez Velasco", label: "3A" },
                      { id: 2, name: "Ariadna Segovia Ronzón", label: "3B" },
                      {
                        id: 3,
                        name: "Laura Guadalupe Martínez Flores",
                        label: "3C",
                      },
                      {
                        id: 4,
                        name: "Esperanza Trujillo Armenta",
                        label: "3D",
                      },
                      {
                        id: 5,
                        name: "Floricel Hernández Pineda",
                        label: "3E",
                      },
                    ].map((teacher, index) => (
                      <motion.li
                        key={index}
                        variants={item}
                        className="hover:text-amber-100 transition-colors flex items-center"
                      >
                        <div className="text-xs h-6 w-6 text-zinc-800 flex items-center justify-center mr-2">
                          {teacher.label}
                        </div>
                        <div className="border-b-1 w-full pb-1 border-zinc-200/40 border-dashed">
                        {teacher.name}
                        </div>
                      </motion.li>
                    ))}
                    
                  </motion.ol>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </CardBody>
      </Card>
    </section>
  );
}
