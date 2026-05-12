import { motion } from "framer-motion";
import { aref, notoSans } from "./Fonts";
import { GiRose } from "react-icons/gi";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import {
  headerEntry01,
  headerEntry02,
  headerEntry03,
  headerEntry04,
  headerEntry05,
} from "./Animations";

const roses = [
  { top: "6%",  left: "4%",  size: 32, opacity: 0.18, delay: 0,   dur: 3.2 },
  { top: "12%", right: "6%", size: 26, opacity: 0.14, delay: 0.6, dur: 3.8 },
  { top: "32%", left: "2%",  size: 22, opacity: 0.11, delay: 1.0, dur: 4.1 },
  { top: "55%", right: "4%", size: 28, opacity: 0.15, delay: 0.4, dur: 3.5 },
  { top: "72%", left: "8%",  size: 20, opacity: 0.10, delay: 1.4, dur: 4.4 },
  { top: "82%", right: "9%", size: 24, opacity: 0.13, delay: 0.2, dur: 3.0 },
  { top: "4%",  left: "42%", size: 18, opacity: 0.09, delay: 0.9, dur: 4.8 },
  { top: "88%", left: "38%", size: 22, opacity: 0.11, delay: 1.6, dur: 3.6 },
  { top: "45%", left: "1%",  size: 16, opacity: 0.08, delay: 1.2, dur: 5.0 },
  { top: "25%", right: "2%", size: 18, opacity: 0.09, delay: 0.8, dur: 4.2 },
];

export default function Confirm() {
  return (
    <section
      className="relative flex justify-center items-center flex-col px-8"
      style={{ height: "100svh", overflow: "hidden" }}
    >
      {/* Rosas flotantes decorativas */}
      {roses.map((r, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: r.top,
            left: "left" in r ? r.left : undefined,
            right: "right" in r ? r.right : undefined,
            opacity: r.opacity,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: r.dur, repeat: Infinity, delay: r.delay, ease: "easeInOut" }}
        >
          <GiRose style={{ width: r.size, height: r.size, color: "#D8B18A" }} />
        </motion.div>
      ))}

      {/* Ornamento superior */}
      <motion.div
        className="flex items-center gap-3 mb-4"
        variants={headerEntry01}
        initial="hidden"
        whileInView="visible"
      >
        <div className="h-px w-14" style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.7))" }} />
        <span style={{ color: "#D8B18A", fontSize: "9px", letterSpacing: "0.4em" }}>✦</span>
        <div className="h-px w-14" style={{ background: "linear-gradient(to left, transparent, rgba(216,177,138,0.7))" }} />
      </motion.div>

      {/* Título */}
      <motion.h1
        className="text-center"
        style={{
          fontFamily: "rumble",
          color: "#4A2C63",
          fontSize: "2.5rem",
          letterSpacing: "0.1em",
          textShadow: "0 1px 3px rgba(58,35,74,0.25)",
        }}
        variants={headerEntry02}
        initial="hidden"
        whileInView="visible"
      >
        Confirma tu asistencia
      </motion.h1>

      {/* Subtítulo decorativo */}
      <motion.p
        className={`${notoSans.className} mt-1 tracking-[0.35em] uppercase`}
        style={{ color: "#9B6DDB", fontSize: "0.65rem" }}
        variants={headerEntry02}
        initial="hidden"
        whileInView="visible"
      >
        ✦ Kaylani Gabriell ✦
      </motion.p>

      {/* Divisor */}
      <motion.div
        className="flex items-center gap-3 my-5"
        variants={headerEntry03}
        initial="hidden"
        whileInView="visible"
      >
        <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.5))" }} />
        <GiRose style={{ width: 16, height: 16, color: "#D8B18A" }} />
        <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, rgba(216,177,138,0.5))" }} />
      </motion.div>

      {/* Texto principal */}
      <motion.p
        className={`${aref.className} text-center max-w-xs`}
        style={{ color: "#7B4FA3", lineHeight: "1.9", fontSize: "1rem" }}
        variants={headerEntry03}
        initial="hidden"
        whileInView="visible"
      >
        Espero que puedas venir a compartir con nosotros este día inolvidable.
        Por favor confirma tu presencia.
      </motion.p>

      <motion.p
        className={`${aref.className} text-center mt-2`}
        style={{ color: "#CDA6F5", fontSize: "1rem" }}
        variants={headerEntry04}
        initial="hidden"
        whileInView="visible"
      >
        Muchas gracias 💜
      </motion.p>

      {/* Divisor */}
      <motion.div
        className="flex items-center gap-3 my-6"
        variants={headerEntry04}
        initial="hidden"
        whileInView="visible"
      >
        <div className="h-px w-10" style={{ background: "linear-gradient(to right, transparent, rgba(216,177,138,0.4))" }} />
        <span style={{ color: "#D8B18A", fontSize: "8px" }}>✦</span>
        <div className="h-px w-10" style={{ background: "linear-gradient(to left, transparent, rgba(216,177,138,0.4))" }} />
      </motion.div>

      {/* Botones */}
      <motion.div
        className="flex flex-col gap-4 w-full max-w-xs z-10"
        variants={headerEntry05}
        initial="hidden"
        whileInView="visible"
      >
        {/* WhatsApp */}
        <button
          onClick={() => {
              const msg = encodeURIComponent("Hola, confirmo mi asistencia a la quinceañera de Kaylani Gabriell. ¡Muchas gracias por la invitación!");
              window.open(`https://wa.me/2285471672?text=${msg}`, "_blank");
            }}
          className={`${notoSans.className} flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl font-semibold tracking-wide text-sm text-white transition-transform active:scale-95`}
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
            boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
          }}
        >
          <FaWhatsapp size={22} />
          Mensaje de WhatsApp
        </button>

        {/* Llamada */}
        <button
          onClick={() => window.open("tel:2285471672", "_blank")}
          className={`${notoSans.className} flex items-center justify-center gap-3 w-full py-3.5 rounded-2xl font-semibold tracking-wide text-sm text-white transition-transform active:scale-95`}
          style={{
            background: "linear-gradient(135deg, #9B6DDB 0%, #7E4CC7 100%)",
            boxShadow: "0 4px 20px rgba(123,79,163,0.45)",
          }}
        >
          <FaPhoneAlt size={18} />
          Llamada Telefónica
        </button>
      </motion.div>

      {/* Acento inferior */}
      <motion.div
        className="flex items-center gap-2 mt-8"
        variants={headerEntry05}
        initial="hidden"
        whileInView="visible"
      >
        <div className="h-px w-6" style={{ background: "rgba(216,177,138,0.35)" }} />
        <GiRose style={{ width: 14, height: 14, color: "#D8B18A", opacity: 0.5 }} />
        <div className="h-px w-6" style={{ background: "rgba(216,177,138,0.35)" }} />
      </motion.div>
    </section>
  );
}
