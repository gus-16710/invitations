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

import React from "react";

const MapCeremony: React.FC = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30112.666249633858!2d-96.69363238916017!3d19.365546300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4b3f0c89cd6c3%3A0xefe8113662814eb9!2sFelipe%20Carrillo%20Puerto!5e0!3m2!1ses!2smx!4v1750284248790!5m2!1ses!2smx"
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

// export default function SlideTwo() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <motion.section
//         className="flex flex-col justify-center items-center"
//         style={{ height: "100svh" }}
//         initial={{ scale: 0, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//       >
//         <h1 className={`${mea.className} text-zinc-800 text-6xl`}>Ubicación</h1>
//         <Avatar
//           color="warning"
//           src="/img/escolar/primaria-felipe-carrillo-puerto/primaria.jpg"
//           className="h-40 w-40 my-5 shadow-lg"
//           radius="full"
//         />

//         <span className="flex items-center justify-center gap-1 text-zinc-800 text-2xl font-medium me-2 mb-5">
//           <IoMdTime /> 09:00 hrs
//         </span>

//         <p
//           className={`${urbanist.className} text-zinc-800 text-xl px-5 text-center mx-10`}
//         >
//           Escuela Prim. Urb. Estatal "Felipe Carrillo Puerto"
//         </p>
//         <p
//           className={`${luxurious.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
//         >
//           Úrsulo Galván, Centro, 91630 Villa Emiliano Zapata, Ver.
//         </p>

//         <button
//           type="button"
//           className="text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
//           onClick={() => {
//             onOpen();
//           }}
//         >
//           Ubicación
//         </button>
//       </motion.section>
//       <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
//     </>
//   );
// }

export default function SlideTwo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section
        className="flex flex-col justify-center items-center"
        style={{ height: "100svh" }}
      >
        {/* Título "Ubicación" */}
        <motion.h1
          className={`${mea.className} text-zinc-800 text-6xl`}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Ubicación
        </motion.h1>

        {/* Avatar/Imagen de la escuela */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
        >
          <Avatar
            isBordered
            color="default"
            src="/img/escolar/primaria-felipe-carrillo-puerto/primaria.jpg"
            className="h-40 w-40 my-5 shadow-lg"
            radius="full"
          />
        </motion.div>

        {/* Hora */}
        <motion.span
          className="flex items-center justify-center gap-1 text-zinc-800 text-2xl font-medium me-2 mb-5"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <IoMdTime /> 09:00 hrs
        </motion.span>

        {/* Nombre de la escuela */}
        <motion.p
          className={`${urbanist.className} text-zinc-800 text-xl px-5 text-center mx-10`}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Escuela Prim. Urb. Estatal "Felipe Carrillo Puerto"
        </motion.p>

        {/* Dirección */}
        <motion.p
          className={`${luxurious.className} text-zinc-800 mt-3 text-sm text-center mx-10 max-w-md`}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Úrsulo Galván, Centro, 91630 Villa Emiliano Zapata, Ver.
        </motion.p>

        {/* Botón de ubicación */}
        <motion.button
          type="button"
          className="text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
          onClick={onOpen}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            delay: 1.2,
          }}
        >
          Ubicación
        </motion.button>
      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
