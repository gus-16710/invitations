import React from "react";
import { big, glass, mea, mystery } from "./Fonts";

function Presentation() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover">
      <p className={`${mea.className} text-5xl mb-5 text-sky-800`}>
        Mis Padres
      </p>
      <p className={`${glass.className} text-2xl text-zinc-700 text-center`}>
        Emiliano Barradas Zavaleta <br />
        Teodora Falfan Ceballos
      </p>

      <p
        className={`${mystery.className} text-4xl bg-sky-800 rounded-full w-12 h-12 m-10 text-zinc-100 flex justify-center items-center`}
      >
        &
      </p>

      <p className={`${mea.className} text-5xl mb-5 text-sky-800`}>
        Mis Padrinos
      </p>
      <p className={`${glass.className} text-2xl text-zinc-700 text-center`}>
        Ricardo Alba Monfil <br />
        Deylhy Alba Peña
      </p>
    </section>
  );
}

export default Presentation;
