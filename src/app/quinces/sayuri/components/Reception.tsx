import { IoMdTime } from "react-icons/io";
import { anton, dancing, quickSand } from "./Fonts";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const MapSalon = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d939.3728024077785!2d-96.98619704721892!3d19.64903813508808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1715801241586!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
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
              className={`${dancing.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Recepción
            </ModalHeader>
            <ModalBody>
              <MapSalon />
            </ModalBody>
            <ModalFooter></ModalFooter>
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
      <section className="bg-red-950 h-screen flex flex-col items-center justify-center">
        <div className="bg-[url('/img/quinces/sayuri/divider-golden.png')] bg-contain bg-no-repeat bg-center w-full h-16 sm:mb-10 mb-5" />
        <h1 className={`${dancing.className} text-golden text-5xl`}>
          &nbsp; &nbsp; Recepción &nbsp; &nbsp;
        </h1>

        <span
          className={`${anton.className} text-zinc-300 text-xl font-medium me-2 px-2.5 rounded mt-3 flex items-center justify-center gap-1`}
          //variants={locations.time01}
          //initial="hidden"
          //whileInView="visible"
        >
          <IoMdTime /> 15:00 Hrs
        </span>

        <p
          className={`${quickSand.className} text-golden my-5 mx-10 font-bold text-center text-lg`}
          //variants={locations.animationText02}
          //initial="hidden"
          //whileInView="visible"
        >
          &nbsp; Salón de Eventos Sociales Tengonapa &nbsp;
        </p>

        <p
          className={`${quickSand.className} mx-10 text-center text-zinc-300 max-w-md`}
          //variants={locations.animationText03}
          //initial="hidden"
          //whileInView="visible"
        >
          Calle Principal S/N, Tengonapa, Centro, 91353 Tlacolulan, Ver.
        </p>

        <button
          role="button"
          className="golden-button mt-5"
          onClick={() => {
            onOpen();
          }}
        >
          <span className="golden-text">Ver Ubicación</span>
        </button>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
