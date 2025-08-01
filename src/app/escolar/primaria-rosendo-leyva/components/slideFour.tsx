import { mea } from "./Fonts";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { motion } from "framer-motion";
import { GiTeacher, GiGraduateCap } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

export default function SlideFour() {
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
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="w-full max-w-md px-4"
      >
        {/* Título */}
        <motion.h1
          variants={item}
          className={`${mea.className} text-zinc-800 text-4xl text-center mb-8`}
        >
          <GiGraduateCap className="inline-block mr-2 mb-1" />
          Personal Académico
        </motion.h1>

        <motion.div variants={fadeIn} className="w-72 m-auto">
          <Accordion
            itemClasses={{
              base: "text-zinc-800",
              title: "text-zinc-800",
              subtitle: "text-zinc-800",
              indicator: "text-zinc-800"            
            }}
            defaultExpandedKeys={["1"]}
          >
            {/* Maestros */}
            <AccordionItem
              key="1"
              aria-label="Maestros"
              subtitle="Presiona para expandir/contraer"
              title={
                <motion.div variants={item} className="flex items-center gap-3">
                  <GiTeacher className="text-xl" />
                  <span>Maestros</span>
                </motion.div>
              }
            >
              <motion.ol
                variants={container}
                className="list-disc list-inside space-y-2 text-zinc-800 text-sm pl-2 mt-2 mb-5"
              >
                {[
                  "6to A Roger Bartolo Martínez",
                  "6to B Ana Luisa Cabrera Martínez",                  
                ].map((teacher, index) => (
                  <motion.li
                    key={index}
                    variants={item}
                    className="hover:text-amber-100 transition-colors"
                  >
                    {teacher}
                  </motion.li>
                ))}
              </motion.ol>
            </AccordionItem>

            {/* Director */}
            <AccordionItem
              key="2"
              aria-label="Director"
              subtitle="Presiona para expandir/contraer"
              title={
                <motion.div variants={item} className="flex items-center gap-3">
                  <FaUserTie className="text-xl" />
                  <span>Director</span>
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
                   Juan Rafael Vera de Córdova
                </motion.li>
              </motion.ol>
            </AccordionItem>

            {/* Madrina */}
            <AccordionItem
              key="3"
              aria-label="Padrinos"
              subtitle="Presiona para expandir/contraer"
              title={
                <motion.div variants={item} className="flex items-center gap-3">
                  <FaHandHoldingHeart className="text-xl" />
                  <span>Padrinos</span>
                </motion.div>
              }
            >
              <motion.ol
                variants={container}
                className="list-disc list-inside space-y-2 text-zinc-800 text-sm pl-2 mt-2"
              >
                <motion.li
                  variants={item}
                  className="hover:text-amber-100 transition-colors"
                >
                  6toA Roger Bartolo Martinez
                </motion.li>
                <motion.li
                  variants={item}
                  className="hover:text-amber-100 transition-colors"
                >
                  6toB Mariana Carmona Espinosa
                </motion.li>
              </motion.ol>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
