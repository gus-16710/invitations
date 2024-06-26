import { IoMdTime } from "react-icons/io";
import { dancing, julius, playFair, quickSand } from "./Fonts";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { ceremony } from "./Animations";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5313.915144729869!2d-96.9903857871246!3d19.64843067035925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db25d9c1134349%3A0xc5793b9ff2c4f6b2!2sLa%20Sant%C3%ADsima%20Trinidad!5e0!3m2!1ses!2smx!4v1715800640616!5m2!1ses!2smx"
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
              Ceremonia
            </ModalHeader>
            <ModalBody>
              <MapCeremony />
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
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.h1
          className={`${dancing.className} text-golden text-6xl`}
          variants={ceremony.text01}
          initial="hidden"
          whileInView="visible"
        >
          &nbsp;Ceremonia&nbsp;
        </motion.h1>

        <motion.span
          className={`${julius.className} text-zinc-400 text-3xl font-medium rounded my-4 flex items-center justify-center gap-1`}
          variants={ceremony.text02}
          initial="hidden"
          whileInView="visible"
        >
          <IoMdTime /> 12:00 Hrs
        </motion.span>

        <motion.p
          className={`${playFair.className} text-golden my-5 mx-10 font-bold text-center text-2xl px-2 py-1 uppercase flex items-center`}
          variants={ceremony.text03}
          initial="hidden"
          whileInView="visible"
        >
          &nbsp;Iglesia De La Santísima Trinidad&nbsp;
        </motion.p>

        <motion.p
          className={`${quickSand.className} text-zinc-400 mx-10 text-center max-w-md`}
          variants={ceremony.text04}
          initial="hidden"
          whileInView="visible"
        >
          Calle Principal S/N, Tengonapa, Centro, 91353 Tlacolulan, Ver.
        </motion.p>

        <motion.button
          role="button"
          className="golden-button mt-5"
          onClick={() => {
            onOpen();
          }}
          variants={ceremony.button}
          initial="hidden"
          whileInView="visible"
        >
          <span className="golden-text">Ver Ubicación</span>
        </motion.button>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
