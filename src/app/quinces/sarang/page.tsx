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
import { notoSerif, pinyion, playFair } from "./components/Fonts";
import {
  animation01,
  animation03,
  animationButton01,
  animationSvg01,
  animationSvg02,
  animationSvg03,
  animationSvg04,
} from "./components/Animations";

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
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
      className="rounded-none"
    >
      <ModalContent className="overflow-clip bg-[url('/img/quinces/sarang/silver-background.jpg')] bg-cover bg-center bg-fixed">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <Card
                className="border-none bg-background/5 h-full w-full"
                shadow="none"
                radius="none"
                isBlurred
              >
                <CardBody className="flex items-center justify-center flex-col">
                  <motion.div
                    className="p-5 my-4 custom-text-purple"
                    style={{ backgroundColor: "#f4f3e1" }}
                    variants={animation03}
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
