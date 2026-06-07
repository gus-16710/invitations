"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cormorant } from "./Fonts";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { FaHandPointer } from "react-icons/fa";

const images = [
  "/img/escolar-2026/primaria-netzahualcoyotl/a.jpeg",
  "/img/escolar-2026/primaria-netzahualcoyotl/b.jpeg",
  "/img/escolar-2026/primaria-netzahualcoyotl/c.jpeg",
];

const text = `Queridos alumnos de la generación 2020–2026, han dejado huella en cada rincón de la Escuela Primaria Netzahualcóyotl. Se llevan con ustedes no solo aprendizajes, sino también risas, amistades y momentos que vivirán para siempre en su corazón. ¡Sigan adelante, con sueños grandes y alas fuertes para alcanzarlos!`;

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

export default function SlideFour() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="/img/escolar-2026/primaria-netzahualcoyotl/video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay gradiente */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 to-transparent" />

      {/* Círculo con slideshow */}
      <div className="relative z-10 mb-6">
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-full"
            style={{
              width: "160px",
              height: "160px",
              boxShadow: "0 0 0 3px rgba(255,255,255,0.8), 0 8px 30px rgba(0,0,0,0.4)",
            }}
          >
            <AnimatePresence>
              <motion.img
                key={current}
                src={images[current]}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onClick={() => setLightboxOpen(true)}
              />
            </AnimatePresence>
          </div>

          {/* Ícono flotante */}
          <motion.div
            className="absolute -bottom-1 -right-1 rounded-full p-2"
            style={{ background: "#006847" }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => setLightboxOpen(true)}
          >
            <FaHandPointer className="text-white text-xs" />
          </motion.div>
        </div>

        {/* Dots debajo del círculo */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300"
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                background: i === current ? "white" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Texto motivacional */}
      <motion.p
        className={`${cormorant.className} text-zinc-50 text-xl mx-10 text-center z-10 max-w-xl custom-shadow`}
        variants={list}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
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

      <Lightbox
        open={lightboxOpen}
        slides={images.map((src) => ({ src }))}
        index={current}
        close={() => setLightboxOpen(false)}
      />
    </section>
  );
}
