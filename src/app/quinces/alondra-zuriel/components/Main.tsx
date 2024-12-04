// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import Header from "./Header";
import Presentation from "./Presentation";

import "@splidejs/react-splide/css";
import { animation05, animation06 } from "./Animations";

export default function Main() {
  return (
    <div className="max-w-3xl m-auto bg-[url('/img/quinces/alondra/glitter-background.jpg')] bg-center bg-cover shadow-large">
     {/* <div className="max-w-3xl m-auto bg-slate-100 shadow-large"> */}
      <Splide
        aria-label="Daniela"
        options={{
          rewind: true,
          direction: "ltr",
          height: "100svh",
          wheel: true,
          releaseWheel: true,
          type: "loop",
          waitForTransition: true,
          arrows: false,
          classes: {
            page: "splide__pagination__page custom-class-page", // each button
          },
        }}
        className="z-10"
      >
        <SplideSlide>
          <Header />
        </SplideSlide>
        <SplideSlide>
          <Presentation />
        </SplideSlide>
        {/*
        <SplideSlide>
          <Ceremony />
        </SplideSlide>
        <SplideSlide>
          <Reception />
        </SplideSlide>
        <SplideSlide>
          <GodParents />
        </SplideSlide>
        <SplideSlide>
          <Gallery />
        </SplideSlide>
        <SplideSlide>
          <Gifts />
        </SplideSlide>
        <SplideSlide>
          <Confirm />
        </SplideSlide> */}
      </Splide>

      <motion.div
        className="bg-[url('/img/quinces/alondra/header-01.png')] bg-cover bg-bottom absolute inset-0 z-0"
        variants={animation05}
        initial="hidden"
        whileInView="visible"
      />
      <motion.div
        className="bg-[url('/img/quinces/alondra/header-02.png')] bg-cover bg-bottom absolute inset-0 z-0"
        variants={animation06}
        initial="hidden"
        whileInView="visible"
      />
    </div>
  );
}
