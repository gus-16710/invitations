import { dancing, playFair } from "./Fonts";
import { FaSquareWhatsapp, FaSquarePhone } from "react-icons/fa6";

export default function Confirm() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className={`${dancing.className} text-golden text-5xl text-center`}>
      &nbsp;Confirmar&nbsp; <br /> &nbsp;Asistencia&nbsp;
      </h1>

      <p
        className={`${playFair.className} text-zinc-400 text-base px-5 text-center mt-5 max-w-md`}
      >
        Espero que puedan venir a compartir con nosotros este día inolvidable.
        Por favor confirma tu presencia.
      </p>

      <p
        className={`${playFair.className} text-zinc-400 text-base px-5 text-center mt-5 max-w-md`}
      >
        ¡Muchas gracias!
      </p>

      <button role="button" className="golden-button mt-5 w-60">
        <span className="golden-text flex justify-around items-center">
          <FaSquareWhatsapp className="text-2xl" /> Mensaje de Whatsapp
        </span>
      </button>

      <button role="button" className="golden-button mt-5 w-60">
        <span className="golden-text flex justify-around items-center ">
          <FaSquarePhone className="text-2xl" />
          Llamada Telefónica
        </span>
      </button>
    </section>
  );
}
