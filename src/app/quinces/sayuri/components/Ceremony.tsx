import { IoMdTime } from "react-icons/io";
import { dancing, julius, playFair, quickSand } from "./Fonts";
import { ImDiamonds } from "react-icons/im";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5313.915144729869!2d-96.9903857871246!3d19.64843067035925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db25d9c1134349%3A0xc5793b9ff2c4f6b2!2sLa%20Sant%C3%ADsima%20Trinidad!5e0!3m2!1ses!2smx!4v1715800640616!5m2!1ses!2smx"
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
          <circle style={{ fill: "#935635" }} cx="256" cy="256" r="256" />
          <path
            style={{ fill: "#804000" }}
            d="M323.319,503.036c88.514-24.064,157.961-94.411,180.719-183.456L341.333,156.875l-2.329,2.412  l-59.732-59.732l-36.488,52.436l-72.118,51.429l90.727,90.727l-28.667,118.296L323.319,503.036z"
          />
          <polygon
            style={{ fill: "#FFD15D" }}
            points="341.333,156.875 279.273,156.875 279.273,99.556 232.727,99.556 232.727,156.875   170.667,156.875 170.667,203.421 232.727,203.421 232.727,412.444 279.273,412.444 279.273,203.421 341.333,203.421 "
          />
          <polygon
            style={{ fill: "#F9B54C" }}
            points="279.273,156.875 279.273,99.556 256,99.556 256,412.444 279.273,412.444 279.273,203.421   341.333,203.421 341.333,156.875 "
          />
        </svg>

        <h1 className={`${playFair.className} text-zinc-700 text-5xl`}>
          Ceremonia
        </h1>

        <span
          className={`${julius.className} text-zinc-700 text-3xl font-medium me-2 px-2.5 rounded my-4 flex items-center justify-center gap-1`}
          //variants={locations.time01}
          //initial="hidden"
          //whileInView="visible"
        >
          <IoMdTime /> 13:00 Hrs
        </span>

        <p
          className={`${playFair.className} my-5 mx-10 font-bold text-center text-lg px-2 py-1 uppercase rotate-2 flex items-center`}
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
          Iglesia De La Santísima Trinidad
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
