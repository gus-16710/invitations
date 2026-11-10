import { useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useOverDark } from "./useOverDark";

export default function FloatinButton() {
  const [scope, animate] = useAnimate<HTMLButtonElement>();
  const overDark = useOverDark(scope);

  useEffect(() => {
    animate(scope.current, { opacity: 0, scale: 0 }, { duration: 0 });

    let visible = false;
    const onScroll = () => {
      const shouldShow =
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
      if (shouldShow === visible) return;
      visible = shouldShow;
      animate(
        scope.current,
        shouldShow ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      className={`${
        overDark
          ? "bg-[#f5ebe0]/95 text-red-900 hover:bg-white"
          : "bg-red-800/90 text-white hover:bg-red-700"
      } p-3 rounded-full fixed bottom-0 right-0 font-medium shadow-md mb-24 mr-5 transition-colors duration-300 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 z-30`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      ref={scope}
    >
      <svg
        aria-hidden="true"
        focusable="false"
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
