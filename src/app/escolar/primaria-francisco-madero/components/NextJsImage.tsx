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
      className="h-40 w-full group cursor-pointer flex items-center justify-center" // Añadido justify-center aquí
      style={{ 
        //...wrapperStyle, // Mantenemos los estilos del wrapper
        position: "relative",
      }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" }}
    >      
      <Avatar
        isBordered
        color="primary"
        src={photo.src}
        className="h-40 w-40 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </motion.div>
  );
}
