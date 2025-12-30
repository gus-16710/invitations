import React, { useEffect, useState } from "react";
import { allura, julius } from "./Fonts";
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
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/img/festejos/jyr/main2.jpg')",
        }}
      />
      {/* Elementos animados de fondo */}
      <FloatingParticles />
      
      {/* Contenedor de nombres con animación stagger */}
      <div
        className={`text-5xl text-slate-200 text-center z-10 flex gap-4 mb-5`}
        style={{ fontFamily: "candlescript" }}
      >
        <motion.p
          className="custom-shadow relative"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <span className="relative z-10">Jess</span>
        </motion.p>
        <motion.p
          className="custom-shadow"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          y
        </motion.p>
        <motion.p
          className="custom-shadow relative"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
        >
          <span className="relative z-10">Roberto</span>
        </motion.p>
      </div>

      {/* Contador con efectos mejorados */}
      <motion.div
        className={`${allura.className} pb-3 text-slate-100 custom-shadow flex items-center justify-center mt-3 z-10 backdrop-blur-[3px] bg-white/10 rounded-2xl p-6 border border-white/20 shadow-2xl relative overflow-hidden`}        
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        {/* Efecto de brillo en el contador */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
        className={`text-zinc-50 text-lg mt-5 z-10 italic ${julius.className}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
      >
        ¡Acompáñanos, Solo Faltan!
      </motion.p>
    </motion.div>
  );
}
