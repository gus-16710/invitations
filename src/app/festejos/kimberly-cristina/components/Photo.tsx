"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { greatVibes, playFair, glass } from "./Fonts";

export default function Photo() {
  return (
    <section
      className="relative flex justify-center items-center flex-col bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900"
      style={{ minHeight: "100svh", overflow: "hidden", padding: "4rem 1.5rem" }}
    >
      {/* Spotlights */}
      <motion.div
        className="absolute top-0 left-[10%] w-40 h-[70%] pointer-events-none origin-top z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(244,114,182,0.18), transparent)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.4, 1, 0.4], scaleX: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 left-[35%] w-48 h-[80%] pointer-events-none origin-top z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(192,132,252,0.2), transparent)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.6, 1, 0.6], scaleX: [1, 1.1, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute top-0 right-[10%] w-40 h-[70%] pointer-events-none origin-top z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(99,102,241,0.18), transparent)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.4, 1, 0.4], scaleX: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute top-0 right-[33%] w-32 h-[60%] pointer-events-none origin-top z-10"
        style={{
          background: "linear-gradient(to bottom, rgba(244,114,182,0.12), transparent)",
          clipPath: "polygon(40% 0%, 60% 0%, 100% 100%, 0% 100%)",
        }}
        animate={{ opacity: [0.3, 0.8, 0.3], scaleX: [1, 1.12, 1] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Patrón de puntos */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Encabezado */}
      <motion.p
        className={`${glass.className} text-rose-300 text-xs tracking-widest uppercase mb-5`}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Entretenimiento de la noche
      </motion.p>

      <motion.h2
        className={`${greatVibes.className} text-5xl text-rose-300 text-center mb-1`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        viewport={{ once: false }}
      >
        En Vivo
      </motion.h2>

      <motion.div
        className="h-px w-16 bg-rose-300 mb-5"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      />

      {/* Tarjetas de grupos */}
      <div className="flex flex-col gap-4 w-full max-w-sm">

        {/* Grupo A */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg bg-white"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: false }}
        >
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/img/festejos/kimberly-cristina/grupoa.jpeg"
              alt="Grupo musical A"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-black/40 backdrop-blur-sm px-4 py-3">
                <p className={`${playFair.className} text-white text-xl leading-tight`}>
                  Homenaje Tropical
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grupo B */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-lg bg-white"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: false }}
        >
          <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/img/festejos/kimberly-cristina/grupob.jpeg"
              alt="Grupo musical B"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0">
              <div className="bg-black/40 backdrop-blur-sm px-4 py-3">
                <p className={`${playFair.className} text-white text-xl leading-tight`}>
                  Ramón Hernández Diamantes
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Nota al pie */}
      <motion.p
        className={`${glass.className} text-slate-400 text-center mt-10 tracking-wide`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        viewport={{ once: false }}
      >
        ¡Una noche de música y celebración!
      </motion.p>
    </section>
  );
}
