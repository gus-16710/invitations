import { Progress } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { saira } from "./Fonts";
import { motion, useAnimate } from "framer-motion";

const Player = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  const [scope, animate] = useAnimate();

  const audioPlayer = useRef(null);
  const currentProgress = (Math.trunc(currentTime) * 100) / 259;

  useEffect(() => {
    if (playing) {
      animate(
        scope.current,
        {
          rotate: [0, 90, 180, 270, 360],
        },
        { repeat: Infinity }
      );
    } else {
      animate(
        scope.current,
        {
          rotate: 0,
        },
        { repeat: 0 }
      );
    }
  }, [playing]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 3, duration: 1 }}
      className="flex items-center flex-col justify-center"
    >
      <ReactPlayer
        ref={audioPlayer}
        url={"/media/amarte_mil_anios.mp3"}
        controls={true}
        height={100}
        width={300}
        playing={playing}
        onProgress={(state) => setCurrentTime(state.playedSeconds)}
        style={{ display: "none" }}
        loop={true}
      />
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="rgb(244 244 245 / .8)"
        version="1.1"
        id="Capa_1"
        width="50px"
        viewBox="0 0 487.5 487.5"
        xmlSpace="preserve"
        ref={scope}
        className="mt-5"
      >
        <g>
          <g>
            <path d="M243.75,487.5c134.621,0,243.75-109.132,243.75-243.75S378.371,0,243.75,0S0,109.132,0,243.75S109.129,487.5,243.75,487.5    z M315.176,41.217c35.884,12.653,67.396,34.574,91.661,62.89l-89.763,91.688c-8.848-13.498-21.32-24.405-36.034-31.336    L315.176,41.217z M280.023,31.279l-10.271,127.9c-4.744-1.446-9.598-2.487-14.497-3.114L238.581,28.324    C252.46,27.973,266.344,28.964,280.023,31.279z M243.75,203.579c22.186,0,40.171,17.985,40.171,40.171    c0,22.186-17.985,40.171-40.171,40.171c-22.186,0-40.171-17.985-40.171-40.171C203.579,221.564,221.564,203.579,243.75,203.579z     M188.425,311.702c12.621,10.263,27.854,16.778,43.851,18.909l-43.769,120.613c-36.029-9.609-69.435-28.52-96.381-55.384    L188.425,311.702z" />
          </g>
        </g>
      </motion.svg>
      <p
        className={`${saira.className} text-zinc-100 text-xl custom-shadow mt-5 text-center`}
      >
        NUESTRA CANCIÓN
      </p>
      <div className="flex gap-2 w-56 items-center">
        <button
          type="button"
          onClick={() => {
            setPlaying(!playing);
          }}
        >
          {playing ? (
            <FaPause className="text-2xl text-zinc-100" />
          ) : (
            <FaPlay className="text-2xl text-zinc-100" />
          )}
        </button>
        <Progress
          size="sm"
          radius="sm"
          classNames={{
            base: "max-w-md ",
            track: "drop-shadow-lg border",
            indicator: "bg-zinc-100",
            label: "tracking-wider font-medium text-default-600",
            value: "text-foreground/60",
          }}
          aria-label="Loading..."
          value={Math.trunc(currentProgress)}
        />
      </div>
    </motion.div>
  );
};

export default function AudioPlayer() {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) setHasWindow(true);
  }, []);

  return (
    <>
      {hasWindow && (
        <Player />
        // <motion.div
        //   initial={{ y: -100, opacity: 0 }}
        //   whileInView={{ y: 0, opacity: 1 }}
        //   transition={{ delay: 3, duration: 1 }}
        // >
        //   <ReactPlayer
        //     ref={audioPlayer}
        //     url={"/media/amarte_mil_anios.mp3"}
        //     controls={true}
        //     height={100}
        //     width={300}
        //     playing={playing}
        //     onProgress={(state) => setCurrentTime(state.playedSeconds)}
        //     style={{ display: "none" }}
        //   />
        //   <p
        //     className={`${saira.className} text-zinc-100 text-xl custom-shadow mt-5 text-center`}
        //   >
        //     NUESTRA CANCIÓN
        //   </p>

        //   <motion.svg
        //     xmlns="http://www.w3.org/2000/svg"
        //     xmlnsXlink="http://www.w3.org/1999/xlink"
        //     fill="rgb(244 244 245 / .5)"
        //     version="1.1"
        //     id="Capa_1"
        //     width="25px"
        //     viewBox="0 0 487.5 487.5"
        //     xmlSpace="preserve"
        //     ref={scope}
        //   >
        //     <g>
        //       <g>
        //         <path d="M243.75,487.5c134.621,0,243.75-109.132,243.75-243.75S378.371,0,243.75,0S0,109.132,0,243.75S109.129,487.5,243.75,487.5    z M315.176,41.217c35.884,12.653,67.396,34.574,91.661,62.89l-89.763,91.688c-8.848-13.498-21.32-24.405-36.034-31.336    L315.176,41.217z M280.023,31.279l-10.271,127.9c-4.744-1.446-9.598-2.487-14.497-3.114L238.581,28.324    C252.46,27.973,266.344,28.964,280.023,31.279z M243.75,203.579c22.186,0,40.171,17.985,40.171,40.171    c0,22.186-17.985,40.171-40.171,40.171c-22.186,0-40.171-17.985-40.171-40.171C203.579,221.564,221.564,203.579,243.75,203.579z     M188.425,311.702c12.621,10.263,27.854,16.778,43.851,18.909l-43.769,120.613c-36.029-9.609-69.435-28.52-96.381-55.384    L188.425,311.702z" />
        //       </g>
        //     </g>
        //   </motion.svg>
        //   <div className="flex gap-2 w-56 items-center">
        //     <button
        //       type="button"
        //       onClick={() => {
        //         setPlaying(!playing);
        //       }}
        //     >
        //       {playing ? (
        //         <FaPause className="text-2xl text-zinc-100" />
        //       ) : (
        //         <FaPlay className="text-2xl text-zinc-100" />
        //       )}
        //     </button>
        //     <Progress
        //       size="sm"
        //       radius="sm"
        //       classNames={{
        //         base: "max-w-md ",
        //         track: "drop-shadow-lg border",
        //         indicator: "bg-zinc-100",
        //         label: "tracking-wider font-medium text-default-600",
        //         value: "text-foreground/60",
        //       }}
        //       aria-label="Loading..."
        //       value={Math.trunc(currentProgress)}
        //     />
        //   </div>
        // </motion.div>
      )}
    </>
  );
}
