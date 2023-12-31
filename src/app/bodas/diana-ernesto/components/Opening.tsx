import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Oswald } from "next/font/google";
import { Dispatch, SetStateAction } from "react";
import { FaRegHandPointer } from "react-icons/fa6";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });

export default function Opening({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.section
      className="h-screen bg-[url('/img/bodas/diana-ernesto/background-main.jpg')] bg-center bg-cover bg-fixed flex items-center justify-center flex-col text-gray-50"
      initial={{ scale: 2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 2 }}      
      exit={{ y: "-100%", transition: { duration: 2 } }}
    >
      <motion.img
        width={150}
        height={150}
        src={"/img/bodas/diana-ernesto/floral-roses.png"}
        alt=""
        className="absolute mb-4 z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.75 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="z-10"
      >
        <Button
          color="warning"
          variant="solid"
          onClick={() => setOpen(true)}
          className={`${oswald.className} bg-white shadow-lg text-zinc-800`}
        >
          <FaRegHandPointer className="text-xl rotate-45" />
          VER INVITACIÓN
        </Button>
      </motion.div>
    </motion.section>
  );
}
