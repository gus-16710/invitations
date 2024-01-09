"use client";

import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import FloatinButton from "./components/FloatingButton";
import Presentation from "./components/Presentation";
import Location from "./components/Location";
import Itinerary from "./components/Itinerary";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Confirm from "./components/Confirm";
import { motion } from "framer-motion";
import Opening from "./components/Opening";
import AudioControl from "./components/AudioControl";
import DressCode from "./components/DressCode";
import GodParents from "./components/GodParents";

export default function Wedding() {
  const [open, setOpen] = useState(false);

  return (
    <main      
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%237F5B61'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      className="overflow-clip"
    >
      {open ? (
        <motion.div
          className="max-w-3xl m-auto bg-[url('/img/bodas/diana-ernesto/background-main.jpg')] bg-center bg-cover bg-fixed shadow-large"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Header />
          <Presentation />
          <GodParents />
          <Location />
          <DressCode />
          <Itinerary />
          <Gallery />
          <Gifts />
          <Confirm />
          <FloatinButton />
          <AudioControl />
        </motion.div>
      ) : (
        <Opening setOpen={setOpen} key={"opening"} />
      )}
      {/* <ModalInstructions isOpen={isOpen} onOpenChange={onOpenChange} /> */}
    </main>
  );
}

// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   useDisclosure,
// } from "@nextui-org/react";
// import { Oswald } from "next/font/google";

// const oswald = Oswald({ subsets: ["latin"], weight: "400" });

// const ModalInstructions = ({
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
//       className="bg-white/0 shadow-none"
//       hideCloseButton={true}
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalBody>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 xmlnsXlink="http://www.w3.org/1999/xlink"
//                 fill="#ffff"
//                 width="250px"
//                 version="1.1"
//                 id="Capa_1"
//                 viewBox="0 0 465 465"
//                 xmlSpace="preserve"
//                 className="rotate-90"
//               >
//                 <g>
//                   <motion.path
//                     initial={{ x: 0 }}
//                     animate={{ x: [0, 25, 50] }}
//                     transition={{ duration: 1, repeat: Infinity }}
//                     d="M327.978,139.526c-0.027-0.216-0.059-0.431-0.104-0.641c-0.011-0.052-0.027-0.102-0.039-0.152   c-0.048-0.202-0.1-0.402-0.163-0.598c-0.02-0.061-0.044-0.119-0.065-0.178c-0.064-0.182-0.133-0.362-0.21-0.538   c-0.031-0.07-0.067-0.138-0.1-0.208c-0.076-0.159-0.156-0.316-0.243-0.469c-0.045-0.078-0.093-0.154-0.14-0.231   c-0.085-0.138-0.173-0.273-0.267-0.404c-0.058-0.082-0.118-0.161-0.179-0.24c-0.094-0.122-0.192-0.24-0.293-0.355   c-0.068-0.078-0.137-0.154-0.209-0.229c-0.108-0.113-0.221-0.222-0.336-0.328c-0.048-0.045-0.091-0.094-0.141-0.138l-20.993-18.419   c-3.113-2.731-7.853-2.422-10.584,0.691s-2.422,7.853,0.691,10.584l6.019,5.281h-82.141c-4.143,0-7.5,3.357-7.5,7.5   s3.357,7.5,7.5,7.5h82.142l-6.02,5.282c-3.113,2.732-3.423,7.471-0.691,10.584c1.482,1.69,3.557,2.554,5.641,2.554   c1.756,0,3.52-0.613,4.943-1.862l20.993-18.42c0.05-0.043,0.093-0.093,0.141-0.138c0.115-0.106,0.228-0.215,0.336-0.328   c0.072-0.075,0.14-0.152,0.209-0.229c0.102-0.116,0.199-0.234,0.293-0.355c0.061-0.08,0.122-0.159,0.179-0.24   c0.094-0.131,0.182-0.267,0.267-0.404c0.048-0.077,0.096-0.153,0.14-0.231c0.087-0.153,0.166-0.31,0.243-0.468   c0.033-0.07,0.069-0.138,0.1-0.208c0.078-0.175,0.146-0.355,0.21-0.537c0.021-0.06,0.046-0.118,0.065-0.179   c0.063-0.195,0.116-0.396,0.163-0.598c0.012-0.051,0.028-0.101,0.039-0.152c0.045-0.21,0.077-0.425,0.104-0.641   c0.006-0.046,0.016-0.09,0.021-0.136c0.027-0.26,0.042-0.524,0.042-0.792s-0.015-0.532-0.042-0.792   C327.994,139.616,327.983,139.572,327.978,139.526z"
//                   />
//                   <path d="M416.591,0H48.409C21.716,0,0,21.716,0,48.409V232.5c0,26.693,21.716,48.409,48.409,48.409H113.5   c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5H56.541V15h351.918v250.909h-57.918c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5   h66.05c26.693,0,48.409-21.716,48.409-48.409V48.409C465,21.716,443.284,0,416.591,0z M41.541,265.196   C26.403,262.02,15,248.568,15,232.5V48.409c0-16.068,11.403-29.52,26.541-32.696V265.196z M450,232.5   c0,16.068-11.403,29.52-26.541,32.696V15.713C438.597,18.89,450,32.341,450,48.409V232.5z" />
//                   <path d="M298.531,242.128c-8.739,0-16.603,3.817-22.011,9.873c-5.408-6.056-13.271-9.873-22.01-9.873   c-8.739,0-16.603,3.817-22.011,9.873c-5.408-6.056-13.271-9.873-22.011-9.873c-5.271,0-10.223,1.389-14.51,3.819v-104.44   c0-16.271-13.238-29.51-29.511-29.51c-16.271,0-29.51,13.238-29.51,29.51v210.49c0,30.028,13.162,57.381,36.252,75.644V457.5   c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-33.58c0-2.396-1.146-4.649-3.083-6.062c-21.079-15.363-33.169-39.368-33.169-65.861   v-210.49c0-8.001,6.509-14.51,14.51-14.51s14.511,6.509,14.511,14.51v130.131c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5   c0-8.001,6.509-14.51,14.51-14.51S225,263.637,225,271.638c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5   c0-8.001,6.51-14.51,14.511-14.51s14.51,6.509,14.51,14.51c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5   c0-8.001,6.51-14.51,14.511-14.51s14.51,6.509,14.51,14.51v80.359c0,26.493-12.09,50.498-33.169,65.861   c-1.938,1.412-3.083,3.665-3.083,6.062v33.58c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-29.859   c23.09-18.263,36.252-45.615,36.252-75.644v-80.359C328.041,255.366,314.803,242.128,298.531,242.128z" />
//                 </g>
//               </svg>
//               <p
//                 className={`${oswald.className} text-white text-2xl text-center mt-5`}
//               >
//                 DESLIZA PARA VER EL CONTENIDO
//               </p>
//             </ModalBody>
//           </>
//         )}
//       </ModalContent>
//     </Modal>
//   );
// };

// const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

// useEffect(() => {
//   if (open) {
//     onOpen();

//     // setTimeout(() => {
//     //   onClose();
//     // }, 5000);
//   }
// }, [open]);
