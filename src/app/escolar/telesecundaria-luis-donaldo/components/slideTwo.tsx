import { Spinner } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.078441928535!2d-96.7052603701097!3d19.432305033629447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4b4d0abb0c909%3A0x4737ede1916acea3!2sLuis%20Donaldo%20Colosio%20Murrieta!5e0!3m2!1ses!2smx!4v1751047057839!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7525.078441928535!2d-96.7052603701097!3d19.432305033629447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4b4d0abb0c909%3A0x4737ede1916acea3!2sLuis%20Donaldo%20Colosio%20Murrieta!5e0!3m2!1ses!2smx!4v1751047057839!5m2!1ses!2smx"
      height="480"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="z-20 w-full rounded-lg"
    />
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
      <ModalContent className="bg-white/0 shadow-none">
        {(onClose) => (
          <>            
            <ModalBody className="relative flex justify-center items-center p-0">
              <MapCeremony />
              <Spinner className="absolute z-10" />
            </ModalBody>
            <ModalFooter className="flex justify-center p-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-zinc-800 bg-white border border-gray-300 hover:bg-gray-100 rounded-full px-5 py-2.5 text-sm font-medium flex items-center"
                onClick={onClose}
              >
                Cerrar Mapa
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

  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
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
        mass: 0.6,
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

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5,
      },
    },
  };

  return (
    <section
      className="flex flex-col justify-center items-center custom-shadow"
      style={{ height: "100svh", color: "#354c6b" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col items-center"
      >
        {/* Título */}
        <motion.h1
          variants={itemUp}
          className={`${oleo.className} text-5xl custom-shadow mb-10`}
        >
          Fecha y Lugar
        </motion.h1>

        {/* Fecha */}
        <motion.div
          variants={scaleIn}
          className={`${ovo.className} flex flex-col items-center mb-5`}
        >
          <motion.span className="pb-1 text-lg">Julio</motion.span>
          <motion.div className="flex items-center justify-center">
            <motion.span className="p-4 text-lg w-28 text-right">
              Viernes
            </motion.span>
            <motion.span
              className="py-2 px-7 border-l-2 border-r-2 border-gray-300 text-5xl "
              whileHover={{ scale: 1.1 }}
            >
              11
            </motion.span>
            <motion.span className="p-4 text-lg w-28">09:00 am</motion.span>
          </motion.div>
          <motion.span className="text-xl">2025</motion.span>
        </motion.div>

        {/* Lugar */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className={`${nobile.className} px-5 text-center mx-10 mb-5`}>
            Escuela Telesecundaria "Luis Donaldo Colosio Murrieta"
          </p>
          <p
            className={`${nobile.className} mt-3 text-sm text-center mx-10 max-w-md`}
          >
            Miguel Hidalgo, Los Carriles, 91635 Cerro Gordo
          </p>
        </motion.div>

        {/* Botón */}
        <motion.button
          variants={itemUp}
          transition={{ delay: 0.3 }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(29, 78, 216, 0.9)", // darken blue-950
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white border border-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10"
          style={{ backgroundColor: "#486786" }}
          onClick={onOpen}
        >
          <motion.div whileHover={{ rotate: 10 }}>
            <FaMapLocationDot />
          </motion.div>
          <span>Ver ubicación</span>
        </motion.button>
      </motion.div>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}
