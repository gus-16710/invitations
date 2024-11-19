import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdTime } from "react-icons/io";
import { greatVibes, love, markazi, notoSans } from "./Fonts";
import { reception } from "./Animations";
import { LuMapPin } from "react-icons/lu";
import { Avatar } from "flowbite-react";

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
              className={`${greatVibes.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Recepción
            </ModalHeader>
            <ModalBody>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8385265474376!2d-96.95077633927578!3d19.59141735651683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fc74b4fbbc9%3A0xee82b8966bc25112!2sLas%20Delicias!5e0!3m2!1ses!2smx!4v1731537952603!5m2!1ses!2smx"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

const ImageModal = ({
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
      size="lg"
      placement="center"
      backdrop="blur"
    >
      <ModalContent>
        <ModalBody className="m-0 p-0">
          <img
            src="/img/bodas/citlali-daniel/salon.jpg"
            alt="Imagen Completa"
            className="w-full h-auto rounded-lg"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default function Reception() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isImageOpen,
    onOpen: onImageOpen,
    onOpenChange: onImageChange,
  } = useDisclosure();

  return (
    <>
      <section
        className="flex justify-center items-center flex-col pt-20 pb-20"
        style={{ height: "100svh" }}
      >
        <motion.h1
          className={`${greatVibes.className} text-5xl p-5 text-center `}
          variants={reception.text01}
          initial="hidden"
          whileInView="visible"
        >
          Recepción
        </motion.h1>
        <motion.div
          variants={reception.svg}
          initial="hidden"
          whileInView="visible"
        >
          <Avatar
            img="/img/bodas/citlali-daniel/salon.jpg"
            size="xl"
            rounded
            onClick={onImageOpen} // Abre la modal con la imagen
            className="cursor-pointer" // Cambia el cursor a una mano para indicar clic
          />
        </motion.div>
        <motion.div
          className={`${greatVibes.className} mt-5 text-center text-zinc-700 text-6xl `}
          variants={reception.date}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex items-center justify-center gap-1">
            ~ 15:00 hrs ~
          </p>
          <p className="text-base">14/Diciembre/2024</p>
        </motion.div>
        <motion.p
          className={`${markazi.className} text-center mx-5 mt-5 text-2xl text-zinc-700 `}
          variants={reception.text02}
          initial="hidden"
          whileInView="visible"
        >
          Restaurante "Las Delicias"
        </motion.p>
        <motion.p
          className={`${notoSans.className} text-center mx-5 mt-3 text-sm text-zinc-700 `}
          variants={reception.text03}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          M. Hidalgo n° 76, Colonia Centro, 91300 Banderilla, Veracruz.
        </motion.p>

        <motion.div
          variants={reception.button}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="mt-5"
        >
          <button
            type="button"
            className="mt-10 text-zinc-700 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
            onClick={() => {
              onOpen();
            }}
          >
            <LuMapPin className="mr-1" />
            Ver Ubicación
          </button>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
      <ImageModal isOpen={isImageOpen} onOpenChange={onImageChange} />
    </>
  );
}
