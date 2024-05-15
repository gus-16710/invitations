"use client";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import "./styles.css";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto bg-golden">
      <Header />
      <Presentation />
    </main>
  );
}
