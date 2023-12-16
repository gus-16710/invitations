import { useRef } from "react";
import { mate, roboto } from "./Fonts";
import { motion, useScroll } from "framer-motion";

export default function DressCode() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  return (
    <div className="relative">
      <motion.section
        className="pb-20 h-screen flex items-center justify-center flex-col"
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        <h1 className={`${mate.className} text-gray-800 text-3xl mt-5`}>
          Código de Vestimenta
        </h1>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-26 0 511 511.99991"
          width="75px"
          fill="#000000"
          className="mt-10"
        >
          <path d="m457.390625 405.664062c-77.230469-77.210937-139.847656-186.847656-148.160156-201.695312v-33.53125c0-6.675781 1.421875-17.515625 4.222656-32.21875.789063-4.132812-1.917969-8.121094-6.050781-8.902344-4.128906-.789062-8.109375 1.917969-8.898438 6.050782-2.164062 11.304687-3.523437 20.375-4.132812 27.460937h-128.640625c-2.253907-25.890625-13.957031-71.996094-16.867188-83.199219 2.789063-6.503906 7.144531-10.777344 13.253907-13.050781 19.648437-7.285156 52.984374 7.652344 64.167968 14.027344 2.335938 1.328125 5.207032 1.328125 7.539063 0 11.195312-6.375 44.535156-21.324219 64.191406-14.027344 6.097656 2.273437 10.453125 6.554687 13.253906 13.050781-1.136719 4.34375-3.632812 14.128906-6.351562 25.808594-.953125 4.101562 1.59375 8.191406 5.683593 9.144531 4.097657.953125 8.1875-1.59375 9.140626-5.683593 3.625-15.546876 6.832031-27.65625 6.871093-27.777344.386719-1.492188.324219-3.054688-.191406-4.503906-3.320313-9.339844-8.757813-16.339844-16.207031-20.9375-.699219-10.574219-4.597656-36.039063-25.421875-53.847657-1.714844-1.460937-3.980469-2.101562-6.203125-1.726562-2.210938.367187-4.148438 1.695312-5.296875 3.632812-.660157 1.105469-15.121094 25.789063-17.179688 50.8125-1.15625.378907-2.324219.753907-3.511719 1.167969-9.804687 3.378906-18.015624 7.308594-22.539062 9.640625-4.539062-2.332031-12.738281-6.261719-22.550781-9.640625-1.179688-.414062-2.34375-.789062-3.511719-1.167969-2.0625-25.023437-16.511719-49.707031-17.171875-50.8125-1.148437-1.9375-3.085937-3.265625-5.308594-3.632812-2.210937-.375-4.484375.265625-6.191406 1.726562-20.832031 17.808594-24.730469 43.28125-25.421875 53.847657-7.449219 4.597656-12.886719 11.597656-16.207031 20.9375-.515625 1.449218-.578125 3.011718-.183594 4.503906.175781.648437 17.375 65.710937 17.375 89.316406v33.53125c-8.320313 14.847656-70.9375 124.484375-148.167969 201.695312-1.523437 1.519532-2.324218 3.613282-2.210937 5.761719.101562 2.152344 1.113281 4.152344 2.777343 5.511719.835938.679688 19.234376 15.578125 51.070313 32.234375-.011719 0-.019531.007813-.019531.019531-1.289063 1.632813-1.859375 3.722656-1.5625 5.785156.292968 2.058594 1.417968 3.90625 3.105468 5.113282.585938.425781 14.640626 10.414062 38.949219 21.585937 1.035157.46875 2.109375.699219 3.175781.699219 2.882813 0 5.640626-1.652344 6.921876-4.433594 1.753906-3.824218.082031-8.34375-3.734376-10.097656-13.46875-6.191406-23.65625-12.035156-29.796874-15.8125 61.957031-81.289062 110.425781-193.035156 110.914062-194.183594 1.664062-3.855468-.113281-8.332031-3.96875-9.996094-3.867188-1.664062-8.34375.113282-10.007812 3.980469-.476563 1.09375-45.953126 105.898438-104.601563 185.046875-20.753906-10.695312-35.976563-20.863281-44.09375-26.691406 72.753906-75.015625 131.402344-175.597656 143.316406-196.636719h134.195313c11.925781 21.039063 70.574218 121.621094 143.328125 196.636719-8.097657 5.816406-23.289063 15.976562-44.09375 26.691406-58.660157-79.148437-104.136719-183.953125-104.613281-185.046875-1.652344-3.867187-6.140626-5.644531-9.996094-3.980469-3.867188 1.664063-5.640625 6.140626-3.976563 9.996094.496094 1.148438 48.964844 112.882813 110.914063 194.175782-19.507813 11.972656-80.113282 44.753906-158.652344 44.753906-33.777344 0-67.855469-5.976563-101.285156-17.769532-3.96875-1.402343-8.3125.679688-9.710938 4.648438-1.390625 3.957031.691406 8.308594 4.648438 9.710938 35.0625 12.359374 70.847656 18.632812 106.347656 18.632812 100.429688 0 171.203125-49.789062 174.167969-51.910156 1.695312-1.207032 2.8125-3.054688 3.105469-5.113282.292968-2.0625-.261719-4.152343-1.550782-5.785156-.011718-.011718-.023437-.019531-.023437-.019531 31.828125-16.65625 50.226562-31.554687 51.058593-32.234375 1.664063-1.359375 2.679688-3.359375 2.792969-5.511719.101563-2.148437-.703125-4.242187-2.222656-5.761719zm-175.644531-385.140624c7.886718 9.96875 11.132812 21.464843 12.464844 29.492187-6.648438-1.003906-14.097657-.800781-22.285157.609375 1.816407-11.40625 6.308594-22.621094 9.820313-30.101562zm-103.371094 0c3.511719 7.480468 7.996094 18.695312 9.824219 30.101562-8.191407-1.410156-15.640625-1.613281-22.289063-.609375 1.332032-8.027344 4.570313-19.523437 12.464844-29.492187zm115.632812 177.804687h-127.894531v-20.277344h127.894531zm0 0"></path>
        </svg>

        <h2 className={`${mate.className} pt-5 text-3xl`}>Para Mujeres</h2>
        <p className={`${roboto.className}`}>Formal / Vestido Largo</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 200 200"
          xmlSpace="preserve"
          width="75px"
          fill="#000000"
          className="mt-10"
        >
          <g>
            <path d="M55.32,173.07c14.05,0,27.45,0,41.38,0c0-1.98,0-3.77,0-5.55c-0.01-10.56,0-21.12-0.04-31.69   c-0.01-2.25,0.19-4.51,2.96-4.59c2.99-0.09,3.37,2.21,3.36,4.65c-0.03,12.24-0.01,24.48-0.01,37.05c13.83,0,27.43,0,41.55,0   c0-1.35,0-2.74,0-4.12c0-22.43,0-44.86,0-67.28c0-0.91-0.27-1.94,0.06-2.71c0.6-1.41,1.55-2.67,2.35-3.99   c1.32,0.8,3.2,1.29,3.85,2.47c2.84,5.12,5.33,10.43,7.94,15.68c5.74,11.55,11.46,23.1,17.21,34.64c0.46,0.92,1.01,1.78,1.72,3.03   c5-2,9.9-3.96,15.26-6.1c-2.15-6.24-4.23-12.34-6.35-18.42c-9.07-25.92-18.2-51.82-27.19-77.78c-1.02-2.94-2.55-4.73-5.46-5.96   c-7.56-3.18-14.96-6.72-22.44-10.09c-0.9-0.41-1.86-0.69-3.59-1.32c4.8,8.5,9.28,16.23,13.51,24.1c0.89,1.65,1.59,4.12,0.96,5.61   c-0.43,1-3.34,1.17-5.17,1.3c-2.95,0.2-5.92,0.05-8.96,0.05c0,0.76-0.19,1.46,0.03,2c2.77,6.81,0.63,12.67-2.68,18.81   c-7.54,13.98-14.48,28.28-21.8,42.38c-0.75,1.44-2.41,3.31-3.65,3.32c-1.26,0.01-3-1.81-3.73-3.24   c-8.44-16.31-16.78-32.66-24.98-49.09c-0.84-1.69-0.88-3.96-0.72-5.92c0.21-2.7,0.96-5.36,1.52-8.24c-3.7,0-7.17,0-10.64,0   c-4.56,0.01-5.76-1.86-3.57-5.81c4.61-8.28,9.3-16.52,14.56-25.83c-7.96,3.6-14.73,7.13-21.84,9.74   c-6.54,2.4-9.81,6.49-12.04,13.15c-9.82,29.38-20.32,58.53-30.56,87.77c-0.34,0.98-0.67,1.96-1.16,3.42   c5.04,2.04,10.02,4.05,15.25,6.17c0.79-1.46,1.49-2.67,2.11-3.93c8.01-16.09,15.95-32.21,24.09-48.23c0.79-1.56,2.86-3.52,4.3-3.49   c2.97,0.06,2.6,2.95,2.61,5.16c0.01,4.56-0.03,9.13,0.01,13.69c0.02,2.33-0.04,4.84-3.02,4.97c-2.98,0.12-3.41-2.24-3.3-4.67   c0.02-0.38-0.07-0.77-0.21-2.16c-0.96,1.78-1.54,2.8-2.07,3.85c-6.33,12.71-12.63,25.42-18.97,38.13   c-2.15,4.32-2.76,4.53-7.29,2.74c-5.57-2.2-11.08-4.55-16.71-6.59c-3.52-1.28-4.55-3.06-3.23-6.79   c11.85-33.5,23.51-67.07,35.4-100.56c0.64-1.8,2.51-3.66,4.28-4.49c12.13-5.72,24.36-11.21,36.61-16.67   c1.6-0.71,3.48-1.13,5.24-1.14c11.87-0.1,23.73-0.1,35.6,0c1.76,0.01,3.65,0.37,5.25,1.08c12.25,5.44,24.5,10.92,36.62,16.65   c1.85,0.88,3.75,2.92,4.43,4.84c11.82,33.24,23.45,66.54,35.11,99.83c1.66,4.73,1.31,5.48-3.29,7.32   c-5.44,2.18-10.87,4.36-16.32,6.51c-4.69,1.85-5.22,1.63-7.52-2.99c-6.78-13.63-13.55-27.27-20.83-41.9   c-0.15,2.09-0.29,3.15-0.29,4.2c-0.02,19.3-0.02,38.6-0.03,57.9c0,5.17-0.45,5.64-5.55,5.65c-30.25,0.02-60.51,0.03-90.76,0.03   c-4.88,0-5.44-0.56-5.44-5.37c-0.01-15.26-0.02-30.51,0.01-45.77c0-2.39-0.67-5.55,3.04-5.62c3.69-0.07,3.21,3.03,3.21,5.47   c0.02,13.43,0.01,26.86,0.01,40.29C55.32,170,55.32,171.41,55.32,173.07z M121.57,32.68c-0.56,2.49-0.97,3.96-1.2,5.46   c-0.36,2.33-0.87,4.73-3.89,4.21c-3.37-0.58-2.65-3.32-2.25-5.62c0.56-3.25,1.24-6.48,1.9-9.86c-10.89,0-21.27,0-32.19,0   c5.28,26.95,10.51,53.64,15.74,80.33c0.84-0.39,0.94-0.63,0.99-0.88c3.68-18.9,7.35-37.8,11.04-56.7c0.45-2.32,0.83-5.17,4.01-4.69   c3.26,0.48,2.72,3.19,2.25,5.59c-1.22,6.12-2.41,12.25-3.6,18.38c-2.13,10.96-4.25,21.93-6.37,32.89c3.68-5.8,6.35-12.06,9.9-17.77   c4.58-7.37,6.55-14.79,3.25-23.12c-0.14-0.35-0.13-0.77-0.17-1.16c-0.4-3.57,0.68-4.78,4.32-4.66c2.88,0.09,5.76,0.32,9.26,0.53   C130.13,47.81,126.12,40.7,121.57,32.68z M91.41,101.81c0.24-0.08,0.49-0.17,0.73-0.25c-4.44-22.67-8.89-45.34-13.53-69.03   c-4.63,8.2-8.69,15.38-13.08,23.14c3.59-0.24,6.41-0.5,9.24-0.6c3.71-0.12,4.97,1.37,4.3,4.97c-0.5,2.68-1.2,5.33-1.62,8.02   c-0.29,1.86-0.95,4.12-0.23,5.62C81.77,83.15,86.65,92.45,91.41,101.81z"></path>{" "}
            <path d="M70.53,150.41c-2.61-0.01-5.26,0.29-7.8-0.13c-1.19-0.2-2.14-1.77-3.21-2.72c1.04-1.12,2.03-3.15,3.14-3.22   c5.32-0.33,10.68-0.31,16.01,0.01c1.05,0.06,1.99,1.94,2.98,2.97c-1.1,1.03-2.08,2.72-3.34,2.95   C75.8,150.74,73.13,150.41,70.53,150.41z"></path>{" "}
            <path d="M129.24,150.43c-2.34,0-4.77,0.37-7-0.13c-1.38-0.31-2.46-1.94-3.67-2.97c1.1-1.06,2.14-2.95,3.3-3.02   c5.19-0.32,10.42-0.31,15.6,0.05c1.11,0.08,2.09,2.08,3.13,3.19c-1.05,0.95-2,2.55-3.17,2.73c-2.67,0.41-5.45,0.13-8.18,0.13   C129.24,150.41,129.24,150.42,129.24,150.43z"></path>{" "}
            <path d="M94.93,137.78c-2.06,1.49-3.35,3.12-4.3,2.94c-1.23-0.23-2.74-1.76-3.07-3.01c-0.19-0.71,1.72-2.78,2.7-2.79   C91.5,134.91,92.76,136.36,94.93,137.78z"></path>{" "}
            <path d="M94.9,158.77c-1.96,1.58-3.15,3.24-4.11,3.12c-1.24-0.16-2.85-1.57-3.23-2.78c-0.22-0.73,1.55-2.9,2.52-2.96   C91.32,156.07,92.66,157.46,94.9,158.77z"></path>
          </g>
        </svg>
        <h2 className={`${mate.className} pt-5 text-3xl`}>Para Caballeros</h2>
        <p className={`${roboto.className}`}>Formal / Traje</p>
      </motion.section>
      <div className="absolute -bottom-1 w-full">
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,100 0,100 C 28.63981219496567,88.44583887855055 57.27962438993134,76.8916777571011 82,87 C 106.72037561006866,97.1083222428989 127.52131463524026,128.87912785014612 149,132 C 170.47868536475974,135.12087214985388 192.6351170691077,109.59181084231444 214,94 C 235.3648829308923,78.40818915768556 255.93821708832894,72.75362878059613 278,77 C 300.06178291167106,81.24637121940387 323.61201457757653,95.39367403530106 348,106 C 372.38798542242347,116.60632596469894 397.61372460136494,123.6716750781996 428,121 C 458.38627539863506,118.3283249218004 493.9330870169639,105.91962565190056 515,105 C 536.0669129830361,104.08037434809944 542.6539273307798,114.64982231419813 563,106 C 583.3460726692202,97.35017768580187 617.4512036599166,69.48108509130694 643,71 C 668.5487963400834,72.51891490869306 685.541258029554,103.42583732057413 707,112 C 728.458741970446,120.57416267942587 754.3837642218673,106.81556562639643 784,108 C 813.6162357781327,109.18443437360357 846.9236850829768,125.31190017384014 870,129 C 893.0763149170232,132.68809982615986 905.9214954462258,123.93683367824298 928,115 C 950.0785045537742,106.06316632175702 981.3903331321201,96.94076511318795 1004,102 C 1026.60966686788,107.05923488681205 1040.517172025294,126.30010586900517 1067,137 C 1093.482827974706,147.69989413099483 1132.540978766703,149.85881141079145 1163,136 C 1193.459021233297,122.14118858920855 1215.3189129078937,92.26464848782909 1236,86 C 1256.6810870921063,79.73535151217091 1276.1833696017209,97.08259463789216 1296,102 C 1315.8166303982791,106.91740536210784 1335.9476086852226,99.40497296060224 1360,97 C 1384.0523913147774,94.59502703939776 1412.0261956573886,97.29751351969888 1440,100 C 1440,100 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#000000"
            fillOpacity="0.4"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 16.982383971923994,188.32912397981556 33.96476794384799,176.65824795963115 62,186 C 90.03523205615201,195.34175204036885 129.12331219653203,225.69613214129095 154,232 C 178.87668780346797,238.30386785870905 189.5419832700239,220.557223475205 208,207 C 226.4580167299761,193.442776524795 252.7087547233723,184.07497395788914 283,182 C 313.2912452766277,179.92502604211086 347.6229978364867,185.1428806932385 368,182 C 388.3770021635133,178.8571193067615 394.7992539306809,167.35350326915682 419,182 C 443.2007460693191,196.64649673084318 485.17998644079,237.44310623013425 514,235 C 542.82001355921,232.55689376986575 558.4808003061593,186.87407181030605 581,181 C 603.5191996938407,175.12592818969395 632.8968123345733,209.0606065286416 654,218 C 675.1031876654267,226.9393934713584 687.9319503555473,210.88350207512755 708,197 C 728.0680496444527,183.11649792487245 755.3753862432372,171.4053851708482 781,174 C 806.6246137567628,176.5946148291518 830.5665046715036,193.49495724147965 859,187 C 887.4334953284964,180.50504275852035 920.3585950707486,150.6147858632332 946,162 C 971.6414049292514,173.3852141367668 989.9991150455016,226.04589930558745 1011,235 C 1032.0008849544984,243.95410069441255 1055.6449447472455,209.20161691441697 1082,188 C 1108.3550552527545,166.79838308558303 1137.421105965517,159.14763303674462 1159,172 C 1180.578894034483,184.85236696325538 1194.6706313906861,218.20785093860454 1217,228 C 1239.3293686093139,237.79214906139546 1269.8963684717385,224.02096320883723 1297,212 C 1324.1036315282615,199.97903679116277 1347.7438947223602,189.70829622604649 1371,188 C 1394.2561052776398,186.29170377395351 1417.12805263882,193.14585188697674 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="#000000"
            fillOpacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
          <path
            d="M 0,400 C 0,400 0,300 0,300 C 22.49154819000652,304.1206423128475 44.98309638001304,308.24128462569496 68,310 C 91.01690361998696,311.75871537430504 114.55916266995436,311.1555038100676 143,299 C 171.44083733004564,286.8444961899324 204.78025294016956,263.13670013403475 227,274 C 249.21974705983044,284.86329986596525 260.31982556936737,330.2976956537935 280,335 C 299.68017443063263,339.7023043462065 327.940444782361,303.6725172507913 353,299 C 378.059555217639,294.3274827492087 399.9183953011887,321.01223534304137 422,330 C 444.0816046988113,338.98776465695863 466.38597401288405,330.27854137704315 491,312 C 515.614025987116,293.72145862295685 542.5377086472748,265.8735991487859 566,268 C 589.4622913527252,270.1264008512141 609.4631913980163,302.22706202781313 637,313 C 664.5368086019837,323.77293797218687 699.60952576066,313.2181527399614 728,310 C 756.39047423934,306.7818472600386 778.0987055593444,310.9003270123412 797,316 C 815.9012944406556,321.0996729876588 831.9956520019626,327.1805392106738 852,326 C 872.0043479980374,324.8194607893262 895.9186864328058,316.37751614496375 925,302 C 954.0813135671942,287.62248385503625 988.3296022668146,267.3093962094712 1013,274 C 1037.6703977331854,280.6906037905288 1052.7629044999358,314.3848990171513 1075,318 C 1097.2370955000642,321.6151009828487 1126.6187797334424,295.1510077219235 1151,290 C 1175.3812202665576,284.8489922780765 1194.7619765662937,301.0110700951545 1221,297 C 1247.2380234337063,292.9889299048455 1280.3333140013824,268.8047118974584 1302,272 C 1323.6666859986176,275.1952881025416 1333.9047674281765,305.77008231501185 1355,315 C 1376.0952325718235,324.22991768498815 1408.0476162859118,312.11495884249405 1440,300 C 1440,300 1440,400 1440,400 Z"
            stroke="none"
            strokeWidth="0"
            fill="rgb(24 24 27)"
            fillOpacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-2"
          ></path>
        </svg>
      </div>
    </div>
  );
}
