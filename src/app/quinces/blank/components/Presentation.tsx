import React from "react";
import { mea } from "./Fonts";

function Presentation() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg2.jpg')] bg-center bg-cover">
      <h1 className={`${mea.className} text-6xl text-sky-800`}>Presentation</h1>
    </section>
  );
}

export default Presentation;
