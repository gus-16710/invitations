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
      <ModalContent style={{ backgroundColor: "rgba(244, 225, 209, 0.5)" }}>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <h1
                className={`text-pink-800 text-5xl ${dancing.className} border-b-3 border-pink-800 pb-4 text-center`}
              >
                Martha Itzel
              </h1>
              <p
                className={`${montez.className} text-zinc-800 text-center text-2xl`}
              >
                28/JUNIO/2025
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
      style={{
        backgroundColor: "#99154B",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%2399154B' cx='50' cy='0' r='50'/%3E%3Cg fill='%239f2752' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a4345a' cx='50' cy='100' r='50'/%3E%3Cg fill='%23aa4062' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23af4c69' cx='50' cy='200' r='50'/%3E%3Cg fill='%23b45771' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ba6179' cx='50' cy='300' r='50'/%3E%3Cg fill='%23bf6c82' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c3768a' cx='50' cy='400' r='50'/%3E%3Cg fill='%23c88192' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23cd8b9a' cx='50' cy='500' r='50'/%3E%3Cg fill='%23d195a3' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d59fac' cx='50' cy='600' r='50'/%3E%3Cg fill='%23d9aab4' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23deb4bd' cx='50' cy='700' r='50'/%3E%3Cg fill='%23e1bec6' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e5c9cf' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e9d3d8' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ecdee1' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f0e8ea' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23F3F3F3' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
      }}
    >
      {open ? (
        <div className="max-w-3xl m-auto shadow-large">
          <Header />
          <Presentation />
           <Locations />
          <Gallery />
          {/* <Gifts /> */}
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </div>
      ) : (
        <div className="h-screen bg-[url('/img/quinces/martha/background-header-4.jpg')] bg-center bg-cover" />
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
