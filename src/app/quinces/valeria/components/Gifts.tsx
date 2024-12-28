import React from "react";
import { luxurious, mea } from "./Fonts";
import { Avatar, Chip } from "@nextui-org/react";
import { motion } from "framer-motion";
import { header2 } from "./Animations";

function Gifts() {
  const openLink = (link: string) => window.open(link, "_blank");

  return (
    <section className="h-screen flex flex-col items-center justify-center overflow-clip bg-gradient-to-t from-blue-950 via-blue-900 to-blue-950">
      <motion.h1
        className={`${mea.className} text-6xl text-metallic py-7`}
        variants={header2.animation1}
        initial="hidden"
        whileInView="visible"
      >
        Mesa de Regalos
      </motion.h1>

      <motion.p
        className={`${luxurious.className} text-lg z-10 text-center my-5 text-zinc-300 max-w-md px-10`}
        variants={header2.animation2}
        initial="hidden"
        whileInView="visible"
      >
        Mi mayor regalo será tu presencia, pero si deseas obsequiarme un detalle
        te invito a participar en la lluvia de sobres o así mismo en la mesa de
        regalos de Liverpool:
      </motion.p>

      <motion.div
        variants={header2.animation3}
        initial="hidden"
        whileInView="visible"
      >
        <Avatar
          src="/img/quinces/valeria/liverpool-logo.png"
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
        variants={header2.animation4}
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
