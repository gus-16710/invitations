"use client";

import { useState } from "react";
import { Image } from "@nextui-org/react";
import { FaHeart, FaRegPlayCircle } from "react-icons/fa";
import { crimson, italianno, mate, playfair } from "./components/Fonts";
import { FaPersonHalfDress } from "react-icons/fa6";
import { motion } from "framer-motion";

import PhotoAlbum from "react-photo-album";
import NextJsImage from "./components/NextJsImage";

import "./styles.css";

const images = [
  {
    src: "/img/bodas/diana-ernesto/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/bodas/diana-ernesto/gallery-03.jpg",
    width: 800,
    height: 600,
  },
];

const itinerary = [
  {
    time: "18:00 Hrs",
    event: "Ceremonia  Religiosa",
  },
  {
    time: "19:00 Hrs",
    event: "Boda Civil",
  },
  {
    time: "20:00 Hrs",
    event: "Recepción",
  },
  {
    time: "21:00 Hrs",
    event: "Cena",
  },
  {
    time: "22:00 Hrs",
    event: "Baile",
  },
  {
    time: "03:00 Hrs",
    event: "Termino del Evento",
  },
];

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.8,
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const element = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -100 },
};

export default function Wedding() {
  const [index, setIndex] = useState(-1);

  return (
    <main className="max-w-3xl m-auto p-4 shadow-2xl overflow-clip">
      <motion.div
        className="flex items-center justify-center gap-5 bg-gray-200 p-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className={`${playfair.className} text-sm md:text-xl lg:text-2xl`}>
          Dale play para escuchar nuestra canción
        </p>
        <button type="button">
          <FaRegPlayCircle size={30} />
        </button>
      </motion.div>

      <motion.div
        className="flex mt-5 border-y-1 border-gray-800 pb-1"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-1 border-r-1 border-b-2 border-gray-800 justify-center items-center">
          <p
            className={`${playfair.className} text-center text-xs sm:text-sm md:text-base lg:text-xl`}
          >
            Vanessa & Susana
          </p>
        </div>
        <p
          className="flex-2 border-b-2 border-gray-800 py-3 px-3 text-3xl sm:text-5xl md:text-6xl lg:text-6xl text-center"
          style={{
            fontFamily: "london",
            letterSpacing: "-1px",
          }}
        >
          Noticia de última hora
        </p>
        <div className="flex flex-1 border-l-1 border-b-2 border-gray-800 justify-center items-center">
          <p
            className={`${playfair.className} text-center text-xs sm:text-sm md:text-base lg:text-xl`}
          >
            11 Diciembre 2025
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          alt="Wedding"
          src="/img/bodas/vanessa-susana/title-wedding.jpg"
          width="100%"
          className="rounded-none border-t-1 pt-4 pb-4 border-b-2 border-gray-800"
        />
      </motion.div>

      <motion.p
        className={`${crimson.className} flex items-center justify-center gap-2 text-center border-y-1 border-b-2 border-gray-800 my-1 py-3 text-lg sm:text-3xl md:text-4xl lg:text-4xl`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FaHeart />
        <FaHeart /> JUEVES, 11 DE DICIEMBRE 2025 <FaHeart />
        <FaHeart />
      </motion.p>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          alt="Wedding"
          src="https://images.unsplash.com/photo-1480618376353-2950ee462b17?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          width="100%"
          className="rounded-none border-t-1 border-b-1 pb-5 border-gray-800 pt-5"
        />
      </motion.div>

      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`${crimson.className} text-5xl text-center pt-3`}
      >
        Vanessa & Susana
      </motion.h1>

      <div className="flex items-center">
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Han sido flechadas
        </p>
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <p className={`${playfair.className} text-justify mt-3`}>
        Con gran alegría, nos complace anunciar que hemos decidido unir nuestras
        vidas en matrimonio. Este día especial es el comienzo de un nuevo
        capítulo en nuestra historia, un capitulo que queremos escribir junto a
        ustedes, nuestros amigos y familiares más queridos.
      </p>

      <p
        className={`${crimson.className} text-center mt-5 text-lg bg-gray-800 text-white rounded-sm`}
      >
        CON LA BENDCIÓN DE NUESTROS PADRES
      </p>

      <div
        className={`${crimson.className} mt-5 flex items-center justify-center`}
      >
        <div className="w-full border-r-1 border-gray-800">
          <p className="text-center">
            PADRES DEL NOVIO <br />
            Jose Franco Olivera Sosa <br />
            Claudia Alves Fuentes
          </p>
        </div>
        <div className="w-full">
          <p className="text-center">
            PADRES DE LA NOVIA <br />
            Jose Franco Olivera Sosa <br />
            Claudia Alves Fuentes
          </p>
        </div>
      </div>

      <p className={`${crimson.className} text-center mt-3`}>&</p>

      <p className={`${crimson.className} text-center mt-3`}>
        NUESTROS PADRINOS DE HONOR <br />
        Ronald Gómez Gutierrez <br />
        Carmen Vera Pómes
      </p>

      <p
        className={`${playfair.className} text-center mt-5 text-xl sm:text-3xl md:text-4xl `}
      >
        ¡LLEGA LA BODA MÁS ESPERADA!
      </p>
      <div className="w-100 border-t-2 border-gray-800 mt-2" />
      <div className="w-100 border-t-1 border-gray-800 mt-1" />

      <Image
        alt="Wedding"
        src="https://images.unsplash.com/photo-1643816276725-1286595d1598?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735"
        width="100%"
        className="rounded-none border-t-1 pb-5 border-gray-800 pt-5"
      />

      <div className="flex items-center">
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Nuestra Historia
        </p>
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex mt-5">
        <div>
          <p className={`${playfair.className} text-justify`}>
            Nos conocimos en el trabajo, sin imaginar que, entre tareas, y
            convivencias encontraríamos algo mucho más importante: la una a la
            otra… Desde aquel 28 de diciembre hemos reído, madurado, llorado un
            poquito pero siempre juntas y aprendimos que el amor verdadero se
            construye día a día.
          </p>
          <p className={`${playfair.className} text-justify mt-3`}>
            ¡Poco a poco empezamos a crecer emocionalmente hasta que llego el
            capítulo más emocionante!! “NOS CASAMOS” y porque en algún momento
            fuiste cómplice de una risa, un consejo, un abrazo o una anécdota,
            tú también eres parte de esta historia.
          </p>
          <p className={`${playfair.className} text-justify mt-3`}>
            Es por eso que estas cordialmente invitado/a a celebrar con nosotras
            este día tan especial.
          </p>

          <div className="mt-5">
            <PhotoAlbum
              layout="masonry"
              photos={images}
              onClick={({ index: current }) => setIndex(current)}
              renderPhoto={NextJsImage}
              columns={1}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center mt-10">
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: -50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
        <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
          Programa de boda
        </p>
        <motion.div
          className="flex-1 border-b-1 border-gray-800"
          initial={{ x: 50 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="flex mt-5 gap-3 flex-row-reverse">
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-gray-300 p-3 border-1 border-gray-800 rounded-sm">
            <p
              className={`${crimson.className} text-lg border-b-1 border-gray-800 mb-4 text-center`}
              style={{ fontWeight: "bolder" }}
            >
              Ceremonia Religiosa
            </p>

            <p className={`${crimson.className} text-center`}>
              Hora 06:00 pm <br />
              "Tempo de San Francisco" <br />
              Ciudad de Mexico
            </p>

            <button className="bg-gray-800 py-2 w-full text-zinc-200 mt-4 rounded-sm">
              {" "}
              Ver mapa
            </button>
          </div>

          <div className="bg-gray-300 p-3 border-1 border-gray-800 rounded-sm">
            <p
              className={`${crimson.className} text-lg border-b-1 border-gray-800 mb-4 text-center`}
              style={{ fontWeight: "bolder" }}
            >
              Ceremonia Religiosa
            </p>

            <p className={`${crimson.className} text-center`}>
              Hora 06:00 pm <br />
              "Tempo de San Francisco" <br />
              Ciudad de Mexico
            </p>

            <button className="bg-gray-800 py-2 w-full text-zinc-200 mt-4 rounded-sm">
              {" "}
              Ver mapa
            </button>
          </div>
        </div>
        <div className="flex-1">
          <motion.ol
            className="relative border-s border-gray-700"
            initial="hidden"
            whileInView="visible"
            variants={list}
          >
            {itinerary.map((item, index) => (
              <div key={index}>
                <li className="mb-7 ms-4">
                  <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5  "></div>
                  <motion.div variants={element}>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                      {item.time}
                    </time>
                    <h3
                      className={`${playfair.className} text-base font-semibold text-gray-900 dark:text-white`}
                    >
                      {item.event}
                    </h3>
                  </motion.div>
                </li>
              </div>
            ))}
          </motion.ol>
        </div>
      </div>

      <motion.p
        className={`${crimson.className} bg-gray-800 text-zinc-100 p-5 mt-5 text-center text-lg`}
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Amamos a los niños, pero creemos que esta noche se merecen disfrutar
        solo como pareja, por eso en esta ocasión será solo para adultos.
      </motion.p>

      <motion.div
        className="bg-gray-300 p-5 mt-5 border-1 border-gray-800 rounded-sm"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center">
          <div className="flex-1 border-b-1 border-gray-800" />
          <p className={`${italianno.className} flex-2 px-5 text-4xl`}>
            Dress Code
          </p>
          <div className="flex-1 border-b-1 border-gray-800" />
        </div>
        <p className={`${mate.className} text-center`}>Elengate - Formal</p>
        <div className="flex justify-center m-5">
          <FaPersonHalfDress size={40} />
        </div>
        <p className={`${mate.className} text-center`}>Ellas: Vestido largo</p>
        <p className={`${mate.className} text-center`}>
          Ellos: Traje y corbata
        </p>

        <p className={`${crimson.className} text-center mt-5`}>
          (Se reserva el color blanco para la Novia)
        </p>
      </motion.div>
    </main>
  );
}
