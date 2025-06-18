"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";

export default function School() { 
  return (
    <main className="bg-[url('/img/escolar/jardin-esperanza-osorio/background03.jpg')] bg-center bg-fixed">
      <SlideOne />
      <SlideTwo />
      {/* <Splide
        aria-label="Esperanza Osorio"
        options={{
          rewind: true,
          direction: "none",
          height: "100svh",
          releaseWheel: true,
          type: "loop",
          waitForTransition: true,
          arrows: true,
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
      </Splide> */}
    </main>
  );
}
