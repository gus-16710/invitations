import { motion } from "framer-motion";
import { notoSerif, oswald, playFair, rouge } from "./Fonts";
import {
  animation01,
  animation02,
  headerText01,
  headerText02,
  headerText03,
} from "./Animations";

export default function Header() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.h1
        className={`${rouge.className} text-6xl flex items-cente custom-text-purple z-20`}
        variants={headerText01}
        initial="hidden"
        whileInView="visible"
      >
        Quinceañera
      </motion.h1>
      <motion.h2
        className={`${notoSerif.className} text-xl custom-text-purple`}
        variants={headerText01}
        initial="hidden"
        whileInView="visible"
      >
        CELEBRATION
      </motion.h2>
      <motion.h2
        className={`${notoSerif.className} custom-text-purple`}
        variants={headerText01}
        initial="hidden"
        whileInView="visible"
      >
        honoring
      </motion.h2>

      <div className="relative h-72 w-80 flex items-center justify-center">
        <motion.div
          className="bg-[url('/img/quinces/sarang/fifteen-girl.jpg')] bg-contain bg-no-repeat bg-center absolute w-60 h-60 rounded-full mb-2"
          variants={animation01}
          initial="hidden"
          whileInView="visible"
        />
        <motion.div
          className="bg-[url('/img/quinces/sarang/header-03-1.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full"
          variants={animation02}
          initial="hidden"
          whileInView="visible"
        />
      </div>
      <motion.p
        className={`text-4xl custom-text-purple z-20`}
        style={{
          textShadow: "0px 1px 1px rgba(255,255,255, 1)",
          fontFamily: "adelia",
        }}
        variants={headerText02}
        initial="hidden"
        whileInView="visible"
      >
        Sarang Gómez
      </motion.p>
      <motion.div
        className="relative mt-8 custom-text-purple"
        variants={headerText03}
        initial="hidden"
        whileInView="visible"
      >
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <svg width="150" height="80">
            <path
              id="curve"
              d="M10,70 C40,10 110,10 140,70"
              fill="transparent"
            />
            <text
              fontSize="18"
              fill="#63117d"
              className={`${notoSerif.className}`}
            >
              <textPath href="#curve" startOffset="50%" textAnchor="middle">
                DECEMBER
              </textPath>
            </text>
          </svg>
        </div>

        {/* Texto principal con "SUNDAY 8th 6:00 P.M." */}
        <p
          className={`${notoSerif.className} z-20 flex items-center mt-10 font-bold`}
        >
          <span className="py-2 text-2xl">SUNDAY</span>{" "}
          <span
            className={`${oswald.className} text-3xl mx-3 bg-purple-950 rounded-full text-amber-100 h-16 w-16 text-center flex justify-center items-center pb-1`}
          >
            8th
          </span>{" "}
          <span className="py-2 text-2xl">6:00 P.M.</span>
        </p>
      </motion.div>
      <motion.p
        className={`${playFair.className} z-20 text-3xl custom-text-purple`}
        variants={headerText03}
        initial="hidden"
        whileInView="visible"
      >
        2024
      </motion.p>
    </section>
  );
}
