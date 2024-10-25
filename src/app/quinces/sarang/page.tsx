"use client";

import { motion } from "framer-motion";
import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { notoSerif, pinyion } from "./components/Fonts";
import { animationButton01, animationModal } from "./components/Animations";
import { Spinner } from "flowbite-react";

import "./styles.css";
import Main from "./components/Main";

const ModalOpening = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // Estado para manejar la carga del video

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
      className="rounded-none"
    >
      <ModalContent className="overflow-clip" style={{backgroundColor: "#f4f3e1"}}>
        {(onClose) => (
          <>
            {/* Muestra el Spinner mientras el video no ha cargado */}
            {!isVideoLoaded && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <Spinner color="purple" size="xl" />
              </div>
            )}
            <video
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
              onLoadedData={() => setIsVideoLoaded(true)} // Cambia el estado cuando el video se carga
            >
              <source
                src="/img/quinces/sarang/glitter-silver.mp4"
                type="video/mp4"
              />
              Tu navegador no soporta videos HTML5.
            </video>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <Card
                className="border-none bg-background/5 h-full w-full"
                shadow="none"
                radius="none"
                isBlurred
              >
                <CardBody className="flex items-center justify-center flex-col overflow-clip">
                  <motion.div
                    className="p-5 my-4 custom-text-purple"
                    style={{ backgroundColor: "#f4f3e1" }}
                    variants={animationModal}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <p
                      className={`${pinyion.className} text-center text-4xl z-20 my-5`}
                      style={{
                        textShadow: "0px 1px 1px rgba(255,255,255, 1)",
                        fontFamily: "adelia",
                      }}
                    >
                      Sarang
                    </p>
                    <p className={`${notoSerif.className} text-center text-xl`}>
                      DECEMBER
                    </p>
                    <p className={`${notoSerif.className} text-center text-lg`}>
                      8 - 2024
                    </p>
                  </motion.div>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                variants={animationButton01}
                initial="hidden"
                whileInView="visible"
              >
                <Button
                  color="secondary"
                  variant="solid"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}
                >
                  Open
                </Button>
              </motion.div>
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
    <main className="background-class">
      {open && <Main />}
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
