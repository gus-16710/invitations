import React, { useEffect, useState } from "react";
import { allura, julius } from "./Fonts";
import { useAnimate, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

// Definimos las animaciones
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Componente de partículas flotantes VISIBLES
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3, // Más grandes para ser visibles
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/30 shadow-lg"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: "-20px",
            filter: "blur(1px)",
          }}
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: ["0vh", "120vh"],
            x: [0, Math.random() * 200 - 100],
            opacity: [0, 0.8, 0],
            rotate: [0, 180],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default function Header() {
    
  return (
    <motion.div
      className="pb-10 flex justify-end items-center flex-col relative overflow-hidden"
      style={{ height: "100svh" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/img/festejos/jyr/main3.jpg')",
        }}
      />
      {/* Elementos animados de fondo */}
      <FloatingParticles />

      {/* Contenedor de nombres con animación stagger */}
      <div
        className={`text-6xl text-slate-200 text-center flex gap-4  relative z-10`}
        style={{ fontFamily: "candlescript" }}
      >
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}          
        >
          Jess
        </motion.p>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          y
        </motion.p>
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          Rafa
        </motion.p>
      </div>

      {/* Texto decorativo adicional */}
      <motion.p
        className={`text-zinc-50 text-lg mt-10 z-10 italic ${julius.className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
      >
        ¡Acompáñanos!
      </motion.p>

      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="my-5"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>
    </motion.div>
  );
}
