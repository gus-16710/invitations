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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15039.966715973163!2d-96.93584853950922!3d19.541970800388352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2e02dd008fb9%3A0x4166db4c76faf835!2sSalones%20Aurora!5e0!3m2!1ses!2smx!4v1700179455841!5m2!1ses!2smx"
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
              className={`${great.className} flex flex-col gap-1 items-center text-3xl text-pink-900`}
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
      <section className="py-10 flex flex-col items-center justify-center bg-purple-100">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="100px"
          viewBox="0 0 64 64"
          aria-hidden="true"
          role="img"
          className="iconify iconify--emojione-monotone"
          preserveAspectRatio="xMidYMid meet"
          variants={locations.icon}
          initial="hidden"
          whileInView="visible"
        >
          <path
            d="M61.063 60.125h-.938v-15.01c.731.035 1.443-.371 1.739-1.074a1.754 1.754 0 0 0-.965-2.297l-15.774-6.443v-6.386l.348.141c.906.367 1.956-.058 2.329-.944c.376-.887-.059-1.914-.963-2.28l-13.276-5.523V9.813h4.688V6.688h-4.688V2h-3.125v4.688H25.75v3.125h4.688v10.495l-13.276 5.523c-.904.366-1.339 1.394-.963 2.28c.373.887 1.423 1.312 2.327.944l.35-.142V35.3L3.099 41.744a1.754 1.754 0 0 0-.963 2.297c.294.703 1.008 1.11 1.739 1.074v15.01h-.937c-.517 0-.938.422-.938.938s.421.937.938.937h58.125c.514 0 .937-.422.937-.937s-.423-.938-.937-.938m-42.188 0H5.75V44.466l13.125-5.361v21.02m12.188-1.562H28.25V55.75h2.813v2.813m0-4.063H28.25v-2.813c0-1.742 1.199-3.198 2.813-3.617v6.43m4.687 4.063h-2.813V55.75h2.813v2.813m0-4.063h-2.813v-6.429c1.612.419 2.813 1.875 2.813 3.616V54.5m7.5 5.625h-5.625v-8.438a5.625 5.625 0 0 0-11.25 0v8.438H20.75V28.153L32 23.59l11.25 4.564v31.971m15 0H45.125V39.104l13.125 5.361v15.66"
            fill="#FFFEF2"
          />
          <path
            d="M31.044 34.998c.319.433.517.351.438-.181l-.723-4.859a.89.89 0 0 0-1.095-.746s-.129.03-.658.248c-.529.22-.639.29-.639.29a.889.889 0 0 0-.247 1.302l2.924 3.946"
            fill="#FFFEF2"
          />
          <path
            d="M25.274 35.447l4.856.722c.53.08.613-.117.179-.438l-3.942-2.923a.83.83 0 0 0-1.254.277l-.529 1.279a.83.83 0 0 0 .69 1.083"
            fill="#FFFEF2"
          />
          <path
            d="M30.129 37.206l-4.858.723a.889.889 0 0 0-.745 1.095s.029.129.247.658c.22.528.29.639.29.639a.889.889 0 0 0 1.302.247l3.945-2.924c.434-.32.351-.518-.181-.438"
            fill="#FFFEF2"
          />
          <path
            d="M31.044 38.376l-2.922 3.944a.828.828 0 0 0 .276 1.253l1.279.53a.828.828 0 0 0 1.081-.69l.723-4.856c.08-.531-.117-.614-.437-.181"
            fill="#FFFEF2"
          />
          <path
            d="M33.241 43.417a.89.89 0 0 0 1.095.745s.129-.029.658-.247c.527-.22.639-.29.639-.29a.889.889 0 0 0 .247-1.302l-2.924-3.947c-.32-.433-.519-.35-.438.182l.723 4.859"
            fill="#FFFEF2"
          />
          <path
            d="M38.726 37.928l-4.856-.722c-.53-.08-.613.117-.181.438l3.944 2.922a.827.827 0 0 0 1.252-.276l.531-1.279a.83.83 0 0 0-.69-1.083"
            fill="#FFFEF2"
          />
          <path
            d="M33.869 36.169l4.86-.723a.89.89 0 0 0 .745-1.096s-.029-.128-.247-.657c-.22-.528-.29-.639-.29-.639a.888.888 0 0 0-1.302-.247l-3.947 2.924c-.432.32-.349.518.181.438"
            fill="#FFFEF2"
          />
          <path
            d="M32.956 34.998l2.922-3.943a.828.828 0 0 0-.276-1.253l-1.279-.53a.83.83 0 0 0-1.083.69l-.721 4.855c-.081.532.117.615.437.181"
            fill="#FFFEF2"
          />
          <path
            d="M12.653 51.569c.199.271.322.22.272-.114l-.452-3.036a.556.556 0 0 0-.685-.466s-.079.019-.41.154a3.76 3.76 0 0 0-.399.181a.553.553 0 0 0-.153.813l1.827 2.468"
            fill="#FFFEF2"
          />
          <path
            d="M9.046 51.849l3.034.452c.335.051.385-.073.115-.273l-2.467-1.826a.516.516 0 0 0-.783.174l-.332.798a.52.52 0 0 0 .433.675"
            fill="#FFFEF2"
          />
          <path
            d="M8.732 54.494c.138.332.182.401.182.401a.553.553 0 0 0 .813.153l2.469-1.827c.27-.199.218-.323-.115-.273l-3.037.452a.559.559 0 0 0-.467.686s.019.079.155.408"
            fill="#FFFEF2"
          />
          <path
            d="M12.653 53.68l-1.827 2.467a.514.514 0 0 0 .174.782l.798.331c.324.095.626-.1.676-.431l.452-3.035c.05-.334-.073-.385-.273-.114"
            fill="#FFFEF2"
          />
          <path
            d="M14.026 56.83c.05.332.357.543.685.466c0 0 .079-.019.408-.154c.332-.137.401-.181.401-.181a.553.553 0 0 0 .153-.813l-1.827-2.468c-.199-.271-.324-.219-.274.114l.454 3.036"
            fill="#FFFEF2"
          />
          <path
            d="M17.454 53.4l-3.034-.452c-.335-.05-.385.074-.115.273l2.467 1.827a.514.514 0 0 0 .781-.174l.332-.798a.518.518 0 0 0-.431-.676"
            fill="#FFFEF2"
          />
          <path
            d="M14.42 52.302l3.034-.453a.555.555 0 0 0 .467-.685s-.019-.08-.155-.409c-.136-.331-.18-.4-.18-.4a.553.553 0 0 0-.813-.153l-2.469 1.826c-.269.2-.219.324.116.274"
            fill="#FFFEF2"
          />
          <path
            d="M13.847 51.569l1.827-2.466a.514.514 0 0 0-.174-.782l-.798-.332a.519.519 0 0 0-.676.432l-.452 3.034c-.052.334.073.385.273.114"
            fill="#FFFEF2"
          />
          <path
            d="M50.153 51.569c.199.271.322.22.272-.114l-.452-3.036a.556.556 0 0 0-.685-.466s-.079.019-.41.154a3.76 3.76 0 0 0-.399.181a.553.553 0 0 0-.153.813l1.827 2.468"
            fill="#FFFEF2"
          />
          <path
            d="M46.546 51.849l3.034.452c.335.051.385-.073.115-.273l-2.467-1.826a.516.516 0 0 0-.783.174l-.332.798a.52.52 0 0 0 .433.675"
            fill="#FFFEF2"
          />
          <path
            d="M46.232 54.494c.138.332.182.401.182.401a.553.553 0 0 0 .813.153l2.469-1.827c.27-.199.218-.323-.115-.273l-3.037.452a.559.559 0 0 0-.467.686s.019.079.155.408"
            fill="#FFFEF2"
          />
          <path
            d="M50.153 53.68l-1.827 2.467a.514.514 0 0 0 .174.782l.798.331c.324.095.626-.1.676-.431l.452-3.035c.05-.334-.073-.385-.273-.114"
            fill="#FFFEF2"
          />
          <path
            d="M51.526 56.83c.05.332.357.543.685.466c0 0 .079-.019.408-.154c.332-.137.401-.181.401-.181a.553.553 0 0 0 .153-.813l-1.827-2.468c-.199-.271-.324-.219-.274.114l.454 3.036"
            fill="#FFFEF2"
          />
          <path
            d="M54.954 53.4l-3.034-.452c-.335-.05-.385.074-.115.273l2.467 1.827a.514.514 0 0 0 .781-.174l.332-.798a.518.518 0 0 0-.431-.676"
            fill="#FFFEF2"
          />
          <path
            d="M51.92 52.302l3.034-.453a.555.555 0 0 0 .467-.685s-.019-.08-.155-.409c-.136-.331-.18-.4-.18-.4a.553.553 0 0 0-.813-.153l-2.469 1.826c-.269.2-.219.324.116.274"
            fill="#FFFEF2"
          />
          <path
            d="M51.347 51.569l1.827-2.466a.514.514 0 0 0-.174-.782l-.798-.332a.519.519 0 0 0-.676.432l-.452 3.034c-.052.334.073.385.273.114"
            fill="#FFFEF2"
          />
        </motion.svg>

        <motion.h1
          className={`${pinyion.className} text-4xl text-yellow-400 mt-5 text-center`}
          variants={locations.animationText01}
          initial="hidden"
          whileInView="visible"
          custom={1}
        >
          Ceremonia Religiosa
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
            className="h-20 my-10 bg-purple-300"
          />
        </motion.div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          id="Capa_1"
          viewBox="0 0 512 512"
          width="100px"
          fill="#FFFEF2"
          variants={locations.icon}
          initial="hidden"
          whileInView="visible"
        
        >
          <g>
            <path d="m157.075 214.056v.028c0 4.142 3.357 7.486 7.5 7.486s7.5-3.372 7.5-7.514-3.358-7.5-7.5-7.5c-4.143 0-7.5 3.358-7.5 7.5z"></path>
            <path d="m109.36 235.257v.056c0 4.142 3.357 7.472 7.5 7.472s7.5-3.386 7.5-7.529-3.358-7.5-7.5-7.5c-4.142.001-7.5 3.359-7.5 7.501z"></path>
            <path d="m140.711 269.871v.056c0 4.142 3.358 7.472 7.5 7.472s7.5-3.386 7.5-7.529-3.358-7.5-7.5-7.5-7.5 3.359-7.5 7.501z"></path>
            <path d="m354.641 240.459c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v.056c0 4.142 3.358 7.472 7.5 7.472 4.143 0 7.5-3.386 7.5-7.528z"></path>
            <path d="m400.276 286.151c0-4.142-3.358-7.5-7.5-7.5-4.143 0-7.5 3.358-7.5 7.5v.028c0 4.142 3.357 7.487 7.5 7.487 4.142 0 7.5-3.373 7.5-7.515z"></path>
            <path d="m371.006 322.676c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v.028c0 4.142 3.358 7.486 7.5 7.486s7.5-3.371 7.5-7.514z"></path>
            <path d="m238.299 67.092-93.025-24.916c-6.445-1.714-13.087 2.012-15.113 8.438l-65.878 204.81c-9.194 28.552 2.773 60.309 28.566 77.666l-19.268 71.898-42.164 27.507c-5.511 3.597-13.057 8.524-11.853 16.095 1.117 7.023 8.805 9.093 11.338 9.774l49.181 13.188 49.173 13.158c1.189.319 3.521.945 6.124.945 2.936 0 6.218-.796 8.595-3.726 4.835-5.959.748-14.012-2.234-19.886l-22.743-44.904 19.271-71.908c31.015-2.138 57.25-23.65 63.553-52.972l5.117-23.732c.873-4.049-1.701-8.04-5.75-8.913-4.047-.87-8.039 1.701-8.912 5.751l-5.118 23.737c-5.166 24.029-27.805 41.318-53.974 41.318-.213 0-7.432.464-14.756-1.907-4.652-1.263-9.098-3.078-13.214-5.399-23.039-12.973-34.248-39.507-26.653-63.095l26.389-82.04c6.972.767 16.709 1.52 28.099 1.52 23.425 0 53.791-3.186 81.206-15.976l-14.5 67.258c-.872 4.049 1.702 8.039 5.752 8.912 4.04.873 8.038-1.701 8.912-5.751l32.748-151.911c1.47-6.645-2.422-13.206-8.869-14.939zm-131.852 273.205c.026.01.053.014.079.024 2.604 1.037 5.279 1.937 8.022 2.681 2.719.719 5.48 1.273 8.263 1.673.025.004.049.014.074.017l-19.118 71.335c-.479 1.784-.281 3.682.554 5.33l24.042 47.469c.023.045.047.091.069.136l-44.467-11.899-44.472-11.926c.041-.026.081-.053.122-.08l44.566-29.073c1.548-1.01 2.668-2.556 3.147-4.34zm111.934-195.91c-37.442 22.395-85.537 21.253-108.737 19.002l34.124-106.087 88.289 23.648z"></path>
            <path d="m479.096 458.261-28.82-12.063c-6.887-2.883-9.762-5.918-11.397-12.034l-20.011-74.667c25.791-17.343 37.755-49.098 28.567-77.666l-65.861-204.815c-2.097-6.43-8.74-10.137-15.146-8.433l-93.019 24.942c-6.366 1.712-10.266 8.227-8.87 14.87l30.085 139.493c.874 4.05 4.875 6.622 8.912 5.751 4.05-.873 6.624-4.863 5.752-8.912l-11.751-54.511c25.553 12.852 57.08 21.361 87.489 23.312 4.113.256 8.088.384 11.913.384 4.46 0 8.693-.192 12.724-.54l23.49 73.051c7.592 23.603-3.616 50.138-26.674 63.106-4.078 2.313-8.515 4.124-13.159 5.377-5.985 1.853-9.652 2.103-14.803 1.945-26.353 0-48.983-17.266-53.95-41.265l-7.817-37.706c-.841-4.056-4.811-6.661-8.867-5.822-4.056.841-6.662 4.81-5.821 8.867l7.816 37.704c6.08 29.375 32.325 50.916 63.568 53.036l20.013 74.677c1.638 6.109.667 10.179-3.841 16.122l-18.922 24.855c-7.639 10.03-6.399 16.369-4.014 19.921 1.33 1.98 4.206 4.76 9.863 4.76 1.707 0 3.667-.253 5.913-.857l98.337-26.37c9.721-2.582 11.53-8.162 11.743-11.258.294-4.267-1.8-10.375-13.442-15.254zm-93.122-259.704c-33.047-2.12-67.398-12.452-92.626-27.771l-13.684-63.408 88.302-23.678 36.973 114.978c-5.855.331-12.266.298-18.965-.121zm-2.537 296.793 18.127-23.81c7.345-9.684 9.255-18.381 6.386-29.081l-19.121-71.347c.032-.005.062-.015.093-.021 2.776-.405 5.542-.966 8.282-1.694 2.727-.736 5.391-1.63 7.981-2.661.028-.01.057-.016.085-.027l19.117 71.333c2.865 10.719 8.875 17.297 20.096 21.993l27.586 11.546z"></path>
            <path d="m275.772 31.71v-24.21c0-4.142-3.358-7.5-7.5-7.5-4.143 0-7.5 3.358-7.5 7.5v24.21c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5z"></path>
            <path d="m231.235 20.956c-2.927-2.931-7.676-2.935-10.607-.009-2.932 2.926-2.936 7.676-.009 10.607l17.095 17.124c1.465 1.467 3.386 2.201 5.308 2.201 1.917 0 3.835-.731 5.299-2.192 2.932-2.926 2.936-7.675.009-10.607z"></path>
            <path d="m293.549 50.879c1.922 0 3.843-.734 5.308-2.201l17.095-17.124c2.927-2.931 2.923-7.68-.009-10.607-2.933-2.928-7.682-2.923-10.607.009l-17.095 17.124c-2.927 2.932-2.923 7.68.009 10.607 1.464 1.462 3.382 2.192 5.299 2.192z"></path>
          </g>
        </motion.svg>

        <motion.h1
          className={`${pinyion.className} text-4xl text-yellow-400 mt-5 text-center`}
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
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} map={map} />
    </>
  );
}
