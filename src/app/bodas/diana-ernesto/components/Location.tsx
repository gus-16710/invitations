import { motion } from "framer-motion";
import { Great_Vibes, Titillium_Web, Playfair_Display } from "next/font/google";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

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
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {map === "ceremony" ? "Ceremonia" : "Recepción"}
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

export default function Location() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [map, setMap] = useState("");

  return (
    <>
      <section className="h-screen flex justify-center items-center flex-col pt-20 pb-20">
        <motion.div>
          <motion.h1
            className={`${greatVibes.className} text-5xl p-5 text-center`}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            Ceremonia Religiosa
          </motion.h1>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center flex-col"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="100px"
                fill="rgb(75 85 99)"
              >
                <g id="outline">
                  <path d="M136,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,136,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,136,272Z"></path>
                  <path d="M488,480H464V416a8,8,0,0,0,0-16V344a8,8,0,0,0-3.2-6.4L432,316V216a8,8,0,0,0-8-8h-1.919L384,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L329.919,208H328a8,8,0,0,0-8,8v20.686l-56.033-56.033c.017-.216.033-.433.033-.653V160h8a8,8,0,0,0,0-16h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v20c0,.22.016.437.033.653L192,236.686V216a8,8,0,0,0-8-8h-1.919L144,70.91V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8V70.91L89.919,208H88a8,8,0,0,0-8,8V316L51.2,337.6A8,8,0,0,0,48,344v56a8,8,0,0,0,0,16v64H24a8,8,0,0,0,0,16H488a8,8,0,0,0,0-16ZM448,348v52H432V336Zm-64,28H368V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,350.627V376H336V224h80V376H400V350.627A62.219,62.219,0,0,0,381.657,306.343ZM144,376H128V350.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14Zm-2.343-69.657a8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,350.627V376H96V224h80V376H160V350.627A62.219,62.219,0,0,0,141.657,306.343ZM192,299.314l8-8v25.372l-8,8Zm24-24,8-8v25.372l-8,8Zm24-24,8-8v25.373l-8,8Zm24-8,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm24,24,8,8v25.372l-8-8Zm64-189.423L405.475,208h-58.95ZM256,195.313l64,64v17.374l-58.343-58.344a8,8,0,0,0-11.314,0L192,276.687V259.313ZM136,101.891,165.475,208h-58.95ZM64,348l16-12v64H64Zm0,68H80v64H64Zm32-24h80v88H160V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,112,454.627V480H96Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64-132.686,64-64,64,64V480H304V440a8,8,0,0,0,8-8V400a8,8,0,0,0-8-8h-4.161a180.919,180.919,0,0,0-37.693-77.121,8,8,0,0,0-12.292,0A181.073,181.073,0,0,0,212.165,392H208a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8v40H192ZM216,424V408h80v16Zm12.579-32A165.15,165.15,0,0,1,256,332.972,164.962,164.962,0,0,1,283.434,392ZM224,440h24v40H224Zm40,40V440h24v40Zm72-88h80v88H400V454.627a62.219,62.219,0,0,0-18.343-44.284,8,8,0,0,0-11.314,0A62.219,62.219,0,0,0,352,454.627V480H336Zm32,88V454.627a46.3,46.3,0,0,1,8-26.14,46.3,46.3,0,0,1,8,26.14V480Zm64,0V416h16v64Z"></path>
                  <path d="M376,240a24,24,0,1,0,24,24A24.028,24.028,0,0,0,376,240Zm0,32a8,8,0,1,1,8-8A8.009,8.009,0,0,1,376,272Z"></path>
                </g>
              </svg>
            </motion.div>
            <motion.div
              className={`mt-3 ${playFair.className} p-5 text-center`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <p>SABADO 28 DE FEBRERO</p>
              <p>18:00 HRS</p>
            </motion.div>
            <motion.p
              className={`${playFair.className} text-center py-3 px-5`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Catedral Metropolitana de la Inmaculada Concepción
            </motion.p>
            <motion.p
              className={`${notoSans.className} text-center p-5`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Juan de La Luz Enríquez s/n, Zona Centro, Centro, 91000
              Xalapa-Enríquez, Ver.
            </motion.p>
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Button
                className="mt-3 mb-4 text-tiny"
                variant="flat"
                color="warning"
                radius="lg"
                size="sm"
                onClick={() => {
                  setMap("ceremony");
                  onOpen();
                }}
              >
                VER UBICACIÓN
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="h-screen flex justify-center items-center flex-col pt-20 pb-20">
        <motion.div>
          <motion.h1
            className={`${greatVibes.className} text-5xl p-5 text-center`}
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            Recepción
          </motion.h1>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center flex-col"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Capa_1"
                viewBox="0 0 512 512"
                width="100px"
                fill="rgb(75 85 99)"
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
              </svg>
            </motion.div>
            <motion.div
              className={`mt-3 ${playFair.className} p-5 text-center`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <p>SABADO 28 DE FEBRERO</p>
              <p>20:00 HRS</p>
            </motion.div>
            <motion.p
              className={`${playFair.className} text-center py-3 px-5`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Salones Aurora
            </motion.p>
            <motion.p
              className={`${notoSans.className} text-center p-5`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              Carlos A. Carrillo 23, Aguacatal, 91133 Xalapa-Enriquez, Ver.
            </motion.p>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Button
                className="mt-3 mb-4 text-tiny"
                variant="flat"
                color="warning"
                radius="lg"
                size="sm"
                onClick={() => {
                  setMap("salon");
                  onOpen();
                }}
              >
                VER UBICACIÓN
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} map={map} />
    </>
  );
}
