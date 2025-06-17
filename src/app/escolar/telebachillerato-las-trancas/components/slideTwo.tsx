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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.293216369094!2d-96.9352983!3d19.5290212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2de2400007c5%3A0xb103deac326ddce8!2sIMAC%20Xalapa!5e0!3m2!1ses!2smx!4v1750186773904!5m2!1ses!2smx"
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
            <ModalFooter></ModalFooter>
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
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h1 className={`${mea.className} text-zinc-50 text-6xl`}>Ubicación</h1>
        <Avatar
          isBordered
          color="warning"
          src="/img/escolar/telebachillerato-las-trancas/auditorio.jpg"
          className="h-40 w-40 my-5 shadow-lg"
          radius="full"
        />

        <span className="flex items-center justify-center gap-1 bg-pink-100 text-pink-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-pink-400 border border-pink-400 mb-5">
          <IoMdTime /> 09:00 HRS
        </span>

        <p
          className={`${urbanist.className} text-zinc-50 text-2xl px-5 text-center mx-10`}
        >
          Auditorio IMAC Xalapa
        </p>
        <p
          className={`${luxurious.className} text-zinc-50 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          Av. Adolfo Ruiz Cortinas & Calle Hortencia, Represa del Carmen, 91050
          Xalapa-Enríquez, Ver.
        </p>

        <button
          type="button"
          className="text-gray-100 hover:text-white border border-gray-100 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
          onClick={() => {
            onOpen();
          }}
        >
          Ubicación
        </button>
      </motion.section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
