"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import FloatinButton from "./components/FloatingButton";

import { useEffect, useState, Dispatch, SetStateAction } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { GrFormViewHide } from "react-icons/gr";

import { Image } from "@nextui-org/react";
import { dancing, open, sevillana, urbanist } from "./components/Fonts";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import AudioControl from "./components/AudioControl";

const OpeningModal = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent className="bg-slate-50/0">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <section
                className="flex flex-col justify-center items-center"
                style={{ height: "100svh" }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className={`${open.className} text-zinc-800 text-lg`}>
                    Jardin de Niños
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1
                    className={`${sevillana.className} text-zinc-800 text-5xl`}
                  >
                    "Esperanza Osorio"
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h2 className={`${open.className} text-zinc-800 mb-5 mt-2`}>
                    30EJN0087V
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <Image
                    width={150}
                    alt="NextUI hero Image"
                    src="/img/escolar/jardin-esperanza-osorio/logo.png"
                    className="mb-5"
                  />
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                >
                  <h2
                    className={`${dancing.className} text-zinc-800 text-4xl text-center`}
                  >
                    Ceremonia de clausura
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <h2
                    className={`${urbanist.className} text-zinc-800 text-xl py-2 flex items-center gap-2`}
                  >
                    <CiCalendar className="rotate-6 text-2xl" />
                    02 de Julio del 2025
                    <CiCalendar className="-rotate-6 text-2xl" />
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ y: 0, opacity: 0 }}
                  whileInView={{ y: [0, 10, 0], opacity: 1 }}
                  transition={{
                    y: { duration: 2, repeat: Infinity },
                    opacity: { duration: 0.8, delay: 1.4 },
                  }}
                  className="mt-5"
                >
                  <button
                    type="button"
                    className="flex gap-2 text-gray-800 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4"
                    onClick={() => {
                      setOpen(true);
                      onClose();
                    }}
                  >
                    <GrFormViewHide className="text-xl" /> Ver invitación
                  </button>
                </motion.div>
              </section>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function School() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="bg-[url('/img/escolar/jardin-esperanza-osorio/background04.jpg')] bg-center bg-fixed bg-no-repeat bg-cover min-h-screen">
      {open && (
        <>
          <SlideOne />
          <SlideTwo />
          <SlideThree />
          <SlideFour />
          <AudioControl/>
          <FloatinButton />
        </>
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
