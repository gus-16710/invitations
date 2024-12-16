import React from "react";
import { luxurious, mea } from "./Fonts";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Confirm() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/blank/white-bg2.jpg')] bg-center bg-cover">
      <h1 className={`${mea.className} text-5xl text-sky-800 text-center`}>
        Asistencia
      </h1>
      <p
        className={`${luxurious.className} text-lg z-10 text-center mt-10 text-zinc-700 max-w-md px-10`}
      >
        Te espero este día que será mágico, único e inolvidable, y sólo estará
        completo si estás tú. Por favor confirma tu asistencia.
      </p>

      <p
        className={`${luxurious.className} text-lg z-10 text-center mt-5 text-zinc-700 max-w-md px-10`}
      >
        ¡Muchas Gracias!
      </p>

      <button
        type="button"
        className="w-60 mt-10 text-gray-700 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        onClick={() => {}}
      >
        <FaWhatsapp className="mr-3 text-2xl" />
        Mensaje de Whatsapp
      </button>
      <button
        type="button"
        className="w-60 mt-5 text-gray-700 bg-white border border-gray-400 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-full me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 font-medium text-sm px-5 py-2.5 text-center flex items-center justify-center"
        onClick={() => {}}
      >
        <FaPhoneAlt className="mr-3 text-2xl" />
        Llamada Telefonica
      </button>
    </section>
  );
}

export default Confirm;
