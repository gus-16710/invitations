
import "yet-another-react-lightbox/styles.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import NextJsImage from "./NextJsImage";

const images = [
  {
    src: "/img/quinces/estefy/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/estefy/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/quinces/estefy/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/estefy/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/estefy/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/quinces/estefy/gallery-06.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

  return (
    <div className="h-screen flex justify-center items-center flex-col">      
        <div className="w-72 m-auto z-20">
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
    </div>
  );
}
