import { dancing, great, quickSand } from "./Fonts";
import "./Header.css";

export default function Header() {
  return (
    <section className="h-screen flex flex-col justify-center items-center relative bg-[url('/img/quinces/camila/background-header.jpg')] bg-center bg-cover">
      <p className="text-zinc-50 flex items-center">
        <label className={`text-3xl ${quickSand.className}`}>MIS</label>
        <label className={`text-7xl ${great.className}`}>XV</label>
      </p>
      <h1
        className={`text-zinc-50 text-8xl ${dancing.className} border-b-3 border-zinc-50 pb-5 text-shadow`}
        style={{ color: "#AA7579" }}
      >
        Camila
      </h1>
    </section>
  );
}
