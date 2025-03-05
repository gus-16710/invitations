import { motion } from "framer-motion";
import { notoSans } from "./Fonts";
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
          className={`text-zinc-50 text-4xl mb-5 z-10 absolute -bottom-10 text-center`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Jannia Monserrath
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
        VEN Y FESTEJA CONMIGO
      </p>
      <div
        className="flex justify- items-center mt-5 gap-x-4"
        style={{ fontFamily: "rumble", color: "#f5a524" }}
      >
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          29
        </span>
        <span className="px-3 text-center border-x-4 border-purple-600/40 text-4xl h-20 flex items-center justify-center">
          Marzo
        </span>
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          13
          <label className="text-base">Hrs</label>
        </span>
      </div>
      <p className={`${notoSans.className} text-zinc-100 mt-5`}>
        Iglesia San Salvador, Acajete.
      </p>
    </section>
  );
}
