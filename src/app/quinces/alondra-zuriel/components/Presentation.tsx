import { league, vibes } from "./Fonts";

export default function Presentation() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h2
        className={`${vibes.className} text-5xl mb-5`}
        style={{ color: "#513704" }}
      >
        Mis Padres:
      </h2>
      <p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
      >
        Félix Alberto Serena
      </p>
      <p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
      >
        Rosa Isela Martínez
      </p>

      <p
        className={`${vibes.className} text-4xl bg-red-800 rounded-full w-12 h-12 m-10 pr-1 text-zinc-100 flex justify-center items-center`}
      >
        &
      </p>

      <h2
        className={`${vibes.className} text-5xl mb-5`}
        style={{ color: "#513704" }}
      >
        Mis Padrinos:
      </h2>
      <p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
      >
        Roberto Cardoza Martínez
      </p>
      <p
        className={`${league.className} text-2xl`}
        style={{ color: "#513704" }}
      >
        Carolina Campos Campos
      </p>
    </div>
  );
}
