import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import { rivage, roboto } from "./Fonts";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import NextJsImage03 from "@/app/components/NextJsImage03";
import { motion } from "framer-motion";
import { gallery } from "./Animations";

const images = [
  {
    src: "/img/christening/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/christening/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/christening/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/christening/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/christening/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/christening/gallery-06.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="h-screen relative">
      <div className="absolute -top-1 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.5 27.8"
          preserveAspectRatio="none"
          fill="#e9d4cf"
        >
          <path d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>{" "}
          <path d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>{" "}
          <path d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>{" "}
          <path d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>{" "}
          <path d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>{" "}
          <path d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>{" "}
          <path d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>{" "}
          <path d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>{" "}
          <path d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>{" "}
        </svg>
      </div>
      <motion.h1
        className={`${rivage.className} pt-20 text-5xl text-orange-900 text-center`}
        variants={gallery.animationText01}
        initial="hidden"
        whileInView="visible"
      >
        Fotos
      </motion.h1>
      <motion.div
        className="flex items-center justify-center"
        variants={gallery.animationDivider}
        initial="hidden"
        whileInView="visible"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width={250}
          viewBox="0 0 2641.465 318.75"
          enableBackground="new 0 0 2641.465 318.75"
          xmlSpace="preserve"
          style={{ fill: "#b8965e" }}
        >
          <g>
            <path d="M1742.073,193.971c-8.155,0.553-8.818,14.018-1.059,15.756   c7.902,1.975,16.151,0.774,24.195,1.027c268.657-0.016,537.314-0.016,805.971,0c7.68-0.19,15.487,0.758,23.057-0.759   c3.856-0.743,6.542-4.551,6.495-8.344c-0.095-5.547-5.452-8.613-10.541-8.107c-272.876,0.047-545.769,0-818.661,0.031   C1761.732,193.829,1751.855,192.849,1742.073,193.971z" />
            <path d="M899.392,193.971c8.155,0.553,8.818,14.018,1.059,15.756   c-7.902,1.975-16.151,0.774-24.195,1.027c-268.657-0.016-537.314-0.016-805.971,0c-7.68-0.19-15.487,0.758-23.057-0.759   c-3.856-0.743-6.542-4.551-6.495-8.344c0.095-5.547,5.452-8.613,10.541-8.107c272.877,0.047,545.769,0,818.661,0.031   C879.733,193.829,889.61,192.849,899.392,193.971z" />
            <path d="M1686.018,201.383c-0.743,12.169,12.943,22.757,24.448,17.969   c9.166-2.845,14.35-13.117,11.805-22.251c-1.849-7.017-8.233-12.88-15.614-13.275   C1696.274,182.008,1685.939,190.874,1686.018,201.383z M1713.753,198.997c2.781,6.4-4.488,14.176-11.141,12.564   c-4.488-0.996-8.076-5.373-7.933-10.003c0.458-4.757,4.536-8.676,9.071-9.592C1708.079,191.996,1712.331,194.856,1713.753,198.997z   " />
            <path d="M955.447,201.383c0.743,12.169-12.943,22.757-24.448,17.969   c-9.166-2.845-14.35-13.117-11.805-22.251c1.849-7.017,8.233-12.88,15.614-13.275C945.191,182.008,955.526,190.874,955.447,201.383   z M927.712,198.997c-2.781,6.4,4.488,14.176,11.141,12.564c4.488-0.996,8.076-5.373,7.933-10.003   c-0.458-4.757-4.536-8.676-9.071-9.592C933.386,191.996,929.134,194.856,927.712,198.997z" />
            <path d="M1320.732,237.401c4.371-0.255,8.733-0.635,13.076-1.14   c48.453-4.931,94.441-23.974,135.798-49.085c20.544-12.248,38.845-27.845,59.326-40.204c20.323-12.406,43.127-22.077,67.212-22.82   c26.044,0.49,51.298,16.056,63.213,39.255c9.071,17.463,9.925,38.371,4.804,57.161c-3.003,11.695-8.36,23.184-17.399,31.433   c-8.518,7.743-20.228,11.426-31.654,11.015c-15.456,0.442-32.223-5.705-40.694-19.264c-9.751-15.092-5.784-38.276,10.193-47.489   c11.22-6.653,25.349-4.757,36.632,0.695c5.484,2.544,6.795,9.055,10.857,13.085c1.264-4.156,2.876-8.55,1.596-12.864   c-1.849-6.827-7.286-12.137-13.417-15.361c-9.466-5.184-20.876-5.816-31.259-3.414c-14.681,3.572-26.455,16.325-29.236,31.117   c-1.896,10.92-0.616,22.709,5.294,32.27c7.886,13.702,23.531,21.461,38.908,22.773c11.173,0.268,22.725,1.011,33.408-2.971   c16.246-5.373,29.015-19.027,34.578-35.052c6.306-18.3,6.59-38.702,0.379-57.066c-7.791-23.231-27.214-41.673-50.223-49.686   c-12.089-4.788-25.396-4.425-38.133-3.366c-30.643,4.694-57.619,21.477-82.019,39.73c-15.329,11.726-30.991,23.073-47.694,32.823   c-40.599,23.794-86.317,41.083-133.545,43.728c-47.228-2.644-92.947-19.933-133.545-43.728   c-16.704-9.751-32.365-21.098-47.694-32.823c-24.4-18.253-51.376-35.036-82.019-39.73c-12.738-1.059-26.044-1.422-38.134,3.366   c-23.01,8.012-42.432,26.455-50.223,49.686c-6.211,18.364-5.926,38.766,0.379,57.066c5.563,16.025,18.332,29.679,34.578,35.052   c10.683,3.983,22.235,3.24,33.408,2.971c15.377-1.312,31.022-9.071,38.908-22.773c5.91-9.561,7.191-21.35,5.294-32.27   c-2.781-14.792-14.555-27.545-29.236-31.117c-10.383-2.402-21.793-1.77-31.259,3.414c-6.132,3.224-11.568,8.534-13.417,15.361   c-1.28,4.314,0.332,8.708,1.596,12.864c4.062-4.03,5.373-10.541,10.857-13.085c11.284-5.452,25.412-7.348,36.632-0.695   c15.977,9.213,19.944,32.397,10.193,47.489c-8.471,13.559-25.238,19.706-40.694,19.264c-11.426,0.411-23.136-3.272-31.654-11.015   c-9.039-8.249-14.397-19.738-17.399-31.433c-5.12-18.79-4.267-39.698,4.804-57.161c11.916-23.199,37.169-38.766,63.213-39.255   c24.084,0.743,46.889,10.414,67.212,22.82c20.481,12.358,38.782,27.956,59.326,40.204c41.357,25.111,87.345,44.154,135.798,49.085   C1312,236.766,1316.361,237.146,1320.732,237.401z M1320.732,221.02c23.825-0.755,48.012-9.056,64.959-26.211   c14.539-15.14,24.495-34.23,40.441-48.09c8.076-7.601,17.716-13.101,26.834-19.264c-9.751-0.901-19.296-3.461-29.094-3.998   c-14.871-0.158-30.295,0.427-44.012,6.827c-20.339,9.15-34.847,27.419-55.201,36.506c-1.296,0.53-2.605,1.027-3.926,1.493   c-1.321-0.466-2.63-0.964-3.926-1.493c-20.355-9.087-34.862-27.355-55.201-36.506c-13.717-6.401-29.141-6.985-44.012-6.827   c-9.798,0.537-19.343,3.097-29.094,3.998c9.119,6.163,18.758,11.663,26.834,19.264c15.945,13.859,25.901,32.95,40.441,48.09   C1272.72,211.964,1296.907,220.264,1320.732,221.02z M1320.732,178.946c6.04-1.938,11.825-4.583,17.09-8.174   c18.158-11.6,31.038-30.516,51.361-38.813c18.174-6.716,38.228-7.933,56.987-2.908c-13.259,8.455-26.186,17.668-36.996,29.189   c-14.745,15.772-28.035,34.372-48.564,43.112c-12.601,5.464-26.157,8.587-39.879,9.44c-13.721-0.853-27.278-3.975-39.879-9.44   c-20.529-8.739-33.819-27.34-48.564-43.112c-10.81-11.521-23.737-20.734-36.996-29.189c18.759-5.025,38.813-3.809,56.987,2.908   c20.323,8.297,33.203,27.213,51.361,38.813C1308.907,174.364,1314.693,177.009,1320.732,178.946z M1320.732,161.979   c11.662-8.17,20.736-20.059,25.671-33.433c7.286-19.659,6.416-43.839-7.269-60.558c-4.911-6.165-11.296-10.88-18.402-14.036   c-7.106,3.156-13.491,7.87-18.402,14.036c-13.686,16.72-14.555,40.899-7.269,60.558   C1299.997,141.919,1309.07,153.809,1320.732,161.979z M1320.732,57.922c8.436,4.271,15.62,10.925,19.982,19.437   c6.084,10.73,6.701,23.5,5.405,35.51c-2.426,16.99-11.841,32.882-25.387,43.352c-13.546-10.47-22.961-26.362-25.387-43.352   c-1.296-12.01-0.679-24.78,5.405-35.51C1305.112,68.847,1312.296,62.193,1320.732,57.922z" />
            <path d="M1529.28,230.477c-3.145-7.617-10.588-12.152-17.304-16.277   c-21.745-12.437-48.532-12.011-71.921-4.789c-12.532,4.03-25.175,8.803-35.684,16.957c31.212-0.806,59.263,14.681,89.178,20.892   c9.166,1.691,18.948,1.422,27.624-2.149C1526.752,242.914,1531.682,236.609,1529.28,230.477z M1495.698,238.047   c-26.692-4.804-52.531-15.74-80.044-14.95c17.225-6.543,35.605-10.841,54.095-10.636c18.648,0.727,38.671,6.669,50.792,21.682   C1513.161,238.695,1504.121,239.359,1495.698,238.047z" />
            <path d="M1112.185,230.477c3.145-7.617,10.588-12.152,17.304-16.277   c21.745-12.437,48.532-12.011,71.921-4.789c12.532,4.03,25.175,8.803,35.684,16.957c-31.212-0.806-59.263,14.681-89.178,20.892   c-9.166,1.691-18.948,1.422-27.624-2.149C1114.713,242.914,1109.782,236.609,1112.185,230.477z M1145.767,238.047   c26.692-4.804,52.531-15.74,80.044-14.95c-17.225-6.543-35.605-10.841-54.095-10.636c-18.648,0.727-38.671,6.669-50.792,21.682   C1128.304,238.695,1137.343,239.359,1145.767,238.047z" />
          </g>
        </svg>
      </motion.div>

      <div className="z-30 px-2 py-5 w-72 m-auto">
        <PhotoAlbum
          layout="masonry"
          photos={images}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={NextJsImage03}
          columns={2}
        />
        <Lightbox
          index={index}
          slides={images}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>

      <motion.div
        className="mx-5 mt-5 flex items-center justify-center p-2 text-sm text-gray-800 rounded-lg bg-gray-50/40"
        role="alert"
        variants={gallery.animationText02}
        initial="hidden"
        whileInView="visible"
      >
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className={`${roboto.className}`}>
          Click sobre la imagen para ampliar
        </div>
      </motion.div>
      <div className="absolute -bottom-1 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 283.5 27.8"
          preserveAspectRatio="none"
          style={{ rotate: "180deg" }}
          fill="#e9d4cf"
        >
          <path d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7	s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7	c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3	c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6	c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7	C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5	c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1	c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7	c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6	C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8	c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2	C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3	C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1	z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1	c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z"></path>{" "}
          <path d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C267.7,18.8,269.7,18,269.6,18z"></path>{" "}
          <path d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2	S227.6,9.9,227.4,9.8z"></path>{" "}
          <path d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4	C206.4,12.9,204.6,13.5,204.5,13.4z"></path>{" "}
          <path d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6	S201,10.7,201,10.6z"></path>{" "}
          <path d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3	C152.6,27.5,154.6,26.8,154.5,26.7z"></path>{" "}
          <path d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6	c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z"></path>{" "}
          <path d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0	C76.9,11.5,75.3,12.5,75.5,12.6z"></path>{" "}
          <path d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4	C19.9,13.7,15.7,13.3,15.6,13.2z"></path>{" "}
        </svg>
      </div>
    </section>
  );
}
