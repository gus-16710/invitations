"use client";

import { Card, CardBody, CardFooter, CardHeader, Divider, Image, Link, Listbox, ListboxItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
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
    <main className="bg-gradient-to-br from-purple-600 to-blue-500 h-screen flex items-center justify-center flex-col">
      <Card className="w-80 mx-10">
        <CardHeader className="flex gap-3">
          <Image
            alt="invitations"
            height={40}
            radius="sm"
            src="/img/invitations.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Invitaciones</p>
            <p className="text-small text-default-500">Bodas, XV Años & Bautizos</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Listbox aria-label="Actions">
            <ListboxItem key="bodas" onClick={() => router.push("/bodas")}>
              ⭐ Bodas
            </ListboxItem>
            <ListboxItem key="quinces" onClick={() => router.push("/quinces")}>
              ⭐ XV Años
            </ListboxItem>
            <ListboxItem key="bautizos" onClick={() => router.push("/bautizos")}>
              ⭐ Bautizos
            </ListboxItem>
          </Listbox>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className="text-sm">Selecciona un tipo de invitación 👆🏽</p>
        </CardFooter>
      </Card>
      
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
