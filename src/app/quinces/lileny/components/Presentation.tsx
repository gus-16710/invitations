import { useEffect, useRef, useState } from "react";
import { useAnimate, useScroll, motion } from "framer-motion";
import { anton, glass, luxurious, mea } from "./Fonts";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

function Presentation() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Sep 14, 2024 12:00:00");

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
    <section className="bg-white">
      <motion.div
        className="flex flex-col items-center justify-center h-screen relative"
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="rgb(31, 41, 55)"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          width="100px"
          height="100px"
        >
          <g>
            <g>
              <path d="M385.77,236.55c-5.477,0-10.359,1.422-15.009,4.42c-4.792-2.968-10.04-4.42-15.904-4.42    c-12.407,0-21.071,9.596-21.071,23.337c0,5.801,1.736,9.311,2.884,11.634l0.062,0.123c4.477,9.07,25.142,26.466,29.239,29.861    l4.839,4.011l4.849-3.999c5.811-4.793,25.105-21.118,29.306-29.984l0.107-0.226c1.052-2.217,2.816-5.928,2.816-11.419    C407.889,246.582,398.38,236.55,385.77,236.55z M391.337,264.779l-0.115,0.241c-1.615,3.407-11.043,12.585-20.388,20.664    c-9.308-8.084-18.749-17.299-20.466-20.774l-0.064-0.131c-0.788-1.594-1.309-2.646-1.309-4.893c0-2.443,0.571-8.129,5.863-8.129    c4.24,0,7.473,1.312,10.813,4.387l5.163,4.753l5.151-4.765c3.404-3.148,6.147-4.375,9.785-4.375c4.774,0,6.911,4.083,6.911,8.129    C392.682,261.948,392.089,263.197,391.337,264.779z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M510.423,82.862h-29.65V65.685h-15.208v17.177h-18.289V65.685h-15.208v17.177h-18.29V65.685H398.57v17.177h-18.289V65.685    h-15.208v17.177h-18.29V65.685h-15.208v17.177h-18.289V65.685h-15.208v17.177h-18.29V65.685h-15.208v17.177H246.29V65.685h-15.208    v17.177h-18.29V65.685h-15.208v17.177h-18.289V65.685h-15.208v17.177h-18.29V65.685h-15.208v17.177h-18.289V65.685H97.091v17.177    h-18.29V65.685H63.593v17.177H45.304V65.685H30.096v17.177H0v83.641v279.813h512V82.862H510.423z M15.208,98.07h14.888v17.177    h15.208V98.07h18.289v17.177h15.208V98.07h18.29v17.177h15.208V98.07h18.289v17.177h15.208V98.07h18.29v17.177h15.208V98.07    h18.289v17.177h15.208V98.07h18.29v17.177h15.208V98.07h18.289v17.177h15.208V98.07h18.29v17.177h15.208V98.07h18.289v17.177    h15.208V98.07h18.29v17.177h15.208V98.07h18.289v17.177h15.208V98.07h18.29v17.177h15.208V98.07h18.289v17.177h15.208V98.07    h14.442v53.225H15.208V98.07z M496.792,431.107H15.208V166.503h481.584V431.107z" />
            </g>
          </g>
          <g>
            <g>
              <rect x="38.831" y="200.574" width="51.545" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="115.388" y="200.574" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="191.946" y="200.574" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="268.503" y="200.574" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="345.07" y="200.574" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="421.628" y="200.574" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="38.831" y="262.298" width="51.545" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="115.388" y="262.298" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="191.946" y="262.298" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="268.503" y="262.298" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="421.628" y="262.298" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="38.831" y="324.023" width="51.545" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="115.388" y="324.023" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="191.946" y="324.023" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="268.503" y="324.023" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="345.07" y="324.023" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="421.628" y="324.023" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="38.831" y="385.747" width="51.545" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="115.388" y="385.747" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="191.946" y="385.747" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="268.503" y="385.747" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="345.07" y="385.747" width="51.544" height="15.208" />
            </g>
          </g>
          <g>
            <g>
              <rect x="421.628" y="385.747" width="51.544" height="15.208" />
            </g>
          </g>
        </svg>

        <h2 className={`${mea.className} text-6xl text-zinc-800 my-5`}>
          Sólo Faltan
        </h2>

        <div className="flex flex-row justify-evenly w-80 mt-5 text-red-800">
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-6xl`} ref={scopeDays}>
              {formatNumber(days)}
            </span>
            <span className={`${glass.className} text-3xl text-zinc-800`}>
              Días
            </span>
          </p>
          <p className="text-5xl">:</p>
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-5xl`} ref={scopeHours}>
              {formatNumber(hours)}
            </span>
            <span className={`${glass.className} text-3xl text-zinc-800`}>
              Horas
            </span>
          </p>
          <p className="text-5xl">:</p>
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-6xl`} ref={scopeMinutes}>
              {formatNumber(minutes)}
            </span>
            <span className={`${glass.className} text-3xl text-zinc-800`}>
              Min
            </span>
          </p>
          <p className="text-5xl">:</p>
          <p className="flex flex-col items-center">
            <span className={`${anton.className} text-5xl`} ref={scopeSeconds}>
              {formatNumber(seconds)}
            </span>
            <span className={`${glass.className} text-3xl text-zinc-800`}>
              Seg
            </span>
          </p>
        </div>
        <p
          className={`${luxurious.className} mx-10 text-center max-w-md my-5 text-zinc-800`}
        >
          El simbólico momento de entrada al mundo de los adultos. La niña se
          convierte en mujer, aún con cosas que aprender y errores que enmendar,
          es imposible pasar este momento sin celebrar. Te invitamos a los 15
          años de nuestro rayito de sol.
        </p>
      </motion.div>
    </section>
  );
}

export default Presentation;
