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
      staggerChildren: 0.3,
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
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Header() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const text01 = "Camila";

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
    animateSeconds(scopeSeconds.current, { scale: [0, 1], opacity: [0, 1] });
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
      className="flex flex-col justify-center items-center relative bg-[url('/img/quinces/camila/background-header.jpg')] bg-center bg-cover"
      style={{ height: "100svh" }}
    >
      <p className="text-zinc-50 flex items-center z-20">
        <motion.label
          className={`text-2xl ${quickSand.className}`}
          variants={header.text01}
          initial="hidden"
          whileInView="visible"
        >
          MIS
        </motion.label>
        <motion.label
          className={`text-6xl ${great.className}`}
          variants={header.text02}
          initial="hidden"
          whileInView="visible"
        >
          XV
        </motion.label>
      </p>
      <motion.h1
        className={`text-pink-800 text-8xl ${dancing.className} flex`}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text01.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.div
        className="w-72 bg-pink-800 mt-5"
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
        8 DE AGOSTO DEL 2024
      </motion.p>

      <motion.div
        className={`${teko.className} my-5 flex justify-evenly w-full text-5xl text-zinc-50`}
        style={{
          textShadow:
            "-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)",
        }}
        variants={header.timer}
        initial="hidden"
        whileInView="visible"
      >
        <label className="flex flex-col items-center">
          <span ref={scopeDays}>{formatNumber(days)}</span>
          <span className="text-2xl">Días</span>
        </label>
        <label>:</label>
        <label className="flex flex-col items-center">
          <span ref={scopeHours}>{formatNumber(hours)}</span>
          <span className="text-2xl">Horas</span>
        </label>
        <label>:</label>
        <label className="flex flex-col items-center">
          <span ref={scopeMinutes}>{formatNumber(minutes)}</span>
          <span className="text-2xl">Min</span>
        </label>
        <label>:</label>
        <label className="flex flex-col items-center">
          <span ref={scopeSeconds}>{formatNumber(seconds)}</span>
          <span className="text-2xl">Seg</span>
        </label>
      </motion.div>
      <motion.p
        className={`${quickSand.className} text-pink-800 text-lg text-center mx-10`}
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
