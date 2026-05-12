import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { notoSans } from "./Fonts";

const photos = [
  "/img/quinces/kaylani/photo01.jpeg",
  "/img/quinces/kaylani/photo02.jpeg",
  "/img/quinces/kaylani/photo03.jpeg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      className="flex justify-center items-center flex-col relative"
      style={{ height: "100svh" }}
    >
      {/* Ornamento superior */}
      <motion.div
        className="flex items-center gap-3 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.65))" }} />
        <span style={{ color: "#D8B18A", fontSize: "9px" }}>✦</span>
        <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, rgba(216,177,138,0.65))" }} />
      </motion.div>

      {/* Título */}
      <motion.h2
        className="text-center mb-1"
        style={{
          fontFamily: "rumble",
          color: "#4A2C63",
          fontSize: "2.4rem",
          letterSpacing: "0.15em",
          textShadow: "0 1px 3px rgba(58,35,74,0.25)",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        Galería
      </motion.h2>

      <motion.p
        className={`${notoSans.className} tracking-[0.3em] uppercase mb-8`}
        style={{ color: "#9B6DDB", fontSize: "0.65rem" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        ✦ Kaylani Gabriell ✦
      </motion.p>

      {/* Tres columnas escalonadas */}
      <div className="flex gap-4 items-center">
        {photos.map((src, i) => (
          <motion.button
            key={i}
            onClick={() => setSelected(src)}
            style={{ marginTop: i === 1 ? "-24px" : "24px" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 + i * 0.25, type: "spring", stiffness: 80, damping: 16 }}
            viewport={{ once: false, amount: 0.4 }}
            whileTap={{ scale: 0.96 }}
            className="focus:outline-none"
          >
            <div
              style={{
                width: "95px",
                height: "135px",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1.5px solid rgba(216,177,138,0.55)",
                boxShadow: i === 1
                  ? "0 8px 28px rgba(74,44,99,0.35), 0 0 0 4px rgba(205,166,245,0.14)"
                  : "0 4px 18px rgba(74,44,99,0.22)",
              }}
            >
              <img
                src={src}
                alt={`Foto ${i + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Texto hint */}
      <motion.p
        className={`${notoSans.className} mt-8 tracking-widest text-xs`}
        style={{ color: "#9B6DDB", opacity: 0.7 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ delay: 1 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        toca para ampliar
      </motion.p>

      {/* SVG decorativo fondo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height="220px"
        width="220px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        className="absolute -right-10 -bottom-16 pointer-events-none"
        fill="rgba(155,109,219,0.08)"
      >
        <g>
          <path d="M458.071,306.273l-9.519-21.579l-65.885,29.07l-43.103-24.899l74.607-32.879l-74.589-32.87l43.085-24.863   l65.885,29.07l9.536-21.624l-50.088-22.103l76.363-44.053l-13.318-23.044l-76.362,44.08l5.917-54.422l-23.47-2.561l-7.782,71.576   l-43.085,24.89l8.83-81.022l-65.777,48.152V117.43l58.123-42.542l-13.934-19.055l-44.19,32.354V0h-26.6v88.187l-44.17-32.354   l-13.952,19.055l58.122,42.542v49.762l-65.777-48.134l8.795,80.995l-43.049-24.882l-7.799-71.576l-23.47,2.561l5.916,54.422   l-76.344-44.08l-13.318,23.044l76.363,44.053l-50.088,22.103l9.519,21.624l65.867-29.07l43.122,24.863l-74.59,32.888l24.501,10.803   l50.089,22.076l-43.104,24.882l-65.885-29.07l-9.536,21.579l50.106,22.112l-76.399,44.099l13.354,23.054l76.363-44.098   l-5.935,54.412l23.47,2.551l7.781-71.594l43.068-24.863l-8.813,81.013l65.794-48.151v49.771l-58.122,42.525l13.952,19.036   l44.17-32.328V512h26.6v-88.188l44.19,32.328l13.934-19.036l-58.123-42.542v-49.736l65.777,48.143l-8.812-81.022l43.067,24.863   l7.818,71.594l23.434-2.551l-5.9-54.412l76.345,44.098l13.318-23.054l-76.381-44.099L458.071,306.273z" />
        </g>
      </svg>

      {/* Lightbox — renderizado en document.body via portal para escapar transforms de Splide */}
      {typeof window !== "undefined" && createPortal(
        <AnimatePresence>
          {selected && (
            <motion.div
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(58,35,74,0.92)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected}
                alt="Foto ampliada"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  borderRadius: "20px",
                  border: "2px solid rgba(216,177,138,0.5)",
                  boxShadow: "0 8px 40px rgba(58,35,74,0.6)",
                  objectFit: "contain",
                }}
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.75, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
              />
              <motion.p
                className={`${notoSans.className} text-xs tracking-widest mt-6`}
                style={{ color: "rgba(205,166,245,0.7)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                toca para cerrar
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
