import { motion } from "framer-motion";
import { greatVibes, markazi, notoSans } from "./Fonts";
import { sacrament } from "./Animations";
import Image from "next/image";

export default function Sacrament() {
  return (
    <>
      <section
        className="flex justify-center items-center flex-col pt-20 pb-20 relative"
        style={{ height: "100svh" }}
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-500 left-0 w-full h-full object-cover z-0"
        >
          <source
            src="/img/bodas/citlali-daniel/9586593-sd_960_506_25fps.mp4"
            type="video/mp4"
          />
          Tu navegador no soporta videos HTML5.
        </video>

        <div className="absolute top-0 left-0 w-full h-full z-5 bg-gradient-to-t from-black/50 to-transparent"></div>

        <div className="relative z-10 text-zinc-100">
          <div className="flex items-center justify-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="100px"
              fill="rgb(255 255 255)"
              variants={sacrament.svg}
              initial="hidden"
              whileInView="visible"
              className=""
              style={{ textAlign: "center" }}
            >
              <g>
                <g>
                  <path d="M357.391,234.756H296.96v-58.435c0-4.778-3.872-8.652-8.652-8.652H223.69c-4.778,0-8.652,3.874-8.652,8.652v58.435    h-60.432c-4.778,0-8.652,3.874-8.652,8.652v64.617c0,4.778,3.874,8.652,8.652,8.652h60.432v166.955    c0,4.778,3.874,8.652,8.652,8.652h64.618c4.779,0,8.652-3.874,8.652-8.652V379.326c0-4.778-3.872-8.652-8.652-8.652    s-8.652,3.874-8.652,8.652v95.654h-47.315V308.025c0-4.778-3.874-8.652-8.652-8.652h-60.432V252.06h60.432    c4.778,0,8.652-3.874,8.652-8.652v-58.435h47.315v58.435c0,4.778,3.872,8.652,8.652,8.652h60.431v47.314h-60.431    c-4.779,0-8.652,3.874-8.652,8.652v45.153c0,4.778,3.872,8.652,8.652,8.652s8.652-3.874,8.652-8.652v-36.501h60.431    c4.779,0,8.652-3.874,8.652-8.652v-64.617C366.043,238.63,362.17,234.756,357.391,234.756z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M257.215,19.717c-4.778,0-8.652,3.874-8.652,8.652v89.077c0,4.778,3.874,8.652,8.652,8.652    c4.779,0,8.652-3.874,8.652-8.652V28.369C265.867,23.59,261.995,19.717,257.215,19.717z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M503.348,268.28h-35.857c-4.779,0-8.652,3.874-8.652,8.652s3.873,8.652,8.652,8.652h35.857    c4.779,0,8.652-3.874,8.652-8.652S508.126,268.28,503.348,268.28z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M443.651,268.28h-29.38c-4.779,0-8.652,3.874-8.652,8.652s3.873,8.652,8.652,8.652h29.38c4.779,0,8.652-3.874,8.652-8.652    S448.43,268.28,443.651,268.28z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M437.88,95.557c-3.38-3.379-8.857-3.379-12.236,0l-62.987,62.987c-3.379,3.379-3.379,8.856,0,12.235    c1.689,1.69,3.904,2.534,6.117,2.534c2.214,0,4.429-0.844,6.119-2.534l62.987-62.987    C441.259,104.413,441.259,98.934,437.88,95.557z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M123.676,129.438l-35.6-35.6c-3.378-3.379-8.856-3.379-12.235,0c-3.379,3.379-3.379,8.856,0,12.235l35.6,35.6    c1.689,1.69,3.904,2.534,6.117,2.534s4.429-0.844,6.117-2.534C127.055,138.294,127.055,132.817,123.676,129.438z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M151.062,156.826l-8.93-8.93c-3.379-3.379-8.857-3.379-12.235,0c-3.379,3.379-3.379,8.856,0,12.235l8.93,8.93    c1.689,1.69,3.904,2.534,6.117,2.534s4.429-0.844,6.117-2.534C154.441,165.682,154.441,160.205,151.062,156.826z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M97.729,265.85H8.652c-4.778,0-8.652,3.874-8.652,8.652s3.874,8.652,8.652,8.652h89.077c4.778,0,8.652-3.874,8.652-8.652    S102.507,265.85,97.729,265.85z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M121.016,408.982c-3.378-3.378-8.856-3.379-12.235,0l-34.659,34.659c-3.379,3.379-3.379,8.856,0,12.235    c1.689,1.69,3.904,2.534,6.117,2.534s4.429-0.844,6.117-2.534l34.659-34.659C124.395,417.838,124.395,412.361,121.016,408.982z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M149.343,380.655c-3.377-3.379-8.855-3.379-12.235,0l-6.796,6.795c-3.379,3.379-3.379,8.857,0,12.236    c1.689,1.69,3.904,2.534,6.117,2.534s4.429-0.844,6.117-2.534l6.796-6.794C152.722,389.512,152.722,384.034,149.343,380.655z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M436.162,445.36l-62.988-62.987c-3.38-3.378-8.857-3.379-12.236,0s-3.379,8.856,0,12.235l62.987,62.987    c1.69,1.69,3.904,2.534,6.118,2.534c2.214,0,4.429-0.844,6.119-2.534C439.541,454.216,439.541,448.738,436.162,445.36z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M204.553,125.721l-21.025-50.736c-1.828-4.414-6.891-6.51-11.305-4.681c-4.415,1.83-6.51,6.89-4.681,11.305l21.025,50.736    c1.381,3.331,4.602,5.342,7.997,5.342c1.104,0,2.226-0.212,3.308-0.661C204.286,135.197,206.381,130.136,204.553,125.721z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M461.421,191.95c-1.83-4.415-6.889-6.512-11.305-4.682l-50.735,21.012c-4.414,1.828-6.512,6.889-4.684,11.304    c1.381,3.333,4.602,5.343,7.998,5.343c1.103,0,2.225-0.212,3.307-0.661l50.735-21.012    C461.151,201.425,463.249,196.365,461.421,191.95z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M342.023,71.221c-4.41-1.827-9.474,0.266-11.304,4.681l-21.025,50.748c-1.828,4.415,0.268,9.477,4.682,11.305    c1.082,0.449,2.203,0.661,3.307,0.661c3.395,0,6.616-2.011,7.997-5.342l21.025-50.748    C348.535,78.111,346.439,73.051,342.023,71.221z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M113.547,206.033l-50.736-21.013c-4.414-1.827-9.475,0.268-11.304,4.682c-1.828,4.415,0.269,9.475,4.683,11.304    l50.736,21.013c1.082,0.449,2.203,0.661,3.307,0.661c3.395,0,6.617-2.012,7.997-5.343    C120.059,212.922,117.963,207.861,113.547,206.033z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M117.302,331.854c-1.828-4.415-6.891-6.511-11.305-4.682l-50.723,21.012c-4.415,1.828-6.511,6.89-4.682,11.304    c1.381,3.332,4.602,5.343,7.997,5.343c1.104,0,2.225-0.212,3.308-0.661l50.723-21.012    C117.034,341.33,119.13,336.269,117.302,331.854z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="M455.811,350.434l-50.735-21.025c-4.411-1.827-9.475,0.265-11.305,4.68c-1.83,4.415,0.265,9.475,4.681,11.305    l50.735,21.025c1.082,0.449,2.204,0.661,3.308,0.661c3.394,0,6.616-2.011,7.997-5.342    C462.32,357.324,460.226,352.263,455.811,350.434z" />
                </g>
              </g>
            </motion.svg>
          </div>
          <motion.p
            className={`${markazi.className} text-center mx-5 mb-2 mt-5 text-2xl text-zinc-100 max-w-md `}
            variants={sacrament.text02}
            initial="hidden"
            whileInView="visible"
          >
            Así mismo celebraremos la
          </motion.p>
          <motion.h1
            className={`${greatVibes.className} text-5xl p-5 text-center `}
            variants={sacrament.text01}
            initial="hidden"
            whileInView="visible"
          >
            Confirmación
          </motion.h1>
          <motion.p
            className={`${markazi.className} text-center mx-5 text-2xl text-zinc-100 max-w-md `}
            variants={sacrament.text03}
            initial="hidden"
            whileInView="visible"
          >
            De nuestro hijo
          </motion.p>
          <motion.div
            style={{
              WebkitMaskImage: "url('/img/bodas/citlali-daniel/pngwing.png')",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
            }}
            className="w-32 h-32 my-3 place-self-center"
            variants={sacrament.animationPhoto}
            initial="hidden"
            whileInView="visible"
          >
            <Image
              alt="header"
              width={250}
              height={250}
              src={"/img/bodas/citlali-daniel/jose-alexander.png"}
              priority
            />
          </motion.div>
          <motion.h1
            className={`${greatVibes.className} text-4xl p-5 text-center`}
            style={{ lineHeight: 1.5 }}
            variants={sacrament.text04}
            initial="hidden"
            whileInView="visible"
          >
            José Alexander Ramírez Viveros
          </motion.h1>
        </div>        
      </section>
    </>
  );
}