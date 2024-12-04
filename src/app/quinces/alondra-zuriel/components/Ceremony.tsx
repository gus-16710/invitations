import { standard, titillium, vibes } from "./Fonts";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
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
              Ceremonia Religiosa
            </ModalHeader>
            <ModalBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5317.816888617473!2d-96.93758437735106!3d19.530259811097586!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2de263a0106d%3A0x69650bee6bc10bdd!2sParroquia%20San%20Antonio%20de%20Padua!5e0!3m2!1ses!2smx!4v1733291351754!5m2!1ses!2smx"
                height="450"
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
                className="mt-10 text-zinc-0 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
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

export default function Ceremony() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <motion.h2
          className={`${vibes.className} text-5xl mb-5`}
          variants={header.animation1}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#513704" }}
        >
          Ceremonia Religiosa
        </motion.h2>
        <motion.p
          className={`${standard.className} text-6xl mt-5`}
          variants={header.animation2}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          17:00 hrs
        </motion.p>
        <motion.p
          className={`${vibes.className} text-center mx-5 mt-5 text-4xl max-w-md `}
          variants={header.animation3}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          Parroquia San Antonio de Padua
        </motion.p>

        <motion.p
          className={`${titillium.className} text-center mx-5 mt-10 text-sm max-w-md  p-2`}
          variants={header.animation4}
          initial="hidden"
          whileInView="visible"
        >
          C. Ignacio de la Llave 45A, Guadalupe Rodriguez, Xalapa, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="mt-5 bg-white/0 border border-yellow-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
          style={{ color: "#a57d35" }}
          onClick={() => {
            onOpen();
          }}
          variants={header.animation5}
          initial="hidden"
          whileInView="visible"
        >
          <IoLocationSharp className="mr-1 text-xl" />
          Ver Ubicación
        </motion.button>
      </div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
