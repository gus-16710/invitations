import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-32 w-full cursor-pointer flex items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const, delay: 1.2 }}
      style={{
        WebkitMaskImage: "url('/img/bautizos/annette/hexagon-mask.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        position: "relative"
      }}
    >
      <Image
        fill
        src={photo.src}
        alt="" onClick={onClick}        
        className="h-28 w-28 object-cover transition-transform transform group-hover:scale-110 shadow-lg"        
      />
    </motion.div>
  );
}
