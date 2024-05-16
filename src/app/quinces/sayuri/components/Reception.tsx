import { IoMdTime } from "react-icons/io";
import { dancing, julius, playFair, quickSand, rye } from "./Fonts";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { ImDiamonds } from "react-icons/im";

const MapSalon = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.3733417530243!2d-96.98606489999997!3d19.648946000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db250066ae1f37%3A0xc60df725fa0180ef!2sSalon%20de%20Eventos%20Tengonapa!5e0!3m2!1ses!2smx!4v1715801363349!5m2!1ses!2smx"
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
              className={`${dancing.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Recepción
            </ModalHeader>
            <ModalBody>
              <MapSalon />
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function Reception() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="100px"
          width="100px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          className="mb-5"
        >
          <circle style={{ fill: "#FFD15D" }} cx="256" cy="256" r="256" />
          <path
            style={{ fill: "#F9B54C" }}
            d="M207.731,430.899l79.232,79.232c111.569-13.453,201.042-98.659,220.906-208.129l-176.08-176.08  l-71.192,69.741l-75.238,82.747l71.359,71.359v70.173L207.731,430.899z"
          />
          <path
            style={{ fill: "#FFFFFF" }}
            d="M352.539,213.687c0-22.583-7.756-56.344-20.747-87.762H180.208  c-12.991,31.418-20.747,65.179-20.747,87.762c0,49.226,36.854,89.819,84.471,95.761v109.749h-36.202v11.702h96.539v-11.702h-36.202  V309.448C315.685,303.504,352.539,262.913,352.539,213.687z"
          />
          <path
            style={{ fill: "#E6F3FF" }}
            d="M352.539,213.687c0-22.583-7.756-56.344-20.747-87.762h-76.366v304.974h48.843v-11.702h-36.202  V309.448C315.685,303.504,352.539,262.913,352.539,213.687z"
          />
          <path
            style={{ fill: "#D83E20" }}
            d="M168.26,212.954c-0.005,0.372-0.024,0.765-0.024,1.131c0,48.469,39.293,87.762,87.762,87.762  s87.762-39.293,87.762-87.762c0-0.365-0.019-0.759-0.024-1.131L168.26,212.954L168.26,212.954z"
          />
          <path
            style={{ fill: "#C1321F" }}
            d="M343.74,212.954h-88.314v88.878c0.193,0.002,0.381,0.014,0.574,0.014  c48.469,0,87.762-39.293,87.762-87.762C343.762,213.719,343.743,213.326,343.74,212.954z"
          />
        </svg>

        <h1 className={`${rye.className} text-zinc-700 text-5xl`}>
          Recepción
        </h1>

        <span
          className={`${julius.className} text-zinc-700 text-3xl font-medium me-2 px-2.5 rounded my-4 flex items-center justify-center gap-1`}
          //variants={locations.time01}
          //initial="hidden"
          //whileInView="visible"
        >
          <IoMdTime /> 14:30 Hrs
        </span>

        <p
          className={`${playFair.className} my-5 mx-10 font-bold text-center text-lg px-3 py-1 uppercase -rotate-2 flex items-center`}
          style={{
            color: "#d9ccaa",
            backgroundColor: "#50443c",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
          //variants={locations.animationText02}
          //initial="hidden"
          //whileInView="visible"
        >
          <span className="text-sm mr-3">
            <ImDiamonds />
          </span>
          Salón de Eventos Sociales Tengonapa
          <span className="text-sm ml-3">
            <ImDiamonds />
          </span>
        </p>

        <p
          className={`${quickSand.className} mx-10 text-center text-zinc-700 max-w-md`}
          //variants={locations.animationText03}
          //initial="hidden"
          //whileInView="visible"
        >
          Calle Principal S/N, Tengonapa, Centro, 91353 Tlacolulan, Ver.
        </p>

        <button
          role="button"
          className="golden-button mt-5"
          onClick={() => {
            onOpen();
          }}
        >
          <span className="golden-text">Ver Ubicación</span>
        </button>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
