import { notoSerif, pinyion, playFair } from "./Fonts";

export default function Header() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1
        className={`${playFair.className} text-2xl flex items-center text-zinc-600 z-20`}
        // variants={animation01}
        // initial="hidden"
        // whileInView="visible"
      >
        MIS <span className="text-5xl text-yellow-400">XV</span> AÑOS
      </h1>
      <div className="relative w-full h-96 flex items-center justify-center">
        {/* <div
          className="bg-[url('/img/quinces/daniela/fifteen-girl.jpg')] bg-contain bg-no-repeat bg-center absolute w-60 h-60 rounded-full mb-2"
          //variants={animation01}
          //initial="hidden"
          //whileInView="visible"
        /> */}
        <div
          className="bg-[url('/img/quinces/ashley/floral-frame.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full opacity-80"
          //variants={animation02}
          //initial="hidden"
          //whileInView="visible"
        />
        <h2
          className={`${pinyion.className} text-7xl text-center z-10 text-slate-600`}
        >
          Ashley
          <br />
          Michelle
        </h2>
      </div>

      <p
        className={`${notoSerif.className} mx-10 mt-1 text-center text-xs z-20 font-bolder tracking-widest text-zinc-900`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        // variants={animation03}
        // initial="hidden"
        // whileInView="visible"
      >
        CELEBRA CONMIGO EN ESTE DÍA TAN ESPECIAL
      </p>
      <p
        className={`${playFair.className} z-20 flex items-center mt-3 font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
        // variants={animation04}
        // initial="hidden"
        // whileInView="visible"
      >
        <span className="border-y-1 border-y-yellow-400 py-2 w-16 text-center">SÁBADO</span>{" "}
        <span className="text-4xl mx-3 pb-2">15</span>{" "}
        <span className="border-y-1 border-y-yellow-400 py-2 w-16 text-center">JUNIO</span>
      </p>
      <p
        className={`${playFair.className} z-20 text-2xl text-yellow-400`}        
        // variants={animation04}
        // initial="hidden"
        // whileInView="visible"
      >
        2024
      </p>
    </section>
  );
}
