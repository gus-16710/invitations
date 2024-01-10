"use client";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";
// or only core styles
import "@splidejs/react-splide/css/core";
import { motion } from "framer-motion";

export default function Wedding() {
  return (
    <main className="max-w-3xl m-auto h-screen">
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          direction: "ttb",
          height: "100vh",
          wheel: true,
          releaseWheel: true,
          type: "loop",
          waitForTransition: true,
          //arrows: false
        }}
      >
        <SplideSlide>
          <section className="h-screen bg-[url('/img/bodas/diana-ernesto/gallery-01.jpg')] bg-cover bg-center flex items-center justify-center text-zinc-100">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}              
            >
              ONE
            </motion.h1>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="h-screen bg-[url('/img/bodas/diana-ernesto/gallery-02.jpg')] bg-cover bg-center flex items-center justify-center text-zinc-100">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              TWO
            </motion.h1>
          </section>
        </SplideSlide>
        <SplideSlide>
          <section className="h-screen bg-[url('/img/bodas/diana-ernesto/gallery-03.jpg')] bg-cover bg-center flex items-center justify-center text-zinc-100">
            <motion.h1
              className="text-6xl font-bold"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
            >
              THREE
            </motion.h1>
          </section>
        </SplideSlide>
      </Splide>
    </main>
  );
}
