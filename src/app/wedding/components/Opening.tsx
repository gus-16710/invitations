import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export default function Opening({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <motion.section
      className="bg-[url('/img/wedding/background-main.jpg')] bg-center bg-cover bg-fixed h-screen flex items-center justify-center flex-col text-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <motion.img
        width={150}
        height={150}
        src={"/img/wedding/floral-roses.png"}
        alt=""
        className="absolute mb-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 2, opacity: 0.75 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Button
          color="warning"
          variant="bordered"
          onClick={() => setOpen(true)}
          className="bg-white"
        >
          Abrir Invitación
        </Button>
      </motion.div>
    </motion.section>
  );
}
