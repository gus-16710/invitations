import Image from "next/image";
import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-40 w-40 group cursor-pointer"
      style={{ position: "relative" }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const }}
    >
      <Image
        fill
        src={photo.src}
        alt="" onClick={onClick}
        className="object-cover transition-transform transform group-hover:scale-110 shadow-lg"
      />
    </motion.div>
  );
}
