import { motion, useAnimate, useScroll } from "framer-motion";
import { crimson, italianno, lora, mate, playfair } from "./Fonts";
import { useEffect, useRef, useState } from "react";
import { Image } from "@nextui-org/react";

function formatNumber(number: number) {
  return number < 10 ? `0${number}` : number;
}

export default function Counter() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);

  const countDownClock = () => {
    const countDownDate: any = new Date("Jul 25, 2026 12:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
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
      { ease: "easeInOut", type: "keyframes" },
    );
  }, [seconds, animateSeconds]);

  useEffect(() => {
    animateMinutes(
      scopeMinutes.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" },
    );
  }, [minutes, animateSeconds]);

  useEffect(() => {
    animateHours(
      scopeHours.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" },
    );
  }, [hours, animateHours]);

  useEffect(() => {
    animateDays(
      scopeDays.current,
      { y: [20, 0], opacity: [0, 1] },
      { ease: "easeInOut", type: "keyframes" },
    );
  }, [days, animateDays]);

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress,
      }}

      className="w-full overflow-clip"
    >
      <div className="flex items-center mt-10">
        <motion.div
          className="flex-1 border-b-1 border-gray-900/10"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
        <p className={`${mate.className} flex-2 px-5 text-3xl text-gray-800`}>Faltan</p>
        <motion.div
          className="flex-1 border-b-1 border-gray-900/10"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div
        className={`${lora.className} mb-3 mt-5 py-3 text-gray-800 flex items-baseline justify-center`}
      >
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeDays}>
            {formatNumber(days)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Días</div>
        </div>
        <span>:</span>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeHours}>
            {formatNumber(hours)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Horas</div>
        </div>
        <span>:</span>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeMinutes}>
            {formatNumber(minutes)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Min</div>
        </div>
        <span>:</span>
        <div className="text-center m-0">
          <div className="my-0 mx-3 p-2 text-3xl" ref={scopeSeconds}>
            {formatNumber(seconds)}
          </div>
          <div className="my-0 mx-3 text-center text-1xl">Seg</div>
        </div>
      </div>
    </motion.div>
  );
}
