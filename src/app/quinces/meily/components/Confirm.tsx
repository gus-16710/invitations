import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import { cormorant, pinyon } from "./Fonts";
import SproutFlourish from "./SproutFlourish";

const PHONE = "2281196168";
const WHATSAPP_LINK =
  `https://wa.me/52${PHONE}?text=` +
  encodeURIComponent(
    "¡Hola! Quiero confirmar mi asistencia a los XV años de Meily."
  );

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Confirm() {
  return (
    <section
      data-bg="dark"
      className="min-h-screen pt-20 pb-40 px-6 flex flex-col items-center justify-center relative"
      style={{ backgroundColor: "#7f1d1d" }}
    >
      <motion.div
        className="relative z-20 w-full max-w-sm flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SproutFlourish width={160} color="#f5ebe0" />

        <motion.h2
          variants={fadeUp}
          className={`${pinyon.className} text-[#f5ebe0] text-[2.6rem] leading-tight mt-4 whitespace-nowrap`}
        >
          Confirma tu asistencia
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} italic text-[#f5ebe0]/90 text-lg leading-snug mt-3 max-w-xs`}
        >
          Espero que puedas acompañarme a compartir este día inolvidable. Por
          favor confirma tu presencia.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-6 w-72">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cormorant.className} flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#f5ebe0] bg-[#f5ebe0] px-6 py-2 text-lg font-semibold tracking-wide text-red-900 shadow-md transition hover:bg-transparent hover:text-[#f5ebe0]`}
          >
            <FaWhatsapp className="text-xl" />
            Confirmar por WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className={`${cormorant.className} flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#f5ebe0] px-6 py-2 text-lg font-semibold tracking-wide text-[#f5ebe0] transition hover:bg-[#f5ebe0] hover:text-red-900`}
          >
            <FaPhoneAlt className="text-base" />
            Llamar
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="w-16 h-px bg-[#f5ebe0]/50 my-5" />

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} text-[#f5ebe0] text-sm font-semibold uppercase tracking-[0.35em]`}
        >
          ¡Muchas gracias!
        </motion.p>
        <motion.p
          variants={fadeUp}
          className={`${pinyon.className} text-[#f5ebe0] text-5xl leading-tight mt-1`}
        >
          Meily
        </motion.p>
      </motion.div>
    </section>
  );
}
