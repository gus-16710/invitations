import Image from "next/image";
import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-48 w-full mb-10 cursor-pointer flex items-center justify-center z-20"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const }}
      style={{filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))"}}
    >
      
      <Avatar
        isBordered
        color="warning"
        src={photo.src}
        className="h-48 w-48 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
      />
    </motion.div>
  );
}
