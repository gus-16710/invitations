"use client";

import Ceremony from "./components/Ceremony";
import Confirm from "./components/Confirm";
import DressCode from "./components/DressCode";
import Gifts from "./components/Gifts";
import Header from "./components/Header";
import Photography from "./components/Photography";
import Reception from "./components/Reception";

export default function Wedding() {
  return (
    <main className="max-w-3xl m-auto">
      <Header />
      <Ceremony />
      <Reception />
      <Photography urlImg={"/img/bodas/isabel-alan/gallery-01.jpg"} />
      <Gifts />
      <Photography urlImg={"/img/bodas/isabel-alan/gallery-03.jpg"} />
      <Confirm />
      <DressCode />
    </main>
  );
}
