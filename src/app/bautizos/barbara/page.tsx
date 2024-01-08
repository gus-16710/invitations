"use client";

import { Flowbite, FlowbiteCarouselTheme, Carousel } from "flowbite-react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Ceremony from "./components/Ceremony";
import Reception from "./components/Reception";
import GodParents from "./components/GodParents";

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
      off: "bg-gray-800/50 hover:bg-gray-800",
      on: "bg-gray-800 dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/10 group-hover:bg-gray-800/30 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-grat-800 dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
    snap: "snap-x",
  },
};

export default function Christening() {
  return (
    <main
      className="bg-[url('/img/bautizos/barbara/background-flowers.jpg')] bg-center bg-cover"
      style={{ height: "100svh" }}
    >
      <Flowbite>
        <Carousel theme={customTheme} slideInterval={5000} slide={false}>
          <div className="max-w-3xl">
            <Header />
          </div>
          <div className="max-w-3xl">
            <Presentation />
          </div>
          <div className="max-w-3xl">
            <Ceremony />
          </div>
          <div className="max-w-3xl">
            <Reception />
          </div>
          <div className="max-w-3xl">
            <GodParents />
          </div>
        </Carousel>
      </Flowbite>
    </main>
  );
}
