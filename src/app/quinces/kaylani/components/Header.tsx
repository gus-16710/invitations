import { motion } from "framer-motion";
import { dancing, notoSans } from "./Fonts";
import {
  header,
  headerEntry01,
  headerEntry02,
  headerEntry03,
  headerEntry04,
  headerEntry05,
} from "./Animations";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

const GOLD = "#4c1d95";
const GOLD_GLOW = "rgba(76,29,149,0.55)";
const GOLD_LINE = "rgba(76,29,149,0.7)";
const GOLD_BORDER = "rgba(76,29,149,0.35)";
const WHITE = "#8b5cf6";
const WHITE_SOFT = "#a78bfa";
const SHADOW = "0 1px 4px rgba(0,0,0,0.25)";
const SHADOW_STRONG = "0 1px 6px rgba(0,0,0,0.35)";

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
    transition: { type: "spring", damping: 14, stiffness: 180 },
  },
};

export default function Header({ splide }: { splide: number }) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);

  const text01 = "Kayleni_Gabriell";

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
      <motion.div
        className="flex items-center gap-3 mb-3"
        variants={headerEntry01}
        initial="hidden"
        whileInView="visible"
      >
        <div
          className="h-px w-12"
          style={{ background: `linear-gradient(to right, transparent, ${GOLD_LINE})` }}
        />
        <span style={{ color: GOLD, fontSize: "9px", letterSpacing: "0.5em", textShadow: SHADOW }}>
          ✦
        </span>
        <div
          className="h-px w-12"
          style={{ background: `linear-gradient(to left, transparent, ${GOLD_LINE})` }}
        />
      </motion.div>

      {/* MIS XV AÑOS */}
      <motion.p
        style={{
          fontFamily: "rumble",
          color: GOLD,
          letterSpacing: "0.28em",
          fontSize: "2rem",
          textShadow: `0 0 30px ${GOLD_GLOW}, ${SHADOW_STRONG}`,
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
        className={`${dancing.className} flex mt-5 text-5xl`}
        style={{          
          color: WHITE,
          textShadow: `0 0 30px ${GOLD_GLOW}, ${SHADOW_STRONG}`,
          letterSpacing: "0.02em",
        }}
        variants={list}
        initial="hidden"
        whileInView="visible"
      >
        {text01.split("").map((letter, index) => (
          <motion.span key={index} variants={item}>
            {letter === "_" ? <>&nbsp;</> : letter}
          </motion.span>
        ))}
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
            borderLeft: `1px solid ${GOLD_BORDER}`,
            borderRight: `1px solid ${GOLD_BORDER}`,
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
