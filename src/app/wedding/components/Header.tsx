import { motion } from "framer-motion";
import { Bebas_Neue, Great_Vibes } from "next/font/google";
import { useState, useEffect } from "react";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400" });

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Header() {
  const [count, setCount] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

      setCount({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);
  };

  useEffect(() => {
    countDownClock();
  }, []);

  return (
    <section className="pb-10 h-screen bg-[url('/img/wedding/background-section-one.jpg')] bg-cover bg-center flex justify-end items-center flex-col">
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
          <div className="number text-3xl">{formatNumber(count.days)}</div>
          <div className="description text-1xl">Días</div>
        </div>
        <div className="item">
          <div className="number text-3xl">{formatNumber(count.hours)}</div>
          <div className="description text-1xl">Horas</div>
        </div>
        <div className="item">
          <div className="number text-3xl">{formatNumber(count.minutes)}</div>
          <div className="description text-1xl">Minutos</div>
        </div>
        <div className="item">
          <div className="number text-3xl">{formatNumber(count.seconds)}</div>
          <div className="description text-1xl">Segundos</div>
        </div>
      </motion.div>    
    </section>
  );
}

