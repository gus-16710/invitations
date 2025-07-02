"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFive from "./components/slideFive";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { cormorant, mea, urbanist } from "./components/Fonts";
import AudioControl from "./components/AudioControl";

import { GrFormViewHide } from "react-icons/gr";
import SlideSix from "./components/slideSix";

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
      size="full"
      placement="center"
      backdrop="transparent"
      isDismissable={false}
      hideCloseButton={true}
    >
      <ModalContent className="overflow-clip bg-slate-50/0 max-w-3xl">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody className="flex justify-center items-center">
              <h2
                className={`${urbanist.className} text-zinc-800 text-xl text-center`}
              >
                Jardín de Niños
              </h2>
              <h1
                className={`${cormorant.className} text-zinc-800 text-4xl text-center`}
              >
                "Victoria Villarauz Velazco"
              </h1>
              <h2
                className={`${urbanist.className} text-zinc-800 text-center text-lg`}
              >
                CLAVE 30DJN0190I
              </h2>

              <h2
                className={`${mea.className} text-zinc-800 text-center text-6xl italic my-10`}
              >
                Ceremonia de Graduación
              </h2>

              <h2
                className={`${urbanist.className} text-zinc-800 text-center text-2xl`}
              >
                15 de Julio del 2025
              </h2>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="backdrop-blur-sm flex items-center justify-center gap-2 text-gray-800 hover:text-gray-800 border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-4 "
                onClick={() => {
                  setOpen(true);
                  onClose();
                }}
              >
                <GrFormViewHide className="text-xl" /> Ver Invitación
              </button>
            </ModalFooter>          
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default function School() {
  const [open, setOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <main className="bg-[url('/img/escolar/jardin-victoria-villarauz/background7.jpg')] bg-center bg-cover h-screen">
      {open && (
        <div className="max-w-xl m-auto">
          <Splide
            aria-label="Jardín de Niños"
            options={{
              rewind: true,
              direction: "ltr",
              height: "100svh",
              releaseWheel: true,
              type: "loop",
              waitForTransition: true,
              arrows: true,
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
              <SlideSix />
            </SplideSlide>
            <SplideSlide>
              <SlideFive />
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
