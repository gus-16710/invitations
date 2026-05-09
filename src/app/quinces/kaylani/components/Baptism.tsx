import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import NextJsImage from "./NextJsImage";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { LuZoomIn } from "react-icons/lu";
import { useState } from "react";
import { roboto, greatVibes, playFair, aref } from "./Fonts";
import { FaHeart, FaDove, FaTint } from "react-icons/fa";

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: "easeOut" },
  },
});

const scaleIn = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      type: "spring",
      stiffness: 220,
      damping: 18,
    },
  },
});

export default function Baptism() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      className="relative flex justify-center items-center flex-col px-7 py-10"
      style={{ height: "100svh" }}
    >
      <Card
        className="border-none bg-background/5 h-full w-full"
        shadow="sm"
        radius="lg"
        isBlurred
      >
        <CardBody className="flex items-center justify-center flex-col overflow-clip">
          {/* Contenido principal  */}

          {/* ── Diseño Bautizo ── */}
          <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-xs px-2">
            {/* Paloma */}
            <motion.div
              variants={scaleIn(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center shadow-xl shadow-sky-200/60">
                <FaDove className="text-white text-2xl" />
              </div>
            </motion.div>

            {/* ─── BAUTIZO ─── */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-center gap-3 w-full"
            >
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-100" />
              <span
                className={`${playFair.className} text-xs tracking-[0.35em] uppercase text-zinc-100 font-semibold`}
              >
                Bautizo
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-sky-300" />
            </motion.div>

            {/* de */}
            <motion.p
              variants={fadeUp(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`${playFair.className} text-xs text-zinc-100 tracking-widest -mt-1`}
            >
              de
            </motion.p>

            {/* Cristina Yoleth */}
            <motion.h2
              variants={fadeUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`${greatVibes.className} text-5xl text-amber-400 leading-none -mt-1`}
              style={{
                //fontFamily: "rumble",
                textShadow: "0px 1px 1px rgb(0,0,0)",
              }}
            >
              Cristina Yoleth
            </motion.h2>

            {/* divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-zinc-100 to-transparent my-1"
            />

            {/* Descripción */}
            <motion.p
              variants={fadeUp(0.55)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className={`${aref.className} text-base text-zinc-100 text-center leading-relaxed`}
              style={{ textShadow: "0px 1px 1px rgb(0,0,0)" }}
            >
              Así mismo con inmensa alegría celebramos el sacramento del Bautismo, donde{" "}
              <span className="text-zinc-100 font-semibold">
                Cristina Yoleth
              </span>{" "}
              recibe la gracia de Dios y es bienvenida a la comunidad de fe.
            </motion.p>

            {/* divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent my-1"
            />

            {/* Padrinos */}
            <motion.div
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col items-center gap-2 w-full"
            >
              <div className="flex items-center gap-2">
                <FaHeart className="text-zinc-100 text-xs" />
                <p
                  className={`${playFair.className} text-xs tracking-[0.22em] uppercase text-zinc-100 font-semibold`}
                >
                  Sus Padrinos
                </p>
                <FaHeart className="text-zinc-100 text-xs" />
              </div>

              <div className="relative w-full rounded-2xl overflow-hidden border border-sky-100/10">
                <div className="absolute inset-0 bg-gradient-to-br" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-sky-400" />
                <div className="relative z-10 flex flex-col items-center py-4 px-6 gap-0.5">
                  <motion.p
                    variants={fadeUp(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className={`${greatVibes.className} text-3xl text-amber-400 leading-tight`}
                    style={{ textShadow: "0px 1px 1px rgb(0,0,0)" }}
                  >
                    Cristian Jesús
                  </motion.p>
                  <motion.div
                    variants={scaleIn(0.88)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex items-center gap-2 my-0.5"
                  >
                    <div className="w-8 h-px bg-sky-200" />
                    <FaTint className="text-sky-400 text-xs" />
                    <div className="w-8 h-px bg-sky-200" />
                  </motion.div>
                  <motion.p
                    variants={fadeUp(0.96)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    className={`${greatVibes.className} text-3xl text-amber-400 leading-tight`}
                    style={{ textShadow: "0px 1px 1px rgb(0,0,0)" }}
                  >
                    Cruz Garrido
                  </motion.p>
                </div>
              </div>
            </motion.div>
            
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            height="250px"
            width="250px"
            version="1.1"
            id="_x32_"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="absolute -right-10 -bottom-20"
            fill="rgba(255, 255, 255, .05)"
          >
            <g>
              <path d="M458.071,306.273l-9.519-21.579l-65.885,29.07l-43.103-24.899l74.607-32.879l-74.589-32.87l43.085-24.863   l65.885,29.07l9.536-21.624l-50.088-22.103l76.363-44.053l-13.318-23.044l-76.362,44.08l5.917-54.422l-23.47-2.561l-7.782,71.576   l-43.085,24.89l8.83-81.022l-65.777,48.152V117.43l58.123-42.542l-13.934-19.055l-44.19,32.354V0h-26.6v88.187l-44.17-32.354   l-13.952,19.055l58.122,42.542v49.762l-65.777-48.134l8.795,80.995l-43.049-24.882l-7.799-71.576l-23.47,2.561l5.916,54.422   l-76.344-44.08l-13.318,23.044l76.363,44.053l-50.088,22.103l9.519,21.624l65.867-29.07l43.122,24.863l-74.59,32.888l24.501,10.803   l50.089,22.076l-43.104,24.882l-65.885-29.07l-9.536,21.579l50.106,22.112l-76.399,44.099l13.354,23.054l76.363-44.098   l-5.935,54.412l23.47,2.551l7.781-71.594l43.068-24.863l-8.813,81.013l65.794-48.151v49.771l-58.122,42.525l13.952,19.036   l44.17-32.328V512h26.6v-88.188l44.19,32.328l13.934-19.036l-58.123-42.542v-49.736l65.777,48.143l-8.812-81.022l43.067,24.863   l7.818,71.594l23.434-2.551l-5.9-54.412l76.345,44.098l13.318-23.054l-76.381-44.099L458.071,306.273z M156.385,256.004   l41.366-18.24l31.631,18.24l-31.612,18.268L156.385,256.004z M242.718,315.556l-36.534,26.727l4.904-44.958l31.63-18.267V315.556z    M242.718,232.942l-31.63-18.25l-4.904-44.967l36.534,26.718V232.942z M269.318,196.443l36.535-26.718l-4.922,44.967l-31.613,18.25   V196.443z M269.318,315.556v-36.498l31.613,18.267l4.922,44.958L269.318,315.556z M314.248,274.272l-31.612-18.268l31.631-18.24   l41.384,18.24L314.248,274.272z" />
            </g>
          </svg>
        </CardBody>
      </Card>
    </section>
  );
}
