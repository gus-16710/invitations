import { luxurious, mea, open, sevillana, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";

import { GiAlarmClock } from "react-icons/gi";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1117.9641172073452!2d-96.9193900922164!3d19.52580513381746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db3200cc1cc915%3A0x145b98bb69e5bca!2sJard%C3%ADn%20de%20Ni%C3%B1os%20Esperanza%20Osorio!5e0!3m2!1ses!2smx!4v1750269832603!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="z-20"
  ></iframe>
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
              className={`${sevillana.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ubicación
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <>
                <MapCeremony />
                <Spinner className="absolute z-10" color="success" />
              </>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="text-gray-900 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
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

export default function SlideTwo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="flex flex-col justify-center items-center"
        style={{ height: "100dvh" }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={`${sevillana.className} text-zinc-800 text-6xl`}>
            Ubicación
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="flex items-center justify-center gap-1 text-zinc-800 text-4xl font-medium me-2 rounded my-5">
            <GiAlarmClock /> 09:30 a.m.
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p
            className={`${urbanist.className} text-zinc-800 text-xl px-5 text-center mx-10`}
          >
            Jardín de Niños "Esperanza Osorio"
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p
            className={`${urbanist.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
          >
            C. José María Mata, Zona Centro, Centro, 91000 Xalapa-Enríquez, Ver.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
        >
          <button
            type="button"
            className="text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
            onClick={onOpen}
          >
            Ver ubicación
          </button>
        </motion.div>
      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
