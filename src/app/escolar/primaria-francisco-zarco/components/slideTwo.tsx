import { Avatar, Spinner } from "@nextui-org/react";
import {  imperial, luxurious, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import { IoMdTime } from "react-icons/io";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.9160465640466!2d-96.93673109999999!3d19.5880971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f70dc981183%3A0x87c40b494ab4247!2sAuditorio%20La%20Calera!5e0!3m2!1ses!2smx!4v1750354056740!5m2!1ses!2smx"
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
            <Avatar
              isBordered
              color="warning"
              src="/img/escolar/primaria-francisco-zarco/calera.jpg"
              className="h-40 w-40 my-5 shadow-lg"
              radius="full"
              as={motion.div}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* Hora */}
          <motion.span 
            variants={itemUp}
            className="flex items-center justify-center gap-1 bg-zinc-100/0 text-zinc-800 text-2xl font-medium me-2 px-2.5 py-0.5 rounded-full border border-zinc-800 mb-5"
          >
            <IoMdTime /> 10:30 HRS
          </motion.span>

          {/* Lugar */}
          <motion.p
            variants={fadeIn}
            className={`${urbanist.className} text-zinc-800 text-2xl px-5 text-center mx-10`}
          >
            Auditorio "La Calera"
          </motion.p>

          {/* Dirección */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className={`${luxurious.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
          >
            Centro, 91300 Banderilla, Ver.
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