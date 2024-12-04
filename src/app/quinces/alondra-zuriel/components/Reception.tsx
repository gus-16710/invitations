import { standard, titillium, vibes } from "./Fonts";
import { IoLocationSharp } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { header } from "./Animations";

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
      size="full"
      placement="center"
      backdrop="blur"
    >
      <ModalContent style={{ backgroundColor: "#740403", color: "#ffff" }}>
        {(onClose) => (
          <>
            <ModalHeader
              className={`${vibes.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Recepción
            </ModalHeader>
            <ModalBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.054859463592!2d-96.92084692437417!3d19.539258181763138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db31fdaa20b821%3A0xacf87f1bb9c6db59!2sLas%20Brisas!5e0!3m2!1ses!2smx!4v1733291686397!5m2!1ses!2smx"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="text-zinc-0 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  onClose();
                }}
              >
                Cerrar
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Reception() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div
        className="h-screen flex justify-center items-center flex-col"        
      >
        <motion.h2
          className={`${vibes.className} text-5xl mb-5`}
          variants={header.animation1}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#513704" }}
        >
          Recepción
        </motion.h2>
        <motion.p
          className={`${standard.className} text-6xl mt-5`}
          variants={header.animation2}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          17:30 hrs
        </motion.p>
        <motion.p
          className={`${vibes.className} text-center mx-5 mt-5 text-4xl max-w-md `}
          variants={header.animation3}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          Salón Las Brisas
        </motion.p>

        <motion.p
          className={`${titillium.className} text-center mx-5 mt-10 text-sm max-w-md  p-2`}
          variants={header.animation4}
          initial="hidden"
          whileInView="visible"
        >
          Av. Américas 1311, Jose Cardel, Xalapa-Enríquez, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="mt-5 bg-white/0 border border-yellow-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
          onClick={() => {
            onOpen();
          }}
          variants={header.animation5}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          <IoLocationSharp className="mr-1 text-xl" />
          Ver Ubicación
        </motion.button>
      </div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
