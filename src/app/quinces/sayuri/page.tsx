"use client";

import Header from "./components/Header";
import Ceremony from "./components/Ceremony";
import Presentation from "./components/Presentation";
import "./styles.css";
import Reception from "./components/Reception";
import Gallery from "./components/Gallery";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto bg-golden bg-[url('/img/quinces/sayuri/background-ornamental.jpg')] bg-cover bg-center bg-fixed">
      <Header />
      <Presentation />
      <div className="bg-[url('/img/quinces/sayuri/background-locations.jpg')] bg-cover bg-center">
        <Ceremony />
        <Reception />
      </div>
      <Gallery />
    </main>
  );
}
