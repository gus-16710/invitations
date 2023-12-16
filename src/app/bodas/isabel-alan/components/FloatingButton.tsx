import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function FloatinButton() {
  const [hidden, setHidden] = useState("hidden");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setHidden("");
      } else {
        setHidden("hidden");
      }
    });
  }, []);

  return (
    <button
      type="button"
      className={`${hidden} bg-slate-200/50 p-3 rounded-full text-zinc-800 fixed bottom-0 right-0 font-medium shadow-md mb-10 mr-5 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg z-10`}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IoIosArrowUp />
    </button>
  );
}
