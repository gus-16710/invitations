import "yet-another-react-lightbox/styles.css";

import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./NextJsImage";
import Lightbox from "yet-another-react-lightbox";

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
      <h2 className={`${nobile.className} text-zinc-50 mb-5`}>CLAVE: 30ETH1098D</h2>

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
