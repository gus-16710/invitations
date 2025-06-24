// import { Spinner } from "@nextui-org/react";
// import { nobile, oleo, ovo } from "./Fonts";
// import { motion } from "framer-motion";
// import { FaMapLocationDot } from "react-icons/fa6";
// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   useDisclosure,
// } from "@nextui-org/react";

// const MapCeremony = () => (
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0007021584656!2d-96.85183168393021!3d19.49860559771288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db3397fd7f622f%3A0x73bb521d2074db1d!2sProfr.%20Arnulfo%20P%C3%A9rez%20Rivera!5e0!3m2!1ses!2smx!4v1750796585461!5m2!1ses!2smx"
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
//               className={`${oleo.className} flex flex-col gap-1 items-center text-3xl`}
//             >
//               Ubicación
//             </ModalHeader>
//             <ModalBody className="relative flex justify-center items-center">
//               <>
//                 <MapCeremony />
//                 <Spinner className="absolute z-10" />
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
//         className="flex flex-col justify-center items-center custom-shadow text-blue-950"
//         style={{ height: "100svh" }}
//         initial={{ y: 200, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1.5, delay: 0.5 }}
//       >
//         <h1 className={`${oleo.className} text-5xl custom-shadow`}>
//           Fecha y Lugar
//         </h1>
//         <div
//           className={`${ovo.className} flex items-center justify-center flex-col my-10 `}
//         >
//           <label className={`pb-1 text-lg`}>Julio</label>
//           <div className="flex items-center justify-center">
//             <label className={`p-4 text-lg w-28 text-right`}>Jueves</label>
//             <label
//               className={`py-2 px-4 border-l-2 border-r-2 border-gray-300 text-5xl`}
//             >
//               10
//             </label>
//             <label className={`p-4 text-lg w-28`}>02:30 pm</label>
//           </div>
//           <label className={`text-xl`}>2025</label>
//         </div>

//         <p
//           className={`${nobile.className}  px-5 text-center mx-10`}
//         >
//           Escuela "Profr. Arnulfo Pérez Rivera"
//         </p>
//         <p
//           className={`${nobile.className}  mt-3 text-sm text-center mx-10 max-w-md`}
//         >
//           C. Hacienda del Carmen 16, 91637 Jacarandas, Ver.
//         </p>

//         <button
//           type="button"
//           className="flex items-center gap-2 text-gray-100 hover:text-white border border-gray-400 bg-blue-950 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mt-10"
//           onClick={() => {
//             onOpen();
//           }}
//         >
//           <FaMapLocationDot />
//           Ver ubicación
//         </button>
//       </motion.section>
//       <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
//     </>
//   );
// }


import { Spinner } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const MapCeremony = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="z-20"
  >
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.0007021584656!2d-96.85183168393021!3d19.49860559771288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db3397fd7f622f%3A0x73bb521d2074db1d!2sProfr.%20Arnulfo%20P%C3%A9rez%20Rivera!5e0!3m2!1ses!2smx!4v1750796585461!5m2!1ses!2smx"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="z-20 w-full"
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
            <ModalHeader className={`${oleo.className} flex flex-col gap-1 items-center text-3xl`}>
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Ubicación
              </motion.div>
            </ModalHeader>
            <ModalBody className="relative flex justify-center items-center p-0">
              <MapCeremony />
              <Spinner className="absolute z-10" />
            </ModalBody>
            <ModalFooter className="flex justify-center p-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 rounded-full px-5 py-2.5 text-sm font-medium flex items-center"
                onClick={onClose}
              >
                Cerrar Mapa
              </motion.button>
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
        delayChildren: 0.3
      }
    }
  };

  const itemUp = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        mass: 0.6
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 8,
        mass: 0.5
      }
    }
  };

  return (
    <section className="flex flex-col justify-center items-center custom-shadow text-blue-950" style={{ height: "100svh" }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"        
        className="flex flex-col items-center"
      >
        {/* Título */}
        <motion.h1 
          variants={itemUp}
          className={`${oleo.className} text-5xl custom-shadow mb-10`}
        >
          Fecha y Lugar
        </motion.h1>

        {/* Fecha */}
        <motion.div 
          variants={scaleIn}
          className={`${ovo.className} flex flex-col items-center mb-10`}
        >
          <motion.span className="pb-1 text-lg">Julio</motion.span>
          <motion.div className="flex items-center justify-center">
            <motion.span className="p-4 text-lg w-28 text-right">Jueves</motion.span>
            <motion.span 
              className="py-2 px-4 border-l-2 border-r-2 border-gray-300 text-5xl"
              whileHover={{ scale: 1.1 }}
            >
              10
            </motion.span>
            <motion.span className="p-4 text-lg w-28">02:30 pm</motion.span>
          </motion.div>
          <motion.span className="text-xl">2025</motion.span>
        </motion.div>

        {/* Lugar */}
        <motion.div
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className={`${nobile.className} px-5 text-center mx-10`}>
            Escuela "Profr. Arnulfo Pérez Rivera"
          </p>
          <p className={`${nobile.className} mt-3 text-sm text-center mx-10 max-w-md`}>
            C. Hacienda del Carmen 16, 91637 Jacarandas, Ver.
          </p>
        </motion.div>

        {/* Botón */}
        <motion.button
          variants={itemUp}
          transition={{ delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(29, 78, 216, 0.9)" // darken blue-950
          }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-white border border-blue-900 bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-10"
          onClick={onOpen}
        >
          <motion.div whileHover={{ rotate: 10 }}>
            <FaMapLocationDot />
          </motion.div>
          <span>Ver ubicación</span>
        </motion.button>
      </motion.div>
      
      <ModalMap isOpen={isOpen} onOpenChange={onOpenChange} />
    </section>
  );
}