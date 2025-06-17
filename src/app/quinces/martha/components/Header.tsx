import { useEffect, useState } from "react";
import { dancing, great, lato, quickSand, teko } from "./Fonts";
import { header } from "./Animations";
import { motion, useAnimate } from "framer-motion";
import "./Header.css";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0, 
  },
};

const item = { 
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", damping: 12, stiffness: 200 },
  },
};

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Header() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const text01 = "Martha_Itzel";

  const countDownClock = () => {
    const countDownDate: any = new Date("Jun 28, 2025 16:00:00");

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
    animateSeconds(scopeSeconds.current, { scale: [0, 1],  opacity: [0, 1] });
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
    <section className="h-screen flex flex-col justify-center items-center relative bg-[url('/img/quinces/martha/background-header-4.jpg')] bg-center bg-cover overflow-clip">
      <p
        className="text-zinc-50 flex items-center z-20 gap-1"
        style={{
          textShadow:
            "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        }}
      >
        <motion.label
          className={`text-2xl ${dancing.className}`}
          variants={header.text01}
          initial="hidden"
          whileInView="visible"
        >
          Mis
        </motion.label>
        <motion.label
          className={`text-6xl ${great.className}`}
          variants={header.text02}
          initial="hidden"
          whileInView="visible"
        >
          XV
        </motion.label>
        <motion.label
          className={`text-2xl ${dancing.className}`}
          variants={header.text01}
          initial="hidden"
          whileInView="visible"
        >
          Años
        </motion.label>
      </p>
      <motion.h1
        className={`text-zinc-100 text-6xl ${dancing.className} flex mt-5`}
        variants={list}
        initial="hidden"
        whileInView="visible"
        style={{
          textShadow:
            "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        }}
      >
        {text01.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter === "_" ? <>&nbsp;</> : letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.div
        className="w-72 bg-zinc-100 mt-5 shadow"
        style={{ height: "3px" }}
        variants={header.borderBottom}
        initial="hidden"
        whileInView="visible"
      />
      <motion.p
        className={`${lato.className} text-zinc-50 mt-5 text-lg`}
        style={{
          textShadow:
            "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        }}
        variants={header.text03}
        initial="hidden"
        whileInView="visible"
      >
        28 DE JUNIO DEL 2025
      </motion.p>

      <div
        className={`${teko.className} my-5 flex justify-evenly text-5xl text-zinc-50 w-full max-w-md`}
        style={{
          textShadow:
            "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        }}
      >
        <motion.label
          className="flex flex-col items-center"
          variants={header.days}
          initial="hidden"
          whileInView="visible"
        >
          <span ref={scopeDays}>{formatNumber(days)}</span>
          <span className="text-2xl">Días</span>
        </motion.label>
        <motion.label
          variants={header.timer}
          initial="hidden"
          whileInView="visible"
        >
          :
        </motion.label>
        <motion.label
          className="flex flex-col items-center"
          variants={header.hours}
          initial="hidden"
          whileInView="visible"
        >
          <span ref={scopeHours}>{formatNumber(hours)}</span>
          <span className="text-2xl">Horas</span>
        </motion.label>
        <motion.label
          variants={header.timer}
          initial="hidden"
          whileInView="visible"
        >
          :
        </motion.label>
        <motion.label
          className="flex flex-col items-center"
          variants={header.minutes}
          initial="hidden"
          whileInView="visible"
        >
          <span ref={scopeMinutes}>{formatNumber(minutes)}</span>
          <span className="text-2xl">Min</span>
        </motion.label>
        <motion.label
          variants={header.timer}
          initial="hidden"
          whileInView="visible"
        >
          :
        </motion.label>
        <motion.label
          className="flex flex-col items-center"
          variants={header.seconds}
          initial="hidden"
          whileInView="visible"
        >
          <span ref={scopeSeconds}>{formatNumber(seconds)}</span>
          <span className="text-2xl">Seg</span>
        </motion.label>
      </div>
      <motion.p
        className={`${quickSand.className} text-pink-800 text-lg text-center mx-10 max-w-md z-50`}
        variants={header.text04}
        initial="hidden"
        whileInView="visible"
      >
        Porque eres parte de mi vida y has acompañado mi camino, quiero que seas
        parte de este momento tan importante para mi.
      </motion.p>
    </section>
  );
}
