// import Image from "next/image";
// import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
// import { motion } from "framer-motion";

// export default function NextJsImage({
//   photo,
//   imageProps: { alt, title, sizes, className, onClick },
//   wrapperStyle,
// }: RenderPhotoProps) {
//   return (
//     <motion.div
//       className="h-40 w-40 group cursor-pointer"
//       style={{ position: "relative" }}
//       initial={{ y: 100, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       viewport={{ once: false }}
//       transition={{ duration: 1, ease: "easeOut" as const }}
//     >
//       <Image
//         fill
//         src={photo.src}
//         placeholder={"blurDataURL" in photo ? "blur" : undefined}
//         alt="" onClick={onClick}
//         className="object-cover transition-transform transform group-hover:scale-110 shadow-lg"
//       />
//     </motion.div>
//   );
// }


import type { RenderPhotoProps, RenderPhotoContext } from "react-photo-album";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NextJsImage({ onClick }: RenderPhotoProps,
  { photo, index }: RenderPhotoContext) {
  return (
    <motion.div
      key={index}
      className="h-48 w-full cursor-pointer flex items-center justify-center"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 1, ease: "easeOut" as const, delay: 1.2 }}
      style={{
        WebkitMaskImage: "url('/img/escolar/telebachillerato-buena-vista/mask2.png')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        WebkitMaskPosition: "center",
        position: "relative"
      }}
    >
      <Image
        fill
        src={photo.src}
        alt="" onClick={onClick}        
        className="h-48 w-48 object-cover transition-transform transform group-hover:scale-110 shadow-lg"   
        style={{ filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.5))" }}     
      />
    </motion.div>
  );
}
