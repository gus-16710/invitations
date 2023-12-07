"use client";

import "./styles.css";
import { useState } from "react";
import Header from "./components/Header";
import FloatinButton from "./components/FloatingButton";
import Presentation from "./components/Presentation";
import Location from "./components/Location";
import Itinerary from "./components/Itinerary";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import Confirm from "./components/Confirm";
import { AnimatePresence, motion } from "framer-motion";
import Opening from "./components/Opening";
import AudioControl from "./components/AudioControl";
import DressCode from "./components/DressCode";
import GodParents from "./components/GodParents";

export default function Wedding() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="max-w-3xl m-auto bg-[url('/img/wedding/background-main.jpg')] bg-center bg-cover bg-fixed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Header />
            <Presentation />            
            <GodParents />
            <Location />
            <DressCode />
            <Itinerary />            
            <Gallery />
            <Gifts />
            <Confirm />
            <FloatinButton />
            <AudioControl />
          </motion.div>
        ) : (
          <Opening setOpen={setOpen} />
        )}
      </AnimatePresence>
    </>
  );
}
