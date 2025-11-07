"use client";

import AudioControl from "./components/AudioControl";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import AboutUs from "./components/AboutUs";
import Itinerary from "./components/Itinerary";

import "./styles.css";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import Counter from "./components/Counter";
import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import { useSearchParams } from "next/navigation";

export default function Wedding() {
  const searchParams = useSearchParams();

  const guests = searchParams.get("invitados") || "";

  console.log({guests})

  return (
    <main className="max-w-3xl m-auto p-4 shadow-2xl overflow-clip bg-white">
      <AudioControl />
      <Header />
      <Presentation />
      <AboutUs />
      <Itinerary />
      <DressCode />
      <Gifts />
      <Counter />
      <Confirm guests={guests}/>
      <FloatinButton />
    </main>
  );
}
