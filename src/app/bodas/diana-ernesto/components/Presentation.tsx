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
          className={`${greatVibes.className} text-5xl drop-shadow text-center`}
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Nos Casamos
        </motion.h1>
        <motion.div
          className="flex items-center justify-center flex-col mt-4 mb-2 text-gray-600"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <label className={`${playFair.className} pb-1`}>Febrero</label>
          <div className="flex items-center">
            <label className={`${playFair.className} p-4`}>SAB</label>
            <label
              className={`${greatVibes.className} py-2 px-4 border-l-2 border-r-2 border-gray-300 text-5xl`}
            >
              28
            </label>
            <label className={`${playFair.className} p-4`}>6PM</label>
          </div>
          <label className={`${playFair.className}`}>2025</label>
        </motion.div>
        <motion.p
          className={`${notoSans.className} text-center p-5`}
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          Despues de muchas aventuras compartidas, daremos el "Si, acepto"
          seguiremos este emocionante viaje juntos y nos encantaría que nos
          acompañaran a celebrar esta gran fiesta de nuestra boda, llena de
          brindis, carcajadas y bailes hasta el amanecer.
        </motion.p>
        <motion.div
          className="flex justify-center mt-5"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 200 200"
            //style="enable-background:new 0 0 200 200;"
            xmlSpace="preserve"
            width="75px"
            fill="rgb(75 85 99)"
          >
            <g>
              {" "}
              <path d="M200,97.7c-0.8,2.1-1.5,4.3-2.5,6.3c-1.4,2.6-3.7,4.4-6.4,5.9c-0.6,0.3-1.2,1.2-1.2,1.8c0.8,10-5.3,15.7-12.1,18.2   c-0.6,0.2-1.2,0.6-1.5,1.1c-3.2,6-3.5,6.4-9.5,9.7c0.9,1.1,1.8,1.8,3.3,1.7c4.7-0.2,9.5-0.3,14.2-0.3c5.1-0.1,7.9,3,7.6,8.1   c-0.4,6.5-2.3,12.4-6.4,17.5c-2.8,3.6-6,4.1-9.9,1.8c-5.2-3.2-10.5-6.3-15.7-9.5c-1.1-0.7-2-0.8-3.2-0.3   c-21.1,8.8-43.8-6.8-43.1-29.7c0.1-2.4-1.3-3.4-3.5-2.5c-0.8,0.3-1.5,0.7-2.4,0.9c-1.6,0.4-2.9-0.1-3.5-1.6c-0.6-1.4,0-3,1.5-3.8   c0.9-0.4,1.8-0.8,2.6-1.2c-1.4-7.5,0.2-12.6,5.4-15.7c5.6-3.4,11.2-3.1,16.8,0.3c2.6-10.1,8.3-17.6,17.4-22.4   c0.8-0.4,1.6-0.8,2.5-1.1c1.5-0.5,2.7,0.1,3.4,1.4c0.7,1.3,0.4,2.5-0.7,3.5c-0.4,0.4-1,0.6-1.5,0.9c-8.8,4.3-13.9,11.4-15.7,21   c-0.1,0.7,0.1,1.5,0.5,2.1c0.6,1,1.5,1.9,2.4,3.1c0.6-1,1.2-2,1.7-3c3.1-6.3,7.2-11.7,13.3-15.5c4.6-2.8,9.5-4.5,14.8-4.9   c5.1-0.4,8.5-4.6,8-10.1c-3.6,1-7.1,1.9-10.7,2.9c-0.6,0.2-1.1,0.3-1.7,0.5c-1.6,0.3-2.8-0.4-3.4-1.9c-0.6-1.5,0.1-3.2,1.7-3.7   c5.3-1.5,10.6-3,16-4.3c1.7-0.4,2.8,0.6,3.3,2.3c1.3,4.3,1,8.5-1,12.5c-0.2,0.5-0.5,0.9-0.7,1.4c0,0,0,0.1,0,0.5c1.8,0,3.5,0,5.3,0   c3.5,0.1,7,0.2,10.5,0.2c1.8,0,3,0.6,3.8,2.1C200,95.1,200,96.4,200,97.7z M193.9,97.5c-0.9-0.1-1.6-0.1-2.3-0.1   c-5.9-0.1-11.8-0.2-17.8-0.3c-12-0.3-20.9,4.7-26.7,15.2c-4.9,8.9-9.7,17.8-14.6,26.7c-0.3,0.6-0.6,1.5-1.1,1.8   c-0.9,0.5-2.1,1.1-2.9,0.8c-0.8-0.3-1.7-1.4-2-2.3c-0.2-0.7,0.3-1.8,0.7-2.5c2.6-4.9,5.3-9.7,7.9-14.6c0.3-0.6,0.7-1.5,0.4-1.9   c-2.5-4.2-5.3-8.1-9.9-10.2c-4-1.8-9.3,0-11,3.5c-1.8,3.7-0.4,7.8,3.7,10.2c1.6,0.9,1.9,2.3,1.7,4c-1.8,15.1,9.1,27.8,24.3,28.2   c7.6,0.2,14.1-2.6,19.2-8.3c0.4-0.4,0.7-1.2,0.5-1.6c-0.4-1-5.4-3.2-6.7-3.1c-3.1,0.3-6.2,0.6-9.3,0.9c-2.3,0.2-3.7-0.9-3.8-2.7   c-0.1-1.8,1.2-3,3.4-3.2c2.3-0.2,4.7-0.3,7-0.6c4.3-0.5,8.6-1.4,12.4-3.8c1.9-1.2,3.6-2.7,3.7-5.1c0.1-2,1-3.1,2.9-3.6   c1.3-0.4,2.6-0.9,3.8-1.4c5.5-2.7,7.6-7.3,6.2-13.2c-0.7-3.1-0.3-3.9,2.9-5C190.3,104.1,192.8,101.7,193.9,97.5z M185.3,156.2   c0.3-2.5,0.6-4.8,0.9-7c0.1-1.1-0.5-1.4-1.5-1.4c-4.9,0-9.7,0-13.7,0c-2.6,3-4.6,5.3-6.7,7.7c4.3,2.6,8.7,5.3,13,7.9   c3.1,1.9,3.1,1.9,5-1.2c0.1-0.2,0.2-0.4,0.3-0.8c-2.7-1.2-5.3-2.4-7.9-3.6c-2.2-1-3-2.5-2.2-4.2c0.8-1.7,2.4-2.1,4.7-1.1   C179.7,153.7,182.2,154.8,185.3,156.2z"></path>{" "}
              <path d="M0,93.7c0.8-1.5,2.1-2.1,3.8-2.1c5.3,0.1,10.5,0,16.2,0c-0.5-1-0.8-1.6-1.1-2.1c-2-4-2.4-8.1-1.1-12.3   c0.7-2.2,1.9-2.9,4.1-2.3c8,2.1,16,4.1,23.9,6.5c11.7,3.6,19.3,11.3,22.9,23c0.2,0.5,0.3,1,0.5,1.7c5.6-3.3,11.2-3.6,16.8-0.3   c5.2,3.1,6.9,8.3,5.4,15.7c0.8,0.4,1.7,0.7,2.6,1.2c1.5,0.8,2.1,2.3,1.5,3.8c-0.6,1.4-2.1,2.1-3.7,1.6c-0.8-0.2-1.6-0.6-2.3-1   c-1.9-0.8-3.4,0.3-3.3,2.4c0.2,7.7-2,14.6-6.7,20.7c-0.6,0.7-1.1,1.5-1.8,2c-1.2,0.9-2.5,0.9-3.6-0.1c-1.2-1-1.4-2.3-0.7-3.7   c0.3-0.4,0.6-0.8,0.9-1.2c4.6-5.7,6.7-12.1,5.8-19.4c-0.2-1.7,0-3.2,1.7-4c3.6-1.5,5.6-6.1,3.9-10c-1.6-3.4-6.4-5.4-10.4-4   c-5.2,1.8-8.1,6.1-10.8,10.6c-0.2,0.4,0.2,1.2,0.4,1.8c2.6,4.9,5.3,9.7,7.9,14.6c0.4,0.7,1,1.7,0.7,2.3c-0.4,1-1.2,2.2-2.2,2.6   c-1.3,0.6-2.5-0.2-3.3-1.4c-1.4-2.5-2.8-5-4.1-7.5c-3.8-7-7.5-14-11.4-20.9c-5.6-9.9-14.1-14.8-25.4-14.8c-6.2,0-12.5,0.2-18.7,0.3   c-0.7,0-1.4,0.1-2.2,0.1c0.3,2.3,1.3,4.1,3,5.4c1.3,1,2.8,1.8,4.4,2.4c2.9,1.1,3.3,1.8,2.7,5c-0.3,1.8-0.4,3.6-0.2,5.4   c0.3,2.6,1.6,4.8,3.8,6.1c1.9,1.2,4.1,2.3,6.3,3c2,0.7,3.1,1.5,3.1,3.8c0,2.1,1.5,3.4,3,4.5c3.9,2.8,8.4,3.7,13,4.3   c2.4,0.3,4.8,0.4,7.2,0.6c2.1,0.2,3.4,1.4,3.3,3.1c-0.1,1.7-1.5,2.8-3.6,2.7c-2.9-0.2-5.8-0.1-8.5-0.8c-3.3-0.8-5.2,1.5-7.5,2.8   c-0.2,0.1,0,1.3,0.4,1.7c4.1,4.6,9.2,7.3,15.3,8.2c4,0.6,7.9,0.1,11.7-1.2c2.2-0.7,3.8-0.2,4.4,1.5c0.6,1.8-0.3,3.2-2.6,4   c-7.5,2.6-15,2.3-22.3-0.8c-1.2-0.5-2.1-0.4-3.2,0.3c-5.2,3.2-10.4,6.4-15.7,9.5c-3.9,2.4-7.1,1.8-9.9-1.8   c-4.4-5.5-6.3-11.9-6.4-18.9c-0.1-4,2.9-6.8,7-6.8c4.8,0,9.6,0.3,14.4,0.3c1.3,0,2.5-0.6,3.8-1c0-0.2-0.1-0.4-0.1-0.6   c-1.5-0.9-3.3-1.7-4.5-2.9c-1.7-1.7-3.2-3.7-4.5-5.8c-0.6-1.1-1.1-1.8-2.3-2.3c-5.9-2.3-10.2-6.2-11.4-12.7   c-0.3-1.7-0.1-3.5-0.2-5.2c0-0.5-0.2-1.3-0.5-1.5c-5.4-2.5-8.3-6.9-9.6-12.5C0,96.4,0,95.1,0,93.7z M61,114.8   c1-1.3,1.9-2.3,2.7-3.5c0.3-0.4,0.4-1.1,0.3-1.6c-2-10.6-7.7-18.4-17.9-22c-7.4-2.6-15.2-4.3-22.9-6.5c-0.8,4.6,2.7,9.7,6.6,10   c12.7,0.9,22,7.1,28.2,18.1C59,111.1,60,112.9,61,114.8z M14.7,156.2c3-1.4,5.6-2.5,8.1-3.6c2.3-1,3.9-0.6,4.7,1.1   c0.8,1.7,0,3.2-2.2,4.2c-2.6,1.2-5.2,2.4-8,3.7c0.7,1,1.2,1.9,1.9,2.5c0.4,0.4,1.5,0.6,1.9,0.3c5-2.9,9.9-5.9,14.7-8.9   c-2.1-2.4-4.1-4.7-6.7-7.7c-4,0-8.9,0-13.7,0c-1,0-1.7,0.3-1.5,1.5C14.1,151.4,14.4,153.6,14.7,156.2z"></path>{" "}
              <path d="M100,48.9c3.3-2.6,7-4.2,11.3-4.1c10.1,0.1,18.1,8.9,17.7,19.4c-0.3,6.9-3.6,12.6-7.8,17.7c-5.1,6.3-11.5,10.9-18.9,14.1   c-1.3,0.5-3.2,0.6-4.4,0.1c-5.4-2.2-10.2-5.4-14.5-9.4c-1.7-1.5-1.9-3.3-0.7-4.6c1.2-1.3,2.8-1.1,4.7,0.2c3.7,2.7,7.6,5.2,11.5,7.7   c0.5,0.3,1.6,0.4,2.1,0.2C109.7,86,117,80,121.3,70.9c1.9-4,2.6-8.2,0.9-12.5C118.9,50,109,48,102.7,54.5c-1.9,2-3.4,2.1-5.1,0.3   c-4.4-4.4-9.6-5.4-14.3-2.8c-4.9,2.7-7.5,8.8-6.1,14.4c0.5,1.9,1.3,3.8,2.1,5.6c0.8,2,0.5,3.6-1.1,4.4c-1.6,0.8-3.2,0.2-4.2-1.7   c-3.2-6.2-4.4-12.6-1.4-19.3c4.8-10.6,17-13.9,26.5-7.2C99.4,48.5,99.7,48.7,100,48.9z"></path>{" "}
              <path d="M135.1,39.4c-0.4,1-0.6,1.7-1,2.2c-1,1.2-2.1,2.3-3.3,3.3c-1.3,1.1-3,1.1-4-0.1c-1.1-1.2-1.2-2.6-0.1-3.9   c1.1-1.2,2.2-2.5,3.5-3.4c0.8-0.5,2.1-0.6,3-0.3C134,37.5,134.5,38.6,135.1,39.4z"></path>{" "}
              <path d="M74,42.7c0,2.3-2.4,3.9-4.1,2.7c-1.7-1.2-3.2-2.7-4.3-4.4c-0.5-0.7-0.1-2.4,0.4-3.1c0.5-0.7,2.3-1.2,2.8-0.8   c1.8,1.4,3.4,3.1,5,4.8C74,42.1,74,42.5,74,42.7z"></path>{" "}
              <path d="M79.8,29.3c0.5,0.4,1.6,1.1,2,2.1c0.7,1.4,0.9,3.1,1.2,4.7c0.3,1.6-0.6,2.8-2.1,3.2c-1.6,0.4-2.9-0.3-3.4-1.8   c-0.6-1.6-0.9-3.2-1.2-4.9C76,30.9,77.4,29.4,79.8,29.3z"></path>{" "}
              <path d="M123.8,32.7c-0.4,1.5-0.8,3.4-1.4,5.1c-0.5,1.3-1.8,1.9-3.2,1.5c-1.4-0.4-2.4-1.4-2.2-2.8c0.2-1.8,0.7-3.7,1.3-5.5   c0.5-1.4,1.7-1.9,3.2-1.6C123,29.7,123.8,30.8,123.8,32.7z"></path>{" "}
              <path d="M135.7,54.7c-1.9-0.1-2.9-0.8-3.2-2.2c-0.3-1.4,0.1-2.7,1.5-3.2c1.8-0.7,3.7-1.3,5.6-1.3c0.9,0,2.1,1.1,2.6,2   c0.7,1.3,0.1,2.7-1.3,3.2C139.1,53.9,137.2,54.3,135.7,54.7z"></path>{" "}
              <path d="M64.4,54.7c-1.5-0.4-3.4-0.8-5.1-1.5c-1.4-0.6-1.9-1.9-1.5-3.4c0.4-1.4,1.5-2.2,2.9-2c1.8,0.3,3.6,0.7,5.3,1.3   c1.5,0.5,2,1.9,1.6,3.4C67.2,54,66.1,54.6,64.4,54.7z"></path>{" "}
              <path d="M77.9,118.8c-1.6,0-2.8-1.3-2.8-2.9c0-1.6,1.4-3,3-2.9c1.6,0.1,2.9,1.5,2.8,3.1C80.8,117.7,79.5,118.8,77.9,118.8z"></path>{" "}
              <path d="M119.1,115.8c0-1.6,1.3-2.9,2.9-2.9c1.6,0,3,1.4,3,3c0,1.6-1.4,2.9-3.1,2.8C120.3,118.7,119.1,117.4,119.1,115.8z"></path>
            </g>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
