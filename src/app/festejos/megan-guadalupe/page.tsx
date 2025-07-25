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
import { aref, clicker, notoSerif, oswald, roboto } from "./components/Fonts";
import { animate01, animate02 } from "./components/Animations";
import "./styles.css";
import Main from "./components/Main";
import { FaEye } from "react-icons/fa";

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
    >
      <ModalContent className="overflow-clip relative">
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
                <CardBody className="flex items-center justify-center flex-col overflow-clip">
                  <motion.div
                    className="my-4 text-amber-500 z-10"
                    variants={animate01}
                    initial="hidden"
                    whileInView="visible"
                  >
                    <p
                      className={`text-5xl mb-5 text-center`}
                      style={{
                        fontFamily: "verve",
                        lineHeight: "60px"
                      }}
                    >
                      Megan Guadalupe
                    </p>
                    <p className={`${notoSerif.className} text-center text-lg`}>
                      Sábado 26 de Julio 2025
                    </p>
                  </motion.div>
                </CardBody>
              </Card>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <motion.div
                variants={animate02}
                initial="hidden"
                whileInView="visible"
              >
                <Button
                  color="danger"
                  variant="solid"
                  onPress={() => {
                    setOpen(true);
                    onClose();
                  }}                  
                >
                  <FaEye /> <label className={`${aref.className}`}>Ver invitación</label>
                </Button>
              </motion.div>
            </ModalFooter>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250px"
              height="250px"
              viewBox="0 0 64 64"
              className="absolute -left-10 -top-10 z-0 fill-amber-500/20"
            >
              <path
                d="m24.58 18.8c-.29-.17-1.68 1.66-1.71 1.79s.5.5.67.5a9.25 9.25 0 0 0 1.33-1.58c.13-.25 0-.51-.29-.71zm2 7.91c.13 0 .21-.16.29-.37a23.13 23.13 0 0 0 -2.12-3c-.13.25-.67.29-.63.54a20.91 20.91 0 0 0 2.5 2.83zm1-2.16a9.39 9.39 0 0 0 -1.79-2.29c-.25-.05-.73.21-.67.33.17.29 2.21 2.5 2.21 2.5a1.28 1.28 0 0 0 .33-.54zm.63-1.5c.21 0 .29-.21.37-.5s-.87-1.54-1.08-1.63-.87.27-.79.38 1.37 1.79 1.58 1.75zm-1.46 23.75c-.13.08-.55.29-.55.41a15.67 15.67 0 0 0 1.55 2c.12.09.29-.21.33-.46a5.36 5.36 0 0 0 -1.33-1.95zm1-1c-.13.08-.54.29-.54.41a15.58 15.58 0 0 0 1.54 2c.12.08.29-.21.33-.46a5.24 5.24 0 0 0 -1.29-1.99zm-16.75-1.63c.13-.12 1.38.75 1.67.54s-.21-1.45-.21-1.58 1.38-.92 1.29-1.12-1.79-.38-1.79-.38-.75-2.42-1.08-2.42-1 2-1 2.17c0 0-1.71.17-1.71.5s1.46.75 1.46.92-.38 2.12-.38 2.12a2.73 2.73 0 0 0 .67.29c.24.09.91-.91 1.08-1.04zm9.63-33.79c.17-1.25-.65-2.58-2.08-2.29-1.88.37-2.38 2.29-1.55 3.08s3.41.46 3.58-.79zm-2.09-1.38c.71-.14 1.11.51 1 1.13s-1.38.78-1.79.39-.14-1.37.79-1.52zm24.79 10.13c.12.17 1.58-1.29 1.79-1.46s1.58.63 1.83.46-.5-1.75-.58-1.92 1.13-1.12 1.13-1.41-1.63-.17-1.8-.34-1-2.54-1.41-2.5-.69 3.36-.79 3.42c-.38.21-2.3 1.25-2.21 1.5s1.71.29 1.83.38.08 1.74.21 1.87zm-5 9.22a1.85 1.85 0 0 0 1.67-2.55c-.8-1.74-2.78-1.78-3.36-.79s.36 3.47 1.66 3.34zm-.76-2.7c.28-.49 1.26-.47 1.66.39a.93.93 0 0 1 -.86 1.27c-.65.06-1.12-1.16-.83-1.66zm17.66-15c.17-1.25-.64-2.58-2.08-2.29-1.87.37-2.37 2.29-1.54 3.08s3.39.44 3.59-.81zm-2-1.41a.91.91 0 0 1 1 1.13c-.08.62-1.38.78-1.79.39s-.2-1.36.72-1.54zm-12.32 40.22a8.83 8.83 0 0 0 -1.16 2.59s-2 1-2 1.21 1.79.37 1.83.62-.37 1.54-.12 1.83 1.2-.87 1.41-1 1.59.8 1.79.67-.37-1.54-.37-1.71 1.83-1.08 1.71-1.37-2-.29-2.13-.38-.58-2.66-.96-2.46zm15-18.66c-.21-.88-6-1.38-6-1.38s-2-4.21-3.2-4.12-3.71 4.62-3.84 4.79c0 0-5.33 1.37-5.33 2.29s4.08 3.62 4.08 3.62-.62 6.46.38 7 5.5-3.83 5.71-3.83 5.88 3.29 6.17 3-.71-6-.75-6.13 2.99-4.37 2.78-5.24zm-4.62 8a33.74 33.74 0 0 1 -3-1.92 2.13 2.13 0 0 0 .08-.63 14 14 0 0 0 -2-2.16c-.16 0-.66.33-.5.46a11 11 0 0 1 1.5 2.25c-.08.12-3.71 3.5-3.91 3.2s.58-4.66.41-5-3-2.09-3.29-2.34 3.42-.83 3.58-1.08 2.25-3.54 2.5-3.5 1.71 3.12 1.92 3.17 5 .41 5 .66-2.5 3.84-2.5 4.09a17.54 17.54 0 0 1 .21 2.76zm-15.45-2.29c-1.91.13-2.65 2-1.92 2.86s3.37.89 3.7-.32a1.86 1.86 0 0 0 -1.78-2.54zm.81 2.13c-.16.6-1.47.6-1.83.16s0-1.35 1-1.41a.91.91 0 0 1 .83 1.25zm-5.82-4.72c1-1 0-8 0-8.12s5.54-6 5-6.84-6.58-1.37-6.79-1.5-1.88-6.62-3-6.62-4.42 6.79-4.58 7c0 0-5.05-.71-5.55.12s3.92 6 3.92 6-3.83 7.34-2.75 8.63 6.83-2.67 7.42-2.5 5.29 4.79 6.33 3.83zm-11.63-3.5c-.12-.29 3-6.71 2.84-7s-3.04-4.16-3.04-4.42 2.54.38 3.29.17 1.37-1.42 1.67-2 1.54-3.17 1.83-3.17 1.54 4.75 2 5.08 5.62 1 5.67 1.17-4.26 4.55-4.3 4.75.25 6.41.09 6.33-3.38-3-4.55-3.08-5.37 2.46-5.5 2.17zm-6.62-14.71c-.25-.12-.5-2.29-.88-2.33s-.95 2-.95 2-1.92.17-2 .54 1.71 1.21 1.71 1.33-1.05 1.13-.75 1.55 1.7-.46 1.87-.46 1.67 1.46 2 1.29-.46-2-.5-2.13 1.37-1 1.37-1.25-1.62-.41-1.87-.54zm21.79 29.17c-.21-.71-4.25-1-4.25-1s-1.21-4.62-2.42-4.54-3.45 4.42-3.62 4.83c0 0-4.42-.29-4.75.54s4 4.25 4 4.59-2.08 4.75-1.33 5.54 4.71-2.46 5.09-2.5 5 2.08 5.75 1.42-1.59-4.46-1.55-4.76 3.29-3.41 3.08-4.12zm-5 4a15.72 15.72 0 0 1 .83 2.5c-.16 0-3-1.25-3.29-1.08a6.56 6.56 0 0 1 -2 .66c-.12-.12.54-2.62.5-2.83s-2.41-2.13-2.41-2.29 2 .12 2.16-.08 2-3.59 2.21-3.55 1.21 3.21 1.33 3.25 2.8.25 2.84.55-2.25 2.54-2.17 2.87zm-18.88 3.95c-.85 1.72.36 3.28 1.5 3.11s2.47-2.46 1.58-3.36a1.85 1.85 0 0 0 -3.08.25zm1.46 2c-.56.08-1.16-.69-.74-1.53a.91.91 0 0 1 1.52-.13c.44.48-.22 1.61-.73 1.7zm36.3-21.74c-.17-.08-.71.33-.71.33.16.09 1.83 3.17 1.83 3.17s.54-.17.63-.42a14.35 14.35 0 0 0 -1.75-3.04zm1.37-.29c.08.25.54 1.71.63 1.83s.41-.25.58-.37-.38-1.21-.54-1.42-.75-.24-.67 0z"                
              />
            </svg>            
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Jannia() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="bg-[url('/img/festejos/megan-guadalupe/background4.jpg')] bg-center bg-cover bg-fixed h-screen">
      {open && <Main />}      
      <ModalOpening
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
