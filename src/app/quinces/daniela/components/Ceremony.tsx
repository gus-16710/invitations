import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import {
  Avatar,
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
import {
  animation01,
  animation03,
  animation04,
  animation06,
  animation07,
} from "./Animations";
import { aref, pinyion, playFair, rajdhani } from "./Fonts";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.940584345849!2d-96.92546855044417!3d19.52830722889927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2dff1a7cdc9b%3A0x7ebb1a4a9284e7ed!2sCatedral%20Metropolitana%20de%20la%20Inmaculada%20Concepci%C3%B3n!5e0!3m2!1ses!2smx!4v1700178969653!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

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
            <ModalHeader className={`${pinyion.className} flex flex-col gap-1 items-center text-3xl`}>Ceremonia</ModalHeader>
            <ModalBody>
              <MapCeremony />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Ceremony() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const background01 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5, 0.6, 0.7, 1],
    [300, 100, 0, 0, 0, 100, 300]
  );

  const background02 = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5, 0.6, 0.7, 1],
    [-300, -100, 0, 0, 0, -100, -300]
  );

  return (
    <>
      <section
        ref={ref}
        className="overflow-hidden relative h-screen flex justify-center items-center flex-col px-5 py-10"
      >
        <Card
          className="border-none bg-background/60 h-full w-full"
          shadow="sm"
        >
          <CardBody className="flex items-center justify-center flex-col">
            <motion.h1
              className={`${pinyion.className} text-5xl text-yellow-400 mt-5 text-center z-50`}
              variants={animation01}
              initial="hidden"
              whileInView="visible"
            >
              Ceremonia
            </motion.h1>
            <motion.div
              variants={animation06}
              initial="hidden"
              whileInView="visible"
              className="z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                id="Capa_1"
                x="0px"
                y="0px"
                width={180}
                viewBox="0 0 400 84.1"
                xmlSpace="preserve"
                fill="rgb(220 140 8)"
              >
                <g>
                  <g>
                    <g>
                      <path d="M392,14.6c3.7,0,5.7,1.6,6.7,2.9c1.5,2.1,1.6,4.8,1.1,6.5c-0.8,2.6-3.3,4.6-6.1,4.9c-1.8,0.1-3.4-0.4-4.6-1.6    c-1.3-1.3-1.8-3.3-1.3-5.1c0.5-1.5,1.6-2.6,3-2.9c0.9-0.2,1.8,0.1,2.5,0.6c0.7,0.5,1.1,1.2,1.1,2c0.1,0.6-0.4,1.2-1,1.2    c-0.6,0-1.2-0.4-1.2-1c0-0.2-0.2-0.3-0.2-0.4c-0.2-0.2-0.5-0.2-0.7-0.2c-0.5,0.1-1.1,0.6-1.3,1.3c-0.3,0.9,0,2.1,0.7,2.8    c0.7,0.7,1.7,1,2.8,0.9c1.8-0.1,3.5-1.5,4.1-3.3c0.3-1,0.4-3-0.8-4.5c-1-1.3-2.6-2-4.8-2c-0.6,0-1.1-0.5-1.1-1.1    S391.3,14.6,392,14.6z"></path>
                    </g>
                    <g>
                      <path d="M393.1,2.4c0.2,0,0.3,0,0.5,0c2.7,0.2,5.2,2.2,6.1,4.9c0.6,1.7,0.4,4.5-1.1,6.5c-1,1.3-2.9,2.9-6.7,2.9    c-0.6,0-1.1-0.5-1.1-1.1c0-0.6,0.5-1.1,1.1-1.1c2.2,0,3.9-0.7,4.8-2c1.1-1.5,1.1-3.5,0.8-4.5c-0.6-1.8-2.3-3.1-4.1-3.3    c-1.1-0.1-2.1,0.3-2.8,0.9c-0.7,0.7-1,1.8-0.7,2.8c0.2,0.7,0.7,1.2,1.3,1.3c0.2,0,0.5,0,0.7-0.2c0.1-0.1,0.2-0.2,0.2-0.4    c0.1-0.6,0.6-1.1,1.2-1c0.6,0.1,1.1,0.6,1,1.2c-0.1,0.8-0.5,1.5-1.1,2c-0.7,0.6-1.7,0.8-2.5,0.6c-1.4-0.3-2.6-1.4-3-2.9    c-0.5-1.8,0-3.8,1.3-5.1C390.1,3,391.6,2.4,393.1,2.4z"></path>
                    </g>
                    <g>
                      <path d="M8,14.6c0.6,0,1.1,0.5,1.1,1.1S8.7,16.8,8,16.8c-2.2,0-3.9,0.7-4.8,2c-1.1,1.5-1.1,3.5-0.8,4.5c0.6,1.8,2.3,3.1,4.1,3.3    c1.1,0.1,2.1-0.3,2.8-0.9c0.7-0.7,1-1.8,0.7-2.8c-0.2-0.7-0.7-1.2-1.3-1.3c-0.2,0-0.5,0-0.7,0.2C8,21.9,7.8,22,7.8,22.2    c-0.1,0.6-0.6,1.1-1.2,1c-0.6-0.1-1.1-0.6-1-1.2c0.1-0.8,0.5-1.5,1.1-2c0.7-0.6,1.7-0.8,2.5-0.6c1.4,0.3,2.6,1.4,3,2.9    c0.5,1.8,0,3.8-1.3,5.1c-1.1,1.1-2.8,1.7-4.6,1.6c-2.7-0.2-5.2-2.2-6.1-4.9c-0.6-1.7-0.4-4.5,1.1-6.5C2.4,16.2,4.3,14.6,8,14.6z"></path>
                    </g>
                    <g>
                      <path d="M6.9,2.4C8.5,2.4,9.9,3,11,4c1.3,1.3,1.8,3.3,1.3,5.1c-0.5,1.5-1.6,2.6-3,2.9c-0.9,0.2-1.8-0.1-2.5-0.6    c-0.7-0.5-1.1-1.2-1.1-2C5.5,8.7,6,8.2,6.6,8.1c0.6-0.1,1.2,0.4,1.2,1c0,0.2,0.2,0.3,0.2,0.4c0.2,0.2,0.5,0.2,0.7,0.2    c0.5-0.1,1.1-0.6,1.3-1.3c0.3-0.9,0-2.1-0.7-2.8C8.7,5,7.7,4.6,6.6,4.7C4.8,4.8,3,6.2,2.5,8c-0.3,1-0.4,3,0.8,4.5    c1,1.3,2.6,2,4.8,2c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1c-3.7,0-5.7-1.6-6.7-2.9C-0.1,11.7-0.3,9,0.3,7.3    c0.9-2.6,3.4-4.6,6.1-4.9C6.6,2.4,6.7,2.4,6.9,2.4z"></path>
                    </g>
                  </g>
                  <g>
                    <path d="M304.1,5.9c0.1,0,0.2,0,0.2,0c3.9,0,7.9,0.3,11,2.7c1.9,1.5,3.1,4,3.1,6.4c0,1.9-0.7,3.6-2.1,4.7   c-2.1,1.7-5.3,1.7-7.4-0.1c-2-1.8-2.6-5-1.2-7.3c0.3-0.5,1-0.7,1.6-0.4c0.5,0.3,0.7,1,0.4,1.6c-0.8,1.3-0.5,3.4,0.7,4.4   c1.2,1,3.2,1,4.4,0c1-0.9,1.2-2.1,1.2-2.9c0-1.8-0.9-3.6-2.3-4.6c-2.5-2-6.1-2.2-9.6-2.2c-4.5,0-9.7,0.3-14.1,2.4   c-1.5,0.8-3.1,1.9-4.3,3.2c2,1.9,3.3,4.2,3.5,6.7c0.2,1.9-0.5,4-1.7,5.2c-0.9,0.9-1.9,1.3-3.1,1.2c-2.7-0.2-4.1-3.2-4.2-5.8   c0-2.4,0.8-4.8,2.2-7c-2.1-1.3-4.7-1.9-7.1-1.7c-2.6,0.3-5.2,1.4-7.5,3.3c0.9,2,1.4,4.3,1.6,6.7c0.2,2.7-0.2,4.7-1.1,6.2   c-1.2,2-3.9,3.4-6.3,2.4c-1.9-0.7-3.1-2.8-3.1-5c0-2,0.9-3.8,1.7-5.2c1.2-2.2,2.8-4.1,4.4-5.7c-0.8-1.3-1.7-2.5-2.8-3.4   c-3.2-2.7-7.7-3.3-10.9-1.3c-3.1,1.9-4.5,5.7-5.8,9.5c-0.3,0.9-0.6,1.8-1,2.7c-1.6,4.2-4.8,9.9-10.7,13.6   c-5.3,3.4-11.9,4.2-17.2,2.2c-5.8-2.2-11-9.7-10.9-15.8c0.1-6.1,4.6-12.3,13-12.3c2.6,0,4.9,1,6.7,3c2.5,2.7,3.8,6.8,3.5,11.4   c0,0.6-0.6,1.1-1.2,1.1c-0.6,0-1.1-0.6-1.1-1.2c0.3-3.9-0.8-7.4-2.9-9.7c-1.4-1.5-3.1-2.3-5-2.3c-7.2,0-10.6,5.2-10.7,10.1   c-0.1,5,4.6,11.8,9.5,13.6c4.7,1.8,10.5,1,15.2-2c5.4-3.4,8.3-8.7,9.8-12.6c0.3-0.9,0.7-1.7,1-2.6c1.5-4.1,3-8.3,6.7-10.6   c3.9-2.4,9.6-1.8,13.5,1.5c1.2,1,2.2,2.2,3.1,3.7c2.5-1.9,5.4-3.1,8.3-3.5c3-0.3,6.2,0.4,8.8,2.1c1.4-1.5,3.1-2.9,5.2-3.9   C293.9,6.3,299.4,5.9,304.1,5.9z M284.9,24.7c0.4,0,0.8-0.2,1.1-0.5c0.7-0.7,1.2-2.2,1.1-3.4c-0.2-1.9-1.1-3.7-2.7-5.2   c-1.1,1.6-1.8,3.5-1.7,5.6c0,1.6,0.8,3.4,2.1,3.5C284.8,24.7,284.9,24.7,284.9,24.7z M263.8,29.3c1.1,0,2.2-0.8,2.7-1.7   c0.7-1.2,1-2.7,0.8-4.9c-0.1-1.9-0.5-3.6-1.1-5.3c-1.3,1.3-2.5,2.9-3.5,4.6c-0.6,1.1-1.4,2.6-1.4,4.1c0,1.1,0.5,2.5,1.7,2.9   C263.3,29.2,263.5,29.3,263.8,29.3z"></path>
                  </g>
                  <g>
                    <path d="M200.2,14.5H392c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1H200.2c-0.6,0-1.1-0.5-1.1-1.1   C199.1,15,199.6,14.5,200.2,14.5z"></path>
                  </g>
                  <g>
                    <path d="M95.9,5.9c4.7,0,10.1,0.3,14.9,2.7c2,1,3.8,2.3,5.2,3.9c2.6-1.7,5.8-2.4,8.8-2.1c2.9,0.3,5.8,1.5,8.3,3.5   c0.8-1.4,1.9-2.7,3.1-3.7c3.9-3.3,9.6-4,13.5-1.5c3.8,2.3,5.3,6.5,6.7,10.6c0.3,0.9,0.6,1.8,1,2.6c1.5,3.8,4.5,9.1,9.8,12.6   c4.7,3,10.5,3.8,15.2,2c4.9-1.8,9.6-8.6,9.5-13.6c-0.1-4.9-3.5-10.1-10.7-10.1c-1.9,0-3.6,0.8-5,2.3c-2.1,2.2-3.2,5.8-2.9,9.7   c0,0.6-0.4,1.2-1.1,1.2c-0.6,0-1.2-0.4-1.2-1.1c-0.3-4.5,1-8.7,3.5-11.4c1.8-1.9,4.1-3,6.7-3c8.3,0,12.8,6.2,13,12.3   c0.1,6.1-5.1,13.6-10.9,15.8c-5.3,2-11.9,1.1-17.2-2.2c-5.9-3.7-9.1-9.5-10.7-13.6c-0.3-0.9-0.7-1.8-1-2.7   c-1.3-3.7-2.7-7.5-5.8-9.5c-3.1-1.9-7.7-1.4-10.9,1.3c-1.1,0.9-2,2.1-2.8,3.4c1.7,1.6,3.2,3.5,4.4,5.7c0.8,1.4,1.7,3.2,1.7,5.2   c0,2.3-1.2,4.3-3.1,5c-2.4,1-5.1-0.5-6.3-2.4c-1-1.6-1.3-3.6-1.1-6.2c0.2-2.4,0.7-4.7,1.6-6.7c-2.3-1.8-4.9-3-7.5-3.3   c-2.4-0.3-5,0.3-7.1,1.7c1.4,2.1,2.2,4.5,2.2,7c0,2.6-1.5,5.5-4.2,5.8c-1.1,0.1-2.2-0.3-3.1-1.2c-1.2-1.2-1.9-3.3-1.7-5.2   c0.3-2.5,1.5-4.9,3.5-6.7c-1.3-1.4-2.8-2.5-4.3-3.2c-4.4-2.2-9.6-2.4-14.1-2.4c-3.5,0-7.1,0.3-9.6,2.2c-1.4,1.1-2.2,2.9-2.3,4.6   c0,0.9,0.2,2.1,1.2,2.9c1.2,1,3.2,1,4.4,0c1.2-1,1.5-3,0.7-4.4C89.9,13,90,12.4,90.6,12c0.5-0.3,1.2-0.1,1.6,0.4   c1.4,2.3,0.9,5.5-1.2,7.3c-2,1.8-5.3,1.8-7.4,0.1c-1.4-1.1-2.1-2.8-2.1-4.7c0-2.4,1.3-4.9,3.1-6.4c3.1-2.4,7.1-2.7,11-2.7   C95.8,5.9,95.8,5.9,95.9,5.9z M115.1,24.7c0,0,0.1,0,0.1,0c1.3-0.1,2.1-1.9,2.1-3.5c0-2-0.7-3.9-1.7-5.6c-1.5,1.5-2.5,3.3-2.7,5.2   c-0.1,1.2,0.3,2.6,1.1,3.4C114.3,24.6,114.6,24.7,115.1,24.7z M136.2,29.3c0.3,0,0.5,0,0.8-0.1c1.1-0.5,1.7-1.8,1.7-2.9   c0-1.5-0.7-3-1.4-4.1c-1-1.8-2.2-3.3-3.5-4.6c-0.6,1.6-1,3.4-1.1,5.3c-0.2,2.2,0.1,3.7,0.8,4.9C134,28.5,135.1,29.3,136.2,29.3z"></path>
                  </g>
                  <g>
                    <path d="M8,14.5h191.7c0.6,0,1.1,0.5,1.1,1.1c0,0.6-0.5,1.1-1.1,1.1L8,16.8c-0.6,0-1.1-0.5-1.1-1.1C6.9,15,7.4,14.5,8,14.5z"></path>
                  </g>
                  <g>
                    <g>
                      <path d="M200,14.5L200,14.5c0.6,0,1,0.4,1.1,1c0.2,1.6,5.7,38.2,5.7,47.7c0,9.2-2.4,18.5-6.9,18.5c-4.5,0-6.9-9.3-6.9-18.5    c0-9.5,5.5-46.2,5.7-47.7C199,14.9,199.4,14.5,200,14.5z M200,79.4c1.9,0,4.6-6.3,4.6-16.2c0-6.7-2.9-28.1-4.6-39.7    c-1.7,11.6-4.6,33-4.6,39.7C195.4,73.1,198.1,79.4,200,79.4z"></path>
                    </g>
                    <g>
                      <path d="M200.5,17.8c0.6,0,1,0.4,1.1,1c4.3,27.5,14.9,45.9,31.5,54.5c0.4,0.2,0.7,0.7,0.6,1.2c-0.1,0.5-0.5,0.9-1,0.9    c-14,1.4-27-9.1-29-23.4c-0.1-0.6,0.3-1.2,1-1.3c0.6-0.1,1.2,0.3,1.3,1c1.7,11.8,11.3,20.7,22.5,21.5    c-15.2-9.7-25-27.8-29.1-54.1c-0.1-0.6,0.3-1.2,0.9-1.3C200.4,17.8,200.4,17.8,200.5,17.8z"></path>
                    </g>
                    <g>
                      <path d="M200.7,19c0.5,0,0.9,0.3,1.1,0.8c9.7,27,27.6,37.3,54.7,31.3c0.5-0.1,1.1,0.2,1.3,0.7c0.2,0.5,0,1.1-0.4,1.4    c-9.2,6.1-20.5,8.3-30.3,5.9c-9.3-2.3-17-8.5-22.3-18c-0.3-0.5-0.1-1.2,0.4-1.5c0.5-0.3,1.2-0.1,1.5,0.4c5,9,12.3,14.8,20.9,16.9    c7.1,1.7,15.1,0.8,22.4-2.3c-24.6,3.1-41.1-8.1-50.4-34c-0.2-0.6,0.1-1.2,0.7-1.5C200.4,19,200.6,19,200.7,19z"></path>
                    </g>
                    <g>
                      <path d="M199.5,17.8c0.1,0,0.1,0,0.2,0c0.6,0.1,1,0.7,0.9,1.3c-4.1,26.3-13.8,44.4-29.1,54.1c11.1-0.8,20.8-9.8,22.5-21.5    c0.1-0.6,0.6-1.1,1.3-1c0.6,0.1,1.1,0.7,1,1.3c-2,14.4-15,24.9-29,23.4c-0.5-0.1-0.9-0.4-1-0.9c-0.1-0.5,0.1-1,0.6-1.2    c16.6-8.6,27.2-27,31.5-54.5C198.5,18.2,199,17.8,199.5,17.8z"></path>
                    </g>
                    <g>
                      <path d="M199.3,19c0.1,0,0.3,0,0.4,0.1c0.6,0.2,0.9,0.9,0.7,1.5c-9.3,25.9-25.9,37.1-50.4,34c7.3,3.2,15.3,4.1,22.4,2.3    c8.6-2.1,15.8-7.9,20.9-16.9c0.3-0.5,1-0.7,1.5-0.4c0.5,0.3,0.7,1,0.4,1.5c-5.4,9.5-13.1,15.7-22.3,18c-9.7,2.4-21,0.2-30.3-5.9    c-0.5-0.3-0.6-0.9-0.4-1.4c0.2-0.5,0.8-0.8,1.3-0.7c27.1,5.9,45-4.3,54.7-31.3C198.4,19.3,198.8,19,199.3,19z"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </motion.div>

            <motion.div
              variants={animation06}
              initial="hidden"
              whileInView="visible"              
            >
              <Avatar
                isBordered
                color="warning"
                src="/img/quinces/daniela/church.jpg"
                className="h-40 w-40 my-5"
              />
            </motion.div>

            <motion.p
              className={`${playFair.className} mx-10 mt-1 text-center text-base z-20 text-zinc-900 max-w-md`}
              style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
              variants={animation03}
              initial="hidden"
              whileInView="visible"
            >
              Catedral Metropolitana de la Inmaculada Concepción
            </motion.p>
            <motion.div
              className={`mt-3 ${aref.className} p-1 text-center`}
              variants={animation03}
              initial="hidden"
              whileInView="visible"
            >
              <p>DOMINGO 30 DE OCTUBRE</p>
              <p className="flex items-center justify-center gap-1"><IoMdTime /> 18:00 HRS</p>
            </motion.div>
            <motion.p
              className={`${rajdhani.className} text-center px-1 py-3 text-sm z-20 max-w-md`}
              variants={animation04}
              initial="hidden"
              whileInView="visible"
            >
              Juan de La Luz Enríquez s/n, Zona Centro, Centro, 91000
              Xalapa-Enríquez, Ver.
            </motion.p>
            <motion.div
              variants={animation04}
              initial="hidden"
              whileInView="visible"
            >
              <Button
                className="mt-3 mb-4 text-tiny"
                variant="bordered"
                color="warning"
                radius="lg"
                size="sm"
                onClick={() => {
                  onOpen();
                }}
              >
                <LuMapPin />
                VER UBICACIÓN
              </Button>
            </motion.div>
          </CardBody>
        </Card>
        <motion.img
          src="/img/quinces/daniela/floral-right02.png"
          width={250}
          height={250}
          alt=""
          className="absolute z-20 top-0 -right-10"
          variants={animation07}
          initial="hidden"
          whileInView="visible"
          style={{ x: background01, rotate: "-5deg" }}
        />
        <motion.img
          src="/img/quinces/daniela/floral-left02.png"
          width={200}
          height={200}
          alt=""
          className="absolute z-10 bottom-0 -left-8"
          variants={animation07}
          initial="hidden"
          whileInView="visible"
          style={{ x: background02, rotate: "-15deg" }}
        />
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
