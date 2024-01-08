import { Image } from "@nextui-org/react";
import { denk, glass, luxurious, mea, playFair } from "./Fonts";

export default function Header() {
  return (
    <section className="flex flex-col justify-center items-center">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width="75px"
      >
        <path
          style={{ fill: "#FFDB6C;" }}
          d="M406.129,117.954H290.349V12.756c0-7.76-4.997-12.756-12.757-12.756h-42.836  c-7.76,0-14.402,4.996-14.402,12.756v105.199H106.218c-7.76,0-14.188,6.211-14.188,13.972v42.836c0,7.76,6.428,14.484,14.188,14.484  h114.136v307.406c0,7.76,6.642,15.348,14.403,15.348h42.836c7.76,0,12.757-7.588,12.757-15.348V189.246h115.781  c7.76,0,13.84-6.723,13.84-14.484v-42.836C419.969,124.166,413.891,117.954,406.129,117.954z"
        />
        <rect
          x="220.354"
          y="190.542"
          style={{ fill: "#FFB04C;" }}
          width="69.995"
          height="24.628"
        />
      </svg> */}
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

      <p className={`${luxurious.className} text-orange-800 mt-3 text-sm`}>
        Señor, hoy me presentan ante ti para ser bañada con la gracia de tu
        amor, toma mi pequeño corazón en tus benditas manos y jamás te separes
        de mí.
      </p>
    </section>
  );
}
