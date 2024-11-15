import { motion } from "framer-motion";
import { greatVibes } from "./Fonts";
import { photo } from "./Animations";

export default function Photo() {
  return (
    <section
      className="relative flex justify-center items-center flex-col"
      style={{
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Imagen de fondo desenfocada */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/bodas/citlali-daniel/family-2.jpg')",
          filter: "blur(15px)", // Efecto de desenfoque
          transform: "scale(1.1)", // Escala para evitar bordes semitransparentes
          zIndex: -1, // Detrás de todo
        }}
      ></div>

      <motion.h1
        className={`${greatVibes.className} text-5xl p-5 text-center text-zinc-50 custom-shadow`}
        variants={photo.text01}
        initial="hidden"
        whileInView="visible"
        style={{ lineHeight: 1.5 }}
      >
        La Familia Ramírez Viveros
      </motion.h1>

      {/* Imagen centrada con bordes redondeados */}
      <motion.div
        className="w-full flex justify-center items-center"
        variants={photo.photo}
        initial="hidden"
        whileInView="visible"
      >
        <img
          src="/img/bodas/citlali-daniel/family-2.jpg"
          alt="Family"
          className="w-3/4 h-auto rounded-2xl shadow-lg" // Ajusta el ancho y aplica bordes redondeados
          style={{
            borderRadius: "25px", // Bordes redondeados personalizados
            border: "5px solid white", // Agrega un borde blanco alrededor de la imagen
          }}
        />
      </motion.div>

      <motion.h1
        className={`${greatVibes.className} text-5xl p-5 mt-5 text-center text-zinc-50 custom-shadow`}
        variants={photo.text02}
        initial="hidden"
        whileInView="visible"
      >
        ¡Te esperamos!
      </motion.h1>
      <FloatingHearts />
    </section>
  );
}

const FloatingHearts = () => {
  const hearts = Array.from({ length: 10 }); // Número de corazones

  return (
    <div className="w-full h-full overflow-hidden absolute">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{ y: "100%", opacity: 0 }}
          animate={{
            y: [250, -20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 4 + 2, // Duración aleatoria
            repeat: Infinity,
            delay: Math.random(), // Retraso aleatorio
          }}
          style={{
            left: `${Math.random() * 100}%`, // Posición horizontal aleatoria
            fontSize: `${Math.random() * 2 + 1}rem`, // Tamaño aleatorio
            color: "pink", // Color del corazón
          }}
        >
          💗
        </motion.div>
      ))}
    </div>
  );
};
