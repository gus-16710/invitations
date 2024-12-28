import { glass, gran, luxurious, mea } from "./Fonts";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";
import { header, header2 } from "./Animations";
import NumberFlow from "@number-flow/react";

const MapReception = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4470.229889985573!2d-96.9378258201691!3d19.584488266288368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fcc36b5b017%3A0x6f1ea8e0808d2069!2sSalon%20Campestre%20Acosta!5e0!3m2!1ses!2smx!4v1734384633277!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4470.101080662563!2d-96.94544282865111!3d19.58912818524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb78a66bb13%3A0x6935f2c47beef73d!2sSantuario%20Parroquial%20De%20San%20Jos%C3%A9!5e0!3m2!1ses!2smx!4v1734384698618!5m2!1ses!2smx"
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
  map,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  map: string;
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
              className={`${mea.className} flex flex-col gap-1 items-center text-3xl text-sky-800`}
            >
              {map === "ceremony" ? "Ceremonia" : "Recepción"}
            </ModalHeader>
            <ModalBody>
              {map === "ceremony" ? <MapCeremony /> : <MapReception />}
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

function Location() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [map, setMap] = useState("");

  const [ceremony, setCeremony] = useState(0);
  const [reception, setReception] = useState(0);

  return (
    <>
      <section className="h-screen text-zinc-700 flex flex-col items-center justify-center bg-[url('/img/quinces/valeria/blue-background.jpg')] bg-center bg-cover overflow-clip">
        <motion.p
          className={`${mea.className} text-5xl py-7 text-metallic`}
          variants={header2.animation1}
          initial="hidden"
          whileInView="visible"
        >
          Ceremonia
        </motion.p>
        <motion.span
          className={`${gran.className} mb-10 text-5xl bg-zinc-100 text-sky-800 font-medium me-2 px-2.5 py-0.5 rounded  flex items-center justify-center gap-1`}
          variants={header2.animation2}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => {
            setCeremony(17);
          }}
          onViewportLeave={() => {
            setCeremony(0);
          }}
        >
          <NumberFlow
            value={ceremony}
            transformTiming={{
              duration: 3000,
            }}
            trend={0}
          />
          :00 Hrs
        </motion.span>
        <motion.h2
          className={`${glass.className} text-center text-2xl z-10 text-zinc-300`}
          variants={header2.animation3}
          initial="hidden"
          whileInView="visible"
        >
          Santuario De San José
        </motion.h2>
        <motion.p
          className={`${luxurious.className}  mt-3 text-sm text-center text-zinc-300`}
          variants={header2.animation4}
          initial="hidden"
          whileInView="visible"
        >
          Benito Juárez 27, 91300 Banderilla, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="mt-10 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-xs px-5 py-2.5 text-center flex items-center"
          variants={header2.animation5}
          initial="hidden"
          whileInView="visible"
          onClick={() => {
            setMap("ceremony");
            onOpen();
          }}
        >
          <LuMapPin className="mr-1" />
          Ver Ubicación
        </motion.button>
      </section>

      <section className="h-screen text-zinc-700 flex flex-col items-center justify-center bg-[url('/img/quinces/valeria/blue-background.jpg')] bg-center bg-cover overflow-clip">
        <motion.p
          className={`${mea.className} text-5xl py-7 text-metallic`}
          variants={header.animation1}
          initial="hidden"
          whileInView="visible"
        >
          Recepción
        </motion.p>
        <motion.span
          className={`${gran.className} mb-10 text-5xl bg-zinc-100 text-sky-800 font-medium me-2 px-2.5 py-0.5 rounded flex items-center justify-center gap-1` }
          variants={header.animation2}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={() => {
            setReception(19);
          }}
          onViewportLeave={() => {
            setReception(0);
          }}
        >
          <NumberFlow
            value={reception}
            transformTiming={{
              duration: 3000,
            }}
            trend={0}
          />
          :00 Hrs
        </motion.span>
        <motion.h2
          className={`${glass.className} text-center text-2xl text-zinc-300`}
          variants={header.animation3}
          initial="hidden"
          whileInView="visible"
        >
          Salón de Eventos Los Acosta
        </motion.h2>
        <motion.p
          className={`${luxurious.className} mt-3 text-sm text-center text-zinc-300`}
          variants={header.animation4}
          initial="hidden"
          whileInView="visible"
        >
          Av. Libertad, 91300 Banderilla, Ver.
        </motion.p>
        <motion.button
          type="button"
          className="mt-10 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-xs px-5 py-2.5 text-center flex items-center z-10"
          variants={header.animation5}
          initial="hidden"
          whileInView="visible"
          onClick={() => {
            setMap("reception");
            onOpen();
          }}
        >
          <LuMapPin className="mr-1" />
          Ver Ubicación
        </motion.button>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} map={map} />
    </>
  );
}

export default Location;
