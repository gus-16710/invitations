"use client";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Locations from "./components/Locations";
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
import { pinyon, cormorant } from "./components/Fonts";
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
      <ModalContent style={{ backgroundColor: "#f5ebe0" }}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <h1
                className={`text-red-800 text-8xl ${pinyon.className} border-b-3 border-red-800 pb-4 pt-2 text-center`}
              >
                Meily
              </h1>
              <p
                className={`${cormorant.className} text-zinc-800 text-center text-xl font-semibold tracking-[0.15em] whitespace-nowrap`}
              >
                05 · DICIEMBRE · 2026
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className={`${cormorant.className} mt-5 text-white bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold tracking-wider rounded-lg text-lg px-6 py-2 text-center me-2 mb-2 z-20`}
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
      style={{
        background:
          "linear-gradient(180deg, #7f1d1d 0%, #991b1b 35%, #d9b99b 75%, #f5ebe0 100%)",
        backgroundAttachment: "fixed",
      }}
    >
      {open ? (
        <div className="max-w-3xl m-auto shadow-large">
          <Header />
          <Presentation />
          <Locations />
          <Gifts />
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </div>
      ) : (
        <div className="h-screen bg-[url('/img/quinces/meily/background-header.jpg')] bg-center bg-cover" />
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
