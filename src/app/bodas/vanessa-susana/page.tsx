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

export default function Wedding() {
  return (
    <main className="max-w-3xl m-auto p-4 shadow-2xl overflow-clip">
      <AudioControl />
      <Header />
      <Presentation />
      <AboutUs />
      <Itinerary />
      <DressCode />
      <Gifts/>
      <Counter/>
      <Confirm/>
    </main>
  );
}
