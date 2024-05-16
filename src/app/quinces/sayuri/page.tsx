"use client";

import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Header from "./components/Header";
import Ceremony from "./components/Ceremony";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";
import Confirm from "./components/Confirm";
import { dancing, playFair } from "./components/Fonts";
import { FaEye } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import "./styles.css";
import FloatinButton from "./components/FloatingButton";
import AudioControl from "./components/AudioControl";

const ModalOpening = ({
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
      <ModalContent className="bg-[url('/img/quinces/sayuri/background-golden.jpg')] bg-cover bg-center">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex flex-col items-center justify-center">
              <h1
                className={`text-golden text-8xl ${dancing.className} border-b-3 border-yellow-600 pb-4 text-center`}
              >
                &nbsp;Sayuri&nbsp;
              </h1>
              <p
                className={`${playFair.className} text-zinc-400 text-center text-xl`}
              >
                21 | SEPTIEMBRE | 2024
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="mt-5 golden-button"
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
              >
                <span className="golden-text flex justify-around items-center w-40">
                  - Ver invitación -
                </span>
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
    <main className={`background-class ${open ? "" : "h-screen"}`}>
      {open && (
        <div className="max-w-3xl m-auto bg-golden bg-[url('/img/quinces/sayuri/background-floral.jpg')] bg-cover bg-center bg-fixed shadow-large">
          <Header />
          <Presentation />
          <div className="bg-[url('/img/quinces/sayuri/background-paper.jpg')] bg-cover bg-center">
            <Ceremony />
            <Reception />
          </div>
          <Gallery />
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </div>
      )}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
