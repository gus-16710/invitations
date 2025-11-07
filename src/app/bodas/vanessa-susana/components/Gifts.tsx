import { motion } from "framer-motion";
import { crimson, italianno, mate } from "./Fonts";

export default function Gifts() {
  return (
    <motion.div
      className="bg-gray-300 p-5 mt-5 border-1 border-gray-800 rounded-sm"
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p className={`${italianno.className} text-center flex-2 px-5 text-4xl`}>
        Sugerencia de Regalos
      </p>

      <p className={`${mate.className} text-center`}>Lluvia de Sobres</p>

      <motion.div
        className="flex justify-center m-5"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: -1 * 0.5,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          width="75px"
          viewBox="0 0 30 30"
        >
          <path d="M2.5 7c-.5 0-.685.656-.27.922l11.833 7.78c.6.395 1.37.4 1.97 0l11.727-7.77c.578-.353-.01-1.22-.55-.834l-11.728 7.77c-.327.218-.54.216-.87 0L2.783 7.085C2.698 7.03 2.602 7 2.5 7zm-1-2C.678 5 0 5.678 0 6.5v17c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-17c0-.822-.678-1.5-1.5-1.5h-27zm0 1h27c.286 0 .5.214.5.5v17c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-17c0-.286.214-.5.5-.5z" />
        </svg>
      </motion.div>

      <p className={`${crimson.className} text-center mt-5 text-lg`}>
        ¡Que nos acompañes es lo más importante!
        <br />
        Si deseas bendecirnos, hemos deicidido realizar <br />
        una <span className="font-bold">lluvia de sobres</span>.
      </p>
    </motion.div>
  );
}
