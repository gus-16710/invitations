"use client";

import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Locations from "./components/Locations";
import Gallery from "./components/Gallery";
import Confirm from "./components/Confirm";
import Gifts from "./components/Gifts";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto relative">
      <Header />
      <Presentation />
      <Locations />
      <Gallery />
      <Gifts />
      <Confirm />
    </main>
  );
}
