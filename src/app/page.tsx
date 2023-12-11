"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { PiAsteriskSimpleDuotone } from "react-icons/pi";
import ReactCanvasConfetti from "react-canvas-confetti";
import { useCallback, useRef, useEffect } from "react";

export default function Home() {
  const router = useRouter();
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
    <main className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center flex-col">
      <Button
        className="m-5 w-40"
        color="default"
        onClick={() => router.push("/wedding")}
      >
        <PiAsteriskSimpleDuotone className="text-3xl" /> Boda
      </Button>
      <Button
        className="m-5 w-40"
        color="success"
        onClick={() => router.push("/fifteen")}
      >
        <PiAsteriskSimpleDuotone className="text-3xl" />
        XV Años
      </Button>
      <Button className="m-5 w-40" color="secondary">
        <PiAsteriskSimpleDuotone className="text-3xl" /> Bautizo
      </Button>

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
    </main>
  );
}
