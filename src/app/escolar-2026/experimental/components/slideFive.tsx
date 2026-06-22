"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { cormorant } from "./Fonts";

const text = `Queridos egresados, hoy cierran un capitulo lleno de aprendizajes, risas y momentos que los han transformado. Se llevan consigo no solo conocimientos, sino tambien la fortaleza de quienes nunca dejaron de intentarlo. El mundo los espera con los brazos abiertos. Sigan sonando en grande, porque el futuro les pertenece.`;

const list = {
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
  hidden: { opacity: 0 },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 15, stiffness: 150 },
  },
};

export default function SlideFive() {
  const textRef = useRef(null);
  const isInView = useInView(textRef, { amount: 0.3 });
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
      className="relative flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/escolar-2026/experimental/video.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 to-transparent" />

      <motion.p
        ref={textRef}
        className={`${cormorant.className} text-zinc-50 text-xl mx-10 text-center z-10 max-w-xl`}
        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}
        variants={list}
        initial="hidden"
        animate={controls}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
