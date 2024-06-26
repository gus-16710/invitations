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
import { reception } from "./Animations";

const MapSalon = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.3733417530243!2d-96.98606489999997!3d19.648946000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db250066ae1f37%3A0xc60df725fa0180ef!2sSalon%20de%20Eventos%20Tengonapa!5e0!3m2!1ses!2smx!4v1715801363349!5m2!1ses!2smx"
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
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.h1
          className={`${dancing.className} text-golden text-6xl`}
          variants={reception.text01}
          initial="hidden"
          whileInView="visible"
        >
          &nbsp;Recepción&nbsp;
        </motion.h1>

        <motion.span
          className={`${julius.className} text-zinc-400 text-3xl font-medium rounded my-4 flex items-center justify-center gap-1`}
          variants={reception.text02}
          initial="hidden"
          whileInView="visible"
        >
          <IoMdTime /> 14:30 Hrs
        </motion.span>

        <motion.p
          className={`${playFair.className} text-golden my-5 mx-10 font-bold text-center text-2xl px-2 py-1 uppercase flex items-center`}
          variants={reception.text03}
          initial="hidden"
          whileInView="visible"
        >
          &nbsp;Salón de Eventos Sociales Tengonapa&nbsp;
        </motion.p>

        <motion.p
          className={`${quickSand.className} text-zinc-400 mx-10 text-center max-w-md`}
          variants={reception.text04}
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
          variants={reception.button}
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
