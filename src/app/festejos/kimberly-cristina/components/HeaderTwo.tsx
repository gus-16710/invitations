import Image from "next/image";
import { markazi, greatVibes, notoSans, love, glass } from "./Fonts";
import { motion } from "framer-motion";

export default function HeaderTwo() {
  return (
    <>
      <section
        className="flex justify-center items-center flex-col pt-20 pb-20 bg-[url('/img/festejos/kimberly-cristina/vintage-background.jpg')] bg-cover bg-center relative"
        style={{ height: "100svh" }}
      >
        {/* Frame floral — encima del fondo, debajo del contenido */}
        <div className="absolute inset-0 bg-[url('/img/festejos/kimberly-cristina/floral-background.png')] bg-cover bg-no-repeat bg-center z-10" />

        {/* Contenido */}
        <div className="relative z-20 flex flex-col items-center">
          <motion.svg
            viewBox="0 0 300 100"
            className="w-72 h-16 mb-[-1.5rem]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <defs>
              <path id="arc" d="M 20,80 Q 150,10 280,80" />
            </defs>
            <text
              className={love.className}
              fontSize="26"
              fill="#000000"
              textAnchor="middle"
            >
              <textPath href="#arc" startOffset="50%">
                Estás invitado a mi
              </textPath>
            </text>
          </motion.svg>

          <motion.h1
            className={`${markazi.className} text-6xl`}
            style={{ color: "#8b5b6b" }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.8, ease: "easeOut" }}
          >
            BAUTIZO
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            <Image
              src="/img/festejos/kimberly-cristina/cross.png"
              alt="Cruz decorativa"
              width={150}
              height={150}
            />
          </motion.div>

          <motion.div
            className="relative flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.6, ease: "easeOut" }}
          >
            <div className="bg-[url('/img/festejos/kimberly-cristina/ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-72 h-36 -bottom-16" />
            <svg
              viewBox="-40 0 380 80"
              className="w-80 h-20 z-10 absolute -bottom-14"
            >
              <defs>
                <path id="arc-down" d="M 20,10 Q 150,30 280,10" />
              </defs>
              <text
                className={`${markazi.className}`}
                fontSize="40"
                fill="#8b5b6b"
                textAnchor="middle"
              >
                <textPath href="#arc-down" startOffset="50%">
                  CRISTINA YOLETH
                </textPath>
              </text>
            </svg>
          </motion.div>

          <motion.p
            className={`${glass.className} text-gray-900 px-5 text-center text-lg mt-10`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.0, ease: "easeOut" }}
          >
            "Señor, hoy me presentan ante ti para ser bañada con la gracia de tu
            amor, toma mi pequeño corazón en tus benditas manos y jamás te
            separes de mí."
          </motion.p>
        </div>

         {/* Nube animada de izquierda a derecha - SOLO PIXELS */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="150px"
          height="150px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute top-10 z-0"
          animate={{
            x: ["-50vw", "110vw"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <path
            opacity="0.8"
            d="M16.2857 18C19.4416 18 22 15.4717 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18H16.2857Z"
            className="fill-white/50"
          />
          <path
            d="M18.2857 22C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344C19.2941 13.3711 17.7203 12 15.8095 12C13.7582 12 12.0952 13.5802 12.0952 15.5294C12.0952 15.9605 12.1766 16.3736 12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857Z"
            className="fill-white/40"
          />
        </motion.svg>

        {/* Segunda nube animada de derecha a izquierda - SOLO PIXELS */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="120px"
          height="120px"
          viewBox="0 0 24 24"
          fill="none"
          className="absolute top-64 z-0"
          animate={{
            x: ["110vw", "-50vw"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          <path
            opacity="0.8"
            d="M16.2857 18C19.4416 18 22 15.4717 22 12.3529C22 9.88113 20.393 7.78024 18.1551 7.01498C17.8371 4.19371 15.4159 2 12.4762 2C9.32028 2 6.7619 4.52827 6.7619 7.64706C6.7619 8.33687 6.88706 8.9978 7.11616 9.60887C6.8475 9.55673 6.56983 9.52941 6.28571 9.52941C3.91878 9.52941 2 11.4256 2 13.7647C2 16.1038 3.91878 18 6.28571 18H16.2857Z"
            className="fill-white/40"
          />
          <path
            d="M18.2857 22C20.3371 22 22 20.4198 22 18.4706C22 16.9257 20.9554 15.6126 19.5008 15.1344C19.2941 13.3711 17.7203 12 15.8095 12C13.7582 12 12.0952 13.5802 12.0952 15.5294C12.0952 15.9605 12.1766 16.3736 12.3255 16.7555C12.1509 16.723 11.9704 16.7059 11.7857 16.7059C10.2472 16.7059 9 17.891 9 19.3529C9 20.8149 10.2472 22 11.7857 22H18.2857Z"
            className="fill-white/30"
          />
        </motion.svg>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="100px"
          width="100px"
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          className="absolute bottom-0 left-3/4 fill-white/30"
          animate={{
            y: ["25vh", "-100vh"],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            },
          }}
        >
          <g>
            <g>
              <path d="M256,0C159.826,0,81.582,78.244,81.582,174.418c0,60.686,17.555,117.932,49.432,161.193    c26.864,36.459,61.254,59.587,98.766,66.943c3.94,13.917,13.21,22.427,20.44,29.053c8.113,7.437,11.406,10.763,11.406,18.503    s-3.293,11.065-11.406,18.503c-9.433,8.647-22.352,20.489-22.352,43.387h33.758c0-7.739,3.293-11.065,11.406-18.503    c9.433-8.648,22.352-20.489,22.352-43.387c0-22.898-12.919-34.741-22.352-43.387c-0.93-0.852-1.788-1.644-2.594-2.401    c42.07-4.476,80.895-28.467,110.547-68.71c31.877-43.261,49.432-100.507,49.432-161.193C430.418,78.244,352.174,0,256,0z     M353.808,315.586c-26.492,35.955-61.229,55.755-97.808,55.755s-71.315-19.8-97.808-55.755    c-27.633-37.502-42.852-87.636-42.852-141.168c0-77.56,63.1-140.659,140.659-140.659s140.659,63.1,140.659,140.659    C396.659,227.949,381.441,278.084,353.808,315.586z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M149.099,174.418h33.758c0-40.331,32.812-73.143,73.143-73.143V67.516C197.055,67.516,149.099,115.472,149.099,174.418z" />
            </g>
          </g>
        </motion.svg>
      </section>
    </>
  );
}
