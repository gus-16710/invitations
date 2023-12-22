"use client";

import Image from "next/image";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Locations from "./components/Locations";
import GodParents from "./components/GodParents";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto relative">
      <Header />
      <Presentation />
      <Locations />
      <GodParents />
      <div className="bg-[url('/img/quinces/camila/floral-background.png')] bg-cover bg-no-repeat bg-center w-full h-screen fixed top-0"></div>
    </main>
  );
}
