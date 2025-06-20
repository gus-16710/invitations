import { Image } from "@nextui-org/react";
import { bebas, cormorant, lora, mea, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

export default function SlideOne() {
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
    <div>
      <motion.section
        className="flex flex-col justify-center items-center"
        style={{ height: "100svh" }}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className={`${urbanist.className} text-zinc-100 text-lg`}>
          Escuela Telesecundaria
        </h2>
        <h1 className={`${cormorant.className} text-zinc-100 text-4xl`}>
          21 de Marzo
        </h1>
        <h2 className={`${urbanist.className} text-zinc-100 mb-5`}>
          30DTV1024G
        </h2>

        <Image
          width={135}
          alt="NextUI hero Image"
          src="/img/escolar/telesecundaria-21-marzo/logo.png"
          className="mb-5"
          style={{ filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))" }}
        />

        <h2 className={`${mea.className} text-zinc-50 text-7xl`}>Ceremonia</h2>
        <h2 className={`${urbanist.className} text-zinc-50 mb-4`}>
          DE GRADUACIÓN
        </h2>
        <div className="w-full h-20 relative flex items-center justify-center">
        <div className="bg-[url('/img/escolar/ricardo-flores-magon/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
          <p className={`${bebas.className} text-zinc-50 text-3xl mb-5 z-10`} style={{letterSpacing: "2px"}}>
            2022 - 2025
          </p>
        </div>
        <p
          className={`${lora.className} z-20 flex items-center font-bold text-zinc-50 mt-2`}
          style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        >
          <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest">
            &nbsp;JULIO&nbsp;
          </span>
          <span className="text-4xl px-2 tracking-widest">01</span>
          <span className="border-y-1 border-y-zinc-50 py-2 tracking-widest">
            &nbsp;&nbsp;2025&nbsp;&nbsp;
          </span>
        </p>
        <p className={`${urbanist.className} z-20 text-zinc-100 mt-2`}>
          15:00 Hrs
        </p>
      </motion.section>
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
    </div>
  );
}
