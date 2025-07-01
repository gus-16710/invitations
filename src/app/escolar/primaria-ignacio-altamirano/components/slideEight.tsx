import { Image } from "@nextui-org/react";

import { motion } from "framer-motion";


export default function SlideEight() {
  return (
    <motion.section
      className="flex flex-col justify-center items-center"
      style={{ height: "100svh" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      
      <img
        width={160}
        alt="logo"
        src="/img/escolar/primaria-ignacio-altamirano/logo.png"
        className="my-5"       
        style={{ filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))" }} 
      />
    </motion.section>
  );
}
