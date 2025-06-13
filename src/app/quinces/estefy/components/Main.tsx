// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/react-splide/css";
import { animation05, animation06, animationWins } from "./Animations";
import Ceremony from "./Ceremony";
import Reception from "./Reception";
import Header from "./Header";
import Presentation from "./Presentation";
import AudioControl from "./AudioControl";
import Gifts from "./Gifts";
import { useState } from "react";
import Confirm from "./Confirm";
import Gallery from "./Gallery";
import Image from "next/image";

export default function Main() {
  const [splide, setSplide] = useState(0);

  return (
    <div className="max-w-3xl m-auto bg-[url('/img/quinces/estefy/glitter-background.jpg')] bg-center bg-cover shadow-large relative overflow-clip">
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
          arrows: true,
          classes: {
            page: "splide__pagination__page custom-class-page", // each button
          },
        }}
        className="z-10"
        onActive={(splide: any) => {
          console.log(splide.index);
          setSplide(splide.index);
        }}
      >
        <SplideSlide>
          <Header splide={splide} />
        </SplideSlide>
        <SplideSlide>
          <Presentation />
        </SplideSlide>
        <SplideSlide>
          <Ceremony splide={splide} />
        </SplideSlide>
        <SplideSlide>
          <Reception splide={splide} />
        </SplideSlide>
        <SplideSlide>
          <Gallery />
        </SplideSlide>
        <SplideSlide>
          <Confirm />
        </SplideSlide>
      </Splide>
      <AudioControl />
      <motion.div
        className="absolute z-10 top-4 right-5"
        variants={animationWins}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={"/img/quinces/estefy/wins.png"}
          alt=""
          width={100}
          height={100}
        />
      </motion.div>
      <motion.div
        className="bg-[url('/img/quinces/estefy/header-01.png')] bg-cover bg-bottom absolute inset-0 z-0"
        variants={animation05}
        initial="hidden"
        whileInView="visible"
      />
      <motion.div
        className="bg-[url('/img/quinces/estefy/header-02.png')] bg-cover bg-bottom absolute inset-0 z-0"
        variants={animation06}
        initial="hidden"
        whileInView="visible"
      />
    </div>
  );
}
