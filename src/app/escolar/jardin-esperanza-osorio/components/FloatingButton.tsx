import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function FloatinButton() {  
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: 0, scale: 0 }, { duration: 0 });

    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        animate(scope.current, { scale: 1, opacity: 1 });
      } else {
        animate(scope.current, { scale: 0, opacity: 0 });
      }
    });
  }, []);

  return (
    <button
      type="button"
      className={`bg-yellow-300 p-3 rounded-full text-white fixed bottom-0 right-0 font-medium shadow-md mb-24 mr-5 transition duration-150 ease-in-out hover:bg-yellow-300 hover:shadow-lg focus:bg-yellow-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-300 active:shadow-lg z-30`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      ref={scope}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="h-4 w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
        ></path>
      </svg>
    </button>
  );
}
