"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import SlideOne from "./components/slideOne";
import SlideTwo from "./components/slideTwo";
import SlideThree from "./components/slideThree";
import "@splidejs/react-splide/css";
import SlideFour from "./components/slideFour";
import SlideFive from "./components/slideFive";

export default function School() { 
  return (
    <main className="bg-[url('/img/escolar/telebachillerato-las-trancas/background.jpg')] bg-center bg-cover">
      <Splide
        aria-label="Telebachillerato Las Trancas"
        options={{
          rewind: true,
          direction: "ltr",
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
        <SplideSlide>
          <SlideFour />
        </SplideSlide>
        <SplideSlide>
          <SlideFive />
        </SplideSlide>
      </Splide>
    </main>
  );
}
