// import { Avatar, Spinner } from "@nextui-org/react";
// import { luxurious, mea, urbanist } from "./Fonts";
// import { motion } from "framer-motion";
// import { IoMdTime } from "react-icons/io";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   useDisclosure,
// } from "@nextui-org/react";

// //<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4964339586477!2d-96.56232163227473!3d19.40196124470411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4ad9e453d9ce9%3A0xd7aebe123dd4a0b1!2sTelebachillerato%20Buena%20Vista%20EZ%20TEBAEV!5e0!3m2!1ses!2smx!4v1750736228505!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

// const MapCeremony = () => (
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4964339586477!2d-96.56232163227473!3d19.40196124470411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4ad9e453d9ce9%3A0xd7aebe123dd4a0b1!2sTelebachillerato%20Buena%20Vista%20EZ%20TEBAEV!5e0!3m2!1ses!2smx!4v1750736228505!5m2!1ses!2smx"
//     height="450"
//     style={{ border: "0" }}
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//     className="z-20"
//   ></iframe>
// );

// const ModalMap = ({
//   isOpen,
//   onOpenChange,
// }: {
//   isOpen: boolean;
//   onOpenChange: () => void;
// }) => {
//   return (
//     <Modal
//       isOpen={isOpen}
//       onOpenChange={onOpenChange}
//       size="xs"
//       placement="center"
//       backdrop="blur"
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader
//               className={`${mea.className} flex flex-col gap-1 items-center text-3xl`}
//             >
//               Ubicación
//             </ModalHeader>
//             <ModalBody className="relative flex justify-center items-center">
//               <>
//                 <MapCeremony />
//                 <Spinner className="absolute z-10" color="warning" />
//               </>
//             </ModalBody>
//             <ModalFooter className="flex justify-center">
//               <button
//                 type="button"
//                 className="text-gray-900 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
//                 onClick={() => {
//                   onClose();
//                 }}
//               >
//                 Cerrar
//               </button>
//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };

// export default function SlideTwo() {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();

//   return (
//     <>
//       <motion.section
//         className="flex flex-col justify-center items-center"
//         style={{ height: "100svh" }}
//         initial={{ scale: 0, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//       >
//         <h1 className={`${mea.className} text-zinc-50 text-6xl`}>Ubicación</h1>

//         <span className="flex items-center justify-center gap-1 bg-pink-100 text-pink-800 text-4xl font-medium me-2 px-5 py-2 rounded-full dark:bg-gray-700 dark:text-pink-400 border border-pink-400 my-10">
//           05:00 p.m.
//         </span>

//         <p
//           className={`${urbanist.className} text-zinc-50 text-2xl px-5 text-center mx-10`}
//         >
//           Telebachillerato <br/> "Buena Vista"
//         </p>
//         <p
//           className={`${luxurious.className} text-zinc-50 mt-3 text-sm text-center mx-10 max-w-md`}
//         >
//           Calle Loma bonita s/n Col. Centro, Loc. Buena Vista, Emiliano Zapata.
//         </p>

//         <button
//           type="button"
//           className="text-gray-100 hover:text-white border border-gray-100 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 my-10"
//           onClick={() => {
//             onOpen();
//           }}
//         >
//           Ubicación
//         </button>
//       </motion.section>
//       <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
//     </>
//   );
// }

import { Avatar, Spinner } from "@nextui-org/react";
import { luxurious, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import { IoMdTime } from "react-icons/io";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.4964339586477!2d-96.56232163227473!3d19.40196124470411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c4ad9e453d9ce9%3A0xd7aebe123dd4a0b1!2sTelebachillerato%20Buena%20Vista%20EZ%20TEBAEV!5e0!3m2!1ses!2smx!4v1750736228505!5m2!1ses!2smx"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </motion.div>
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
              className={`${mea.className} flex flex-col gap-1 items-center text-3xl`}
            >
              Ubicación
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center">
              <>
                <MapCeremony />
                <Spinner className="absolute z-10" color="warning" />
              </>
            </ModalBody>
            <ModalFooter className="flex justify-center">
              <button
                type="button"
                className="text-gray-900 bg-white/0 border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center"
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

export default function SlideTwo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
      },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section
        className="flex flex-col justify-center items-center"
        style={{ height: "100svh" }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex flex-col items-center"
        >
          {/* Título */}
          <motion.h1
            variants={item}
            className={`${mea.className} text-zinc-50 text-6xl mb-8`}
          >
            Ubicación
          </motion.h1>

          {/* Hora */}
          <motion.div
            variants={item}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 bg-pink-100/20 backdrop-blur-sm text-pink-100 text-2xl font-medium px-6 py-3 rounded-full border border-pink-200/30 mb-10"
          >
            <IoMdTime className="text-xl" />
            <span>05:00 p.m.</span>
          </motion.div>

          {/* Lugar */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <p className={`${urbanist.className} text-zinc-50 text-2xl`}>
              Telebachillerato
            </p>
            <p
              className={`${urbanist.className} text-zinc-50 text-2xl font-bold`}
            >
              "Buena Vista"
            </p>
          </motion.div>

          {/* Dirección */}
          <motion.p
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className={`${luxurious.className} text-zinc-100 text-center text-sm max-w-md mx-10 mb-10`}
          >
            Calle Loma bonita s/n Col. Centro,
            <br />
            Loc. Buena Vista, Emiliano Zapata.
          </motion.p>

          {/* Botón */}
          <motion.button
            variants={item}
            transition={{ delay: 0.5 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-100 border border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center backdrop-blur-sm"
            onClick={onOpen}
          >
            Ver en Mapa
          </motion.button>
        </motion.div>
      </section>

      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
