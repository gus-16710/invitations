import { LuMapPin } from "react-icons/lu";
import { glass, luxurious, mea } from "./Fonts";
import { IoMdTime } from "react-icons/io";
import {
  Avatar,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useScroll, motion } from "framer-motion";
import { useRef } from "react";

const MapCeremony = () => (
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.7336249207947!2d-96.98584556579588!3d19.63868272800868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db251179ed0f45%3A0xd86bfc61bf1f673e!2sCapilla%20san%20Antonio%20de%20Padua!5e0!3m2!1ses!2smx!4v1722014693004!5m2!1ses!2smx"
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
              className={`${mea.className} flex flex-col gap-1 items-center text-3xl text-gray-800`}
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

function Location() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  return (
    <section className="bg-white">
      <motion.div
        className="flex flex-col items-center justify-center h-screen relative"
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="rgb(31, 41, 55)"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="100px"
          height="100px"          
        >
          <g>
            <g>
              <path d="M255.999,159.813c-17.926,0-32.509,14.583-32.509,32.508v47.167h65.017v-47.167    C288.508,174.396,273.925,159.813,255.999,159.813z M273.071,224.05h-34.143v-31.73c0-9.413,7.658-17.07,17.071-17.07    c9.414,0,17.071,7.658,17.071,17.07V224.05z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M104.103,321.618c-17.926,0-32.509,14.583-32.509,32.509v47.167h65.017v-47.167    C136.611,336.202,122.028,321.618,104.103,321.618z M121.174,385.857H87.031v-31.73c0-9.413,7.658-17.071,17.071-17.071    c9.414,0,17.071,7.658,17.071,17.071V385.857z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M407.896,321.618c-17.926,0-32.509,14.583-32.509,32.509v47.167h65.017v-47.167    C440.405,336.202,425.822,321.618,407.896,321.618z M424.968,385.857h-34.143v-31.73c0-9.413,7.658-17.071,17.071-17.071    s17.071,7.658,17.071,17.071V385.857z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M475.69,474.641V281.799l-120.15-44.145v-77.605l-91.822-90.213v-31.24h20.579V23.159h-20.579V0h-15.437v23.159h-20.579    v15.437h20.579v31.239l-91.822,90.213v77.605l-120.15,44.146v192.842H16.225V512h479.55v-37.359H475.69z M355.54,254.1    l104.713,38.473v11.065L355.54,265.166V254.1z M355.54,281.612l104.713,38.473v154.556H355.54V281.612z M171.896,166.524    l84.104-82.63l84.104,82.63v13.663l-84.104-82.63l-84.104,82.63V166.524z M255.999,321.618c-36.818,0-66.771,29.953-66.771,66.77    v86.253h-17.333V231.982v-30.155l84.104-82.629l84.104,82.629v30.155v242.659H322.77v-86.253    C322.77,351.572,292.817,321.618,255.999,321.618z M307.333,388.389v86.253h-43.615V337.637    C288.374,341.372,307.333,362.707,307.333,388.389z M248.281,337.636v137.005h-43.615v-86.253    C204.666,362.706,223.625,341.371,248.281,337.636z M51.746,292.573l104.713-38.474v11.065L51.746,303.638V292.573z     M51.746,320.085l104.713-38.473v193.03H51.746V320.085z M480.339,496.563h-0.002H31.662v-6.485h4.648h120.15h15.437h17.333    h133.542h17.333h15.437h120.15h4.648V496.563z" />
            </g>
          </g>
          <g>
            <g>
              <rect x="183.692" y="291.104" width="14.939" height="15.437" />
            </g>
          </g>
          <g>
            <g>
              <rect x="216.11" y="291.104" width="14.938" height="15.437" />
            </g>
          </g>
          <g>
            <g>
              <rect x="248.528" y="291.104" width="14.939" height="15.437" />
            </g>
          </g>
          <g>
            <g>
              <rect x="280.946" y="291.104" width="14.938" height="15.437" />
            </g>
          </g>
          <g>
            <g>
              <rect x="313.374" y="291.104" width="14.939" height="15.437" />
            </g>
          </g>
        </svg>
        <h2 className={`${mea.className} text-6xl text-gray-800 mb-5 mt-5`}>
          Ceremonia
        </h2>
        <span
          className={`${glass.className} mb-5 text-4xl bg-gray-200/50 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300 flex items-center justify-center gap-1`}
        >
          ~ 13:00 Hrs ~
        </span>
        <h2
          className={`${glass.className} mx-10 text-gray-800 text-center text-2xl max-w-md`}
        >
          "Iglesia San Antonio de Padua"
        </h2>
        <p
          className={`${luxurious.className} text-gray-800 mt-3 text-sm text-center mx-10 max-w-md`}
        >
          91353 El Fresno, Ver.
        </p>

        <button
          type="button"
          className="mt-5 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
          onClick={() => {
            onOpen();
          }}
        >
          <LuMapPin className="mr-1" />
          Ver Ubicación
        </button>

        <p
          className={`${luxurious.className} text-gray-800 text-sm text-center mx-10 max-w-md mt-5 absolute bottom-5`}
        >
          * Después de la misa los esperamos en la casa de cultura
        </p>
      </motion.div>
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}

export default Location;
