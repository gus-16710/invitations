
import { dancing, lobster, playFair } from "./Fonts";

export default function Header() {
  return (
    // <section className="h-screen bg-[url('/img/quinces/sayuri/background-floral.jpg')] bg-cover bg-center flex flex-col justify-center items-center">
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-96 flex items-center justify-center overflow-clip mt-16">
        <div
          className="bg-[url('/img/quinces/sayuri/round-frame.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full opacity-80"
          //variants={header.animationFrame}
          //initial="hidden"
          //whileInView="visible"
        />
        {/* <motion.h2
          className={`${pinyion.className} text-7xl text-center z-10 text-slate-600`}
          variants={header.animationText02}
          initial="hidden"
          whileInView="visible"
        >
          Ashley
          <br />
          Michelle
        </motion.h2> */}
        <h1
          className={`${dancing.className} text-golden z-10 text-center text-8xl h-32`}
        >
          Sayuri
        </h1>
      </div>
      <p className={`${playFair.className} text-golden mt-5`}>&nbsp; - Estas invitado a celebrar - &nbsp;</p>
      <h2
        className={`${playFair.className} text-2xl flex items-center text-zinc-400 z-20 mt-2`}
        //variants={header.animationText01}
        //initial="hidden"
        //whileInView="visible"
      >
        MIS <span className="text-golden text-5xl">XV</span> AÑOS
      </h2>
      <p className={`${playFair.className} text-zinc-400 mt-2 text-xl`}>21.SEP.2024</p>
    </section>
  );
}
