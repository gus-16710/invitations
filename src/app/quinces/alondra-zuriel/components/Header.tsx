import { useEffect, useState } from "react";
import { league, playFair, standard, vibes } from "./Fonts";
import { motion, useAnimate } from "framer-motion";
import { header } from "./Animations";
import NumberFlow from "@number-flow/react";

export function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Header({ splide }: { splide: number }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Dec 21, 2024 17:00:00");

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

  const [day, setDay] = useState(0);

  useEffect(() => {
    if (splide === 0) {
      setTimeout(() => {
        setDay(21);
      }, 500);
    } else {
      setDay(0);
    }
  }, [splide]);

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <motion.p
        className={`${vibes.className} text-3xl mt-5 mx-10 text-center`}
        style={{ color: "#513704" }}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Tenemos el honor de invitarlos a celebrar
      </motion.p>
      <motion.div
        className="w-full h-16 relative flex items-center justify-center mt-2"
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
      >
        <div className="bg-[url('/img/quinces/alondra/red-ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
      </motion.div>
      <motion.h1
        className="text-7xl text-center mt-5"
        style={{ fontFamily: "candlescript", color: "#a57d35" }}
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        Alondra <br /> Zuriel
      </motion.h1>
      <motion.div
        variants={header.animation4}
        initial="hidden"
        whileInView="visible"
      >
        <p
          className={`${playFair.className} z-20 flex items-center mt-3 font-bold text-yellow-400`}
          style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        >
          <span
            className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
            style={{
              borderTopColor: "rgb(165, 125, 53, 0.5)",
              borderBottomColor: "rgb(165, 125, 53, 0.5)",
              color: "#513704",
            }}
          >
            Sábado
          </span>{" "}
          <span
            className={`${standard.className} text-6xl mx-3`}
            style={{ color: "#a57d35" }}
          >
            <NumberFlow
              value={day}
              transformTiming={{
                duration: 3000,
                // easing:
                //   "linear(0, 0.002, 0.0077, 0.0169, 0.0292 2.45%, 0.0647 3.77%, 0.117 5.26%, 0.2307 7.89%, 0.4955 13.32%, 0.6129 15.86%, 0.7219 18.49%, 0.8123, 0.8871 23.58%, 0.9177 24.8%, 0.9465, 0.9715, 0.9928, 1.0108 30.06%, 1.0264 31.46%, 1.0433 33.48%, 1.0551 35.67%, 1.0617 38.04%, 1.0632 40.67%, 1.0608 42.95%, 1.0551 45.66%, 1.0261 55.39%, 1.015 59.69%, 1.0072 63.63%, 1.0016 67.75%, 0.9976 72.83%, 0.9961 78.62%, 0.9991 99.92%)",
              }}
              trend={0}
            />
          </span>{" "}
          <span
            className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
            style={{
              borderTopColor: "rgb(165, 125, 53, 0.5)",
              borderBottomColor: "rgb(165, 125, 53, 0.5)",
              color: "#513704",
            }}
          >
            Diciembre
          </span>
        </p>
        <p
          className={`${league.className} z-20 text-xl text-yellow-400 font-thin text-center`}
          style={{ color: "#513704" }}
        >
          ~ 2024 ~
        </p>
      </motion.div>

      <motion.div
        className={`${vibes.className} mb-3 pb-3 text-slate-100 custom-shadow flex items-center justify-center mt-3`}
        style={{ color: "#513704" }}
        variants={header.animation5}
        initial="hidden"
        whileInView="visible"
      >
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeDays}>
            {formatNumber(days)}
          </div>
          <div className="my-0 mx-3 text-center text-xl">Días</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeHours}>
            {formatNumber(hours)}
          </div>
          <div className="my-0 mx-3 text-center text-xl">Horas</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeMinutes}>
            {formatNumber(minutes)}
          </div>
          <div className="my-0 mx-3 text-center text-xl">Min</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeSeconds}>
            {formatNumber(seconds)}
          </div>
          <div className="my-0 mx-3 text-center text-xl">Seg</div>
        </div>
      </motion.div>
    </div>
  );
}