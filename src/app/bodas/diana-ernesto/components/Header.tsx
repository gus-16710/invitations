import { motion, useAnimate } from "framer-motion";
import { Bebas_Neue, Great_Vibes } from "next/font/google";
import { useState, useEffect } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Header() { 
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Nov 2, 2024 13:29:00");

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
        console.log("EXPIRED");
      }    

      setSeconds(seconds);
      setMinutes(minutes);
      setHours(hours);
      setDays(days);
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
    animateSeconds(scopeSeconds.current, { y: [20, 0], opacity: [0, 1] });
  }, [seconds, animateSeconds]);

  useEffect(() => {
    animateMinutes(scopeMinutes.current, { scale: [0, 1], opacity: [0, 1] });
  }, [minutes, animateSeconds]);

  useEffect(() => {
    animateHours(scopeHours.current, { scale: [0, 1], opacity: [0, 1] });
  }, [hours, animateHours]);

  useEffect(() => {
    animateDays(scopeDays.current, { scale: [0, 1], opacity: [0, 1] });
  }, [days, animateDays]);

  return (
    <section
      className="pb-10 bg-[url('/img/bodas/diana-ernesto/background-section-one.jpg')] bg-cover bg-center flex justify-end items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.h1
        className={`${bebas.className} p-3 text-5xl text-slate-100 custom-shadow`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        whileTap={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        Diana & Ernesto
      </motion.h1>
      <motion.h2
        className={`${greatVibes.className} p-3 text-6xl text-slate-100 custom-shadow`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        Nuestra Boda
      </motion.h2>
      <motion.div
        className={`${greatVibes.className} mb-10 pb-3 text-slate-100 custom-shadow count-down`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <div className="item">
          <div className="number text-3xl" ref={scopeDays}>{formatNumber(days)}</div>
          <div className="description text-1xl">Días</div>
        </div>
        <div className="item">
          <div className="number text-3xl" ref={scopeHours}>{formatNumber(hours)}</div>
          <div className="description text-1xl">Horas</div>
        </div>
        <div className="item">
          <div className="number text-3xl" ref={scopeMinutes}>{formatNumber(minutes)}</div>
          <div className="description text-1xl">Minutos</div>
        </div>
        <div className="item">
          <div className="number text-3xl" ref={scopeSeconds}>{formatNumber(seconds)}</div>
          <div className="description text-1xl">Segundos</div>
        </div>
      </motion.div>
    </section>
  );
}
