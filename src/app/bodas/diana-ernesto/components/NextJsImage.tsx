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
      className="h-40 w-40 group cursor-pointer flex items-center justify-center"
      style={{ ...wrapperStyle, position: "relative" }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}            
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className, onClick }}
        className="h-28 w-28 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
      />
    </motion.div>
  );
}
