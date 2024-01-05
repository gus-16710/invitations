"use client";

import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from "framer-motion";
import { useRef } from "react";

export default function Christening() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 30]);
  const imageX = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw)))`;

  return (
    <main className="bg-blue-100">
      <div className="relative z-10 h-[200vh] overflow-clip" ref={ref}>
        <motion.div
          style={{ scale }}
          className="hero-background h-screen flex items-center justify-center flex-col "
        >
          <div className="window-mask flex bg-white p-12 h-screen w-full justify-center bg-[url('/img/bautizos/barbara/background-flowers.jpg')] bg-bottom bg-cover bg-fixed">
            <p className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              modi quae iusto vel. Repudiandae assumenda libero recusandae! Hic
              asperiores ea voluptates illo consectetur, ab dolor minima eum
              porro, provident consequuntur?
            </p>            
          </div>
        </motion.div>
      </div>

      <div className="mt-[-200vh] h-[200vh] pb-20 overflow-clip">
        <motion.span
          style={{ x: imageXCalc }}
          className="sticky top-1/4 mx-auto block rounded-3xl h-96 bg-slate-100 shadow-large"
        ></motion.span>
      </div>
      {/* <div className="h-screen flex items-center justify-center">
        One
      </div>
      <div className="h-screen flex items-center justify-center">
        Two
      </div>
      <div className="h-screen flex items-center justify-center">
        Three
      </div>
      <div className="h-screen flex items-center justify-center">
        Fourt
      </div> */}
    </main>
  );
}

// "use client";

// import {
//   useScroll,
//   useTransform,
//   motion,
//   useMotionTemplate,
// } from "framer-motion";
// import { useRef } from "react";

// export default function Christening() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end end"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 12]);
//   const imageX = useTransform(scrollYProgress, [0, 1], [50, 0]);
//   const imageXCalc = useMotionTemplate`max(0px, calc(${imageX}% + calc(${imageX}vw - 300px)))`;

//   return (
//     <main className="bg-blue-950">
//       <div className="relative z-10 h-[200vh] overflow-clip" ref={ref}>
//         <motion.div
//           style={{ scale }}
//           className="hero-background origin-[90%_40%] grid h-screen gap-2 p-6 pt-20 [grid-template-rows:4fr_1fr]"
//         >
//           <div className="window-mask flex rounded-3xl bg-white p-12">
//             <div className="flex h-full flex-col">
//               <h1 className="my-auto max-w[12ch] text-3xl font-bold">
//                 Playing with masks and Framer Motion
//               </h1>
//               <p className="text-xl">
//                 This animation is inspired by the Runway.com homepage. <br />
//                 Recreated by fronted.fyi.
//               </p>
//             </div>
//             <div className="my-auto aspect-[5/8] w-300 min-w-[300px] rounded-full border-4 border-gray-600/20"></div>
//           </div>
//           <div className="grid grid-flow-row grid-cols-3 gap-2">
//             <div className="col-span-2 rounded-3xl border border-white"></div>
//             <a className="flex items-center justify-center rounded-3xl bg-orange-400">
//               Early Access
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       <div className="mt-[-200vh] h-[200vh] bg-blue-100 pb-20 overflow-clip">
//         <motion.span
//           style={{ x: imageXCalc }}
//           className="sticky top-1/4 mx-auto block aspect-video w-[1600px] max-w-[90%] rounded-3xl h-96 bg-slate-100 shadow-large"
//         ></motion.span>
//       </div>
//       <div className="space-y-[80px] bg-blue-100 text-[300px]">
//         <p>Some more text</p>
//         <p>So there´s</p>
//         <p>Some Room</p>
//         <p>To Scroll</p>
//       </div>
//     </main>
//   );
// }
