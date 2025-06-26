import { Avatar, Card, CardBody, Spinner } from "@nextui-org/react";
import { galada, luxurious, mea, urbanist } from "./Fonts";
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

//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.0997528401416!2d-96.92941072789446!3d19.52447585095701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2dfc08164bb9%3A0x9d703ca9be221a8c!2sMar%C3%ADa%20Montessori!5e0!3m2!1ses!2smx!4v1750879816306!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.0997528401416!2d-96.92941072789446!3d19.52447585095701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2dfc08164bb9%3A0x9d703ca9be221a8c!2sMar%C3%ADa%20Montessori!5e0!3m2!1ses!2smx!4v1750879816306!5m2!1ses!2smx"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-xl"
    />
  </motion.div>
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
      className="bg-white/0 backdrop-blur-sm shadow-none"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className={`${galada.className} flex flex-col gap-1 items-center text-3xl text-zinc-100`}
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
                className="text-gray-100 bg-white/0 border border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2  font-medium text-sm px-5 py-2.5 text-center flex items-center"
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

  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section
        className="flex flex-col justify-center items-center px-5 py-7"
        style={{ height: "100svh" }}
      >
        <Card
          className="border-none bg-background/5 h-full w-full"
          shadow="sm"
          radius="lg"
          isBlurred
        >
          <CardBody className="flex items-center justify-center flex-col">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center"
            >
              {/* Título */}
              <motion.h1
                variants={item}
                className={`${galada.className} text-zinc-800 text-6xl mb-10`}
              >
                Ubicación
              </motion.h1>             

              {/* Lugar */}
              <motion.div
                variants={fadeIn}
                transition={{ delay: 0.3 }}
                className="text-center mb-3"
              >
                <p className={`${urbanist.className} text-zinc-800 text-2xl`}>
                  Jardín de Niños "María Montessori"
                </p>                
              </motion.div>

              {/* Dirección */}
              <motion.p
                variants={fadeIn}
                transition={{ delay: 0.4 }}
                className={`${luxurious.className} text-zinc-800 text-center text-sm max-w-md mx-10 mb-10`}
              >
                Jorge A. Serrano Elías, Venustiano Carranza, 91000 Xalapa-Enríquez, Ver.
              </motion.p>

              {/* Botón */}
              <motion.button
                variants={item}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(255, 255, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-800 border border-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center backdrop-blur-sm"
                onClick={onOpen}
              >
                Ver en Mapa
              </motion.button>
            </motion.div>
          </CardBody>
        </Card>
      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
