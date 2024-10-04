import { motion } from "framer-motion";
import { greatVibes, playFair } from "./Fonts";

const itinerary = [
  {
    time: "13:00 Hrs",
    event: "Ceremonia Religiosa",
  },
  {
    time: "15:30 Hrs",
    event: "Comida",
  },
  {
    time: "16:00 Hrs",
    event: "Boda Civil",
  },
  {
    time: "20:00 Hrs",
    event: "Baile",
  },
  {
    time: "03:00 Hrs",
    event: "Termino del Evento",
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const element = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

// export default function Itinerary() {
//   return (
//     <section
//       id="section-four"
//       className="flex justify-center items-center flex-col bg-[url('/img/bodas/ana-carlos/itinerary.jpg')] bg-cover bg-center"
//       style={{ height: "100svh" }}
//     >
//       <motion.h1
//         className={`${greatVibes.className} text-5xl drop-shadow mb-10 text-zinc-50 custom-shadow`}
//         initial={{ y: -100, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 1, delay: 0.3 }}
//       >
//         Itinerario
//       </motion.h1>

//       <motion.ol
//         className="relative border-s border-gray-300 dark:border-gray-700"
//         initial="hidden"
//         whileInView="visible"
//         variants={list}
//       >
//         {itinerary.map((item, index) => (
//           <div key={index}>
//             <li className="mb-7 ms-4">
//               <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//               <motion.div variants={element}>
//                 <time className="mb-1 text-sm font-normal leading-none text-zinc-50 custom-shadow">
//                   {item.time}
//                 </time>
//                 <h3
//                   className={`${playFair.className} text-base font-semibold text-zinc-50 custom-shadow`}
//                 >
//                   {item.event}
//                 </h3>
//               </motion.div>
//             </li>
//           </div>
//         ))}
//       </motion.ol>
//     </section>
//   );
// }

// export default function Itinerary() {
//   return (
//     <section
//       id="section-four"
//       className="relative flex justify-center items-center flex-col bg-cover bg-center"
//       style={{ height: "100svh" }}
//     >
//       {/* Video de fondo */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="/img/bodas/ana-carlos/video.mp4" type="video/mp4" />
//         Tu navegador no soporta videos HTML5.
//       </video>

//       {/* Contenido sobre el video */}
//       <div className="relative z-10">
//         <motion.h1
//           className={`${greatVibes.className} text-5xl drop-shadow mb-10 text-zinc-50 custom-shadow`}
//           initial={{ y: -100, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//         >
//           Itinerario
//         </motion.h1>

//         <motion.ol
//           className="relative border-s border-gray-300 dark:border-gray-700"
//           initial="hidden"
//           whileInView="visible"
//           variants={list}
//         >
//           {itinerary.map((item, index) => (
//             <div key={index}>
//               <li className="mb-7 ms-4">
//                 <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
//                 <motion.div variants={element}>
//                   <time className="mb-1 text-sm font-normal leading-none text-zinc-50 custom-shadow">
//                     {item.time}
//                   </time>
//                   <h3
//                     className={`${playFair.className} text-base font-semibold text-zinc-50 custom-shadow`}
//                   >
//                     {item.event}
//                   </h3>
//                 </motion.div>
//               </li>
//             </div>
//           ))}
//         </motion.ol>
//       </div>
//     </section>
//   );
// }

export default function Itinerary() {
  return (
    <section
      id="section-four"
      className="relative flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/bodas/ana-carlos/itinerary.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Filtro oscuro */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 z-5"></div>

      {/* Contenido sobre el video */}
      <div className="relative z-10">
        <motion.h1
          className={`${greatVibes.className} text-5xl drop-shadow mb-10 text-zinc-50 custom-shadow`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Itinerario
        </motion.h1>

        <motion.ol
          className="relative border-s border-gray-300 dark:border-gray-700"
          initial="hidden"
          whileInView="visible"
          variants={list}
        >
          {itinerary.map((item, index) => (
            <div key={index}>
              <li className="mb-7 ms-4">
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <motion.div variants={element}>
                  <time className="mb-1 text-sm font-normal leading-none text-zinc-50 custom-shadow">
                    {item.time}
                  </time>
                  <h3
                    className={`${playFair.className} text-base font-semibold text-zinc-50 custom-shadow`}
                  >
                    {item.event}
                  </h3>
                </motion.div>
              </li>
            </div>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}

