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
    <section className="h-screen flex flex-col items-center justify-center relative">
      {/* <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full -top-1 absolute"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          className="shape-fill"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          className="shape-fill"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          className="shape-fill"
        ></path>
      </svg> */}

      {/* <div className="bg-[url('/img/quinces/sayuri/divider-golden.png')] bg-contain bg-no-repeat bg-center w-full h-16 sm:mb-10 mb-5" /> */}

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

      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute w-full -bottom-1 rotate-180"
      >
        <path
          d="M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"          
          fill="#d9ccaa"
        ></path> 
      </svg>
    </section>
  );
}
