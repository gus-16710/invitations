import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import { motion } from 'framer-motion';
import { oswald } from "./Fonts";
import { LuZoomIn } from "react-icons/lu";

const images = [
  {
    src: "/img/bodas/isabel-alan/gallery-01.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/isabel-alan/gallery-02.jpg",
    width: 1600,
    height: 900,
  },
  {
    src: "/img/bodas/isabel-alan/gallery-03.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/isabel-alan/gallery-04.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/isabel-alan/gallery-05.jpg",
    width: 800,
    height: 600,
  },
  {
    src: "/img/bodas/isabel-alan/gallery-06.jpg",
    width: 800,
    height: 600,
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="h-screen relative">
      <div className="flex justify-center">
      <motion.div
        id="alert-5"
        className="flex items-center justify-center p-1 rounded-lg bg-zinc-200 w-72 mb-3 mt-5"
        role="alert"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="sr-only">Info</span>
        <div className={`${oswald.className} ms-3 text-sm text-zinc-800`}>
          Presiona sobre una imagen para ampliar
        </div>
        <LuZoomIn className="text-zinc-800 ml-2"/>
      </motion.div>
      </div>
      <div className="w-72 m-auto">
        <PhotoAlbum
          layout="masonry"
          photos={images}
          onClick={({ index: current }) => setIndex(current)}
          renderPhoto={NextJsImage}
          columns={2}
        />
        <Lightbox
          index={index}
          slides={images}
          open={index >= 0}
          close={() => setIndex(-1)}
        />
      </div>

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
    </section>
  );
}
