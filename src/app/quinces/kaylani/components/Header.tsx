import { motion, useInView, useAnimation } from "framer-motion";
import { ballet, dancing, notoSans } from "./Fonts";
import {
  header,
  headerEntry01,
  headerEntry02,
  headerEntry03,
  headerEntry04,
  headerEntry05,
} from "./Animations";
import { useEffect, useState, useRef } from "react";
import NumberFlow from "@number-flow/react";
import { great } from "../../camila/components/Fonts";

const GOLD = "#4A2C63";
const GOLD_GLOW = "rgba(205,166,245,0.55)";
const GOLD_LINE = "rgba(216,177,138,0.65)";
const GOLD_BORDER = "rgba(255,255,255,0.22)";
const WHITE = "#7B4FA3";
const WHITE_SOFT = "#CDA6F5";
const SHADOW = "0 1px 4px rgba(58,35,74,0.30)";
const SHADOW_STRONG = "0 1px 6px rgba(58,35,74,0.45)";

const list = {
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.07 },
  },
  hidden: { opacity: 0 },
};

const item = {
  hidden: { opacity: 0, y: 35, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, damping: 14, stiffness: 180 },
  },
};

export default function Header({ splide }: { splide: number }) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (splide === 0) {
      setTimeout(() => {
        setDay(18);
        setHour(13);
      }, 500);
    } else {
      setDay(0);
      setHour(0);
    }
  }, [splide]);

  return (
    <section
      className="flex justify-center items-center flex-col relative"
      style={{ height: "100svh" }}
    >
      {/* Ornamento superior */}
      <motion.img
        src="/img/quinces/kaylani/decorative.png"
        alt=""
        //className="mb-3"
        style={{ width: "250px" }}
        variants={headerEntry01}
        initial="hidden"
        whileInView="visible"
      />

      {/* MIS XV AÑOS */}
      <motion.p
        style={{
          fontFamily: "rumble",
          color: GOLD,
          letterSpacing: "0.28em",
          fontSize: "2rem",
          //textShadow: `0 0 30px ${GOLD_GLOW}, ${SHADOW_STRONG}`,          
        }}
        variants={headerEntry02}
        initial="hidden"
        whileInView="visible"
      >
        MIS XV AÑOS
      </motion.p>

      {/* Subtítulo */}
      <motion.p
        className={`${notoSans.className} mt-1 uppercase tracking-[0.35em]`}
        style={{
          color: WHITE,
          fontSize: "0.65rem",
          opacity: 0.9,
          textShadow: SHADOW,
        }}
        variants={headerEntry03}
        initial="hidden"
        whileInView="visible"
      >
        ven y festeja conmigo
      </motion.p>

      {/* Nombre letra por letra */}
      <motion.h1
        ref={titleRef}
        className={`${great.className} flex flex-col items-center mt-5 text-6xl`}
        style={{
          color: WHITE,
          textShadow: `0 0 0px ${GOLD_GLOW}, ${SHADOW_STRONG}`,
          letterSpacing: "0.02em",
          lineHeight: 1.2,
          fontFamily: "candlescript",
          //textShadow: `0px 2px 20px rgb(${GOLD_GLOW})`,
        }}
        variants={list}
        initial="hidden"
        animate={controls}
      >
        <span className="flex">
          {"Kaylani".split("").map((letter, index) => (
            <motion.span key={`a${index}`} variants={item}>{letter}</motion.span>
          ))}
        </span>
        <span className="flex">
          {"Gabriell".split("").map((letter, index) => (
            <motion.span key={`b${index}`} variants={item}>{letter}</motion.span>
          ))}
        </span>
      </motion.h1>

      {/* Divisor ornamental */}
      <div className="flex items-center gap-3 mt-4">
        <motion.div
          className="h-px"
          style={{
            width: "70px",
            background: `linear-gradient(to right, transparent, ${GOLD_LINE})`,
          }}
          variants={header.borderBottom}
          initial="hidden"
          whileInView="visible"
        />
        <motion.span
          style={{ color: GOLD, fontSize: "8px", textShadow: SHADOW }}
          variants={header.borderBottom}
          initial="hidden"
          whileInView="visible"
        >
          ✦
        </motion.span>
        <motion.div
          className="h-px"
          style={{
            width: "70px",
            background: `linear-gradient(to left, transparent, ${GOLD_LINE})`,
          }}
          variants={header.borderBottom}
          initial="hidden"
          whileInView="visible"
        />
      </div>

      {/* Fecha y hora */}
      <motion.div
        className="flex justify-center items-center mt-6 gap-x-5"
        style={{ fontFamily: "rumble" }}
        variants={headerEntry04}
        initial="hidden"
        whileInView="visible"
      >
        {/* Día */}
        <div className="flex flex-col items-center" style={{ width: "70px" }}>
          <span
            className="flex items-end leading-none"
            style={{
              color: GOLD,
              fontSize: "3rem",
              //textShadow: `0 0 30px ${GOLD_GLOW}, ${SHADOW_STRONG}`,
            }}
          >
            <NumberFlow
              value={day}
              transformTiming={{ delay: 500, duration: 3500 }}
              trend={0}
              format={{ minimumIntegerDigits: 2 }}
            />
          </span>
          <span
            className={`${notoSans.className} mt-1 tracking-[0.3em] uppercase`}
            style={{ color: WHITE, fontSize: "0.55rem", opacity: 0.9, textShadow: SHADOW }}
          >
            día
          </span>
        </div>

        {/* Mes */}
        <div
          className="flex flex-col items-center px-5 py-2 gap-0.5"
          style={{
            borderLeft: `1px solid ${GOLD_LINE}`,
            borderRight: `1px solid ${GOLD_LINE}`,
          }}
        >
          <span
            style={{
              color: WHITE,
              fontSize: "2rem",
              letterSpacing: "0.15em",
              textShadow: SHADOW_STRONG,
            }}
          >
            JULIO
          </span>
          <span
            className={`${notoSans.className} tracking-[0.25em]`}
            style={{ color: GOLD, fontSize: "0.6rem", opacity: 0.9, textShadow: SHADOW }}
          >
            2026
          </span>
        </div>

        {/* Hora */}
        <div className="flex flex-col items-center" style={{ width: "70px" }}>
          <span
            className="flex items-baseline leading-none"
            style={{
              color: GOLD,
              fontSize: "3rem",
              //textShadow: `0 0 30px ${GOLD_GLOW}, ${SHADOW_STRONG}`,
            }}
          >
            <NumberFlow
              value={hour}
              transformTiming={{ delay: 500, duration: 3500 }}
              trend={0}
              format={{ minimumIntegerDigits: 2 }}
            />
            <span style={{ fontSize: "3rem" }}>:00</span>
          </span>
          <span
            className={`${notoSans.className} mt-1 tracking-[0.3em] uppercase`}
            style={{ color: WHITE, fontSize: "0.55rem", opacity: 0.9, textShadow: SHADOW }}
          >
            hrs
          </span>
        </div>
      </motion.div>

      {/* Ubicación */}
      <motion.p
        className={`${notoSans.className} mt-6 text-center px-8`}
        style={{
          color: WHITE,
          fontSize: "0.78rem",
          letterSpacing: "0.06em",
          opacity: 0.92,
          textShadow: SHADOW_STRONG,
        }}
        variants={headerEntry05}
        initial="hidden"
        whileInView="visible"
      >
        Santuario Parroquial De San José <br /> Banderilla, Ver.
      </motion.p>

      {/* Acento inferior */}
      <motion.div
        className="flex items-center gap-2 mt-4"
        variants={headerEntry05}
        initial="hidden"
        whileInView="visible"
      >
        <div className="h-px w-5" style={{ background: GOLD_BORDER }} />
        <span style={{ color: GOLD, fontSize: "7px", textShadow: SHADOW }}>✦</span>
        <div className="h-px w-5" style={{ background: GOLD_BORDER }} />
      </motion.div>
    </section>
  );
}
