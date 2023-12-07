"use client";

import Ceremony from "./components/Ceremony";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import { motion } from "framer-motion";
import Reception from "./components/Reception";
import GodParents from "./components/GodParents";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Confirm from "./components/Confirm";

export default function Fifteen() {
  return (
    <>
      <motion.div className="max-w-3xl m-auto bg-[url('/img/fifteen/background-paper.jpg')] bg-center bg-cover bg-fixed">
        <Header />
        <Presentation />
        <Ceremony />
        <Reception />
        <GodParents />
        <Gallery />
        <Gifts />
        <Confirm />
      </motion.div>
    </>
  );
}
