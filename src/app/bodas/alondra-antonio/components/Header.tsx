import { motion, useAnimate } from "framer-motion";
import { Bebas_Neue, Great_Vibes } from "next/font/google";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

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
    const countDownDate: any = new Date("Feb 28, 2025 12:00:00");

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
    <section
      className="bg-cover bg-center flex justify-end items-center flex-col relative"
      style={{
        height: "100svh",
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent), url('/img/bodas/alondra-antonio/header.jpg')",
      }}
    >
      <div className="absolute bottom-0 w-full">
        <svg
          width="100%"
          height="50%"
          id="svg"
          viewBox="0 0 1440 260"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 L 0,225 C 119.46666666666664,173.53333333333333 238.93333333333328,122.06666666666668 395,119 C 551.0666666666667,115.93333333333332 743.7333333333333,161.26666666666665 924,187 C 1104.2666666666667,212.73333333333335 1272.1333333333332,218.86666666666667 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            stroke-width="0"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0 fill-red-700"
          ></path>
        </svg>
      </div>

      <div className="absolute top-0 w-full rotate-180">
        <svg
          width="100%"
          height="50%"
          id="svg"
          viewBox="0 0 1440 260"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,600 L 0,225 C 119.46666666666664,173.53333333333333 238.93333333333328,122.06666666666668 395,119 C 551.0666666666667,115.93333333333332 743.7333333333333,161.26666666666665 924,187 C 1104.2666666666667,212.73333333333335 1272.1333333333332,218.86666666666667 1440,225 L 1440,600 L 0,600 Z"
            stroke="none"
            stroke-width="0"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-0 fill-green-600"
          ></path>
        </svg>
      </div>

      <motion.h1
        className={`${bebas.className} p-3 text-5xl text-slate-100 custom-shadow`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        whileTap={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        Alondra & Antonio
      </motion.h1>
      <motion.h2
        className={`${greatVibes.className} p-3 text-6xl text-slate-100 custom-shadow`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Nuestra Boda
      </motion.h2>
      <motion.div
        className={`${greatVibes.className} mb-3 pb-3 text-slate-100 custom-shadow flex items-center justify-center`}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeDays}>
            {formatNumber(days)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Días</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeHours}>
            {formatNumber(hours)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Horas</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeMinutes}>
            {formatNumber(minutes)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Minutos</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeSeconds}>
            {formatNumber(seconds)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Segundos</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-12"
      >
        <IoIosArrowDown className="text-zinc-400" />
      </motion.div>
    </section>
  );
}
