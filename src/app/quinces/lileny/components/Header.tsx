import { glass, mea } from "./Fonts";

function Header() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative z-10">
      <p className={`${glass.className} text-xl text-zinc-300`}>
        ACOMPAÑANOS A SER PARTE DE LOS
      </p>
      <p className={`${glass.className} text-3xl text-golden mt-2`}>
        ~ XV AÑOS ~
      </p>
      <p className={`${glass.className} text-xl text-zinc-300 mt-2`}>
        DE NUESTRA HIJA
      </p>
      <h1
        className={`${mea.className} text-8xl text-golden font-extrabold text-center pt-10 pb-5`}
      >
        Lileny
      </h1>
      <h1
        className={`${mea.className} text-8xl text-golden font-extrabold text-center pb-10`}
      >
        Alexandra
      </h1>

      <p className={`${glass.className} text-xl text-zinc-300`}>
        Sus padres agradecen tu asistencia
      </p>

      <p className={`${glass.className} text-4xl text-golden`}>
        14.SEPTIEMBRE.2024
      </p>
    </section>
  );
}

export default Header;
