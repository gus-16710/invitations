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

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 36 36"
        className="z-10 mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
          hidden: { opacity: 0, scale: 0.5 },
        }}
      >
        <path fill="#31373D" d="M24 14H12s-5 6-5 10s11 11 11 11s11-7 11-11s-5-10-5-10z" />
        <path fill="#292F33" d="M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.902.704 2.377.704 3.278 0l14.722-11.495c.902-.704.902-1.856 0-2.56L19.64 1.28z" />
        <path fill="#394146" d="M19.64 1.28c-.901-.704-2.377-.704-3.278 0L1.639 12.776c-.901.704-.901 1.856 0 2.56l14.722 11.495c.901.704 2.377.704 3.278 0l14.723-11.495c.901-.704.901-1.856 0-2.56L19.64 1.28z" />
        <path fill="#FCAB40" d="M8 25s-2 2-2 3v6s0 2 2 2s2-2 2-2v-6c0-1-2-3-2-3z" />
        <circle fill="#FDD888" cx="8" cy="26" r="3" />
        <path fill="#FCAB40" d="M8.001 27a1 1 0 0 1-1-1v-3.958c-.042-.634.187-2.036 1.317-2.884l9.022-7.91a1 1 0 0 1 1.318 1.504l-9.08 7.958C8.974 21.166 9 21.982 9 21.99L9.002 26a1 1 0 0 1-1.001 1z" />
        <circle fill="#31373D" cx="18" cy="13" r="3" />
      </motion.svg>

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
