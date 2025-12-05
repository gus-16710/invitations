import { IoMdTime, IoMdPin } from "react-icons/io";
import { FaChurch } from "react-icons/fa";
import { dancing, quickSand } from "./Fonts";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

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
              className={`${dancing.className} flex flex-col gap-1 items-center justify-center text-4xl text-amber-800 text-center`}
            >
              Ceremonia
            </ModalHeader>
            <ModalBody className="pb-6">             
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8940.23303326303!2d-96.94871162511589!3d19.588572212504758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb78a66bb13%3A0x6935f2c47beef73d!2sSantuario%20Parroquial%20De%20San%20Jos%C3%A9!5e0!3m2!1ses!2smx!4v1764891806644!5m2!1ses!2smx"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-large z-20"
              />
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

// Componente de tarjeta de información
const InfoCard = ({ icon: Icon, title, content, delay }: any) => (
  <motion.div
    className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-yellow-200 w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-amber-100 rounded-lg">
        <Icon className="text-amber-600 text-xl" />
      </div>
      <h3 className={`${quickSand.className} font-semibold text-amber-800`}>
        {title}
      </h3>
    </div>
    <p className={`${quickSand.className} text-amber-900/80 pl-11`}>
      {content}
    </p>
  </motion.div>
);

export default function Ceremony() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [particles, setParticles] = useState<
    Array<{ left: string; top: string }>
  >([]);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen py-12 px-4 overflow-hidden">
        {/* Fondo decorativo */}

        <div className="absolute inset-0 overflow-hidden">
          {/* Partículas doradas - solo en cliente */}
          {particles.map((pos, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-yellow-500/50 rounded-full"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        {/* Elementos decorativos laterales */}
        <div className="absolute left-10 top-1/3 hidden lg:block">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-amber-400/20 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        <div className="absolute right-10 bottom-1/3 hidden lg:block">
          <motion.div
            className="w-40 h-40 bg-gradient-to-tr from-amber-300/20 to-yellow-200/20 rounded-full blur-xl"
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          {/* Encabezado */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full mb-4">
              <FaChurch className="text-amber-600 text-3xl" />
            </div>
            <motion.h1
              className={`${dancing.className} text-6xl md:text-7xl text-amber-700 mb-2`}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              Ceremonia
            </motion.h1>
          </motion.div>

          <div className=" flex flex-col gap-5 justify-center items-center mb-12">
            {/* Columna izquierda - Información */}
            <InfoCard
              icon={IoMdTime}
              title="Hora de la Ceremonia"
              content="Sábado 12:00 Hrs - Te recomendamos llegar 15 minutos antes"
              delay={0.2}
            />

            <InfoCard
              icon={IoMdPin}
              title="Lugar"
              content="Santuario Parroquial De San José - Un lugar lleno de historia y espiritualidad"
              delay={0.4}
            />

            <motion.div
              className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 p-4 rounded-xl border border-amber-200 w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={`${quickSand.className} text-amber-800 text-sm`}>
                <span className="font-semibold">Dirección:</span> Benito Juárez
                27, Lomas de Hidalgo, Centro, 91300 Banderilla, Ver.
              </p>
            </motion.div>

            <motion.button
              onClick={onOpen}
              className="golden-button relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <IoMdPin className="text-xl" />
                Ver Mapa
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.p
              className={`${quickSand.className} text-amber-600 text-center mt-4 text-sm`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Haz clic para ver la ubicación exacta y obtener indicaciones
            </motion.p>
          </div>
        </div>
      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
