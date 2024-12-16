import React from "react";
import { luxurious, mea } from "./Fonts";
import { Chip } from "@nextui-org/react";

function Gifts() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg2.jpg')] bg-center bg-cover">
      <h1 className={`${mea.className} text-5xl text-sky-800`}>
        Mesa de Regalos
      </h1>

      <p
        className={`${luxurious.className} text-lg z-10 text-center mt-10 text-zinc-700 max-w-md px-10`}
      >
        Mi mayor regalo será tu presencia, pero si deseas obsequiarme un detalle
        te invito a participar en la lluvia de sobres o así mismo en la mesa de
        regalos de Liverpool <Chip color="danger">N° del Evento 51578705</Chip>
      </p>
    </section>
  );
}

export default Gifts;
