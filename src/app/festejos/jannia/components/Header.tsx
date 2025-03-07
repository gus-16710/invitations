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

export default function Header() {
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
        {/* <Image
          width={280}
          height={280}
          alt="Merlina Cartoon"
          src="/img/festejos/jannia/merlina.png"
          className="mb-5"
        /> */}
        <Image          
          width={280}
          height={280}
          alt="Merlina Cartoon"
          src="/img/festejos/jannia/merlina.png"
          className="mb-5 z-0"
        />
        <div className="bg-[url('/img/festejos/jannia/ribbon-purple.png')] bg-contain bg-no-repeat bg-center absolute w-80 h-36 -bottom-16" />
        <p
          className={`text-zinc-50 text-4xl mb-5 z-10 absolute -bottom-10 text-center`}
          style={{
            textShadow: "0px 2px 1px rgb(0,0,0)",
            fontFamily: "verve",
          }}
        >
          Jannia Monserrath
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
        - MIS 3 AÑOS -
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
          29
        </span>
        <span className="px-3 text-center border-x-4 border-purple-600/40 text-4xl h-20 flex items-center justify-center">
          Marzo
        </span>
        <span className="text-center text-5xl h-20 flex items-center justify-center">
          13
          <label className="text-base">Hrs</label>
        </span>
      </motion.div>
      <motion.p
        className={`${notoSans.className} text-zinc-100 mt-5`}
        variants={animate07}
        initial="hidden"
        whileInView="visible"
      >
        Iglesia San Salvador, Acajete.
      </motion.p>
    </section>
  );
}
