"use client";

import Confirm from "./components/Confirm";
import FloatinButton from "./components/FloatingButton";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Location from "./components/Location";
import Photography from "./components/Photography";
import Presentation from "./components/Presentation";
import "./styles.css";

export default function Fifteen() {
  return (
    <main className={`background-class`}>
      <div className="max-w-3xl m-auto shadow-large bg-white text-zinc-900">
        <Header />
        <Presentation />
        <Photography />
        <Location />
        <Photography />
        <Gifts />
        <Photography />
        <Confirm />
        <FloatinButton />
      </div>
    </main>
  );
}
