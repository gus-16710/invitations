import { motion } from "framer-motion";
import { useEffect, useCallback, useRef } from "react";
import { abril, glass, greatVibes } from "./Fonts";
import { header } from "./Animations";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function Header() {
  /** */
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
        shapes: ["circle", "square"],
        colors: ["c9d9d7", "ffffff", "cbebdb", "ffdbcf"],
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
    const timer = setInterval(() => fire(), 8000);
    () => clearInterval(timer);
  }, []);

  return (
    <section
      className="flex justify-center items-center flex-col relative"
      style={{ height: "100svh", overflow: "hidden" }}
    >
      {/* Fondo animado con zoom in/out */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[url('/img/festejos/kimberly-cristina/starry-night-sky-background.jpg')] bg-cover bg-center z-0"
        style={{ height: "100svh" }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          className="bg-[url('/img/festejos/kimberly-cristina/header-gold.png')] bg-contain bg-no-repeat bg-center w-72 h-32"
          variants={header.text01}
          initial="hidden"
          whileInView="visible"
        />

        <motion.div
          className="relative w-screen h-64"
          variants={header.frame}
          initial="hidden"
          whileInView="visible"
        >
          <div className="bg-[url('/img/festejos/kimberly-cristina/golden-frame.png')] bg-contain bg-no-repeat bg-center w-full h-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center mt-5">
            <span
              className={`${greatVibes.className} text-blue-900 text-lg`}
              style={{ lineHeight: 0 }}
            >
              Mis
            </span>
            <span className={`${abril.className} text-blue-900 text-7xl`}>
              15
            </span>
            <span
              className={`${abril.className} text-blue-900 text-lg`}
              style={{ lineHeight: 0.5 }}
            >
              AÑOS
            </span>
          </div>
        </motion.div>

        <motion.h2
          className={`${greatVibes.className} p-3 text-5xl text-slate-100 custom-shadow text-center -mt-8`}
          variants={header.text02}
          initial="hidden"
          whileInView="visible"
        >
          Kimberly Renata
        </motion.h2>
        <motion.h2
          className={`${greatVibes.className} p-3 text-3xl text-slate-100 custom-shadow text-center -mt-4`}
          variants={header.text03}
          initial="hidden"
          whileInView="visible"
        >
          Landa Garrido
        </motion.h2>

        <motion.p
          className={`${glass.className} text-slate-100 px-5 text-center text-lg mt-2`}
          variants={header.text04}
          initial="hidden"
          whileInView="visible"
        >
          Su madre agradece tu presencia:
        </motion.p>
        <motion.p
          className={`${glass.className} text-2xl text-center text-slate-100 px-10 mt-1`}
          variants={header.text04}
          initial="hidden"
          whileInView="visible"
        >
          Sra. Jessica Landa Garrido
        </motion.p>

        {/* <motion.p
          className={`${playFair.className} text-slate-200 text-xl tracking-widest mt-4`}
          variants={header.date}
          initial="hidden"
          whileInView="visible"
        >
          16.Mayo.2026
        </motion.p> */}

        <motion.div
          className="bg-[url('/img/festejos/kimberly-cristina/footer-gold.png')] bg-contain bg-no-repeat bg-center w-72 h-32"
          variants={header.text01}
          initial="hidden"
          whileInView="visible"
        />
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
