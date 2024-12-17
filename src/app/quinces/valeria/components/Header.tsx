import { useCallback, useEffect, useRef, useState } from "react";
import { big, glass, loved, macondo, mea, mystery, vibes, zen } from "./Fonts";
import { Spinner } from "@nextui-org/react";
import { motion, useAnimate } from "framer-motion";
import ReactCanvasConfetti from "react-canvas-confetti";

export function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

function Header() {
  const [loading, setLoading] = useState(true);

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Jan 25, 2025 17:00:00");

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
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#12011c] to-[#0c2768] bg-center bg-cover bg-fixed relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onLoadedData={() => setLoading(false)}
      >
        <source
          src="/img/quinces/blank/205775-927765405_small.mp4"
          type="video/mp4"
        />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-blue-600/40 to-transparent"></div>

      {loading && <Spinner className="absolute" size="lg" />}
   
      <p className={`${glass.className} text-xl text-zinc-300 z-10`}>
        ACOMPAÑAME ESTE DÍA TAN ESPECIAL
      </p>
      <p className={`${big.className} text-5xl text-metallic mt-2 z-10`}>
        ~ MIS XV AÑOS ~
      </p>     

      <h1
        className={`${mea.className} text-9xl text-silver font-extrabold text-center z-10 pt-12 mb-10`}
      >
        Valeria
      </h1>

      <div className="flex items-center justify-center flex-col mb-2 text-zinc-300 z-10">
        <label className={`${glass.className} pb-2 text-xl`}>ENERO</label>
        <div className="flex items-center">
          <label className={`${glass.className} p-4 w-20 text-center text-2xl`}>
            SÁB
          </label>
          <label
            className={`${big.className} px-6 border-l-2 border-r-2 border-sky-300/30 text-6xl text-metallic`}
          >
            25
          </label>
          <label className={`${glass.className} p-4 w-20 text-center text-2xl`}>
            2025
          </label>
        </div>        
      </div>

      <div
        className={`${glass.className} mb-3 pb-3 text-zinc-300 custom-shadow flex items-center justify-center mt-3 z-10`}
      >
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeDays}>
            {formatNumber(days)}
          </div>
          <div className="my-0 mx-3 text-center text-xl text-metallic">Días</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeHours}>
            {formatNumber(hours)}
          </div>
          <div className="my-0 mx-3 text-center text-xl text-metallic">Horas</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeMinutes}>
            {formatNumber(minutes)}
          </div>
          <div className="my-0 mx-3 text-center text-xl text-metallic">Min</div>
        </div>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeSeconds}>
            {formatNumber(seconds)}
          </div>
          <div className="my-0 mx-3 text-center text-xl text-metallic">Seg</div>
        </div>
      </div>

      <div className="absolute -bottom-1 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ fill: "#ffff" }}
          className="rotate-180"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          ></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      
    </section>
  );
}

export default Header;
