import { motion } from "framer-motion";
import { notoSans } from "./Fonts";
//import Image from "next/image";
import {
  animate03,
  animate04,
  animate05,
  animate06,
  animate07,
} from "./Animations";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";

export default function Header({ splide }: { splide: number }) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    if (splide === 0) {
      setTimeout(() => {
        setDay(26);
        setHour(14);
      }, 500);
    } else {
      setDay(0);
      setHour(0);
    }
  }, [splide]);

  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.div
        className="relative flex justify-center mt-5"
        variants={animate03}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          width={280}
          height={280}
          alt="Merlina Cartoon"
          src="/img/festejos/megan-guadalupe/snow-white.png"
          className="mb-5 z-0"
        />
        <div className="bg-[url('/img/festejos/megan-guadalupe/ribbon-red.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16" />
        <p
          className={`text-zinc-50 text-4xl mb-5 z-10 absolute -bottom-10 text-center`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Megan Guadalupe
        </p>
      </motion.div>

      <motion.p
        className={`mt-10 text-4xl text-zinc-100 `}
        style={{
          fontFamily: "rumble",
          textShadow: "0px 2px 1px rgb(0,0,0)",
        }}
        variants={animate04}
        initial="hidden"
        whileInView="visible"
      >
        - MIS 3 AÑOS -
      </motion.p>

      <motion.p
        className={`mt-2 text-2xl text-zinc-100`}
        style={{
          fontFamily: "rumble",
          textShadow: "0px 1px 1px rgb(0,0,0)",
        }}
        variants={animate05}
        initial="hidden"
        whileInView="visible"
      >
        VEN Y FESTEJA CONMIGO
      </motion.p>
      <motion.div
        className="flex justify-center items-center mt-5 gap-x-5"
        style={{ fontFamily: "rumble", color: "#f5a524", textShadow: "0px 1px 1px rgb(0,0,0)", }}
        variants={animate06}
        initial="hidden"
        whileInView="visible"
      >
        <span className="text-center text-5xl h-20 flex items-center justify-end w-20">          
          <NumberFlow
            value={day}
            transformTiming={{
              delay: 2500,
              duration: 3500,
            }}
            trend={0}
            format={{ minimumIntegerDigits: 2 }}
          />
        </span>
        <span className="px-3 mt-4 pb-4 text-center border-x-2 border-yellow-900/60 text-4xl h-14 flex items-center justify-center">
          JULIO
        </span>
        <span className="text-center text-5xl h-20 flex items-center justify-center w-20">
          <NumberFlow
            value={hour}
            transformTiming={{
              delay: 2500,
              duration: 3500,
            }}
            trend={0}
            format={{ minimumIntegerDigits: 2 }}
          />:30
          <label className="text-base">Hrs</label>
        </span>
      </motion.div>
      <motion.p
        className={`${notoSans.className} text-zinc-100 mt-5 text-lg`}
        variants={animate07}
        initial="hidden"
        whileInView="visible"
        style={{textShadow: "0px 1px 1px rgb(0,0,0)",}}
      >
        Iglesia Santísima Trinidad, Tengonapa.
      </motion.p>
    </section>
  );
}
