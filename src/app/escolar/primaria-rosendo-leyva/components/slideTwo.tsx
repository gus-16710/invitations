import {  Image, Spinner } from "@nextui-org/react";
import {  imperial, luxurious, urbanist } from "./Fonts";
import { motion } from "framer-motion";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import NumberFlow from "@number-flow/react";
import { LuAlarmClock } from "react-icons/lu"

const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6325.2111793355525!2d-96.85575514470723!3d19.498933991255896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db3341ad35d82f%3A0x3b65bdbce5af5030!2sEsc.%20Primaria%20Rosendo%20Leyva!5e0!3m2!1ses!2smx!4v1751064169872!5m2!1ses!2smx"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"      
    ></iframe>
  </motion.div>
);

const ModalMap = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"  
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className={`${imperial.className} flex flex-col gap-1 items-center text-3xl`}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Ubicación
              </motion.div>
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <>
                <MapCeremony />
                <Spinner className="absolute z-10" color="warning" />
              </>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="text-gray-900 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  onClose();
                }}
              >
                Cerrar
              </motion.button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function SlideTwo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Animaciones configuradas
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.6
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const [hour, setHour] = useState(0);  

  return (
    <>
      <section 
        className="flex flex-col justify-center items-center"
        style={{ height: "100svh" }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          //viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
          onViewportEnter={() => {
            setHour(10);           
          }}
          onViewportLeave={() => {
            setHour(0);            
          }}
        >
          {/* Título */}
          <motion.h1 
            variants={itemUp}
            className={`${imperial.className} text-zinc-800 text-6xl`}
          >
            Ubicación
          </motion.h1>

          {/* Avatar con imagen */}
          <motion.div variants={scaleIn}>           
            <Image
            width={140}
            alt="NextUI hero Image"
            src="/img/escolar/primaria-rosendo-leyva/school-svgrepo-com.svg"
            className="my-5"            
          />
          </motion.div>

          {/* Hora */}
          <motion.span 
            variants={itemUp}
            className="flex items-center justify-center gap-1 bg-zinc-100/0 text-zinc-800 text-4xl font-medium mb-5"
          >
            <LuAlarmClock /> <NumberFlow
              value={hour}
              transformTiming={{
                duration: 3000,
              }}
              trend={-1}

            />:00 Hrs
          </motion.span>

          {/* Lugar */}
          <motion.p
            variants={fadeIn}
            className={`${urbanist.className} text-zinc-800 text-2xl px-5 text-center mx-10`}
          >
            Escuela Profr. Rosendo Leyva Lara
          </motion.p>

          {/* Dirección */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className={`${luxurious.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
          >
            91637 Jacarandas, Ver.
          </motion.p>

          {/* Botón */}
          <motion.button
            variants={itemUp}
            transition={{ delay: 0.3 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(243, 244, 246, 1)" 
            }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="text-gray-800 hover:text-gray-800 border border-gray-800 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
            onClick={onOpen}
          >
            Ubicación
          </motion.button>
        </motion.div>
      </section>
      
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}