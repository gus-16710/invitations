import { glass, luxurious, mea } from "./Fonts";
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { IoMdTime } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
import { motion } from "framer-motion";

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
            <ModalHeader
              className={`${mea.className} flex flex-col gap-1 items-center text-3xl text-orange-900`}
            >
              Ceremonia
            </ModalHeader>
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

  return (
    <>
      <motion.section
        className="flex flex-col justify-center items-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className={`${mea.className} text-5xl text-orange-900`}>
          Ceremonia
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1063.9137 68.507454"
          width="250"
          version="1.1"
          className="rotate-180 mt-4 mb-4"
          style={{ fill: "rgb(227 160 8)" }}
        >
          <path
            id="path4226"
            d="m525.54 65.974c-4.7132-4.368-3.2142-10.276 3.1414-12.381 5.5486-1.8379 9.387 0.55429 10.695 6.665 1.5421 7.2071-7.9816 11.142-13.836 5.7159zm-295.08-3.119c-1.9772-1.9772-1.9806-3.3994-0.0147-6.2061 2.7506-3.927 9.4433-1.497 9.4433 3.4286 0 1.9896-2.9838 4.3489-5.5 4.3489-1.2964 0-3.0643-0.70714-3.9286-1.5714zm594.47 0.12647c-3.1768-3.8278 2.4653-9.6024 6.7571-6.9158 2.1254 1.3305 2.8147 6.3538 1.0273 7.4869-2.102 1.3325-6.4705 1.012-7.7844-0.57114zm-805.04-1.218c-14.48-0.479-21.27-9.12-19.661-19.034 1.0781-6.645 6.7455-10.215 12.843-8.089 8.1433 2.8388 5.8769 14.089-2.7483 13.643-5.1286-0.26548-5.5476-0.0089-4.78 2.9266 2.0051 7.6676 10.756 8.6396 70.501 7.8312 46.442-0.62844 53.179-0.38498 50.696 1.8321-0.56413 0.50359-102.98 1.0186-106.85 0.89052zm241-0.3c-21.074-0.64532-22.779-1.8606-8-5.7009 12.392-3.2201 14.837-3.2543 17.276-0.24179l1.9489 2.4068 32.637 0.22216c17.951 0.12219 32.975 0.23469 33.387 0.25 1.4195 0.05269 0.74791 2.8147-0.83179 3.4208-1.7811 0.68347-49.758 0.45926-76.418-0.35713zm91 0.15098c-5.4802-0.38134-6.9774-1.5934-3.9618-3.2073 2.8174-1.5078 162.86-0.39119 164.45 1.1474 2.7162 2.6195-128.29 4.3009-160.49 2.0599zm196.5-0.18687c-1.6256-2.6303 4.3092-2.8152 85.421-2.6612 82.265 0.15618 87.038 0.30081 85.62 2.5947-0.89043 1.4407-170.15 1.5066-171.04 0.06653zm176.5-0.5c0-1.2543 2.1703-1.5116 13.25-1.5706 7.2875-0.03882 22.25-0.26142 33.25-0.49468 11-0.23325 20.347-0.42649 20.771-0.42942 0.42429-0.0029 1.284-1.1303 1.9105-2.5053 1.4353-3.1502 4.1188-3.1666 16.318-0.0999 16.064 4.0384 13.012 5.0081-18 5.7179-52.329 1.1978-67.5 1.0589-67.5-0.61804zm-593-0.48095c0-1.6979 3.7252-1.9502 35.091-2.3768l30.591-0.41602 2.6131-2.6131c3.1746-3.1746 2.4865-3.1679 13.826-0.13331 15.827 4.2357 14.82 5.1012-6.8177 5.8574-29.032 1.0146-75.304 0.81913-75.304-0.31812zm705-0.10053c0-3.9581 24.609-8.3282 27.773-4.9321 1.7664 1.896 3.397 1.9985 35.789 2.25 29.384 0.22816 33.938 0.46484 33.938 1.7635 0 1.3102-6.1678 1.524-48.75 1.69-30.66 0.11947-48.75-0.16679-48.75-0.77144zm101.57 0.19478c-1.6584-2.6834 3.6738-3.0081 54.463-3.3169 51.417-0.31256 52.561-0.36243 57.147-2.492 7.0965-3.2954 9.5213-9.3044 3.7546-9.3044-6.0711 0-8.8958-2.5948-8.919-8.1933-0.039-9.4489 14.496-9.4624 18.098-0.01677 3.7343 9.7933-4.418 20.311-17.912 23.111-6.4781 1.3438-105.81 1.5418-106.63 0.21258zm-122.4-9.2661c-6.7441-3.396-8.3861-5.2974-7.5001-8.6855 1.1546-4.4152 5.7035-2.8266 10.774 3.7624 6.898 8.9644 6.3597 9.7739-3.2735 4.9232zm-594-0.309c-5.7389-3.1451-8.1702-5.4439-8.1702-7.7248 0-5.1213 6.7999-3.223 11.402 3.1832 5.4598 7.5996 4.5866 8.8265-3.2321 4.5416zm17.83 1.8333c0-5.0117 8.8-14.084 12-12.372 2.7501 1.4718 2.6046 5.6115-0.25 7.1134-1.2375 0.65106-3.522 2.2419-5.0767 3.5352-2.597 2.1603-6.6733 3.2129-6.6733 1.7232zm595-0.2483c0-1.7991 6.0623-11.088 7.8456-12.021 3.7065-1.9399 7.7742 2.1387 5.3891 5.4035-2.8436 3.8925-13.235 9.0884-13.235 6.6177zm-7.9409-3.8115c-3.2415-11.557-2.2042-16.896 3.1359-16.139 2.8659 0.40627 3.4442 5.5431 1.5475 13.745-1.5311 6.6212-3.2511 7.5002-4.6834 2.3935zm-595.02-2.688c-2.7129-9.6895-1.4523-13.944 3.9655-13.382 2.8678 0.29716 3.2682 5.356 1.0692 13.509-1.4742 5.4656-3.4831 5.415-5.0347-0.12687zm285.2 0.34756c-3.3498-3.0472-4.1602-3.2637-12.706-3.3945-4.5114-0.06909-5.1021-0.35377-6.3828-3.0761-2.8296-6.0149-7.3735-9.1972-11.336-7.9395-1.7896 0.56801-1.8158 0.78054-0.36792 2.9903 3.4475 5.2615 0.54601 10.416-5.0698 9.0063-6.034-1.5144-4.9101-9.8488 1.9393-14.381 9.6257-6.37 27.282-0.2739 36.416 12.573 5.2317 7.3584 3.7374 9.8894-2.4928 4.2222zm22.766 0.47965c0-13.044 29.971-25.465 40.655-16.849 6.8166 5.4974 5.754 13.399-1.8019 13.399-5.3191 0-7.0884-3.8375-3.8123-8.2687 2.4211-3.2748 2.406-3.3301-1.1519-4.2231-3.1961-0.80217-6.935 2.1222-10.218 7.9918l-2.2371 4-6.086-0.33446c-5.6028-0.30791-6.3649-0.08957-9.599 2.75-3.8721 3.3997-5.749 3.9008-5.749 1.5348zm-9.4841-0.42462c-0.39641-0.64141-1.5394-4.5224-2.54-8.6244-1.8058-7.4032-5.4294-14.873-8.4183-17.353-3.045-2.5271-1.4704-6.3831 2.9424-7.2052 1.6168-0.30121 2-1.1635 2-4.5001 0-11.132 11.981-11.938 12.686-0.85339 0.29949 4.7107 0.46806 4.9697 3.6566 5.6173 4.7873 0.97228 5.3922 2.016 3.1407 5.4192-1.0823 1.6359-3.3004 4.9984-4.929 7.472-1.937 2.942-3.3741 6.9196-4.155 11.5-1.231 7.2206-3.0293 10.719-4.3834 8.5281zm2.4688-26.276c0.0101-1.8095-0.50843-2.75-1.5161-2.75-2.1646 0-2.7337 2.1726-1.452 5.5437 1.2914 3.3967 2.9423 1.8429 2.9681-2.7937z"
          />
        </svg>

        <Avatar
          isBordered
          color="default"
          src="/img/bautizos/barbara/church.jpg"
          className="h-44 w-44 my-5 shadow-lg"
        />

        <span className="flex items-center justify-center gap-1 bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">
          <IoMdTime /> 13:00 HRS
        </span>

        <h2
          className={`${glass.className} mx-10 text-orange-900 text-center text-2xl mt-5 max-w-md`}
        >
          Catedral Metropolitana de la Inmaculada Concepción
        </h2>
        <p
          className={`${luxurious.className} text-orange-900 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          Juan de La Luz Enríquez s/n, Zona Centro, Centro, 91000
          Xalapa-Enríquez, Ver.
        </p>

        <button
          className="mt-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
          onClick={() => {
            onOpen();
          }}
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex justify-center items-center gap-1">
            <LuMapPin />
            Ver Ubicación
          </span>
        </button>
      </motion.section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
