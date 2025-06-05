import { motion } from "framer-motion";
import { Great_Vibes, Titillium_Web, Playfair_Display } from "next/font/google";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });
const notoSans = Titillium_Web({ subsets: ["latin"], weight: "400" });
const playFair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Presentation() {
  return (
    <section
      className="flex justify-center items-center flex-col"
      style={{ height: "100svh" }}
    >
      <motion.div>
        <motion.h1
          className={`${greatVibes.className} text-5xl drop-shadow text-center text-zinc-300`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          Nos Casamos
        </motion.h1>
        <motion.div
          className="relative flex items-center justify-center flex-col mt-4 mb-2 text-zinc-300"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}   
          style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)"}}       
        >          
          <label className={`${playFair.className} pb-1 text-lg`}>
            Febrero
          </label>
          <div className="flex items-center">
            <label className={`${playFair.className} p-4 text-2xl`}>SAB</label>
            <label
              className={`${greatVibes.className} py-2 px-4 border-l-1 border-r-1 border-zinc-500 text-6xl`}
            >
              28
            </label>
            <label className={`${playFair.className} p-4 text-2xl`}>6PM</label>
          </div>
          <label className={`${playFair.className} text-xl`}>2025</label>          
        </motion.div>
        <motion.p
          className={`${notoSans.className} text-center p-5 max-w-md text-zinc-300`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
        >
          Despues de muchas aventuras compartidas, daremos el "Si, acepto"
          seguiremos este emocionante viaje juntos y nos encantaría que nos
          acompañaran a celebrar esta gran fiesta de nuestra boda, llena de
          brindis, carcajadas y bailes hasta el amanecer.
        </motion.p>
        {/* <div className="flex justify-center mt-5">          
        </div> */}
      </motion.div>
    </section>
  );
}
