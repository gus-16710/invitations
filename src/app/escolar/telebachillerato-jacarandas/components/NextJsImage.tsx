import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";
import { Avatar } from "@nextui-org/react";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-40 w-full group cursor-pointer flex items-center justify-center" // Añadido justify-center aquí
      style={{         
        position: "relative",
      }}      
    >      
      <Avatar
        isBordered
        color="default"
        src={photo.src}
        className="h-40 w-40 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
        onClick={onClick}
        radius="full"
      />
    </motion.div>
  );
}


