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
          width={280}
          height={280}
          alt="Merlina Cartoon"
          src="/img/festejos/merlina/merlina.png"
          className="mb-5"
        />
        <div className="bg-[url('/img/festejos/merlina/ribbon-purple.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16" />
        <p
          className={`text-zinc-50 text-6xl mb-5 z-10 absolute -bottom-7`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Merlina
        </p>
      </div>

      <p
        className={`mt-10 text-4xl text-zinc-100 `}
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

      {/* <div
        className="flex justify-center mt-5 text-orange-500 items-center"
        style={{
          fontFamily: "rumble",
        }}
      >
        <span className="text-center  w-28 text-5xl h-20 self-center">
          12
        </span>
        <span className="text-center border-x-3 border-purple-600/50 w-28 text-4xl h-20 self-center">
          Marzo
        </span>
        <span className="text-center  w-28 text-5xl h-20 self-center">
          18 <label className="text-base block">Hrs</label>
        </span>
      </div> */}
      <div
        className="flex justify- items-center mt-5 text-orange-500 gap-x-4"
        style={{ fontFamily: "rumble" }}
      >
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          12
        </span>
        <span className="px-3 text-center border-x-4 border-purple-600/40 text-4xl h-20 flex items-center justify-center">
          Marzo
        </span>
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          18
          <label className="text-base">Hrs</label>
        </span>
      </div>
    </section>
  );
}
