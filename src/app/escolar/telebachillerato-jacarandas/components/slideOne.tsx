import "yet-another-react-lightbox/styles.css";

import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

// const animationVariants = {
//   hidden: { opacity: 0, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 1,
//       delay: 0.6,
//     },
//   },
// };

// const images = [
//   {
//     src: "/img/escolar/telebachillerato-jacarandas/gallery-01.jpeg",
//     width: 800,
//     height: 600,
//   },
// ];

// const images2 = [
//   {
//     src: "/img/escolar/telebachillerato-jacarandas/gallery-02.jpeg",
//     width: 800,
//     height: 600,
//   },
// ];

// const FlipAvatar: React.FC = () => {
//   const [index, setIndex] = useState(-1);
//   const [index2, setIndex2] = useState(-1);

//   const [flipped, setFlipped] = useState(false); // Estado para alternar entre avatares
//   const [rotation, setRotation] = useState(0); // Estado para controlar el valor de rotación
//   //const rotateY = useMotionValue(0); // Para controlar la rotación suavemente

//   // Función para manejar el click
//   const handleClick = () => {
//     setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna entre 0 y 180 grados
//   };

//   // Temporizador para que el componente gire automáticamente cada 5 segundos
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna la rotación cada 5 segundos
//     }, 5000);

//     return () => clearInterval(interval); // Limpia el temporizador al desmontar el componente
//   }, []);

//   return (
//     <motion.div
//       style={{ perspective: 1000 }} // Añade perspectiva para un mejor efecto 3D
//       animate={{ rotateY: rotation }} // Controla la rotación según el estado
//       transition={{ duration: 0.8 }}
//       onClick={handleClick} // Ejecuta el giro al hacer click
//       onUpdate={(latest: { rotateY: number }) => {
//         const currentRotateY = latest.rotateY;
//         // Cambia la imagen cuando la rotación alcanza 90 grados
//         if (currentRotateY >= 90 && currentRotateY < 180 && !flipped) {
//           setFlipped(true); // Cambia el estado para mostrar el segundo Avatar
//         } else if (currentRotateY < 90 && flipped) {
//           setFlipped(false); // Regresa al primer Avatar si el giro vuelve a ser menor a 90 grados
//         }
//       }}
//     >
//       <motion.div
//         initial="hidden" // Comienza en estado oculto
//         whileInView="visible" // Aparece al entrar en pantalla
//         variants={animationVariants} // Variantes de animación
//         style={{ display: "flex", justifyContent: "center" }} // Estilo para centrar el contenido
//       >
//         {!flipped ? (
//           <div className="h-36 w-36">
//             <PhotoAlbum
//               layout="masonry"
//               photos={images}
//               onClick={({ index: current }) => setIndex(current)}
//               renderPhoto={NextJsImage}
//               columns={1}
//             />
//             <Lightbox
//               index={index}
//               slides={images}
//               open={index >= 0}
//               close={() => setIndex(-1)}
//             />
//           </div>
//         ) : (          
//           <div className="h-36 w-36">
//             <PhotoAlbum
//               layout="masonry"
//               photos={images2}
//               onClick={({ index: current }) => setIndex2(current)}
//               renderPhoto={NextJsImage}
//               columns={1}
//             />
//             <Lightbox
//               index={index2}
//               slides={images2}
//               open={index2 >= 0}
//               close={() => setIndex2(-1)}
//             />
//           </div>
//         )}
//       </motion.div>
//     </motion.div>
//   );
// };

const animationVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.6,
    },
  },
};

const images = [
  {
    src: "/img/escolar/telebachillerato-jacarandas/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/escolar/telebachillerato-jacarandas/gallery-02.jpg",
    width: 800,
    height: 600,
  },
];

const FlipAvatar: React.FC = () => {
  const [index, setIndex] = useState(-1);
  const [flipped, setFlipped] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const handleClick = () => {
    setIsAutoRotating(false); // Detener la rotación automática al interactuar manualmente
    setRotation((prev) => (prev === 0 ? 180 : 0));
  };

  // Temporizador para rotación automática
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setRotation((prev) => (prev === 0 ? 180 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Efecto para reiniciar la rotación automática después de 10 segundos sin interacción
  useEffect(() => {
    if (!isAutoRotating) {
      const timeout = setTimeout(() => {
        setIsAutoRotating(true);
      }, 10000);
      return () => clearTimeout(timeout);
    }
  }, [isAutoRotating]);

  return (
    <>
      <motion.div
        style={{ perspective: 1000 }}
        animate={{ rotateY: rotation }}
        transition={{ duration: 0.8 }}
        onClick={handleClick}
        onUpdate={(latest: { rotateY: number }) => {
          const currentRotateY = latest.rotateY;
          if (currentRotateY >= 90 && currentRotateY < 180 && !flipped) {
            setFlipped(true);
          } else if (currentRotateY < 90 && flipped) {
            setFlipped(false);
          }
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="h-40 w-40 mb-5">
            <PhotoAlbum
              layout="masonry"
              photos={[images[flipped ? 1 : 0]]}
              onClick={() => setIndex(flipped ? 1 : 0)}
              renderPhoto={NextJsImage}
              columns={1}
            />
          </div>
        </motion.div>
      </motion.div>

      <Lightbox
        index={index >= 0 ? 0 : -1} // Siempre mostrar el primer slide ya que solo mostramos uno a la vez
        slides={[images[index]]} // Solo pasar la imagen actual
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
};

export default function SlideOne() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center relative custom-shadow"
      style={{ height: "100svh" }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <h2 className={`${oleo.className} text-zinc-50 text-6xl custom-shadow`}>Ceremonia</h2>
      <h2 className={`${nobile.className} text-zinc-50 mb-4`}>
        DE FIN DE CURSOS
      </h2>

      <FlipAvatar />

      <h2 className={`${nobile.className} text-zinc-50 text-lg`}>
        Telebachillerato
      </h2>
      <h1 className={`${ovo.className} text-zinc-50 text-4xl`}>"Jacarandas"</h1>
      <h2 className={`${nobile.className} text-zinc-50 mb-5`}>30ETH1098D</h2>

      <p
        className={`${ovo.className} text-zinc-50 text-4xl px-2 tracking-widest`}
      >
        2022-2025
      </p>

      <h2
        className={`${nobile.className} text-zinc-50 text-lg mt-5 text-center`}
      >
        Coordinador: Mtro Williams Lagunes Amaya
      </h2>
    </motion.section>
  );
}
