import { Image } from "@nextui-org/react";
import { denk, glass, luxurious, mea, playFair } from "./Fonts";

export default function Header() {
  return (
    <section className="flex flex-col justify-center items-center">   
      <Image width={200} alt="Floral Cross" src="/img/bautizos/barbara/floral-cross.png"/>
      <p className={`${glass.className} text-xl text-orange-800 mt-5`}>
        ACOMPAÑANOS A SER PARTE DEL
      </p>
      <p className={`${glass.className} text-3xl text-orange-800 mt-3`}>
        BAUTIZO
      </p>
      <p className={`${glass.className} text-xl text-orange-800 mt-2`}>
        DE NUESTRA HIJA
      </p>
      <h1 className={`${mea.className} text-6xl text-orange-800 mt-5`}>
        Barbara Robles
      </h1>

      <p
        className={`${playFair.className} z-20 flex items-center mt-5 font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span className="border-y-1 border-y-yellow-400 py-2">DOMINGO</span>{" "}
        <span className="text-4xl px-2 pb-2">30</span>{" "}
        <span className="border-y-1 border-y-yellow-400 py-2">OCTUBRE</span>
      </p>
      <p className={`${playFair.className} z-20 text-2xl text-yellow-400`}>
        2025
      </p>

      <p className={`${luxurious.className} text-orange-800 mt-3 text-sm px-5 text-center`}>
        Señor, hoy me presentan ante ti para ser bañada con la gracia de tu
        amor, toma mi pequeño corazón en tus benditas manos y jamás te separes
        de mí.
      </p>
    </section>
  );
}
