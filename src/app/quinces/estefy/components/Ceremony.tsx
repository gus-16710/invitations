import { standard, titillium, vibes } from "./Fonts";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { header } from "./Animations";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { formatNumber } from "./Header";
import Image from "next/image";

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
    >
      <ModalContent style={{ backgroundColor: "transparent" }}>
        {(onClose) => (
          <>
            <ModalHeader
              className={`${vibes.className} flex flex-col gap-1 items-center text-3xl text-white`}
            >
              Ceremonia Religiosa
            </ModalHeader>
            <ModalBody>
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.578163916364!2d-97.00352639339648!3d19.645324256979283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db25ec92d66f17%3A0xff5dc8270e85b1c0!2sIglesia%20de%20Ejido%20San%20Jos%C3%A9!5e0!3m2!1ses!2smx!4v1749838668862!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.578163916364!2d-97.00352639339648!3d19.645324256979283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db25ec92d66f17%3A0xff5dc8270e85b1c0!2sIglesia%20de%20Ejido%20San%20Jos%C3%A9!5e0!3m2!1ses!2smx!4v1749838668862!5m2!1ses!2smx"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded"
              ></iframe>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="text-zinc-0 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center text-white"
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

export default function Ceremony({ splide }: { splide: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (splide === 2) {
      setTimeout(() => {
        setHour(13);
      }, 500);
    } else {
      setHour(0);
    }
  }, [splide]);

  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col">
        <motion.h2
          className={`${vibes.className} text-5xl mb-5`}
          variants={header.animation1}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#513704" }}
        >
          Ceremonia Religiosa
        </motion.h2>
        {/* <motion.p
          className={`${standard.className} text-6xl mt-5`}
          variants={header.animation2}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          <NumberFlow
            value={hour}
            transformTiming={{
              duration: 3000,
            }}
            trend={0}
          />
          :00 hrs
        </motion.p> */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={header.animation2}
          initial="hidden"
          whileInView="visible"
        >
          <div className="bg-[url('/img/quinces/estefy/paper.png')] bg-contain bg-no-repeat bg-center absolute w-96 h-40" />
          <p
            className={`${standard.className} text-5xl z-50 mb-2`}
            style={{ color: "#a57d35" }}
          >
            <NumberFlow
              value={hour}
              transformTiming={{
                duration: 3000,
              }}
              trend={0}
            />
            :00 hrs
          </p>
        </motion.div>
        <motion.p
          className={`${vibes.className} text-center mx-16 mt-10 text-4xl max-w-md `}
          variants={header.animation3}
          initial="hidden"
          whileInView="visible"
          style={{ color: "#a57d35" }}
        >
          Iglesia de Ejido San José
        </motion.p>

        <motion.p
          className={`${titillium.className} text-center mx-5 mt-5 text-sm max-w-md  p-2`}
          variants={header.animation4}
          initial="hidden"
          whileInView="visible"
        >
          Centro, 91353, El Fresno, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="mt-5 bg-white/0 border border-yellow-700 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
          style={{ color: "#a57d35" }}
          onClick={() => {
            onOpen();
          }}
          variants={header.animation5}
          initial="hidden"
          whileInView="visible"
        >
          <IoLocationSharp className="mr-1 text-xl" />
          Ver Ubicación
        </motion.button>
      </div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
