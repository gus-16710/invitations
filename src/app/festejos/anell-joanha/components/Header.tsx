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
        setDay(1);
        setHour(19);
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
          src="/img/festejos/anell-joanha/halloween9.png"
          className="mb-5 z-0"
        />
        <div className="bg-[url('/img/festejos/anell-joanha/ribbon-purple.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16" />
        <p
          className={`text-zinc-50 text-4xl mb-9 z-10 absolute -bottom-10 text-center`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Anell Joanha
        </p>
      </motion.div>

      <motion.p
        className={`mt-10 text-4xl text-zinc-100 `}
        style={{
          fontFamily: "rumble",
        }}
        variants={animate04}
        initial="hidden"
        whileInView="visible"
      >
        - MI CUMPLEAÑOS -
      </motion.p>

      <motion.p
        className={`mt-2 text-2xl text-zinc-100`}
        style={{
          fontFamily: "rumble",
        }}
        variants={animate05}
        initial="hidden"
        whileInView="visible"
      >
        VEN Y FESTEJA CONMIGO
      </motion.p>
      <motion.div
        className="flex justify- items-center mt-5 gap-x-4"
        style={{ fontFamily: "rumble", color: "#f5a524" }}
        variants={animate06}
        initial="hidden"
        whileInView="visible"
      >
        <span className="text-center text-5xl h-20 flex items-center justify-center">          
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
        <span className="px-3 text-center border-x-4 border-purple-600/40 text-4xl h-20 flex items-center justify-center">
          Noviembre
        </span>
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          <NumberFlow
            value={hour}
            transformTiming={{
              delay: 2500,
              duration: 3500,
            }}
            trend={0}
            format={{ minimumIntegerDigits: 2 }}
          />
          <label className="text-base">Hrs</label>
        </span>
      </motion.div>
      <motion.p
        className={`${notoSans.className} text-zinc-100 mt-5`}
        variants={animate07}
        initial="hidden"
        whileInView="visible"
      >
        Código de Vestimenta: Disfraz Obligatorio
      </motion.p>
    </section>
  );
}
