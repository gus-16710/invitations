import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import {
  Card,
  CardBody,  
} from "@nextui-org/react";
import NextJsImage from "./NextJsImage";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { LuZoomIn } from "react-icons/lu";
import { useState } from "react";
import { roboto } from "./Fonts";

const images = [
  {
    src: "/img/festejos/megan-guadalupe/megan1.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/festejos/megan-guadalupe/megan2.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/festejos/megan-guadalupe/megan3.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/festejos/megan-guadalupe/megan4.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/festejos/megan-guadalupe/megan5.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/festejos/megan-guadalupe/megan6.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
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
           <div className="flex items-center justify-center">
            <motion.div
              id="alert-5"
              className="flex items-center justify-center p-2 rounded-lg bg-yellow-500/50 w-72 mt-6 mb-4"
              role="alert"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            >
              <span className="sr-only">Info</span>
              <div className={`${roboto.className} ms-3 text-xs text-white`}>
                Presiona sobre una imagen para ampliar
              </div>
              <LuZoomIn className="text-white ml-2" />
            </motion.div>
          </div>

          <div className="z-30 px-2 w-72 mx-auto">
            <PhotoAlbum
              layout="masonry"
              photos={images}
              onClick={({ index: current }) => setIndex(current)}
              renderPhoto={NextJsImage}
              columns={2}
            />
            <Lightbox
              index={index}
              slides={images}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
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
