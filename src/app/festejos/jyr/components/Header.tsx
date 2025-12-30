// import React, { useEffect, useState } from "react";
// import { allura } from "./Fonts";
// import { useAnimate, motion } from "framer-motion";

// export function formatNumber(number: number) {
//   return number < 10 ? `0${number}` : number;
// }

// // Definimos las animaciones
// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// const fadeInScale = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: "easeOut",
//     },
//   },
// };

// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3,
//     },
//   },
// };

// const nameItem = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.22, 1, 0.36, 1],
//     },
//   },
// };

// export default function Header() {
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [days, setDays] = useState(0);

//   const countDownClock = () => {
//     const countDownDate: any = new Date("Dec 19, 2026 13:00:00");

//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = countDownDate - now;

//       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       const hours = Math.floor(
//         (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//       );
//       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       if (distance < 0) {
//         clearInterval(interval);
//         setSeconds(0);
//         setMinutes(0);
//         setHours(0);
//         setDays(0);
//       } else {
//         setSeconds(seconds);
//         setMinutes(minutes);
//         setHours(hours);
//         setDays(days);
//       }
//     }, 1000);
//   };

//   useEffect(() => {
//     countDownClock();
//   }, []);

//   const [scopeSeconds, animateSeconds] = useAnimate();
//   const [scopeMinutes, animateMinutes] = useAnimate();
//   const [scopeHours, animateHours] = useAnimate();
//   const [scopeDays, animateDays] = useAnimate();

//   useEffect(() => {
//     animateSeconds(
//       scopeSeconds.current,
//       { y: [20, 0], opacity: [0, 1] },
//       { ease: "easeInOut", type: "keyframes" }
//     );
//   }, [seconds, animateSeconds]);

//   useEffect(() => {
//     animateMinutes(
//       scopeMinutes.current,
//       { y: [20, 0], opacity: [0, 1] },
//       { ease: "easeInOut", type: "keyframes" }
//     );
//   }, [minutes, animateSeconds]);

//   useEffect(() => {
//     animateHours(
//       scopeHours.current,
//       { y: [20, 0], opacity: [0, 1] },
//       { ease: "easeInOut", type: "keyframes" }
//     );
//   }, [hours, animateHours]);

//   useEffect(() => {
//     animateDays(
//       scopeDays.current,
//       { y: [20, 0], opacity: [0, 1] },
//       { ease: "easeInOut", type: "keyframes" }
//     );
//   }, [days, animateDays]);

//   return (
//     <motion.div
//       className="pb-10 bg-[url('/img/festejos/jyr/main.jpg')] bg-cover bg-center flex justify-end items-center flex-col relative"
//       style={{ height: "100svh" }}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//       variants={fadeInUp}
//     >
//       <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/30 to-transparent"></div>

//       {/* Contenedor de nombres con animación stagger */}
//       <motion.div
//         className={`text-5xl text-slate-200 text-center z-10 flex gap-4 mb-5`}
//         style={{ fontFamily: "candlescript" }}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         variants={staggerContainer}
//       >
//         <motion.p variants={nameItem} className="custom-shadow">
//           Jess
//         </motion.p>
//         <motion.p
//           variants={nameItem}
//           className="custom-shadow"
//           initial={{ opacity: 0, scale: 0.5 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           y
//         </motion.p>
//         <motion.p variants={nameItem} className="custom-shadow">
//           Roberto
//         </motion.p>
//       </motion.div>

//       <motion.div
//         className={`${allura.className} pb-3 text-slate-100 custom-shadow flex items-center justify-center mt-3 z-10 backdrop-blur-[2px] bg-white/5 rounded-2xl p-4 border border-white/10`}
//         initial="hidden"
//         whileInView="visible"
//       >
//         <div className="text-center m-0">
//           <div className="my-0 mx-3 p-2 text-2xl w-12" ref={scopeDays}>
//             {formatNumber(days)}
//           </div>
//           <div className="my-0 mx-3 text-center text-xl">Días</div>
//         </div>
//         <div className="text-center m-0">
//           <div className="my-0 mx-3 p-2 text-2xl w-12" ref={scopeHours}>
//             {formatNumber(hours)}
//           </div>
//           <div className="my-0 mx-3 text-center text-xl">Horas</div>
//         </div>
//         <div className="text-center m-0">
//           <div className="my-0 mx-3 p-2 text-2xl w-12" ref={scopeMinutes}>
//             {formatNumber(minutes)}
//           </div>
//           <div className="my-0 mx-3 text-center text-xl">Min</div>
//         </div>
//         <div className="text-center m-0">
//           <div className="my-0 mx-3 p-2 text-2xl w-12" ref={scopeSeconds}>
//             {formatNumber(seconds)}
//           </div>
//           <div className="my-0 mx-3 text-center text-xl">Seg</div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

import React, { useEffect, useState } from "react";
import { allura, great, julius, quickSand, rye } from "./Fonts";
import { useAnimate, motion } from "framer-motion";

export function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

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

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const nameItem = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
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

// Componente de efecto de luz brillante
const ShiningLights = () => {
  const lights = [
    {
      id: 1,
      x: "10%",
      y: "20%",
      size: "400px",
      color: "rgba(255,255,255,0.1)",
    },
    {
      id: 2,
      x: "90%",
      y: "80%",
      size: "300px",
      color: "rgba(255,255,255,0.08)",
    },
    {
      id: 3,
      x: "50%",
      y: "60%",
      size: "350px",
      color: "rgba(255,255,255,0.06)",
    },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {lights.map((light) => (
        <motion.div
          key={light.id}
          className="absolute rounded-full"
          style={{
            width: light.size,
            height: light.size,
            left: light.x,
            top: light.y,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${light.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: light.id * 4,
          }}
        />
      ))}
    </div>
  );
};

// Componente de líneas elegantes animadas
const ElegantLines = () => {
  const lines = [
    { id: 1, angle: 15, length: "40%", thickness: "1.5px" },
    { id: 2, angle: 75, length: "35%", thickness: "1px" },
    { id: 3, angle: 135, length: "45%", thickness: "1px" },
  ];

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line.id}
          className="absolute"
          style={{
            width: line.length,
            height: line.thickness,
            left: "50%",
            top: "50%",
            transformOrigin: "0% 50%",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            boxShadow: "0 0 10px rgba(255,255,255,0.3)",
          }}
          initial={{
            transform: `translate(-50%, -50%) rotate(${line.angle}deg) scaleX(0)`,
            opacity: 0,
          }}
          animate={{
            transform: `translate(-50%, -50%) rotate(${line.angle}deg) scaleX(1)`,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: line.id * 2,
          }}
        />
      ))}
    </div>
  );
};

// Componente de destellos aleatorios
const RandomFlashes = () => {
  const flashes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: `${Math.random() * 30 + 10}px`,
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {flashes.map((flash) => (
        <motion.div
          key={flash.id}
          className="absolute rounded-full bg-white"
          style={{
            width: flash.size,
            height: flash.size,
            left: flash.x,
            top: flash.y,
            transform: "translate(-50%, -50%)",
            filter: "blur(10px)",
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Header() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Dec 19, 2026 13:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
      } else {
        setSeconds(seconds);
        setMinutes(minutes);
        setHours(hours);
        setDays(days);
      }
    }, 1000);
  };

  useEffect(() => {
    countDownClock();
  }, []);

  const [scopeSeconds, animateSeconds] = useAnimate();
  const [scopeMinutes, animateMinutes] = useAnimate();
  const [scopeHours, animateHours] = useAnimate();
  const [scopeDays, animateDays] = useAnimate();

  useEffect(() => {
    animateSeconds(
      scopeSeconds.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [seconds, animateSeconds]);

  useEffect(() => {
    animateMinutes(
      scopeMinutes.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [minutes, animateSeconds]);

  useEffect(() => {
    animateHours(
      scopeHours.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [hours, animateHours]);

  useEffect(() => {
    animateDays(
      scopeDays.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" }
    );
  }, [days, animateDays]);

  return (
    <motion.div
      className="pb-10 bg-[url('/img/festejos/jyr/main.jpg')] bg-cover bg-center flex justify-end items-center flex-col relative overflow-hidden"
      style={{ height: "100svh" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      {/* Capa de fondo animada */}
      <div className="absolute inset-0 z-0">
        {/* Efecto de gradiente animado */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
              "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
              "linear-gradient(45deg, rgba(255,255,255,0.02) 0%, transparent 50%, rgba(255,255,255,0.02) 100%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Elementos animados de fondo */}
      <FloatingParticles />
      <ShiningLights />
      <ElegantLines />
      <RandomFlashes />

      {/* Overlay de gradiente mejorado con animación sutil */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Contenedor de nombres con animación stagger */}
      <motion.div
        className={`text-5xl text-slate-200 text-center z-10 flex gap-4 mb-5`}
        style={{ fontFamily: "candlescript" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
      >
        <motion.p
          variants={nameItem}
          className="custom-shadow relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="relative z-10">Jess</span>
          <motion.span
            className="absolute inset-0 bg-white/10 rounded-lg -z-10"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.p>
        <motion.p
          variants={nameItem}
          className="custom-shadow"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ rotate: 5 }}
        >
          y
        </motion.p>
        <motion.p
          variants={nameItem}
          className="custom-shadow relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="relative z-10">Roberto</span>
          <motion.span
            className="absolute inset-0 bg-white/10 rounded-lg -z-10"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.p>
      </motion.div>

      {/* Contador con efectos mejorados */}
      <motion.div
        className={`${allura.className} pb-3 text-slate-100 custom-shadow flex items-center justify-center mt-3 z-10 backdrop-blur-[3px] bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5,
          },
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        {/* Efecto de brillo en el contador */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="text-center m-0 relative z-10">
          <div className="my-0 mx-3 p-2 text-2xl w-14 " ref={scopeDays}>
            {formatNumber(days)}
          </div>
          <div className="my-0 mx-3 text-center text-xl opacity-90">Días</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="text-4xl opacity-70 mx-2">:</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="my-0 mx-3 p-2 text-2xl w-14 " ref={scopeHours}>
            {formatNumber(hours)}
          </div>
          <div className="my-0 mx-3 text-center text-xl opacity-90">Horas</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="text-4xl opacity-70 mx-2">:</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="my-0 mx-3 p-2 text-2xl w-14 " ref={scopeMinutes}>
            {formatNumber(minutes)}
          </div>
          <div className="my-0 mx-3 text-center text-xl opacity-90">Min</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="text-4xl opacity-70 mx-2">:</div>
        </div>

        <div className="text-center m-0 relative z-10">
          <div className="my-0 mx-3 p-2 text-2xl w-14 " ref={scopeSeconds}>
            {formatNumber(seconds)}
          </div>
          <div className="my-0 mx-3 text-center text-xl opacity-90">Seg</div>
        </div>
      </motion.div>

      {/* Texto decorativo adicional */}
      <motion.p
        className={`text-white/70 text-lg mt-5 z-10 italic ${julius.className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: true }}
      >
        ¡Acompáñanos, Solo Faltan!
      </motion.p>
    </motion.div>
  );
}
