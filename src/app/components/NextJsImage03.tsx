import type { RenderPhotoProps } from "react-photo-album";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";

export default function NextJsImage03({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <motion.div
      className="h-32 w-full cursor-pointer flex items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{
        WebkitMaskImage: "url('/img/christening/hexagon-mask.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        position: "relative"
      }}
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
