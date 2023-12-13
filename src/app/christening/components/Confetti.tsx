import { PiConfetti } from "react-icons/pi";

export default function Confetti({ fire }: { fire: () => void }) {
  return (
    <button
      type="button"
      className="text-gray-950 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 p-3 rounded-full fixed bottom-0 right-0 font-medium shadow-md mb-24 mr-5 transition duration-150 ease-in-out hover:bg-zinc-700/75 hover:shadow-lg focus:bg-zinc-700/75 focus:shadow-lg active:bg-zinc-800/75 active:shadow-lg z-10"
      onClick={() => fire()}
    >
      <PiConfetti />
    </button>
  );
}
