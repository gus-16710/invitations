"use client";

import Ceremony from "./components/Ceremony";
import Gallery from "./components/Gallery";
import GodParents from "./components/GodParents";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Reception from "./components/Reception";

export default function Christening() {
  return (
    <div className="max-w-3xl m-auto bg-[url('/img/christening/background-floral.jpg')] bg-bottom bg-cover bg-fixed">
      <Header />
      <Presentation />
      <Ceremony />
      <Reception />
      <GodParents />
      <Gallery />
    </div>
  );
}
