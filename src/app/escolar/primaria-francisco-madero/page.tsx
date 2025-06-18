"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";

import "./styles.css";

export default function School() {
  return (
    <main className="bg-[url('/img/escolar/primaria-francisco-madero/background05.jpg')] bg-center bg-cover">      
      <Splide
        aria-label="Francisco I. Madero"
        options={{
          rewind: true,
          direction: "ttb",
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
      >
        <SplideSlide>
          <SlideOne />
        </SplideSlide>
        <SplideSlide>
          <SlideTwo />
        </SplideSlide>
        <SplideSlide>
          <SlideThree />
        </SplideSlide> 
        <SplideSlide>
          <SlideFour />
        </SplideSlide>        
      </Splide>
    </main>
  );
}
