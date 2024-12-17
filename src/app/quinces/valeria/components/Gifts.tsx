import React from "react";
import { luxurious, mea } from "./Fonts";
import { Avatar, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { header } from "./Animations";

function Gifts() {
  const openLink = (link: string) => window.open(link, "_blank");

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover">
      <motion.h1
        className={`${mea.className} text-5xl text-sky-800`}
        variants={header.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mesa de Regalos
      </motion.h1>

      <motion.p
        className={`${luxurious.className} text-lg z-10 text-center mt-10 mb-5 text-zinc-700 max-w-md px-10`}
        variants={header.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Mi mayor regalo será tu presencia, pero si deseas obsequiarme un detalle
        te invito a participar en la lluvia de sobres o así mismo en la mesa de
        regalos de Liverpool:
      </motion.p>

      <motion.div
        variants={header.animation3}
        initial="hidden"
        whileInView="visible"
      >
        <Avatar
          src="/img/quinces/blank/liverpool-logo.png"
          isBordered
          className="my-5"
          size="lg"
          onClick={() =>
            openLink(
              "https://mesaderegalos.liverpool.com.mx/milistaderegalos/51578705"
            )
          }
        />
      </motion.div>

      <motion.div
        variants={header.animation4}
        initial="hidden"
        whileInView="visible"
      >
        <Chip color="danger" className="mt-5">
          N° del Evento 51578705
        </Chip>
      </motion.div>
    </section>
  );
}

export default Gifts;
