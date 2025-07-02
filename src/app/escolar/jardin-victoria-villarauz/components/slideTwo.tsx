import { Avatar, Spinner } from "@nextui-org/react";
import { luxurious, mea, urbanist } from "./Fonts";
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
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6328.961024331366!2d-96.56172881292817!3d19.40277974558681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4adca1a8aa6fd%3A0xbf5db37958f7f30a!2sJardin%20De%20Ni%C3%B1os%20Victoria%20Villarauz%20Buena%20Vista!5e0!3m2!1ses!2smx!4v1751487846469!5m2!1ses!2smx"
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
              className={`${mea.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ubicación
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <>
                <MapCeremony />
                <Spinner className="absolute z-10" color="warning" />
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
        className="flex flex-col justify-center items-center relative"
        style={{ height: "100svh" }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className={`${mea.className} text-zinc-800 text-6xl`}>Ubicación</h1>
        <Avatar
          isBordered
          color="default"
          src="/img/escolar/jardin-victoria-villarauz/placeholder.svg"
          className="h-36 w-36 my-5 shadow-lg z-10"
          radius="full"
        />

        <p
          className={`${urbanist.className} text-zinc-800 text-2xl px-5 text-center mx-10`}
        >
          Jardín de Niños "Victoria Villarauz Velazco"
        </p>
        <p
          className={`${luxurious.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          Calle 21 de Marzo, Buena Vista Emiliano Zapata CP. 91634
        </p>

        <button
          type="button"
          className="text-gray-800 hover:text-gray-800 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4 z-10"
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
