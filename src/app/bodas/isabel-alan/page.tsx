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
        backgroundColor: "#f3f3f3",
        backgroundImage:
          "linear-gradient(135deg, #fafafa 25%, transparent 25%), linear-gradient(225deg, #fafafa 25%, transparent 25%), linear-gradient(45deg, #fafafa 25%, transparent 25%), linear-gradient(315deg, #fafafa 25%, #f3f3f3 25%)",
        backgroundPosition: "40px 0, 40px 0, 0 0, 0 0",
        backgroundSize: "40px 40px",
        backgroundRepeat: "repeat",
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
