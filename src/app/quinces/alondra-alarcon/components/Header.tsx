import React from 'react';
import { motion } from 'framer-motion';
import { dancing, lobster, playFair } from './Fonts';
import { header } from './Animations';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

// Nuevas animaciones
const decorativeLine = {
  hidden: { scaleX: 0 },
  visible: { 
    scaleX: 1, 
    transition: { duration: 1, delay: 1.5, ease: "easeOut" }
  }
};

const sparkle = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingParticle = (delay: any) => ({
  animate: {
    y: [-20, 20, -20],
    x: [-10, 10, -10],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 4,
      delay: delay,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
});

export default function Header() {
  const text = "Alondra";

  return (
    <section
      className="flex flex-col justify-center items-center relative overflow-hidden z-10 min-h-[100svh]"      
    >
      {/* Patrón de fondo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #d97706 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Partículas flotantes decorativas */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${30 + (i % 2) * 20}%`,
          }}
          variants={floatingParticle(i * 0.5)}
          animate="animate"
        />
      ))}

      <motion.h2
        className={`${playFair.className} text-2xl flex items-center text-yellow-600 z-20 mt-2 tracking-wider`}
        variants={header.text02}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-5xl mx-2">XV</span> AÑOS
      </motion.h2>

      {/* Línea decorativa superior */}
      <motion.div
        className="w-64 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mt-4"
        variants={decorativeLine}
        initial="hidden"
        whileInView="visible"
      />

      <div className="relative w-full h-96 flex items-center justify-center overflow-visible mt-4">
        {/* Marco circular con rotación */}
        <motion.div
          className="absolute w-full h-full opacity-80"
          style={{
            backgroundImage: "url('/img/quinces/alondra-alarcon/round-frame-5.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
          }}
          variants={header.roundFrame}
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />

        {/* Resplandor detrás del nombre */}
        <motion.div
          className="absolute w-80 h-80 bg-yellow-100/25 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Nombre con efecto de degradado */}
        <motion.h1
          className={`${dancing.className} z-10 text-center text-8xl h-32 flex text-yellow-600`}         
          variants={list}
          initial="hidden"
          whileInView="visible"
        >
          {text.split("").map((letter, index) => (
            <motion.span 
              key={index} 
              variants={item}
              whileHover={{ 
                scale: 1.2, 
                rotate: [-5, 5, -5],
                transition: { duration: 0.3 }
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Estrellas decorativas */}
        <motion.div
          className="absolute left-1/4 top-1/4 text-yellow-500 text-2xl"
          variants={sparkle}
          animate="animate"
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute right-1/4 top-1/4 text-yellow-500 text-2xl"
          variants={sparkle}
          animate="animate"
          style={{ animationDelay: '1s' }}
        >
          ✦
        </motion.div>
      </div>

      {/* Línea decorativa inferior */}
      <motion.div
        className="w-64 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mb-4"
        variants={decorativeLine}
        initial="hidden"
        whileInView="visible"
      />

      <div className={`${playFair.className} flex items-center flex-col mt-5 text-yellow-800`}>
        <motion.span
          className="px-2 pb-2 text-base tracking-widest"
          variants={header.month}
          initial="hidden"
          whileInView="visible"
        >
          ✿ ENERO ✿
        </motion.span>
        
        <div className="flex items-center gap-2">        
          
          <p className="flex items-center">
            <motion.span
              className="border-y border-y-yellow-700 py-2 px-3 text-center text-yellow-800 text-base"
              style={{ letterSpacing: "2px" }}
              variants={header.day}
              initial="hidden"
              whileInView="visible"
            >
              SÁBADO
            </motion.span>
            <motion.span
              className="text-yellow-700 text-6xl px-4 pb-5 font-bold"
              variants={header.dayNumber}
              initial="hidden"
              whileInView="visible"
              style={{
                textShadow: '0 2px 10px rgba(217, 119, 6, 0.3)'
              }}
            >
              10
            </motion.span>
            <motion.span
              className="border-y border-y-amber-800 py-2 px-3 text-center text-yellow-700 text-base"
              style={{ letterSpacing: "2px" }}
              variants={header.time}
              initial="hidden"
              whileInView="visible"
            >
              12:00 HRS
            </motion.span>
          </p>
       
        </div>

        <motion.p
          className={`${playFair.className} text-3xl font-bold tracking-wider`}
          style={{
            color: '#d97706',
            textShadow: '0 2px 8px rgba(217, 119, 6, 0.2)'
          }}
          variants={header.year}
          initial="hidden"
          whileInView="visible"
        >
          • 2026 •
        </motion.p>
      </div>
    </section>
  );
}