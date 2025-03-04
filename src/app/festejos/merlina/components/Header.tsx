import { motion } from "framer-motion";
import {
  aref,
  clicker,
  love,
  notoSans,
  notoSerif,
  oswald,
  playFair,
  rajdhani,
  rouge,
  ruge,
  yaseva,
} from "./Fonts";
import {
  animation01,
  animation02,
  headerText01,
  headerText02,
  headerText03,
} from "./Animations";
import Image from "next/image";

export default function Header() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <div className="relative flex justify-center mt-5">
        <Image
          width={180}
          height={180}
          alt="Merlina Cartoon"
          src="/img/festejos/merlina/merlina-cartoon.png"
          className="mb-5"
        />
        <div className="bg-[url('/img/festejos/merlina/ribbon-purple.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16" />
        <p
          className={`text-zinc-50 text-5xl mb-5 z-10 absolute -bottom-7`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Merlina
        </p>
      </div>

      <p
        className={`mt-10 text-4xl text-zinc-100`}
        style={{
          fontFamily: "rumble",
        }}
      >
        - MIS 3 AÑOS -
      </p>

      <p
        className={`mt-2 text-2xl text-zinc-100`}
        style={{
          fontFamily: "rumble",
        }}
      >
        VEN A CELEBRAR CONMIGO
      </p>

      <p
        className="flex justify-center mt-5 text-orange-500 items-center"
        style={{
          fontFamily: "rumble",
        }}
      >
        <span className="text-center border-r-3 border-purple-600/50 w-28 text-5xl h-16">
          12
        </span>
        <span className="text-center border-r-3 border-purple-600/50 w-28 text-4xl h-16">
          Marzo
        </span>
        <span className="text-center w-28 text-5xl">
          18 <label className="text-base block">Hrs</label>
        </span>
      </p>
    </section>
  );
}
