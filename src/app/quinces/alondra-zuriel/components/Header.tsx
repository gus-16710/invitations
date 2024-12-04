import { league, playFair, standard, vibes } from "./Fonts";

export default function Header() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <p
        className={`${vibes.className} text-3xl mt-5 mx-10 text-center`}
        style={{ color: "#513704" }}
      >
        Tenemos el honor de invitarlos a celebrar
      </p>
      <div className="w-full h-16 relative flex items-center justify-center mt-2">
        <div className="bg-[url('/img/quinces/alondra/red-ribbon.png')] bg-contain bg-no-repeat bg-center absolute w-full h-full" />
      </div>
      <h1
        className="text-7xl text-center mt-5"
        style={{ fontFamily: "candlescript", color: "#a57d35" }}
      >
        Alondra <br /> Zuriel
      </h1>
      <p
        className={`${playFair.className} z-20 flex items-center mt-5 font-bold text-yellow-400`}
        style={{ textShadow: "0px 1px 1px rgba(255,255,255, 1)" }}
      >
        <span
          className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
          style={{
            borderTopColor: "rgb(165, 125, 53, 0.5)",
            borderBottomColor: "rgb(165, 125, 53, 0.5)",
            color: "#513704",
          }}
        >
          Sábado
        </span>{" "}
        <span
          className={`${standard.className} text-6xl mx-3`}
          style={{ color: "#a57d35" }}
        >
          21
        </span>{" "}
        <span
          className={`${league.className} border-y-2 py-1 w-28 text-center font-thin text-2xl`}
          style={{
            borderTopColor: "rgb(165, 125, 53, 0.5)",
            borderBottomColor: "rgb(165, 125, 53, 0.5)",
            color: "#513704",
          }}
        >
          Diciembre
        </span>
      </p>
      <p
        className={`${league.className} z-20 text-xl text-yellow-400 font-thin`}
        style={{ color: "#513704" }}
      >
        ~ 2024 ~
      </p>

      <p
        className={`${vibes.className} text-3xl mt-5`}
        style={{ color: "#513704" }}
      >
        Parroquia San Antonio de Padua
      </p>

      <span
        className={`${standard.className} text-2xl mt-2`}
        style={{ color: "#a57d35" }}
      >
        17:00 Hrs
      </span>
    </div>
  );
}
