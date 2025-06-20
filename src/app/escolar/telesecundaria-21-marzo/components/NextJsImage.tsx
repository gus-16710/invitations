import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <motion.div
      className="h-28 w-full mb-5 cursor-pointer flex items-center justify-center z-20"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))"}}
    >
      
      <Avatar
        isBordered
        color="danger"
        src={photo.src}
        className="h-28 w-28 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </motion.div>
  );
}
