"use client";

import { useCallback, useEffect, useRef } from "react";
import Ceremony from "./components/Ceremony";
import Confirm from "./components/Confirm";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";
import "./styles.css";
import ReactCanvasConfetti from "react-canvas-confetti";
import FloatinButton from "./components/FloatingButton";
import AudioControl from "./components/AudioControl";
import DressCode from "./components/DressCode";

export default function Alondra() {
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
    const timer = setInterval(() => fire(), 10000);
    () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[url('/img/quinces/alondra-alarcon/background.avif')] bg-center bg-cover bg-fixed relative">
      <div className="max-w-3xl m-auto shadow-large">
        <Header />
        <Presentation />
        <GodParents />
        <Ceremony />
        <Reception />        
        <DressCode />
        <Confirm />

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
      <FloatinButton />
      <AudioControl />
    </main>
  );
}
