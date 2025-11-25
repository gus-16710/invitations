import { Image } from "@nextui-org/react";
import { crimson, playfair } from "./Fonts";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="flex mt-5 border-y-1 border-black pb-1">
        <div className="flex flex-1 border-r-1 border-b-2 border-black justify-center items-center">
          <p
            className={`${playfair.className} text-center text-xs sm:text-sm md:text-base lg:text-xl`}
          >
            María & Pedro
          </p>
        </div>
        <p
          className="flex-2 border-b-2 border-black py-3 px-3 text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center"
          style={{
            fontFamily: "london",
            letterSpacing: "-1px",
          }}
        >
          Noticia de última hora
        </p>
        <div className="flex flex-1 border-l-1 border-b-2 border-black justify-center items-center">
          <p
            className={`${playfair.className} text-center text-xs sm:text-sm md:text-base lg:text-xl`}
          >
            14 Febrero 2026
          </p>
        </div>
      </div>

      <Image
        alt="Wedding"
        src="/img/bodas/example/title-wedding.jpg"
        width="100%"
        className="rounded-none border-t-1 pt-4 pb-4 border-b-2 border-black"
      />

      <div
        className={`${crimson.className} flex items-center justify-center gap-2 text-center border-y-1 border-b-2 border-black my-1 py-3 text-lg sm:text-3xl md:text-4xl lg:text-4xl`}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        SÁBADO, 14 DE FEBRERO 2026
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: -1 * 0.5,
          }}
        >
          <FaHeart />
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          alt="Wedding"
          src="/img/bodas/example/gallery-12.jpg"
          width="100%"
          className="rounded-none border-t-1 border-b-1 pb-5 border-black pt-5"
        />
      </motion.div>
    </>
  );
}
