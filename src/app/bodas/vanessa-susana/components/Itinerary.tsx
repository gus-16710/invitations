import { motion } from "framer-motion";
import { crimson, italianno, playfair } from "./Fonts";
import {  
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "@nextui-org/react";

const itinerary = [
  {
    time: "15:00 Hrs",
    event: "Ceremonia Civil",
  },  
  {
    time: "16:00 Hrs",
    event: "Recepción",
  },
  {
    time: "16:30 Hrs",
    event: "Comida",
  },
  {
    time: "18:00 Hrs",
    event: "Baile",
  },
  {
    time: "03:00 Hrs",
    event: "Termino del Evento",
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const element = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

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
      size="full"
      placement="center"
      backdrop="blur"
      classNames={{
        closeButton: "text-zinc-100",
      }}
    >
      <ModalContent className="bg-zinc-100/0 text-zinc-100">
        {(onClose) => (
          <>
            <ModalHeader
              className={`${crimson.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ceremonia Civil
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <iframe              
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.840423818375!2d-96.94240308255617!3d19.59133610104044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fc7cf2e5b9f%3A0x3674f5d4cdef3a2d!2sSal%C3%B3n%20%22Quinta%20La%20Piedra%22!5e0!3m2!1ses!2smx!4v1762494057989!5m2!1ses!2smx"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-large z-20"
              ></iframe>
              <Spinner className="absolute z-10" color="white" />
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="text-zinc-0 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
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

export default function Itinerary() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <div className="flex items-center mt-10">
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Programa de boda
        </p>
        <motion.div
          className="flex-1 border-b-1 border-black"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="flex mt-5 gap-3 flex-row-reverse items-center">
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-gray-300 p-3 border-1 border-black rounded-sm">
            <p
              className={`${crimson.className} text-lg border-b-1 border-black mb-4 text-center`}
              style={{ fontWeight: "bolder" }}
            >
              Ceremonia Civil
            </p>

            <p className={`${crimson.className} text-center`}>
              Hora 15:00 hrs <br />
              "Salón la Piedra" <br />
              Privada 5 de Febrero #2, Banderilla, Ver.
            </p>

            <button
              className="bg-gray-900 py-2 w-full text-zinc-200 mt-4 rounded-sm"
              onClick={() => {
                onOpen();
              }}
            >
              Ver mapa
            </button>
          </div>
          
        </div>
        <div className="flex-1">
          <motion.ol
            className="relative border-s border-gray-600"
            initial="hidden"
            whileInView="visible"
            variants={list}
          >
            {itinerary.map((item, index) => (
              <div key={index}>
                <li className="mb-7 ms-4">
                  <div className="absolute w-3 h-3 bg-black rounded-full mt-1.5 -start-1.5  "></div>
                  <motion.div variants={element}>
                    <time className="mb-1 text-sm font-normal leading-none text-black">
                      {item.time}
                    </time>
                    <h3
                      className={`${playfair.className} text-base font-semibold text-gray-900 dark:text-white`}
                    >
                      {item.event}
                    </h3>
                  </motion.div>
                </li>
              </div>
            ))}
          </motion.ol>
        </div>
      </div>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
