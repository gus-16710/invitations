"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { PiAsteriskSimpleDuotone } from "react-icons/pi";

export default function Home() {
  const router = useRouter();

  return (
    <main className="bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center flex-col">
      <Button
        className="m-5"
        color="default"
        onClick={() => router.push("/wedding")}
      >
        <PiAsteriskSimpleDuotone className="text-3xl" /> Boda
      </Button>
      <Button
        className="m-5"
        color="success"
        onClick={() => router.push("/fifteen")}
      >
        <PiAsteriskSimpleDuotone className="text-3xl" />
        XV Años
      </Button>
      <Button className="m-5" color="secondary">
        <PiAsteriskSimpleDuotone className="text-3xl" /> Cumpleaños
      </Button>
    </main>
  );
}
