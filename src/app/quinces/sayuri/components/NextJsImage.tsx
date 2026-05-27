import Image from "next/image";
import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-32 w-full mb-5 group cursor-pointer flex items-center justify-center"      
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const }}
      style={{
        WebkitMaskImage: "url('/img/quinces/sayuri/mask.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        position: "relative",
      }}
    >
      <Image
        fill
        src={photo.src}
        alt="" onClick={onClick}
        className="h-28 w-28 object-cover transition-transform transform group-hover:scale-110 shadow-lg"
      />
    </motion.div>
    // <motion.div
    //   className="h-40 w-40 group cursor-pointer"
    //   style={{ position: "relative" }}
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: false }}
    //   transition={{ duration: 1, ease: "easeOut" as const }}
    // >
    //   <Image
    //     fill
    //     src={photo.src}
    //     placeholder={"blurDataURL" in photo ? "blur" : undefined}
    //     alt="" onClick={onClick}
    //     className="object-cover transition-transform transform group-hover:scale-110 shadow-lg"
    //   />
    // </motion.div>
  );
}
