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

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.9160465640466!2d-96.93673109999999!3d19.5880971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f70dc981183%3A0x87c40b494ab4247!2sAuditorio%20La%20Calera!5e0!3m2!1ses!2smx!4v1750354056740!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.9160465640466!2d-96.93673109999999!3d19.5880971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f70dc981183%3A0x87c40b494ab4247!2sAuditorio%20La%20Calera!5e0!3m2!1ses!2smx!4v1750354056740!5m2!1ses!2smx"
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
          src="/img/escolar/telesecundaria-21-marzo/calera.jpg"
          className="h-40 w-40 my-5 shadow-lg"
          radius="full"
          style={{filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))"}}
        />

        <h1 className="flex items-center justify-center gap-1 text-zinc-100 text-2xl mb-5">
          <IoMdTime /> 15:00 hrs
        </h1>

        <p
          className={`${urbanist.className} text-zinc-50 text-xl px-5 text-center mx-10`}
        >
          Auditorio "La Calera"
        </p>
        <p
          className={`${luxurious.className} text-zinc-50 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          Centro, 91300 Banderilla, Ver.
        </p>

        <button
          type="button"
          className="text-gray-100 hover:text-white border border-gray-100 hover:bg-gray-100/0 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
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
