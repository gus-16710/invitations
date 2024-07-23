import { dancing, playFair } from "./Fonts";
import { motion } from "framer-motion";
import { header } from "./Animations";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useCallback, useEffect, useRef } from "react";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: { opacity: 1, y: 0, scale: 1 },
  hidden: { opacity: 0, y: 100, scale: 0 },
};

export default function Header() {
  const text = "Sayuri";

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
        ],
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
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
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.h2
        className={`${playFair.className} text-2xl flex items-center text-zinc-400 z-20 mt-2`}
        variants={header.text02}
        initial="hidden"
        whileInView="visible"
      >
        MIS <span className="text-golden text-5xl">XV</span> AÑOS
      </motion.h2>
      <div className="relative w-full h-96 flex items-center justify-center overflow-clip mt-2">
        <motion.div
          className="bg-[url('/img/quinces/sayuri/round-frame.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full opacity-80"
          variants={header.roundFrame}
          initial="hidden"
          whileInView="visible"
        />
        <motion.h1
          className={`${dancing.className} z-10 text-center text-8xl h-32 flex`}
          variants={list}
          initial="hidden"
          whileInView="visible"
        >
          {text.split("").map((letter, index) => {
            return (
              <motion.span key={index} variants={item} className="text-golden">
                {letter}
              </motion.span>
            );
          })}
        </motion.h1>
      </div>
      <div
        className={`${playFair.className} flex items-center flex-col mt-5`}
        style={{ color: "#96814e" }}
      >
        <motion.span
          className="px-2 pb-2"
          variants={header.month}
          initial="hidden"
          whileInView="visible"
        >
          SEPTIEMBRE
        </motion.span>
        <p className="flex items-center">
          <motion.span
            className="border-y-1 border-y-yellow-800 py-2 w-28 text-center text-zinc-400"
            style={{ letterSpacing: "2px" }}
            variants={header.day}
            initial="hidden"
            whileInView="visible"
          >
            SÁBADO
          </motion.span>
          <motion.span
            className="text-golden text-5xl px-2 pb-2"
            variants={header.dayNumber}
            initial="hidden"
            whileInView="visible"
          >
            21
          </motion.span>
          <motion.span
            className="border-y-1 border-y-amber-800 py-2 w-28 text-center text-zinc-400"
            style={{ letterSpacing: "2px" }}
            variants={header.time}
            initial="hidden"
            whileInView="visible"
          >
            12:00 Hrs
          </motion.span>
        </p>
        <motion.p
          className={`${playFair.className} text-2xl`}
          variants={header.year}
          initial="hidden"
          whileInView="visible"
        >
          2024
        </motion.p>
      </div>
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
