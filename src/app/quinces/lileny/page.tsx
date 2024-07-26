"use client";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import "./styles.css";
import "@splidejs/react-splide/css";
import Location from "./components/Location";
import GodParents from "./components/GodParents";
import Photography from "./components/Photography";
import FloatinButton from "./components/FloatingButton";

// export default function Lileny() {
//   return (
//     <main
//       style={{
//         backgroundColor: "#99154B",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%2399154B' cx='50' cy='0' r='50'/%3E%3Cg fill='%239f2752' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a4345a' cx='50' cy='100' r='50'/%3E%3Cg fill='%23aa4062' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23af4c69' cx='50' cy='200' r='50'/%3E%3Cg fill='%23b45771' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ba6179' cx='50' cy='300' r='50'/%3E%3Cg fill='%23bf6c82' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c3768a' cx='50' cy='400' r='50'/%3E%3Cg fill='%23c88192' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23cd8b9a' cx='50' cy='500' r='50'/%3E%3Cg fill='%23d195a3' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d59fac' cx='50' cy='600' r='50'/%3E%3Cg fill='%23d9aab4' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23deb4bd' cx='50' cy='700' r='50'/%3E%3Cg fill='%23e1bec6' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e5c9cf' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e9d3d8' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ecdee1' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f0e8ea' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23F3F3F3' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
//         backgroundAttachment: "fixed",
//         backgroundSize: "contain",
//       }}
//     >
//       <div className="max-w-3xl m-auto shadow-large bg-[url('/img/quinces/lileny/background-15.jpg')] bg-center bg-cover bg-fixed">
//         {/* <div className="max-w-3xl m-auto bg-[url('/img/quinces/lileny/golden-frame-02.png')] bg-cover bg-center bg-no-repeat top-0 fixed w-full h-screen" />         */}
//         <Splide
//           aria-label="Ricardo Flores Magón"
//           options={{
//             rewind: true,
//             direction: "ltr",
//             height: "100svh",
//             releaseWheel: true,
//             type: "loop",
//             waitForTransition: true,
//             arrows: true,
//             classes: {
//               page: "splide__pagination__page", // each button
//             },
//           }}
//         >
//           <SplideSlide>
//             <Header />
//           </SplideSlide>
//           <SplideSlide>
//             <Presentation />
//           </SplideSlide>
//           <SplideSlide>
//             <Location />
//           </SplideSlide>
//           <SplideSlide>
//             <GodParents />
//           </SplideSlide>
//         </Splide>
//       </div>
//     </main>
//   );
// }

export default function Lileny() {
  return (
    <main
      style={{
        backgroundColor: "#99154B",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%2399154B' cx='50' cy='0' r='50'/%3E%3Cg fill='%239f2752' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a4345a' cx='50' cy='100' r='50'/%3E%3Cg fill='%23aa4062' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23af4c69' cx='50' cy='200' r='50'/%3E%3Cg fill='%23b45771' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ba6179' cx='50' cy='300' r='50'/%3E%3Cg fill='%23bf6c82' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c3768a' cx='50' cy='400' r='50'/%3E%3Cg fill='%23c88192' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%23cd8b9a' cx='50' cy='500' r='50'/%3E%3Cg fill='%23d195a3' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%23d59fac' cx='50' cy='600' r='50'/%3E%3Cg fill='%23d9aab4' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23deb4bd' cx='50' cy='700' r='50'/%3E%3Cg fill='%23e1bec6' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23e5c9cf' cx='50' cy='800' r='50'/%3E%3Cg fill='%23e9d3d8' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23ecdee1' cx='50' cy='900' r='50'/%3E%3Cg fill='%23f0e8ea' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23F3F3F3' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-3xl m-auto shadow-large bg-[url('/img/quinces/lileny/background-15.jpg')] bg-center bg-cover bg-fixed">        
        <Header />
        <Location />
        <Photography urlImg={"/img/quinces/lileny/gallery-07.jpeg"} />
        <GodParents />
        <Photography urlImg={"/img/quinces/lileny/gallery-08.jpeg"} />
        <Presentation />
        <FloatinButton />        
      </div>
    </main>
  );
}
