import { useAnimate, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FloatinButton() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        animate(scope.current, {
          scale: 1,
          opacity: 1,
        });
      } else {
        animate(scope.current, {
          scale: 0,
          opacity: 0,
        });
      }
    });
  }, []);

  return (
    <motion.button
      type="button"
      className={`bg-slate-200/50 p-3 rounded-full text-zinc-800 fixed bottom-0 right-0 font-medium shadow-md mb-24 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-20`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      ref={scope}
      initial={{ opacity: 0, scale: 0 }}
    >
      <IoIosArrowUp />
    </motion.button>
  );
}
