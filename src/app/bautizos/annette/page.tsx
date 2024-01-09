"use client";

import { useCallback, useEffect, useRef } from "react";
import Ceremony from "./components/Ceremony";
import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import Gallery from "./components/Gallery";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";
import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "./components/Confetti";
import AudioControl from "./components/AudioControl";

export default function Christening() {
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
        colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
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
  }, []);


  return (
    <main
      style={{
        backgroundColor: "#f3f3f3",
        backgroundImage:
          "repeating-radial-gradient( circle at 0 0, transparent 0, #f3f3f3 40px ), repeating-linear-gradient( #fafafa55, #fafafa )",        
      }}
    >
      <div className="max-w-3xl m-auto bg-[url('/img/bautizos/annette/background-floral.jpg')] bg-bottom bg-cover bg-fixed shadow-large">
        <Header />
        <Presentation />
        <Ceremony />
        <Reception />
        <GodParents />
        <Gallery />
        <Confirm />
        <FloatinButton />
        <AudioControl />
        <Confetti fire={fire} />

        <ReactCanvasConfetti
          refConfetti={getInstance}
          style={{
            position: "fixed",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
      </div>
    </main>
  );
}
