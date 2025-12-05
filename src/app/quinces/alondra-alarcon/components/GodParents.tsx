import { godParents } from "./Animations";
import { dancing, playFair, quickSand } from "./Fonts";
import { motion } from "framer-motion";
import { Carousel, Flowbite, FlowbiteCarouselTheme } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDynamicHeight } from "../hooks/useDynamicHeight";

const customTheme: FlowbiteCarouselTheme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-zinc-800/50 hover:bg-gray-800",
      on: "bg-zinc-400 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-zinc-400/10 group-hover:bg-zinc-400/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-zinc-400 dark:text-zinc-400 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function GodParents() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string }>>([]);

  useEffect(() => {
    // Solo se ejecuta en el cliente
    const newParticles = Array.from({ length: 15 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }));
    setParticles(newParticles);
  }, []);

  const height = useDynamicHeight();

  return (
    <section
      className="flex flex-col items-center justify-center relative z-10 overflow-hidden "
      style={{height}}      
    >
     <div className="absolute inset-0 overflow-hidden">
        {/* Partículas doradas - solo en cliente */}
        {particles.map((pos, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-yellow-500/50 rounded-full"
            style={{
              left: pos.left,
              top: pos.top,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <Flowbite>
        <Carousel theme={customTheme}>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-700 flex-col px-5 text-center gap-10">
            <motion.p
              className={`${dancing.className} text-6xl pb-4 text-yellow-600`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Padrinos
            </motion.p>
            <motion.p
              className={`${quickSand.className} text-amber-800 text-lg`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Nelson Romero Márquez <br />&<br /> Karen Jhoselin Mendoza
              Gonalzález
            </motion.p>
          </div>
          <div className="flex h-full items-center justify-center pb-10 text-zinc-700 flex-col px-5 text-center gap-10">
            <motion.p
              className={`${dancing.className} text-6xl pb-4 text-yellow-600`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Padres
            </motion.p>
            <motion.p
              className={`${quickSand.className} text-amber-800 text-lg`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Edith Samantha Clemente Márquez <br />&<br /> David Rivera Reyes{" "}
            </motion.p>
          </div>
        </Carousel>
      </Flowbite>
    </section>
  );
}
