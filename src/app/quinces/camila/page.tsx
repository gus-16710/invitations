"use client";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Locations from "./components/Locations";
import Gallery from "./components/Gallery";
import Confirm from "./components/Confirm";
import Gifts from "./components/Gifts";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { dancing, montez } from "./components/Fonts";
import FloatinButton from "./components/FloatingButton";
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
      size="xs"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent style={{ backgroundColor: "rgb(244, 225, 209)" }}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <h1
                className={`text-pink-800 text-8xl ${dancing.className} border-b-3 border-pink-800 pb-4 text-center`}
              >
                Camila
              </h1>
              <p
                className={`${montez.className} text-zinc-800 text-center text-xl`}
              >
                08.AGOSTO.2024
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="mt-5 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 z-20"
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
              >
                Ver Invitación
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Fifteen() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main
      className=""
      style={{
        backgroundColor: "#fde3ff",
        backgroundImage:
          "repeating-radial-gradient( circle at 0 0, transparent 0, #fde3ff 22px ), repeating-linear-gradient( #fafafa55, #fafafa )",
      }}
    >
      {open ? (
        <div className="max-w-3xl m-auto shadow-large">
          <Header />
          <Presentation />
          <Locations />
          <Gallery />
          <Gifts />
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </div>
      ) : (
        <section className="h-screen bg-[url('/img/quinces/camila/background-header.jpg')] bg-center bg-cover" />
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
