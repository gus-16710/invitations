import { motion } from "framer-motion";
import {
  Great_Vibes,
  Titillium_Web,
  Markazi_Text,
  Love_Ya_Like_A_Sister,
  Playfair_Display,
} from "next/font/google";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Spinner } from "flowbite-react";
import NumberFlow from "@number-flow/react";
import { useEffect, useState } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
const markazi = Markazi_Text({ subsets: ["latin"], weight: "400" });
const love = Love_Ya_Like_A_Sister({ subsets: ["latin"], weight: "400" });
//const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

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
      size="full"
      placement="center"
      backdrop="blur"
    >
      <ModalContent className="bg-zinc-100/0">
        {(onClose) => (
          <>
            <ModalHeader
              className={`${greatVibes.className} flex flex-col gap-1 items-center text-3xl text-zinc-800`}
            >
              Ceremonia Religiosa
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.4418679540026!2d-96.88788532437461!3d19.522634281776043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db322e47c1d50b%3A0x34209a04c0890e21!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20la%20Paz!5e0!3m2!1ses!2smx!4v1749079675519!5m2!1ses!2smx"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute rounded-large z-20"
              ></iframe>
              <Spinner className="absolute z-10" color="pink" />
            </ModalBody>
            <ModalFooter className="flex justify-center items-center">
              <button
                type="button"
                className="text-zinc-0 bg-white/0 border text-zinc-100 border-gray-100 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
                onClick={() => {
                  onClose();
                }}
              >
                Cerrar
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Ceremony({ splide }: { splide: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (splide === 2) {
      setTimeout(() => setHour(12), 500);
    } else {
      setHour(0);
    }
  }, [splide]);

  return (
    <>
      <section
        className="flex justify-center items-center flex-col relative "
        style={{ height: "100svh" }}
      >        
        <motion.h1
          className={`${greatVibes.className} text-5xl p-5 text-center text-zinc-800`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Ceremonia
        </motion.h1>

        {/*  */}
        <motion.div
          className={`${greatVibes.className} relative mt-5 text-center text-zinc-100 bg-gradient-to-l from-red-700 from-10% via-red-600 via-30% to-red-600 to-80% w-full py-2 overflow-clip`}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
        >          
          <div className="border-t-2 border-yellow-400 w-full border-dashed"></div>
          <motion.p
            className="flex items-center justify-center gap-1 text-7xl py-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
          >
            <NumberFlow
              trend={-1}
              value={hour}
              digits={{ 1: { max: 5 } }}
              format={{ minimumIntegerDigits: 2 }}
              transformTiming={{
                duration: 2900,
              }}
            />
            :00 hrs
          </motion.p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="250px"
            //fill="rgb(75 85 99)"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
            className="absolute top-0 -right-5 fill-stone-100/20"
          >
            <g id="outline">
              <path d="M136,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,136,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,136,272Z"></path>
              <path d="M488,480H464V416a8,8,0,0,0,0-16V344a8,8,0,0,0-3.2-6.4L432,316V216a8,8,0,0,0-8-8h-1.919L384,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L329.919,208H328a8,8,0,0,0-8,8v20.686l-56.033-56.033c.017-.216.033-.433.033-.653V160h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v20c0,.22.016.437.033.653L192,236.686V216a8,8,0,0,0-8-8h-1.919L144,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L89.919,208H88a8,8,0,0,0-8,8V316L51.2,337.6A8,8,0,0,0,48,344v56a8,8,0,0,0,0,16v64H24a8,8,0,0,0,0,16H488a8,8,0,0,0,0-16ZM448,348v52H432V336Zm-64,28H368V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,350.627V376H336V224h80V376H400V350.627A62.219,62.219,0,0,0,381.657,306.343ZM144,376H128V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,350.627V376H96V224h80V376H160V350.627A62.219,62.219,0,0,0,141.657,306.343ZM192,299.314l8-8v25.372l-8,8Zm24-24,8-8v25.372l-8,8Zm24-24,8-8v25.373l-8,8Zm24-8,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm64-189.423L405.475,208h-58.95ZM256,195.313l64,64v17.374l-58.343-58.344a8,8,0,0,0-11.314,0L192,276.687V259.313ZM136,101.891,165.475,208h-58.95ZM64,348l16-12v64H64Zm0,68H80v64H64Zm32-24h80v88H160V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,454.627V480H96Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64-132.686,64-64,64,64V480H304V440a8,8,0,0,0,8-8V400a8,8,0,0,0-8-8h-4.161a180.919,180.919,0,0,0-37.693-77.121,8,8,0,0,0-12.292,0A181.073,181.073,0,0,0,212.165,392H208a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8v40H192ZM216,424V408h80v16Zm12.579-32A165.15,165.15,0,0,1,256,332.972,164.962,164.962,0,0,1,283.434,392ZM224,440h24v40H224Zm40,40V440h24v40Zm72-88h80v88H400V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,454.627V480H336Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64,0V416h16v64Z"></path>
              <path d="M376,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,376,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,376,272Z"></path>
            </g>
          </motion.svg>
          <div className="border-t-2 border-yellow-400 w-full border-dashed z-10"></div>
        </motion.div>
        <motion.p
          className={`${markazi.className} text-center mx-5 mt-5 text-2xl text-zinc-800 max-w-md`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          Parroquia de Nuestra Señora de la Paz
        </motion.p>
        <motion.p
          className={`${notoSans.className} text-center mx-5 mt-3 text-sm max-w-md text-zinc-800`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          P.º de las Palmas 1, Jardines de las Animas, 91196 Xalapa-Enríquez,
          Ver.
        </motion.p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
          className="mt-5"
        >
          <Button
            className="mt-3 mb-4 text-tiny border-pink-800 border-l-8"
            style={{ backgroundColor: "#e4007c" }}
            variant="solid"
            color="success"
            //radius="lg"
            size="sm"
            onClick={() => {
              onOpen();
            }}
          >
            <FaMapMarkerAlt className="text-white" />
            <label className="text-white">VER UBICACIÓN</label>
          </Button>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
