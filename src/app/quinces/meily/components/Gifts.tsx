import { motion, Variants } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { cormorant, pinyon } from "./Fonts";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

// Sobrecitos que "llueven" detrás del sobre principal
const RAIN = [
  { left: "6%", delay: 0, duration: 4.2, size: 14, rotate: -20 },
  { left: "20%", delay: 1.6, duration: 5, size: 11, rotate: 15 },
  { left: "34%", delay: 0.8, duration: 4.6, size: 9, rotate: -10 },
  { left: "62%", delay: 2.2, duration: 4.4, size: 10, rotate: 25 },
  { left: "76%", delay: 0.4, duration: 5.2, size: 13, rotate: -15 },
  { left: "90%", delay: 1.2, duration: 4.8, size: 11, rotate: 10 },
];

const Envelope = () => (
  <svg width="170" height="118" viewBox="0 0 170 118" aria-hidden="true">
    <rect
      x="3"
      y="3"
      width="164"
      height="112"
      rx="6"
      fill="#fbf5ee"
      stroke="#991b1b"
      strokeWidth="1.5"
    />
    <path
      d="M3 113 L68 62 M167 113 L102 62"
      fill="none"
      stroke="#991b1b"
      strokeWidth="1"
      strokeOpacity="0.5"
    />
    <path
      d="M4 6 L85 68 L166 6"
      fill="#f5ebe0"
      stroke="#991b1b"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="85" cy="68" r="17" fill="#991b1b" />
    <circle
      cx="85"
      cy="68"
      r="13"
      fill="none"
      stroke="#f5ebe0"
      strokeOpacity="0.6"
      strokeWidth="0.8"
    />
    <text
      x="85"
      y="77"
      textAnchor="middle"
      fontSize="24"
      fill="#f5ebe0"
      style={{ fontFamily: pinyon.style.fontFamily }}
    >
      M
    </text>
  </svg>
);

export default function Gifts() {
  return (
    <section
      className="min-h-screen pt-24 pb-44 px-6 flex flex-col items-center justify-center relative"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, #fbf5ee 0%, #f5ebe0 50%, #e8d3bd 100%)",
      }}
    >
      {/* Ola roja invertida: continúa la sección de Recepción hacia abajo */}
      <div className="w-full absolute -top-px left-0 rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fillRule="evenodd"
          viewBox="0 0 1000 137"
          style={{ fill: "#991b1b" }}
        >
          <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
        </svg>
      </div>

      <motion.div
        className="relative z-20 w-full max-w-sm flex flex-col items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} text-red-900 text-sm font-semibold uppercase tracking-[0.4em]`}
        >
          Mesa de Regalos
        </motion.p>

        <motion.div variants={fadeUp} className="w-16 h-px bg-red-800/50 my-5" />

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} italic text-red-900 text-2xl leading-snug max-w-xs`}
        >
          “El mejor regalo que puedes darme es tu compañía...”
        </motion.p>

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} text-zinc-700 text-lg leading-snug mt-4 max-w-[17rem]`}
        >
          Pero si deseas llevarme un presente, habrá
        </motion.p>

        <motion.div
          variants={pop}
          className="relative w-full h-44 flex items-center justify-center mt-2"
        >
          {RAIN.map((drop, i) => (
            <motion.span
              key={i}
              className="absolute top-0 text-red-800/40"
              style={{ left: drop.left }}
              initial={{ y: -10, opacity: 0, rotate: drop.rotate }}
              animate={{
                y: [-10, 150],
                opacity: [0, 1, 1, 0],
                rotate: [drop.rotate, -drop.rotate],
              }}
              transition={{
                duration: drop.duration,
                delay: drop.delay,
                repeat: Infinity,
                ease: "easeIn",
              }}
            >
              <FaEnvelope style={{ fontSize: drop.size }} />
            </motion.span>
          ))}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="drop-shadow-md"
          >
            <Envelope />
          </motion.div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className={`${pinyon.className} text-red-800 text-5xl leading-tight`}
        >
          ¡Lluvia de sobres!
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} text-red-900 text-base font-semibold uppercase tracking-[0.35em] mt-5`}
        >
          ¡Gracias!
        </motion.p>
      </motion.div>

      <div className="w-full absolute -bottom-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="rgb(127, 29, 29)"
          fillRule="evenodd"
          viewBox="0 0 1000 137"
        >
          <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
        </svg>
      </div>
    </section>
  );
}
