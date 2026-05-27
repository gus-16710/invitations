import { motion, useInView, useAnimation } from "framer-motion";
import { cormorant } from "./Fonts";
import { useRef, useEffect } from "react";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 200 },
  },
};

export default function SlideFive() {
  const text = `"Tu esfuerzo valió, vale y valdrá la pena. Nunca pares, nunca te conformes hasta que lo bueno sea lo mejor y lo mejor sea lo excelente".`;

  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <motion.p
        ref={titleRef}
        className={`${cormorant.className} text-zinc-50 text-4xl mx-10 text-center max-w-3xl`}
        variants={list}
        initial="hidden"
        animate={controls}
      >
        {text.split("").map((letter, index) => {
          return (
            <motion.span key={index} variants={item}>
              {letter === "_" ? <>&nbsp;</> : letter}
            </motion.span>
          );
        })}
      </motion.p>
    </section>
  );
}
