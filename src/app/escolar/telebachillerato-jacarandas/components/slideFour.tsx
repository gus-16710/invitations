// import { motion } from "framer-motion";
// import { cormorant } from "./Fonts";

// const list = {
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
//   hidden: {
//     opacity: 0,
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 50, rotate: -10 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: { type: "spring", damping: 12, stiffness: 200 },
//   },
// };

// export default function SlideFour() {  

//   const text = `Hoy no decimos adiós, sino hasta pronto. Llévense en el corazón los recuerdos, las risas y todo lo aprendido en estos años. La Escuela Primaria Francisco I. Madero siempre será su casa. ¡Vuelen alto y sigan soñando en grande!`;

//   return (
//     <section
//       className="flex flex-col justify-center items-center relative"
//       style={{ height: "100svh" }}
//     >
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source
//           src="/img/escolar/primaria-francisco-madero/video-background.mp4"
//           type="video/mp4"
//         />
//         Tu navegador no soporta videos HTML5.
//       </video>

//       <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/80 to-transparent"></div>

//       <motion.p
//         className={`${cormorant.className} text-zinc-50 text-2xl mx-10 text-center z-10 max-w-xl custom-shadow`}
//         variants={list}
//         initial="hidden"
//         whileInView="visible"
//       >
//         {text.split("").map((letter, index) => {
//           return (
//             <motion.span key={index} variants={item}>
//               {letter === "_" ? <>&nbsp;</> : letter}
//             </motion.span>
//           );
//         })}
//       </motion.p>            
//     </section>
//   );
// }

import { motion } from "framer-motion";
import { cormorant } from "./Fonts";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2, // Aumenté un poco el stagger para palabras
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 30 }, // Reduje la animación para hacerla más sutil
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      damping: 15, 
      stiffness: 150 
    },
  },
};

export default function SlideFour() {  
  const text = `Hoy no es una despedida, es el comienzo de un nuevo capítulo. Llévense consigo las enseñanzas, amistades y momentos que marcaron su paso por estas aulas. El Telebachillerato Jacarandas siempre será parte de ustedes, su segunda casa. ¡Sigan adelante con firmeza, sueños grandes y el corazón lleno de esperanza!`;

  return (
    <section
      className="flex flex-col justify-center items-center relative"
      style={{ height: "100svh" }}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/escolar/telebachillerato-jacarandas/video_background.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/100 to-transparent"></div>

      <motion.div
        className={`${cormorant.className} text-zinc-50 text-2xl mx-10 text-center z-10 max-w-xl custom-shadow`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text.split(" ").map((word, index) => (
          <motion.span 
            key={index} 
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>            
    </section>
  );
}