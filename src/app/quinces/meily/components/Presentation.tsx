import { motion, Variants } from "framer-motion";
import { cormorant, pinyon } from "./Fonts";
import SproutFlourish from "./SproutFlourish";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

export default function Presentation() {
  return (
    <section
      className="min-h-screen pt-28 pb-44 px-6 flex flex-col items-center justify-center relative"
      style={{ backgroundColor: "#f5ebe0", marginTop: "-5px" }}
    >
      <motion.div
        className="relative z-20 w-full max-w-sm flex flex-col items-center text-center rounded-t-full border border-red-800/30 bg-white/40 px-6 pt-16 pb-10 shadow-sm"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Segundo marco interior del arco */}
        <div className="absolute inset-2 rounded-t-full border border-red-800/15 pointer-events-none" />

        {/* Florido que "brota" desde el centro hacia los lados */}
        <SproutFlourish width={190} />

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} italic text-zinc-700 text-lg mt-5`}
        >
          Con la bendición de Dios y el amor de
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className={`${pinyon.className} text-red-800 text-5xl leading-tight mt-1`}
        >
          Mis Padres
        </motion.h2>

        <motion.div variants={fadeUp} className="flex flex-col items-center mt-5">
          <p
            className={`${cormorant.className} text-zinc-800 text-xl font-semibold uppercase tracking-[0.12em] leading-snug`}
          >
            Pedro Parra Meza
          </p>
          <span className={`${pinyon.className} text-red-800 text-4xl my-1`}>
            &amp;
          </span>
          <p
            className={`${cormorant.className} text-zinc-800 text-xl font-semibold uppercase tracking-[0.12em] leading-snug`}
          >
            Pamela Abisai
            <br />
            Cruz Aguilar
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="w-16 h-px bg-red-800/50 my-6"
        />

        <motion.p
          variants={fadeUp}
          className={`${cormorant.className} italic text-red-900 text-lg leading-snug max-w-[16rem]`}
        >
          Gracias por guiarme, cuidarme y llenar mi vida de amor. Este día
          también es de ustedes.
        </motion.p>
      </motion.div>

      <div className="w-full absolute bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="currentColor"
          fillRule="evenodd"
          viewBox="0 0 1000 137"
          style={{ fill: "#991b1b" }}
        >
          <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
        </svg>
      </div>
    </section>
  );
}
