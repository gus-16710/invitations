import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";
import { motion } from "framer-motion";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <motion.div
      className="h-40 group cursor-pointer"
      style={{ ...wrapperStyle, position: "relative" }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
        className="object-cover transition-transform transform group-hover:scale-110 shadow-lg"
      />
    </motion.div>
  );
}
