import { motion, useAnimate } from "framer-motion";
import { Great_Vibes, Titillium_Web } from "next/font/google";
import { allura } from "./Fonts";
import { useEffect, useState } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });

export function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Counter() {
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
      { y: [10, 0], opacity: [0, 1] },
      { ease: "easeInOut", duration: 0.5 }
    );
  }, [seconds, animateSeconds]);

  useEffect(() => {
    animateMinutes(
      scopeMinutes.current,
      { y: [10, 0], opacity: [0, 1] },
      { ease: "easeInOut", duration: 0.5 }
    );
  }, [minutes, animateMinutes]);

  useEffect(() => {
    animateHours(
      scopeHours.current,
      { y: [10, 0], opacity: [0, 1] },
      { ease: "easeInOut", duration: 0.5 }
    );
  }, [hours, animateHours]);

  useEffect(() => {
    animateDays(
      scopeDays.current,
      { y: [10, 0], opacity: [0, 1] },
      { ease: "easeInOut", duration: 0.5 }
    );
  }, [days, animateDays]);

  return (
    <section
      className="relative flex justify-center items-center flex-col overflow-hidden"
      style={{ height: "100svh" }}
    >     

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl px-4">
        <motion.h1
          className={`${greatVibes.className} text-4xl md:text-5xl lg:text-6xl text-gray-800 text-center mb-8 md:mb-12 tracking-wide`}
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          La cuenta regresiva<br />ha comenzado
        </motion.h1>

        {/* Contador minimalista - tamaño ajustado */}
        <motion.div
          className="grid grid-cols-2 md:flex items-center justify-center gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        >
          {/* Días */}
          <div className="relative group">
            <motion.div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <div className="relative p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
              <div
                ref={scopeDays}
                className={`${allura.className} text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight`}
              >
                {formatNumber(days)}
              </div>
              <div className={`${notoSans.className} text-sm md:text-base text-gray-600 uppercase tracking-widest`}>
                Días
              </div>
            </div>
          </div>

          {/* Separador para desktop */}
          <motion.div
            className={`${allura.className} text-3xl md:text-4xl text-gray-300 hidden md:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            :
          </motion.div>

          {/* Horas */}
          <div className="relative group">
            <motion.div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            />
            <div className="relative p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
              <div
                ref={scopeHours}
                className={`${allura.className} text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight`}
              >
                {formatNumber(hours)}
              </div>
              <div className={`${notoSans.className} text-sm md:text-base text-gray-600 uppercase tracking-widest`}>
                Horas
              </div>
            </div>
          </div>

          {/* Separador para desktop */}
          <motion.div
            className={`${allura.className} text-3xl md:text-4xl text-gray-300 hidden md:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            :
          </motion.div>

          {/* Minutos */}
          <div className="relative group">
            <motion.div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <div className="relative p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
              <div
                ref={scopeMinutes}
                className={`${allura.className} text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight`}
              >
                {formatNumber(minutes)}
              </div>
              <div className={`${notoSans.className} text-sm md:text-base text-gray-600 uppercase tracking-widest`}>
                Minutos
              </div>
            </div>
          </div>

          {/* Separador para desktop */}
          <motion.div
            className={`${allura.className} text-3xl md:text-4xl text-gray-300 hidden md:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            :
          </motion.div>

          {/* Segundos */}
          <div className="relative group">
            <motion.div
              className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm group-hover:shadow-md transition-all duration-300 border border-gray-100"
              whileHover={{ scale: 1.02 }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            />
            <div className="relative p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
              <div
                ref={scopeSeconds}
                className={`${allura.className} text-2xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2 tracking-tight`}
              >
                {formatNumber(seconds)}
              </div>
              <div className={`${notoSans.className} text-sm md:text-base text-gray-600 uppercase tracking-widest`}>
                Segundos
              </div>
            </div>
          </div>
        </motion.div>

        {/* Separador para móvil entre las dos columnas */}
        <motion.div
          className="md:hidden w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* Fecha objetivo */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <p className={`${notoSans.className} text-gray-600 text-sm md:text-base mb-2 tracking-wider`}>
            Hacia una nueva aventura
          </p>
          <p className={`${greatVibes.className} text-xl md:text-2xl lg:text-3xl text-gray-800`}>
            19 • Diciembre • 2026
          </p>
        </motion.div>

        {/* Línea decorativa inferior */}
        <motion.div
          className="mx-auto mt-12 md:mt-16 w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        />
      </div>     
    </section>
  );
}