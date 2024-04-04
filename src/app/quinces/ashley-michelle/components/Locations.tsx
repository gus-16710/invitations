import { motion } from "framer-motion";
import { locations } from "./Animations";
import { anton, great, pinyion, quickSand } from "./Fonts";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";

import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const MapSalon = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15040.421226581282!2d-96.908233!3d19.537092!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db31f73ac0c917%3A0x896cc9a020f5c63e!2sVips%20Xalapa!5e0!3m2!1ses!2smx!4v1712089037042!5m2!1ses!2smx"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
);

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7517.785416214063!2d-96.95132955908778!3d19.589096765339203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2fb78a66bb13%3A0x6935f2c47beef73d!2sSantuario%20Parroquial%20De%20San%20Jos%C3%A9!5e0!3m2!1ses!2smx!4v1712084152576!5m2!1ses!2smx"
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
  map,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  map: string;
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
            <ModalHeader
              className={`${pinyion.className} flex flex-col gap-1 items-center text-3xl text-yellow-400`}
            >
              {map === "ceremony" ? "Ceremonia Religiosa" : "Recepción"}
            </ModalHeader>
            <ModalBody>
              {map === "ceremony" ? <MapCeremony /> : <MapSalon />}
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Locations() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [map, setMap] = useState("");

  return (
    <>
      <section className="py-10 flex flex-col items-center justify-center bg-purple-100 overflow-clip">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          height="100px"
          viewBox="0 0 128 128"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          variants={locations.icon}
          initial="hidden"
          whileInView="visible"
        >
          <path
            fill="#614f46"
            d="M71.8 8.78h-5.83l.02-7.16h-4.4l.01 7.16h-5.96v4.06h5.97l.04 13.19l4.28-1.78l.03-11.41h5.84z"
          />
          <path
            d="M49.69 59.86S16.06 90.75 16.14 91.23c.08.48 3.62 3.06 3.62 3.06L53 83.73l-3.31-23.87z"
            fill="#896159"
          />
          <path
            d="M78 58.32s34.27 32.47 34.1 33.1c-.12.47-3.76 1.97-3.76 1.97S72.7 76.05 72.79 75.23c.09-.82 5.21-16.91 5.21-16.91z"
            fill="#896159"
          />
          <path
            d="M49.75 66.45L19.69 94.23l-.01 28.2c0 .94.5 1.33 1.35 1.42s86.87.29 87.34.11c.07-.03.19-1.46.17-2.5c-.09-6.45-.07-28.13-.07-28.13l-30.95-28.7l-27.77 1.82z"
            fill="#c0b8b3"
          />
          <path
            d="M45.4 44.39c-.22-1.2 2.22-2.08 3.08-3.22S59 26.21 60.14 24.7c1.15-1.5 2.22-3.36 3.51-3.36c1.29 0 3.25 3 4.29 4.37c1.57 2.08 10.46 14.38 11.02 15.03c.86 1 3.08 2.22 3.08 3.08c0 .79-4.65 4.51-4.65 4.51l-28.13-1.15s-3.58-1.22-3.86-2.79z"
            fill="#896159"
          />
          <path
            d="M48.61 45.07s29.72-.61 29.86-.25s.13 4.82.13 4.82l-18.1 2.12l-11.95-2.08l.06-4.61z"
            fill="#bdb8b1"
          />
          <path
            fill="#5f4d4e"
            d="M48.77 121.38l-.22-71.7l30.05-.08l1.03 71.78z"
          />
          <path
            fill="#efebea"
            d="M106.08 95.87l-23.87-21.7l.54 47.12l23.42.09z"
          />
          <path
            fill="#efebea"
            d="M45.07 75.99L21.92 96.87l-.9 16.43l1.09 8.08h23.33z"
          />
          <path
            fill="#efebea"
            d="M50.98 49.57l.45 71.81l25.83.01l-.68-71.79z"
          />
          <path
            fill="#5f4d4e"
            d="M106.08 95.87l2.44 2.36l.03 23.22l-2.38-.07z"
          />
          <path fill="#5f4d4e" d="M21.92 96.87l-2.24 2.2v22.38l2.43-.07z" />
          <path
            d="M54.44 121.38s-.21-18.88-.16-24.07c.06-5.18 3.19-10.16 9.74-10.14c6.99.02 9.86 4.88 9.86 10.32c0 5.02.18 23.9.18 23.9l-19.62-.01z"
            fill="#d27856"
          />
          <path
            fill="#ac5832"
            d="M69.55 100.05h-3.76v-6.78h-3.3v6.78h-3.82v3.41h3.82v13.73h3.3v-13.73h3.76z"
          />
          <path
            d="M72.35 120l-16.32-.13v-.74c0-.86-.04-21.17 0-22.08c.08-1.83.89-7.8 7.91-8.01c2.49-.06 4.47.6 5.92 2.01c2.26 2.2 2.38 5.41 2.38 6.04c0 1.31.11 22.16.11 22.16v.75zm-14.82-1.61l13.31.1c-.02-3.76-.11-20.25-.11-21.41c0-.32-.05-3.15-1.92-4.96c-1.14-1.11-2.78-1.64-4.83-1.58c-5.57.16-6.37 4.65-6.45 6.58c-.03.68-.01 13.8 0 21.27z"
            fill="#ac5832"
          />
          <path
            d="M70.4 104.6c-.87.03-.87.86-.87 2.34s-.03 2.36.93 2.38c.99.03.89-1.04.85-2.47c-.02-1.13.17-2.29-.91-2.25z"
            fill="#f5bf0a"
          />
          <path
            fill="#e4bbab"
            d="M29.83 96.41l.01 10.53l2.91 8.33h2.15l2.91-9.04l.09-9.82z"
          />
          <path
            d="M29.84 106.68s1.61.86 2.22 3.18c.61 2.32.69 5.42.69 5.42s-1.66.03-2.15 0c-.69-.04-.67-.72-.72-1.25s-.04-7.35-.04-7.35z"
            fill="#6da5b0"
          />
          <path
            d="M37.81 106.23s-1.51.55-2.28 3.4c-.67 2.47-.63 5.64-.63 5.64h2.33c.49 0 .67-.72.67-1.16c0-.45-.09-7.88-.09-7.88z"
            fill="#6da5b0"
          />
          <path
            d="M37.85 101.07s-1.75 1.55-4.06 1.55c-2.56 0-3.96-1.75-3.96-1.75v3.56s1.17.24 2.46 1.34c.87.75 1.44 2.26 1.44 2.26s.35-1.36 1.5-2.46c1.32-1.26 2.58-1.47 2.58-1.47l.04-3.03z"
            fill="#fccb7e"
          />
          <path
            d="M29.8 96.23c-.05 1.5.85 4.19 4.15 4.2c2.94.01 3.94-2.26 3.94-4.11s-1.03-4.14-4.13-4.18c-2.43-.02-3.89 1.96-3.96 4.09z"
            fill="#9f7cdc"
          />
          <path
            d="M33.86 94.57c-.97.02-1.66.58-1.75 1.61s.76 1.87 1.8 1.87s1.8-.87 1.73-1.89c-.05-.9-.78-1.62-1.78-1.59z"
            fill="#d05e53"
          />
          <path
            fill="#e4bbab"
            d="M90.18 96.5l.06 10.22l2.94 8.3h2.12l2.97-9.12l-.03-9.72z"
          />
          <path
            d="M95.19 115.02s.08-3.89.61-5.32c.73-1.97 2.48-3.8 2.48-3.8v7.83c0 .49-.05 1.25-.48 1.27c-.6.04-2.61.02-2.61.02z"
            fill="#6da5b0"
          />
          <path
            d="M90.24 106.72s1.48.6 2.28 2.73c.81 2.17.67 5.56.67 5.56s-1.85-.04-2.22-.05c-.77-.04-.78-.61-.75-1.58c.01-.87.02-6.66.02-6.66z"
            fill="#6da5b0"
          />
          <path
            d="M90.21 100.67l.03 3.28s1.52.69 2.31 1.45c.85.81 1.62 2.31 1.62 2.31s.86-1.81 1.66-2.52c1.25-1.12 2.43-1.52 2.43-1.52l-.01-2.93s-1.63 1.8-4.15 1.73s-3.89-1.8-3.89-1.8z"
            fill="#fccb7e"
          />
          <path
            d="M94.21 91.99c-1.81-.04-3.94 1.3-4.02 4.22c-.08 2.76 2.25 4.06 4.14 3.98s3.82-1.18 3.92-4.02c.09-3.07-2.31-4.14-4.04-4.18z"
            fill="#9f7cdc"
          />
          <path
            d="M94.24 94.36c-.95 0-1.74.71-1.7 1.85c.04 1.14.8 1.73 1.75 1.73c1.02 0 1.75-.55 1.76-1.92c.02-1.03-.65-1.66-1.81-1.66z"
            fill="#d05e53"
          />
          <path
            d="M63.66 55.32c-7.3-.04-10.92 5.75-10.61 11.29c.34 6.05 4.45 10.37 10.85 10.29c6.75-.09 10.51-4.93 10.46-11.11c-.04-6.14-4.42-10.44-10.7-10.47z"
            fill="#63697f"
          />
          <path
            d="M63.43 56.79c-5.1.13-8.99 4.15-9.04 9.56c-.04 5.28 4.15 9.04 9.21 9.08c4.84.04 9.12-3.24 9.34-9.08c.23-6.21-4.46-9.69-9.51-9.56z"
            fill="#6da5b0"
          />
          <path
            d="M63.85 61.51c-2.83-.1-4.71 1.9-4.69 4.58c.02 2.31 1.32 4.77 4.6 4.78c3.06.02 4.7-2.18 4.74-4.51c.02-2.09-.92-4.72-4.65-4.85z"
            fill="#e4bbab"
          />
          <path
            d="M69.1 63.22l1.6-.94a7.168 7.168 0 0 0-3.35-3.16l-.72 1.83c1.02.48 1.89 1.25 2.47 2.27z"
            fill="#9f7cdc"
          />
          <path
            d="M69.64 67.75l1.64.64c.17-.63.28-1.3.3-2.02c.03-.8-.05-1.55-.21-2.24l-1.73.47c.13.55.2 1.14.18 1.79c-.01.49-.08.94-.18 1.36z"
            fill="#fccb7e"
          />
          <path
            d="M68.99 69.33c-.5.82-1.21 1.45-2.02 1.9l.93 1.65c1.08-.63 2-1.52 2.65-2.67l-1.56-.88z"
            fill="#9f7cdc"
          />
          <path
            d="M65.63 71.76c-.59.16-1.22.25-1.86.24c-.45 0-.89-.06-1.31-.15l-.48 1.96a8.48 8.48 0 0 0 4.25-.2l-.6-1.85z"
            fill="#fccb7e"
          />
          <path
            d="M58.86 69.43l-1.75 1.19a7.516 7.516 0 0 0 3.07 2.59l.98-1.81a5.716 5.716 0 0 1-2.3-1.97z"
            fill="#9f7cdc"
          />
          <path
            d="M58.09 64.64l-1.97-.42c-.18.68-.28 1.4-.29 2.15c-.01.98.18 1.89.49 2.72l1.91-.9c-.2-.56-.32-1.15-.35-1.79c-.01-.62.06-1.21.21-1.76z"
            fill="#fccb7e"
          />
          <path
            d="M59.71 59.42c-1.21.71-2.2 1.72-2.88 2.98l1.76 1c.51-.94 1.28-1.7 2.21-2.22l-1.09-1.76z"
            fill="#9f7cdc"
          />
          <path
            d="M63.51 58.35c-.74.02-1.45.14-2.12.34l.69 1.94a6.69 6.69 0 0 1 1.63-.26c.51-.01 1.01.04 1.5.13l.39-1.95a8.57 8.57 0 0 0-2.09-.2z"
            fill="#fccb7e"
          />
        </motion.svg>
        <motion.h1
          className={`${pinyion.className} text-5xl text-yellow-400 mt-5 text-center`}
          variants={locations.animationText01}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Ceremonia
        </motion.h1>

        <motion.span
          className={`${anton.className} text-gray-500 text-xl font-medium me-2 px-2.5 rounded mt-3 flex items-center justify-center gap-1`}
          variants={locations.time01}
          initial="hidden"
          whileInView="visible"
        >
          <IoMdTime /> 13:00 Hrs
        </motion.span>

        <motion.p
          className={`${quickSand.className} my-5 mx-10 font-bold text-center text-zinc-600`}
          variants={locations.animationText02}
          initial="hidden"
          whileInView="visible"
        >
          Santuario Parroquial De San José
        </motion.p>

        <motion.p
          className={`${quickSand.className} mx-10 text-center text-zinc-800 max-w-md`}
          variants={locations.animationText03}
          initial="hidden"
          whileInView="visible"
        >
          Benito Juárez 27, Lomas de Hidalgo, Centro, 91300 Banderilla, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="flex items-center gap-1 mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setMap("ceremony");
            onOpen();
          }}
          variants={locations.button01}
          initial="hidden"
          whileInView="visible"
        >
          <LuMapPin />
          Ubicación
        </motion.button>

        <motion.div
          variants={locations.divider}
          initial="hidden"
          whileInView="visible"
        >
          <Divider
            orientation="vertical"
            className="h-24 my-10 bg-purple-300"
          />
        </motion.div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100px"
          height="100px"
          viewBox="0 0 128 128"
          data-name="Layer 2"
          id="Layer_2"
          variants={locations.icon}
          initial="hidden"
          whileInView="visible"
        >
          <path
            className="cls-1"
            d="M44.62,16.8v3a1.3,1.3,0,0,0,1.29,1.3h0a1.3,1.3,0,0,1,1.3,1.29v1.58a1.3,1.3,0,0,0,1.3,1.3h4.74a1.3,1.3,0,0,0,1.3-1.3V22.36a1.29,1.29,0,0,1,1.29-1.29h0a1.3,1.3,0,0,0,1.3-1.3v-3a1.3,1.3,0,0,0-1.3-1.3H45.91A1.3,1.3,0,0,0,44.62,16.8Z"
          />
          <path
            className="cls-2"
            d="M55.05,45.86V23.75H46.7V45.86l-.88,1.46a42.25,42.25,0,0,0-6.07,21.82v37.67a4.6,4.6,0,0,0,4.61,4.61h13A4.6,4.6,0,0,0,62,106.81V68.55a40.1,40.1,0,0,0-5.77-20.73Z"
          />
          <path
            className="cls-3"
            d="M56.5,20.86a.69.69,0,0,0-.65-.49h-4.8a.7.7,0,0,0,0,1.39h3.67a1.27,1.27,0,0,1,1.12-.69A1.26,1.26,0,0,0,56.5,20.86Z"
          />
          <path
            className="cls-3"
            d="M48,20.36h-2.1a.69.69,0,0,0-.65.49,1.22,1.22,0,0,0,.65.21,1.27,1.27,0,0,1,1.13.69h1a.7.7,0,1,0,0-1.39Z"
          />
          <rect
            className="cls-4"
            height="28.08"
            width="22.27"
            x="39.75"
            y="69.26"
          />
          <circle className="cls-5" cx="50.88" cy="69.22" r="6.61" />
          <path
            className="cls-6"
            d="M89.08,109.48c0,1.67-4.41,3-9.85,3s-9.85-1.35-9.85-3,4.41-4.82,9.85-4.82S89.08,107.82,89.08,109.48Z"
          />
          <path
            className="cls-6"
            d="M77.79,83.3v24a1.33,1.33,0,0,0,1.33,1.32h0a1.32,1.32,0,0,0,1.32-1.32v-24Z"
          />
          <path
            className="cls-6"
            d="M71.69,40.59H86.77a0,0,0,0,1,0,0V77.87a5.42,5.42,0,0,1-5.42,5.42H77.11a5.42,5.42,0,0,1-5.42-5.42V40.59a0,0,0,0,1,0,0Z"
          />
          <path
            className="cls-4"
            d="M79.23,83.3h0a7.54,7.54,0,0,0,7.54-7.55V58.21H71.69V75.75A7.54,7.54,0,0,0,79.23,83.3Z"
          />
          <circle className="cls-7" cx="75.84" cy="64.19" r="1.52" />
          <circle className="cls-7" cx="82.61" cy="70.47" r="1.52" />
          <circle className="cls-7" cx="77.35" cy="77.04" r="1.52" />
          <path
            className="cls-7"
            d="M77.35,42h-1.1a3.06,3.06,0,0,0-3,3,.7.7,0,1,0,1.39,0,1.74,1.74,0,0,1,.11-.55l1.63-1.11h1a.7.7,0,1,0,0-1.39Z"
          />
          <path
            className="cls-7"
            d="M73.9,46.91a.69.69,0,0,0-.7.69v7.52a.7.7,0,0,0,1.39,0V47.6A.69.69,0,0,0,73.9,46.91Z"
          />
          <path
            className="cls-8"
            d="M48.44,40a.69.69,0,0,1-.69-.7V30.88a.7.7,0,1,1,1.39,0v8.37A.7.7,0,0,1,48.44,40Z"
          />
          <path
            className="cls-8"
            d="M48.44,29.37a.69.69,0,0,1-.69-.7V27.45a2.56,2.56,0,0,1,2.56-2.56h.57a.7.7,0,0,1,0,1.39h-.57a1.17,1.17,0,0,0-1.17,1.17v1.22A.7.7,0,0,1,48.44,29.37Z"
          />
          <polygon
            className="cls-4"
            points="30.79 59.8 32.61 63.13 35.94 64.95 32.61 66.77 30.79 70.1 28.96 66.77 25.64 64.95 28.96 63.13 30.79 59.8"
          />
          <polygon
            className="cls-4"
            points="66.14 23.52 67.97 26.85 71.3 28.67 67.97 30.49 66.14 33.82 64.32 30.49 60.99 28.67 64.32 26.85 66.14 23.52"
          />
          <polygon
            className="cls-4"
            points="97.21 48.67 99.03 52 102.36 53.82 99.03 55.64 97.21 58.97 95.39 55.64 92.06 53.82 95.39 52 97.21 48.67"
          />
        </motion.svg>

        <motion.h1
          className={`${pinyion.className} text-5xl text-yellow-400 mt-5 text-center`}
          variants={locations.animationText01}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Recepción
        </motion.h1>

        <motion.span
          className={`${anton.className} text-gray-500 text-xl font-medium me-2 px-2.5 rounded mt-3 flex items-center justify-center gap-1`}
          variants={locations.time01}
          initial="hidden"
          whileInView="visible"
        >
          <IoMdTime /> 15:00 Hrs
        </motion.span>

        <motion.p
          className={`${quickSand.className} my-5 mx-10 font-bold text-center text-zinc-600`}
          variants={locations.animationText02}
          initial="hidden"
          whileInView="visible"
        >
          Salón VIPS
        </motion.p>

        <motion.p
          className={`${quickSand.className} mx-10 text-center text-zinc-800 max-w-md`}
          variants={locations.animationText03}
          initial="hidden"
          whileInView="visible"
        >
          C. Lázaro Cárdenas 321, El Encinar, 91800 Xalapa-Enríquez, Ver.
        </motion.p>

        <motion.button
          type="button"
          className="flex items-center gap-1 mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => {
            setMap("reception");
            onOpen();
          }}
          variants={locations.button01}
          initial="hidden"
          whileInView="visible"
        >
          <LuMapPin />
          Ubicación
        </motion.button>

        {/* <div
          className="flex items-center p-4 mt-10 mr-10 text-sm text-red-800 border border-red-300  bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>Ceremonia y recepción unicamente para adultos.</div>
        </div>

        <div
          className="flex items-center p-4 mt-4 ml-10 text-sm text-red-800 border border-red-300  bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            El lugar tiene decoraciones que resultan peligrosas para niños.
          </div>
        </div> */}
        <motion.div
          className="mt-10 flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 mx-5 shadow-md"
          role="alert"
          variants={locations.animationAlert}
          initial="hidden"
          whileInView="visible"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Danger</span>
          <div>
            <span className="font-medium">
              En esta ocasión el evento es sólo para adultos:
            </span>
            <ul className="mt-1.5 list-disc list-inside">
              <li>
                El lugar tiene decoraciones que resultan peligrosas para niños.
              </li>
              <li>Ceremonia y recepción unicamente para adultos.</li>
            </ul>
          </div>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} map={map} />
    </>
  );
}
