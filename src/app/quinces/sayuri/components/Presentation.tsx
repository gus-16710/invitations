import { useEffect, useState } from "react";
import { useAnimate, motion } from "framer-motion";
import { anton, dancing, playFair, whisper } from "./Fonts";
import { presentation } from "./Animations";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Presentation() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Sep 21, 2024 12:00:00");

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
    <section className="h-screen flex flex-col items-center justify-center">
      <div className="bg-[url('/img/quinces/sayuri/divider-golden.png')] bg-contain bg-no-repeat bg-center w-full h-16 sm:mb-10 mb-5" />

      <h1 className={`${dancing.className} text-golden text-5xl`}>
        &nbsp; Sólo Fantan &nbsp;
      </h1>

      <div className="flex gap-16 text-zinc-400 mt-10">
        <motion.div
          className="flex flex-col"
          variants={presentation.animationTimer01}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex flex-col items-center">
            <span
              className={`${anton.className} text-golden text-5xl`}
              ref={scopeDays}
            >
              {formatNumber(days)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Días</span>
          </p>
          <p className="flex flex-col items-center mt-5">
            <span
              className={`${anton.className} text-golden text-5xl`}
              ref={scopeMinutes}
            >
              {formatNumber(minutes)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Minutos</span>
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col"
          variants={presentation.animationTimer02}
          initial="hidden"
          whileInView="visible"
        >
          <p className="flex flex-col items-center">
            <span
              className={`${anton.className} text-golden text-5xl`}
              ref={scopeHours}
            >
              {formatNumber(hours)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Horas</span>
          </p>
          <p className="flex flex-col items-center mt-5">
            <span
              className={`${anton.className} text-golden text-5xl`}
              ref={scopeSeconds}
            >
              {formatNumber(seconds)}
            </span>
            <span className={`${whisper.className} text-3xl`}>Segundos</span>
          </p>
        </motion.div>
      </div>
      <p
        className={`${playFair.className} text-zinc-400 text-base px-5 text-center mt-5 max-w-md`}
      >
        Quince flores nuevas, que te harán feliz, quince primaveras y una vida
        entera por vivir. El comienzo de una nueva etapa, y por más que las
        primaveras sigan llegando, ninguna será tan especial como esta. Acompaña
        a nuestra pequeña a celebrar sus 15 años.
      </p>
    </section>
  );
}
