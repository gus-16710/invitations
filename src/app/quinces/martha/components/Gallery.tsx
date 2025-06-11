import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { oswald } from "./Fonts";
import { useState } from "react";
import { motion } from "framer-motion";
import { gallery } from "./Animations";

const images = [
  {
    src: "/img/quinces/martha/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/martha/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/quinces/martha/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/martha/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/martha/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/martha/gallery-07.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section
      className="relative flex flex-col items-center justify-center pt-28 pb-20"
      style={{ backgroundColor: "#fbe1d2" }}
    >
      <div className="w-full absolute -top-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          fill="currentColor"
          fillRule="evenodd"
          viewBox="0 0 1000 137"
          style={{ fill: "#ffc6c5", rotate: "180deg" }}
        >
          <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
        </svg>
      </div>
      <motion.div
        id="alert-5"
        className="flex items-center justify-center p-3 rounded-lg bg-gray-50/50 dark:bg-gray-800 w-72"
        role="alert"
        variants={gallery.svg}
        initial="hidden"
        whileInView="visible"
      >
        <svg
          className="flex-shrink-0 w-4 h-4 text-pink-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"          
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className={`${oswald.className} ms-3 text-sm text-pink-500 dark:text-gray-300`}>
          Click sobre la imagen para ampliar
        </div>
      </motion.div>
      <div className="z-30 px-2 py-5 w-72 m-auto mb-16">
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

        <div className="w-full absolute -bottom-1">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="currentColor"
                fillRule="evenodd"
                viewBox="0 0 1000 137"
                style={{ fill: "#ffc6c5", rotate: "180deg" }}
              >
                <path d="M0 136.756v-14.507C116.467-94.71 395.767 172.311 500 0l.306.503C604.791 171.777 883.649-94.493 1000 122.249v14.507H0Z" />
              </svg> */}
      
              <svg
                width="100%"
                height="100%"
                id="svg"
                viewBox="0 0 1440 390"
                xmlns="http://www.w3.org/2000/svg"
                className="transition duration-300 ease-in-out delay-150"
              >
                <path
                  d="M 0,400 L 0,75 C 97.37435897435896,75.06410256410257 194.7487179487179,75.12820512820512 281,79 C 367.2512820512821,82.87179487179488 442.37948717948734,90.55128205128206 512,84 C 581.6205128205127,77.44871794871794 645.7333333333332,56.66666666666666 722,49 C 798.2666666666668,41.33333333333334 886.6871794871797,46.782051282051285 957,48 C 1027.3128205128203,49.217948717948715 1079.5179487179487,46.205128205128204 1157,50 C 1234.4820512820513,53.794871794871796 1337.2410256410258,64.3974358974359 1440,75 L 1440,400 L 0,400 Z"
                  stroke="none"
                  strokeWidth="0"
                  fill="#99154b"
                  fillOpacity="0.4"
                  className="transition-all duration-300 ease-in-out delay-150 path-0"
                ></path>
                <path
                  d="M 0,400 L 0,175 C 80.7076923076923,172.9923076923077 161.4153846153846,170.98461538461538 235,169 C 308.5846153846154,167.01538461538462 375.04615384615386,165.05384615384617 467,157 C 558.9538461538461,148.94615384615383 676.4,134.79999999999998 751,146 C 825.6,157.20000000000002 857.3538461538461,193.74615384615387 919,203 C 980.6461538461539,212.25384615384613 1072.1846153846154,194.2153846153846 1164,185 C 1255.8153846153846,175.7846153846154 1347.9076923076923,175.3923076923077 1440,175 L 1440,400 L 0,400 Z"
                  stroke="none"
                  strokeWidth="0"
                  fill="#99154b"
                  fillOpacity="0.53"
                  className="transition-all duration-300 ease-in-out delay-150 path-1"
                ></path>
                <path
                  d="M 0,400 L 0,275 C 96.37948717948717,271.425641025641 192.75897435897434,267.85128205128206 272,279 C 351.24102564102566,290.14871794871794 413.34358974358963,316.0205128205128 479,309 C 544.6564102564104,301.9794871794872 613.8666666666667,262.0666666666667 701,252 C 788.1333333333333,241.9333333333333 893.1897435897436,261.71282051282054 970,271 C 1046.8102564102564,280.28717948717946 1095.374358974359,279.0820512820513 1169,278 C 1242.625641025641,276.9179487179487 1341.3128205128205,275.9589743589744 1440,275 L 1440,400 L 0,400 Z"
                  stroke="none"
                  strokeWidth="0"
                  fill="#99154b"
                  fillOpacity="1"
                  className="transition-all duration-300 ease-in-out delay-150 path-2"
                ></path>
              </svg>
            </div>    
    </section>
  );
}
