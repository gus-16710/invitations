"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import "./styles.css";
import { nobile, ovo } from "./components/Fonts";
import AudioControl from "./components/AudioControl";

const OpeningModal = ({
  isOpen,
  onOpenChange,
  setOpen,
}: {
  isOpen: boolean;
  onOpenChange: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="xs"
      placement="center"
      backdrop="blur"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <h2
                className={`${nobile.className} text-blue-950 text-lg text-center`}
              >
                Escuela Primaria
              </h2>
              <h1
                className={`${ovo.className} text-blue-950 text-4xl text-center`}
              >
                "Francisco I. Madero"
              </h1>
              <h2 className={`${nobile.className} text-blue-850 text-center`}>30EPR0877X</h2>          

              <h2 className={`${nobile.className} text-blue-950 text-center`}>
                CEREMONIA DE FIN DE CURSOS
              </h2>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="flex items-center gap-2 text-gray-100 hover:text-white border border-gray-400 bg-blue-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2"
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
              >
                Ver Invitación
              </button>
            </ModalFooter>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height="250px"
              width="250px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 58.743 58.743"
              xmlSpace="preserve"
              className="absolute -left-10 -top-10 fill-slate-700/10 -rotate-12"
            >
              <g>
                <path d="M58.47,18.402c0.717-0.741-0.115-1.78-0.917-1.564c-0.057-0.156-0.159-0.299-0.339-0.395   c-6.179-3.288-12.939-5.692-19.381-8.428C34.016,6.394,28.616,2.7,24.322,4.393c-4.407,1.738-8.645,6.616-12.269,9.584   c-4.239,3.471-8.66,6.806-11.832,11.333c-0.423,0.604,0.543,1.355,1.027,0.792c2.986-3.472,6.4-6.339,9.988-9.17   c1.874-1.479,3.75-2.953,5.612-4.447c2.009-1.612,4.792-4.769,7.112-5.68c4.932-1.936,11.776,2.13,16.775,4.505   c-1.762-0.062-3.528-0.08-5.287-0.127c-0.221-0.006-0.22,0.333,0,0.342c2.096,0.084,4.197,0.208,6.295,0.248   c0.137,0.061,0.28,0.128,0.414,0.185c0.976,0.418,1.952,0.852,2.927,1.284c-2.369-0.265-4.836-0.197-7.137-0.038   c-0.205,0.014-0.21,0.327,0,0.323c2.92-0.054,5.774,0.235,8.666,0.385c1.243,0.551,2.487,1.102,3.739,1.632   c-4.03-0.303-8.136-0.18-12.156-0.062c-0.165,0.005-0.167,0.259,0,0.258c4.463-0.037,8.911,0.26,13.366,0.309   c1.576,0.648,3.164,1.261,4.774,1.796c-0.032,0.032-0.067,0.065-0.099,0.096c-6.316-0.094-12.83,0.474-19.085-0.332   c-0.158-0.02-0.197,0.255-0.038,0.281c5.996,0.973,12.48,0.659,18.593,0.565c-0.749,0.726-1.503,1.457-2.263,2.191   c-2.741-0.127-5.5-0.036-8.243-0.021c-2.712,0.014-5.892,0.443-8.523-0.309c-0.19-0.054-0.265,0.23-0.081,0.294   c2.293,0.795,4.903,0.459,7.298,0.475c3.022,0.02,6.062,0.126,9.083,0.013c-1.654,1.594-3.334,3.191-5.066,4.76   c-3.054-0.149-6.177,0.031-9.217,0.089c-0.202,0.004-0.202,0.31,0,0.314c2.844,0.054,5.763,0.217,8.628,0.118   c-0.657,0.589-1.312,1.18-1.98,1.754c-1.967-0.051-3.931,0.016-5.903-0.168c-0.239-0.022-0.233,0.343,0,0.37   c1.71,0.198,3.518,0.394,5.277,0.33c-0.85,0.719-1.706,1.429-2.575,2.114c-1.73,0.177-3.45,0.367-5.197,0.432   c-0.201,0.007-0.203,0.312,0,0.314c1.499,0.013,3.033-0.041,4.54-0.226c-0.876,0.675-1.76,1.334-2.658,1.962   c-1.708,0.004-3.426,0.155-5.129,0.248c-0.18,0.01-0.182,0.287,0,0.281c1.532-0.05,3.08-0.054,4.615-0.158   c-0.938,0.641-1.888,1.252-2.85,1.827c-0.01-0.003-0.018-0.011-0.031-0.009c-1.362,0.165-2.624,0.339-3.999,0.169   c-0.08-0.01-0.1,0.13-0.019,0.143c1.169,0.184,2.431,0.241,3.6-0.032c-0.589,0.343-1.181,0.676-1.78,0.991   c-6.079,3.194-11.539-1.738-16.854-4.282c-2.424-1.16-4.893-2.222-7.382-3.237c0.025-0.028,0.046-0.055,0.071-0.083   c4.704-5.164,11.238-8.113,17.8-10.149c0.633-0.196,0.354-1.046-0.265-0.963c-7.651,1.032-14.827,4.415-19.919,10.268   c-1.431-0.566-2.864-1.124-4.3-1.674c-0.714-0.274-1.237,0.944-0.526,1.247c1.278,0.544,2.556,1.087,3.833,1.634   C1.545,34.821-1.808,43.28,1.087,49.854C1.527,50.855,2.955,50.256,3,49.336c0.351-7.205,0.446-13.129,4.943-18.874   c0.757,0.33,1.516,0.655,2.269,0.992c-0.13,0.068-0.22,0.195-0.195,0.392c0.698,5.511,1.092,11.02,1.71,16.529   c-0.368-0.114-0.75,0.406-0.41,0.686c5.871,4.835,13.071,5.931,20.494,5.693c5.115-0.164,12.357-0.199,14.302-5.986   c0.096-0.287,0.054-0.525-0.065-0.706c0.016-0.075,0.046-0.14,0.047-0.226c0.021-3.579,0.151-7.12,0.681-10.666   c0.41-2.744,1.296-5.452,1.343-8.226c0.005-0.298-0.386-0.376-0.537-0.146c-0.521,0.794-0.958,1.67-1.338,2.593   c-0.766-0.028-1.536-0.018-2.305,0.002c0.087-0.068,0.176-0.141,0.262-0.209C49.223,27.241,54.03,22.992,58.47,18.402z    M23.699,42.02c6.807-0.066,13.638-0.124,20.44-0.431c-0.061,0.899-0.108,1.792-0.129,2.661c-6.434,0.102-12.884,0.41-19.311,0.725   c-0.21,0.01-0.212,0.331,0,0.328c6.427-0.094,12.878-0.198,19.299-0.505c-0.012,0.693-0.015,1.373-0.01,2.029   c-4.501-0.014-9.046,0.494-13.536,0.778c-0.111,0.007-0.113,0.177,0,0.173c4.494-0.145,9.065-0.072,13.541-0.514   c0.002,0.191,0.004,0.385,0.007,0.571c0.005,0.287,0.115,0.501,0.266,0.666c-0.09,0.198-0.21,0.372-0.321,0.552   c-4,0.162-7.995,0.507-11.998,0.661c-0.207,0.008-0.209,0.327,0,0.324c3.897-0.058,7.844-0.139,11.725-0.562   c-3.028,3.995-11.506,3.407-15.739,3.303c-5.229-0.13-10.286-1.103-14.842-3.635c0.207-0.133,0.365-0.356,0.386-0.696   c0.334-5.398-0.768-11.562-2.514-16.659c3.228,1.458,6.415,3.004,9.503,4.752c3.755,2.126,6.705,4.231,11.107,2.884   c4.254-0.063,8.576-0.03,12.81-0.406c-0.082,0.682-0.153,1.364-0.206,2.044c-6.825,0.079-13.664,0.41-20.48,0.732   C23.555,41.802,23.553,42.022,23.699,42.02z M44.444,38.566c-3.971-0.054-7.993,0.27-11.969,0.526   c1.617-0.61,3.172-1.483,4.671-2.484c2.547-0.057,5.117-0.062,7.656-0.258C44.663,37.082,44.541,37.821,44.444,38.566z    M44.885,35.901c-2.383-0.004-4.778,0.163-7.161,0.302c1.052-0.731,2.075-1.516,3.075-2.306c1.478,0.185,3.007,0.314,4.507,0.241   C45.151,34.716,45.008,35.303,44.885,35.901z M46.073,31.827c-0.223,0.581-0.432,1.174-0.612,1.788   c-1.408,0-2.806,0.017-4.215-0.069c0.739-0.589,1.461-1.171,2.175-1.74C44.304,31.828,45.19,31.853,46.073,31.827z" />
                <path d="M49.944,23.31c-4.84,0.167-9.655,0.354-14.5,0.248c-0.2-0.004-0.198,0.301,0,0.309   c4.821,0.202,9.685,0.278,14.5-0.084C50.244,23.761,50.251,23.299,49.944,23.31z" />
              </g>
            </svg>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function School() {
  const [open, setOpen] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // useEffect(() => {
  //   onOpen();
  // }, []);

  return (
    <main className="bg-[url('/img/escolar/primaria-francisco-madero/background05.jpg')] bg-center bg-cover h-screen">
      {open && (
        <div className="relative">
          <Splide
            aria-label="Francisco I. Madero"
            options={{
              rewind: true,
              direction: "ttb",
              height: "100svh",
              wheel: true,
              releaseWheel: true,
              type: "loop",
              waitForTransition: true,
              arrows: false,
              classes: {
                page: "splide__pagination__page custom-class-page", // each button
              },
            }}
          >
            <SplideSlide>
              <SlideOne />
            </SplideSlide>
            <SplideSlide>
              <SlideTwo />
            </SplideSlide>
            <SplideSlide>
              <SlideThree />
            </SplideSlide>
            <SplideSlide>
              <SlideFour />
            </SplideSlide>
          </Splide>
          <AudioControl />
        </div>
      )}

      <OpeningModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        setOpen={setOpen}
      />
    </main>
  );
}
