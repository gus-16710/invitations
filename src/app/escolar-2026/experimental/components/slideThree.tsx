import { cormorant, urbanist } from "./Fonts";
import { motion } from "framer-motion";
import { FaUserTie } from "react-icons/fa";

const enter = (i: number) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.15, duration: 0.55, ease: "easeOut" as const },
  viewport: { once: false, amount: 0.3 },
});

export default function SlideThree() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <motion.h2
        className={`${urbanist.className} text-zinc-50/60 text-sm tracking-[0.35em] uppercase`}
        {...enter(0)}
      >
        Directora
      </motion.h2>

      <motion.div
        className="my-6 flex items-center justify-center w-20 h-20 rounded-full border border-zinc-50/30"
        {...enter(1)}
      >
        <FaUserTie className="text-zinc-50 text-3xl" />
      </motion.div>

      <motion.h1
        className={`${cormorant.className} text-zinc-50 text-2xl text-center mx-10`}
        {...enter(2)}
      >
        Profa. María de Jesús Sánchez Flores
      </motion.h1>

      <motion.div
        className="flex items-center gap-3 w-40 mt-6"
        {...enter(3)}
      >
        <div className="flex-1 h-px bg-zinc-50/30" />
        <span className="text-[7px] text-zinc-50/50">&#10022;</span>
        <div className="flex-1 h-px bg-zinc-50/30" />
      </motion.div>
    </motion.section>
  );
}
