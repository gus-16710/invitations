import { Avatar, Image } from "@nextui-org/react";
import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const FlipAvatar: React.FC = () => {
  const [flipped, setFlipped] = useState(false); // Estado para alternar entre avatares
  const [rotation, setRotation] = useState(0); // Estado para controlar el valor de rotación
  //const rotateY = useMotionValue(0); // Para controlar la rotación suavemente

  // Función para manejar el click
  const handleClick = () => {
    setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna entre 0 y 180 grados
  };

  // Temporizador para que el componente gire automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev === 0 ? 180 : 0)); // Alterna la rotación cada 5 segundos
    }, 5000);

    return () => clearInterval(interval); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <motion.div
      style={{ perspective: 1000 }} // Añade perspectiva para un mejor efecto 3D
      animate={{ rotateY: rotation }} // Controla la rotación según el estado
      transition={{ duration: 0.8 }}
      onClick={handleClick} // Ejecuta el giro al hacer click
      onUpdate={(latest: { rotateY: number }) => {
        const currentRotateY = latest.rotateY;
        // Cambia la imagen cuando la rotación alcanza 90 grados
        if (currentRotateY >= 90 && currentRotateY < 180 && !flipped) {
          setFlipped(true); // Cambia el estado para mostrar el segundo Avatar
        } else if (currentRotateY < 90 && flipped) {
          setFlipped(false); // Regresa al primer Avatar si el giro vuelve a ser menor a 90 grados
        }
      }}
    >
      <motion.div
        initial="hidden" // Comienza en estado oculto
        whileInView="visible" // Aparece al entrar en pantalla
        variants={animationVariants} // Variantes de animación
        style={{ display: "flex", justifyContent: "center" }} // Estilo para centrar el contenido
      >
        {!flipped ? (
          <Avatar
            isBordered
            color="default"
            src="/img/escolar/telebachillerato-jacarandas/gallery-01.jpeg"
            className="h-36 w-36 my-5 shadow-lg"
          />
        ) : (
          <Avatar
            isBordered
            color="default"
            src="/img/escolar/telebachillerato-jacarandas/gallery-02.jpeg"
            className="h-36 w-36 my-5 shadow-lg"
          />
        )}
      </motion.div>
    </motion.div>
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
      <h2 className={`${oleo.className} text-zinc-50 text-6xl`}>Ceremonia</h2>
      <h2 className={`${nobile.className} text-zinc-50 mb-4`}>
        DE FIN DE CURSOS
      </h2>

      {/* <Image
        width={130}
        alt="NextUI hero Image"
        src="/img/escolar/primaria-francisco-madero/logo.png"
        className="mb-4"
      /> */}

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
