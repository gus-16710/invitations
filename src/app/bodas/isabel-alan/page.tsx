"use client";

import Ceremony from "./components/Ceremony";
import Header from "./components/Header";

export default function Wedding() {
  return (
    <main className="max-w-3xl m-auto">
      <Header />
      <Ceremony />
    </main>
  );
}
