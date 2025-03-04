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
      className="h-32 w-full cursor-pointer flex items-center justify-center z-20"
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Avatar
        isBordered
        color="secondary"
        src={photo.src}
        className="h-28 w-28 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </motion.div>
  );
}
