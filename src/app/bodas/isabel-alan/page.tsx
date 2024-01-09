"use client";

import Ceremony from "./components/Ceremony";
import Confirm from "./components/Confirm";
import DressCode from "./components/DressCode";
import FloatinButton from "./components/FloatingButton";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Photography from "./components/Photography";
import Reception from "./components/Reception";

export default function Wedding() {
  return (
    <main
      style={{
        backgroundColor: "#000000",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23DDDDDC'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-3xl m-auto shadow-large bg-white">
        <Header />
        <Ceremony />
        <Reception />
        <Photography urlImg={"/img/bodas/isabel-alan/gallery-02.jpg"} />
        <Gifts />
        <Photography urlImg={"/img/bodas/isabel-alan/gallery-03.jpg"} />
        <DressCode />
        <Gallery />
        <Confirm />
        <FloatinButton />
      </div>
    </main>
  );
}
