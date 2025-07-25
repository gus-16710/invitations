import { motion } from "framer-motion";
import {
  Great_Vibes,
  Titillium_Web,
  Markazi_Text,
  Love_Ya_Like_A_Sister,
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
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
const markazi = Markazi_Text({ subsets: ["latin"], weight: "400" });
const love = Love_Ya_Like_A_Sister({ subsets: ["latin"], weight: "400" });

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
              Recepción
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <iframe
                //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8920960368346!2d-96.97808282437306!3d19.58912298172396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f4f34afbb95%3A0xb6bce389f3a02738!2sQuinta%20Los%20Helechos!5e0!3m2!1ses!2smx!4v1749079732650!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.8920960368346!2d-96.97808282437306!3d19.58912298172396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db2f4f34afbb95%3A0xb6bce389f3a02738!2sQuinta%20Los%20Helechos!5e0!3m2!1ses!2smx!4v1749079732650!5m2!1ses!2smx"
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

export default function Reception({ splide }: { splide: number }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (splide === 3) {
      setTimeout(() => setHour(15), 500);
    } else {
      setHour(0);
    }
  }, [splide]);

  return (
    <>
      <section
        className="flex justify-center items-center flex-col pt-20 pb-20 "
        style={{ height: "100svh" }}
      >
        <motion.h1
          className={`${greatVibes.className} text-5xl p-5 text-center text-zinc-800`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Recepción
        </motion.h1>

        {/*  */}
        <motion.div
          className={`${greatVibes.className} relative mt-5 text-center text-zinc-100 bg-gradient-to-r from-green-700 from-10% via-green-600 via-30% to-green-600 to-80% w-full py-2 overflow-clip`}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}
        >
          <div className="border-t-2 border-yellow-400 w-full border-dashed"></div>
          <motion.p
            className="flex items-center justify-center gap-1 text-7xl py-6"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 1.2 }}
          >
            <NumberFlow
              trend={-1}
              value={hour}
              digits={{ 1: { max: 5 } }}
              format={{ minimumIntegerDigits: 2 }}
              transformTiming={{
                duration: 3000,
              }}
            />
            :00 hrs
          </motion.p>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            viewBox="0 0 512 512"
            width="250px"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 2.5 }}
            className="absolute top-0 -left-5 fill-stone-100/20"
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
          <div className="border-t-2 border-yellow-400 w-full border-dashed"></div>
        </motion.div>
        <motion.p
          className={`${markazi.className} text-center mx-5 mt-5 text-2xl text-zinc-800`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          Salón Quinta los Helechos
        </motion.p>
        <motion.p
          className={`${notoSans.className} text-center mx-5 mt-3 text-sm text-zinc-800`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          Sabino 24, 91315 Piletas, Ver.
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
