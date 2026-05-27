import Image from "next/image";
import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-40 w-full mb-5 group cursor-pointer flex items-center justify-center" // Añadido justify-center aquí
      style={{ 
        //// Mantenemos los estilos del wrapper
        position: "relative",
      }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const }}
    >      
      <Avatar
        isBordered
        color="default"
        src={photo.src}
        className="h-40 w-40 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
      />
    </motion.div>
  );
}
