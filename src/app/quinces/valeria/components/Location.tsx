import { glass, gran, luxurious, mea, zen } from "./Fonts";
import {
  Accordion,
  AccordionItem,
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
import { header } from "./Animations";

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
  const itemClasses = {
    title: `${mea.className} text-5xl text-center text-sky-800`,
  };

  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(["1"]));

  const handleSelectionChange = (keys: any) => {
    setSelectedKeys(new Set(keys as string[])); // Convierte la selección al formato esperado
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [map, setMap] = useState("");

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover">
      <motion.div
        className="mt-5 w-80"
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        <Accordion
          itemClasses={itemClasses}
          variant="splitted"
          selectedKeys={selectedKeys}
          onSelectionChange={handleSelectionChange}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                overflowY: "unset",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                overflowY: "hidden",
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Ceremonia"
            title="Ceremonia"
            subtitle={
              <p className="text-center text-xs">
                Presiona para {selectedKeys.has("1") ? "ocultar" : "mostrar"}
              </p>
            }
          >
            <div className="flex justify-center items-center flex-col text-zinc-700">
              <span
                className={`${gran.className} mb-8 mt-4 text-5xl bg-gray-200/50 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center gap-1`}
              >
                17:00 Hrs
              </span>
              <h2 className={`${glass.className} text-center text-2xl`}>
                Santuario De San José
              </h2>
              <p className={`${luxurious.className}  mt-3 text-sm text-center`}>
                Benito Juárez 27, 91300 Banderilla, Ver.
              </p>

              <button
                type="button"
                className="mt-10 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-xs px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  setMap("ceremony");
                  onOpen();
                }}
              >
                <LuMapPin className="mr-1" />
                Ver Ubicación
              </button>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Recepción"
            title="Recepción"
            subtitle={
              <p className="text-center text-xs mt-2">
                Presiona para {selectedKeys.has("2") ? "ocultar" : "mostrar"}
              </p>
            }
          >
            <div className="flex justify-center items-center flex-col text-zinc-700">
              <span
                className={`${gran.className} mb-8 mt-4 text-5xl bg-gray-200/50 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center gap-1`}
              >
                19:00 Hrs
              </span>
              <h2 className={`${glass.className} text-center text-2xl`}>
                Salón de Eventos Los Acosta
              </h2>
              <p className={`${luxurious.className} mt-3 text-sm text-center`}>
                Av. Libertad, 91300 Banderilla, Ver.
              </p>

              <button
                type="button"
                className="mt-10 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-xs px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  setMap("reception");
                  onOpen();
                }}
              >
                <LuMapPin className="mr-1" />
                Ver Ubicación
              </button>
            </div>
          </AccordionItem>
        </Accordion>
      </motion.div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} map={map} />
    </section>
  );
}

export default Location;
