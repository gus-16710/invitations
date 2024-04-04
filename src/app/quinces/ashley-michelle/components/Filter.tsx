export default function Filter() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[url('/img/quinces/ashley/background-filter.jpg')] bg-cover bg-center bg-fixed relative">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute -top-1 w-full"
        style={{
          filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.1))",
        }}
      >
        <path
          d="M1200 0L0 0 598.97 114.72 1200 0z"
          fill="rgb(237 235 254)"
        ></path>
      </svg>
      Nuestro Filtro
    </section>
  );
}
