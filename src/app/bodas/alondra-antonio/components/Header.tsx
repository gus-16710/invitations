import { motion, useAnimate } from "framer-motion";
import { Bebas_Neue, Great_Vibes } from "next/font/google";
import { useState, useEffect, useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
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
    const countDownDate: any = new Date("Sep 20, 2025 12:00:00");

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

  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: any, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
        colors: [
          "F6E17A",
          "FFBD00",
          "E89400",
          "FFCA6C",
          "FDFFB8",
          "900C3F",
          "F0F0F0",
          "057A55",
          "C81E1E",
        ],
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 50,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }, [makeShot]);

  useEffect(() => {
    fire();
    const timer = setInterval(() => fire(), 5000);
    () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex justify-end items-center flex-col overflow-hidden"
      style={{ height: "100svh" }}
    >
      {/* Capa de fondo animada */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent), url('/img/bodas/alondra-antonio/gallery-01.jpg')",
        }}
      />

      {/* <div className="absolute bottom-0 w-full rotate-180">        
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill fill-red-700"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill fill-red-700"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill fill-red-700"
          ></path>
        </svg>
      </div>

      <div className="absolute top-0 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
            fill="#057A55"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            fill="#057A55"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            fill="#057A55"
          ></path>
        </svg>
      </div> */}

      <div className="relative z-10 text-white p-6 text-center flex flex-col items-center justify-center">
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
            <div className="my-0 mx-3 p-2 text-4xl" ref={scopeDays}>
              {formatNumber(days)}
            </div>
            <div className="my-0 mx-3 text-center text-2xl">Días</div>
          </div>
          <div className="text-center m-0">
            <div className="my-0 mx-3 p-2 text-4xl" ref={scopeHours}>
              {formatNumber(hours)}
            </div>
            <div className="my-0 mx-3 text-center text-2xl">Horas</div>
          </div>
          <div className="text-center m-0">
            <div className="my-0 mx-3 p-2 text-4xl" ref={scopeMinutes}>
              {formatNumber(minutes)}
            </div>
            <div className="my-0 mx-3 text-center text-2xl">Min</div>
          </div>
          <div className="text-center m-0">
            <div className="my-0 mx-3 p-2 text-4xl" ref={scopeSeconds}>
              {formatNumber(seconds)}
            </div>
            <div className="my-0 mx-3 text-center text-2xl">Seg</div>
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
      </div>
      {/* /</section> */}
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "absolute",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </section>
  );
}
