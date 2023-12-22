"use client";

import Image from "next/image";
import Header from "./components/Header";

export default function Fifteen() {
  return (
    <main className="max-w-3xl m-auto relative">
      <Header />
      <section className="h-screen" style={{ backgroundColor: "#f4e1d1"}}> Section Two</section> 
      <div className="bg-[url('/img/quinces/camila/floral-background.png')] bg-cover bg-no-repeat bg-center w-full h-screen fixed top-0"></div>    
    </main>
  );
}
