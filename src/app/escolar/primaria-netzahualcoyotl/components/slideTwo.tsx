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

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.3455913580024!2d-96.56807789999999!3d19.3541831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4ae07e1bdc35f%3A0x6fd21fe3acba9dc9!2sNezahualcoyotl!5e0!3m2!1ses!2smx!4v1750439205105!5m2!1ses!2smx"
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
              className={`${oleo.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ubicación
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <>
                <MapCeremony />
                <Spinner className="absolute z-10" />
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
      <motion.section
        className="flex flex-col justify-center items-center"
        style={{ height: "100svh" }}
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className={`${oleo.className} text-zinc-800 text-5xl`}>
          Fecha y Lugar
        </h1>
        <div
          className={`${ovo.className} flex items-center justify-center flex-col my-10 text-zinc-800`}
        >
          <label className={`pb-1 text-lg`}>Julio</label>
          <div className="flex items-center my-5">
            <label className={`p-4 text-lg w-28 text-center`}>Viernes</label>
            <label
              className={`py-2 px-5 border-l-2 border-r-2 border-gray-800/50 text-5xl`}
            >
              11
            </label>
            <label className={`p-4 text-lg w-28`}>03:00 pm</label>
          </div>
          <label className={`text-xl`}>2025</label>
        </div>

        <p
          className={`${nobile.className} text-zinc-800 text-center mx-10`}
        >
          Explanada de la Escuela Primaria
        </p>
        <p
          className={`${nobile.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          16 de Septiembre, Centro, 91639 Rinconada, Ver.
        </p>

        <button
          type="button"
          className="flex items-center gap-2 text-gray-100 hover:text-white border border-gray-400 bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mt-10"
          onClick={() => {
            onOpen();
          }}
        >          
          Ver ubicación
        </button>
      </motion.section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
