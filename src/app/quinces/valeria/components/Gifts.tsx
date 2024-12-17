import React from "react";
import { luxurious, mea } from "./Fonts";
import { Avatar, Chip } from "@nextui-org/react";

function Gifts() {
  const openLink = (link: string) => window.open(link, "_blank");

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg.jpg')] bg-center bg-cover">
      <h1 className={`${mea.className} text-5xl text-sky-800`}>
        Mesa de Regalos
      </h1>

      <p
        className={`${luxurious.className} text-lg z-10 text-center mt-10 mb-5 text-zinc-700 max-w-md px-10`}
      >
        Mi mayor regalo será tu presencia, pero si deseas obsequiarme un detalle
        te invito a participar en la lluvia de sobres o así mismo en la mesa de
        regalos de Liverpool:
      </p>

      <Avatar
        src="/img/quinces/blank/liverpool-logo.png"
        isBordered        
        className="my-5"
        size="lg"
        onClick={() => openLink("https://mesaderegalos.liverpool.com.mx/milistaderegalos/51578705")}
      />

      <Chip color="danger" className="mt-5">N° del Evento 51578705</Chip>
    </section>
  );
}

export default Gifts;
