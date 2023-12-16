import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { mate, roboto } from "./Fonts";

export default function Confirm() {
  return (
    <section className="h-screen flex items-center justify-center flex-col bg-zinc-900 text-gray-100">      
      <h1 className={`${mate.className} text-3xl mt-5`}>
        Confirma tu asistencia
      </h1>
      <span className="mt-5 bg-gray-100 text-xs font-medium me-2 px-2.5 py-0.5 rounded text-red-600">
        * NO NIÑOS *
      </span>
      <p className={`${roboto.className} mt-5 mx-10 text-center`}>
        Espero que puedan venir a compartir con nosotros este día inolvidable.
        Por favor confirma tu presencia.
      </p>
      <p className={`${roboto.className} mt-5 mx-10 text-center`}>
        ¡Muchas Gracias!
      </p>

      <div className="mt-5 flex items-center justify-center flex-col">
        <button
          type="button"
          className="flex justify-center items-center gap-2 w-60 mt-3 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center"
          onClick={() => window.open("https://wa.link/mv18ux", "_blank")}
        >
          <FaWhatsapp className="text-2xl" />
          Mensaje de Whatsapp
        </button>

        <button
          type="button"
          className="flex justify-center items-center gap-2 w-60 mt-3 text-gray-900 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center"
          onClick={() => window.open("tel:5511422546", "_blank")}
        >
          <FaPhoneAlt className="text-2xl" />
          Llamada Telefonica
        </button>
      </div>
    </section>
  );
}
