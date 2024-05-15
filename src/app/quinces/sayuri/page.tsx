"use client";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import "./styles.css";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto bg-golden bg-[url('/img/quinces/sayuri/background-ornamental.jpg')] bg-cover bg-center bg-fixed">
      <Header />
      <Presentation />
    </main>
  );
}
