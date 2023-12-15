import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { mate, roboto } from "./Fonts";

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
            <ModalHeader className={`${mate.className} flex flex-col gap-1 items-center`}>Ceremonia</ModalHeader>
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
          fill="#000000"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="75px"
        >
          <g>
            <g>
              <path d="M344.144,151.961c-17.568,0-34.477,2.86-50.298,8.127c-13.873-21.093-32.678-38.76-54.624-51.247    c-23.907-13.603-51.165-20.793-78.827-20.793c-88.011,0-159.613,71.603-159.613,159.613c0,88.011,71.602,159.614,159.613,159.614    c17.566,0,34.477-2.86,50.298-8.127c13.874,21.093,32.678,38.76,54.624,51.247c23.907,13.603,51.165,20.793,78.827,20.793    c88.011,0,159.613-71.602,159.613-159.613C503.758,223.564,432.156,151.961,344.144,151.961z M160.395,391.633    c-79.386,0-143.971-64.585-143.971-143.972c0-79.386,64.585-143.971,143.971-143.971c47.793,0,91.57,23.135,118.512,62.222    c-5.026,2.26-9.914,4.773-14.649,7.523c-23.982-33.588-62.274-53.429-103.863-53.429c-70.39,0-127.657,57.267-127.657,127.657    s57.267,127.657,127.657,127.657s127.657-57.267,127.657-127.657c0-10.406-1.265-20.729-3.74-30.743    c4.706-2.985,9.649-5.627,14.792-7.895c3.482,12.525,5.263,25.486,5.263,38.637C304.367,327.048,239.781,391.633,160.395,391.633z     M190.666,355.518c-9.633,2.707-19.786,4.16-30.272,4.16c-61.765,0-112.015-50.25-112.015-112.015s50.25-112.015,112.015-112.015    c36.252,0,69.658,17.178,90.73,46.3c-40.3,29-66.594,76.299-66.594,129.629C184.531,326.539,186.597,341.285,190.666,355.518z     M232.129,311.574c0-33.613,14.885-63.811,38.404-84.36c1.238,6.716,1.877,13.559,1.877,20.448    c0,33.612-14.885,63.811-38.404,84.36C232.768,325.306,232.129,318.463,232.129,311.574z M313.877,203.717    c9.631-2.706,19.782-4.158,30.267-4.158c61.765,0,112.015,50.25,112.015,112.015S405.91,423.59,344.144,423.59    c-36.251,0-69.658-17.178-90.73-46.3c40.3-29,66.594-76.299,66.594-129.629C320.008,232.7,317.946,217.949,313.877,203.717z     M344.144,455.545c-47.793,0-91.57-23.135-118.513-62.222c5.026-2.26,9.914-4.773,14.649-7.523    c23.982,33.587,62.275,53.43,103.864,53.43c70.39,0,127.657-57.267,127.657-127.657s-57.267-127.657-127.657-127.657    s-127.658,57.267-127.658,127.657c0,10.407,1.266,20.729,3.74,30.742c-4.71,2.987-9.657,5.631-14.806,7.901    c-3.482-12.526-5.249-25.488-5.249-38.643c0-79.386,64.586-143.972,143.972-143.972s143.971,64.586,143.971,143.972    C488.116,390.961,423.53,455.545,344.144,455.545z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M401.692,85.877l-24.532-37.91h-66.03l-24.521,37.888l32.503,41.363h-15.405v15.642H384v-15.642h-15.084L401.692,85.877z     M339.005,127.218l-24.582-31.283h21.61V80.293H308.84l10.798-16.684h49.012l10.798,16.684h-27.774v15.642h22.084l-24.802,31.283    H339.005z" />
            </g>
          </g>
          <g>
            <g>
              <polygon points="455.951,127.218 455.951,112.619 440.31,112.619 440.31,127.218 423.625,127.218 423.625,142.859 440.31,142.859     440.31,159.544 455.951,159.544 455.951,142.859 471.593,142.859 471.593,127.218   " />
            </g>
          </g>
          <g>
            <g>
              <rect x="40.929" y="32.326" width="15.642" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="63.87" y="32.326" width="25.026" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="8.603" y="32.326" width="23.984" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="40.929" y="55.267" width="15.642" height="25.026" />
            </g>
          </g>
          <g>
            <g>
              <rect x="40.929" width="15.642" height="23.984" />
            </g>
          </g>
          <g>
            <g>
              <rect x="80.554" y="64.652" width="15.642" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="471.593" y="80.293" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="423.625" y="56.31" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <polygon points="135.821,216.896 135.821,200.212 120.179,200.212 120.179,216.896 104.538,216.896 104.538,232.538     120.179,232.538 120.179,247.136 135.821,247.136 135.821,232.538 152.505,232.538 152.505,216.896   " />
            </g>
          </g>
          <g>
            <g>
              <rect x="88.896" y="263.821" width="15.642" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="135.821" y="287.805" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <polygon points="368.358,279.462 368.358,262.778 352.717,262.778 352.717,279.462 336.033,279.462 336.033,295.104     352.717,295.104 352.717,311.788 368.358,311.788 368.358,295.104 384,295.104 384,279.462   " />
            </g>
          </g>
          <g>
            <g>
              <rect x="391.299" y="247.136" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="368.358" y="327.43" width="15.642" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="495.576" y="200.212" width="15.642" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="121.222" y="7.299" width="14.599" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="135.821" y="464.033" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="104.538" y="464.033" width="23.984" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="160.847" y="464.033" width="22.941" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="135.821" y="431.707" width="15.642" height="22.941" />
            </g>
          </g>
          <g>
            <g>
              <rect x="135.821" y="486.974" width="15.642" height="25.026" />
            </g>
          </g>
          <g>
            <g>
              <rect x="96.195" y="431.707" width="16.684" height="15.642" />
            </g>
          </g>
          <g>
            <g>
              <rect x="56.57" y="486.974" width="16.684" height="15.642" />
            </g>
          </g>
        </svg>
        <h1 className={`${mate.className} text-gray-800 text-3xl mt-5`}>
          Ceremonia Religiosa
        </h1>
        <p
          className={`${roboto.className} text-gray-800 text-xl mt-10 mx-10 text-center`}
        >
          "Templo María De Jesus Palomar"
        </p>
        <p
          className={`${roboto.className} text-gray-800 text-sm mt-2 mx-10 text-center`}
        >
          Juan de La Luz Enríquez s/n, Zona Centro, Centro, 91000
          Xalapa-Enríquez, Ver.
        </p>
        <span className="mt-3 bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          13:00 Hrs
        </span>
        <button
          type="button"
          className="mt-10 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center"
          onClick={() => {
            onOpen();
          }}
        >
          Ver Ubicación
        </button>
      </section>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
