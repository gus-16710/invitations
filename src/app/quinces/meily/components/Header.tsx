import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import NumberFlow from "@number-flow/react";
import { cormorant, pinyon } from "./Fonts";

const EVENT_DATE = new Date("Dec 5, 2026 16:00:00").getTime();

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.25, delayChildren: 0.3 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const nameLetters: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const letter: Variants = {
  hidden: { opacity: 0, y: 40, rotate: -8 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

function getTimeLeft() {
  const distance = Math.max(EVENT_DATE - Date.now(), 0);
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
}

const Ornament = () => (
  <svg width="220" height="16" viewBox="0 0 220 16" aria-hidden="true">
    <line x1="0" y1="8" x2="92" y2="8" stroke="#991b1b" strokeWidth="1" />
    <circle cx="98" cy="8" r="1.8" fill="#991b1b" />
    <path d="M110 1 L117 8 L110 15 L103 8 Z" fill="#991b1b" />
    <circle cx="122" cy="8" r="1.8" fill="#991b1b" />
    <line x1="128" y1="8" x2="220" y2="8" stroke="#991b1b" strokeWidth="1" />
  </svg>
);

const TimeCard = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center w-[4.25rem] py-2 rounded-xl bg-[#f5ebe0]/80 border border-red-800/20 shadow-sm backdrop-blur-sm">
    <NumberFlow
      value={value}
      format={{ minimumIntegerDigits: 2 }}
      className={`${cormorant.className} text-3xl font-semibold text-red-800 leading-none lining-nums tabular-nums`}
    />
    <span
      className={`${cormorant.className} text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-zinc-600 mt-1`}
    >
      {label}
    </span>
  </div>
);

export default function Header() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[url('/img/quinces/meily/background-header.jpg')] bg-center bg-cover">
      {/* Velo beige para que el texto se lea sobre la foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(245,235,224,0.25) 0%, rgba(245,235,224,0.6) 35%, rgba(245,235,224,0.9) 60%, #f5ebe0 80%)",
        }}
      />

      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 pt-24 pb-36"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} text-red-900 text-sm font-semibold uppercase tracking-[0.45em]`}
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          variants={nameLetters}
          className={`${pinyon.className} text-red-800 text-[5.5rem] leading-[1.15] flex mt-1`}
          aria-label="Meily"
        >
          {"Meily".split("").map((char, index) => (
            <motion.span key={index} variants={letter} aria-hidden="true">
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className={`${pinyon.className} text-red-900 text-3xl mt-3`}
        >
          Antonella
        </motion.p>

        <motion.div variants={fadeUp} className="mt-4">
          <Ornament />
        </motion.div>

        {/* Bloque de fecha estilo invitación clásica */}
        <motion.div
          variants={fadeUp}
          className={`${cormorant.className} flex flex-col items-center mt-4 text-red-900 lining-nums`}
        >
          <div className="flex items-center">
            <span className="w-28 text-right pr-3 text-sm font-semibold uppercase tracking-[0.25em]">
              Sábado
            </span>
            <span className="px-4 border-x border-red-800/40 text-5xl font-semibold leading-none">
              05
            </span>
            <span className="w-28 pl-3 text-left text-sm font-semibold uppercase tracking-[0.25em]">
              Diciembre
            </span>
          </div>
          <span className="mt-2 text-lg font-semibold tracking-[0.35em] pl-[0.35em]">
            2026
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex gap-2 mt-6">
          <TimeCard value={time.days} label="Días" />
          <TimeCard value={time.hours} label="Horas" />
          <TimeCard value={time.minutes} label="Min" />
          <TimeCard value={time.seconds} label="Seg" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} italic text-red-900 text-lg leading-snug mt-6 max-w-xs`}
        >
          Porque eres parte de mi vida y has acompañado mi camino, quiero que
          seas parte de este momento tan importante para mí.
        </motion.p>
      </motion.div>
    </section>
  );
}
