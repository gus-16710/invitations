import { titillium, vibes } from "./Fonts";
import { IoLocationSharp } from "react-icons/io5";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

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
            <ModalFooter></ModalFooter>
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
      <div
        className="h-screen flex justify-center items-center flex-col"
        style={{ color: "#513704" }}
      >
        <h2 className={`${vibes.className} text-5xl mb-5`}>
          Ceremonia Religiosa
        </h2>
        <p className={`${vibes.className} text-7xl mt-5`}>17:00 hrs</p>
        <p
          className={`${vibes.className} text-center mx-5 mt-5 text-4xl max-w-md `}
        >
          Parroquia San Antonio de Padua
        </p>

        <p
          className={`${titillium.className} text-center mx-5 mt-3 text-sm max-w-md  p-2`}
        >
          C. Ignacio de la Llave 45A, Guadalupe Rodriguez, Xalapa, Ver.
        </p>

        <button
          type="button"
          className="mt-10 text-zinc-700 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
          onClick={() => {
            onOpen();
          }}
        >
          <IoLocationSharp className="mr-1 text-xl" />
          Ver Ubicación
        </button>
      </div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
