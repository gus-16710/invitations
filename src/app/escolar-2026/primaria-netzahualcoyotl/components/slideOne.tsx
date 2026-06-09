import { nobile, oleo, ovo } from "./Fonts";
import { motion } from "framer-motion";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { FaHandPointer } from "react-icons/fa";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css"; 

const images = [
  {
    src: "/img/escolar-2026/primaria-netzahualcoyotl/generacion_.jpeg",
    width: 800,
    height: 600,
  },
];

const enter = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.1, duration: 0.55, ease: "easeOut" as const },
  viewport: { once: false, amount: 0.3 },
});

export default function SlideOne() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="flex items-center justify-center px-6"
      style={{ height: "100svh" }}
    >
      <motion.div
        className="flex flex-col items-center w-full max-w-xs px-8 gap-3.5"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        viewport={{ once: false, amount: 0.3 }}
      >

        {/* Foto en círculo */}
        <motion.div className="relative" {...enter(0)}>
          <img
            src={images[0].src}
            alt="Generación"
            className="w-36 h-36 rounded-full object-cover cursor-pointer"
            style={{
              boxShadow: "0 4px 20px rgba(0,0,0,0.18), 0 0 0 3px rgba(255,255,255,0.9)",
            }}
            onClick={() => setOpen(true)}
          />
          {/* Ícono flotante */}
          <motion.div
            className="absolute -bottom-1 -right-1 rounded-full p-2"
            style={{ background: "#006847" }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaHandPointer className="text-white text-xs" />
          </motion.div>
        </motion.div>

        {/* Etiqueta */}
        <motion.p
          className={`${nobile.className} text-[0.65rem] tracking-[0.38em] uppercase text-center`}
          style={{ color: "#006847" }}
          {...enter(1)}
        >
          Escuela Primaria Vespertina
        </motion.p>

        {/* Nombre */}
        <motion.h1
          className={`${ovo.className} text-[2.4rem] text-center leading-tight -mt-1`}
          style={{ color: "#006847" }}
          {...enter(2)}
        >
          Netzahualcóyotl
        </motion.h1>

        {/* Clave */}
        <motion.p
          className={`${nobile.className} text-[0.92rem] tracking-[0.22em] -mt-1`}
          style={{ color: "#006847aa" }}
          {...enter(3)}
        >
          30EPR3551M
        </motion.p>

        {/* Divisor */}
        <motion.div className="flex items-center gap-3 w-full" {...enter(4)}>
          <div className="flex-1 h-px" style={{ background: "#00684740" }} />
          <span className="text-[7px]" style={{ color: "#00684780" }}>✦</span>
          <div className="flex-1 h-px" style={{ background: "#00684740" }} />
        </motion.div>

        {/* Ceremonia */}
        <motion.p
          className={`${oleo.className} text-[2.2rem] leading-none`}
          style={{ color: "#006847" }}
          {...enter(5)}
        >
          Ceremonia
        </motion.p>

        {/* Subtítulo */}
        <motion.p
          className={`${nobile.className} text-[0.65rem] tracking-[0.35em] uppercase -mt-1`}
          style={{ color: "#006847" }}
          {...enter(6)}
        >
          de Fin de Cursos
        </motion.p>

        {/* Años */}
        <motion.p
          className={`${ovo.className} text-xl tracking-[0.22em] mt-1`}
          style={{ color: "#006847" }}
          {...enter(7)}
        >
          2020 — 2026
        </motion.p>

      </motion.div>

      <Lightbox
        open={open}
        slides={images}
        close={() => setOpen(false)}
        controller={{
          closeOnBackdropClick: true,
          closeOnPullDown: true,
          closeOnPullUp: true,
        }}
        plugins={[Thumbnails, Zoom, Fullscreen]}
      />
    </section>
  );
}
