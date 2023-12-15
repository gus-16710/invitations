// import { useRef, useState } from 'react';

// export default function AudioPlayer() {
//   const audioPlayer = useRef<HTMLAudioElement>(null);

//   //console.log(audioPlayer.current?.currentTime);
//   const onLoadedMetadata = () => {
//     console.log(audioPlayer.current?.duration);
//   };

//   console.log(audioPlayer.current?.duration);

//   return (
//     <audio controls ref={audioPlayer} onLoadedMetadata={onLoadedMetadata}>
//       <source src="/media/amarte_mil_anios.mp3" type="audio/mpeg" />
//       Your browser does not support the audio element.
//     </audio>
//   );
// }

import { Progress } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { saira } from "./Fonts";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function AudioPlayer() {
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hasWindow, setHasWindow] = useState(false);

  const audioPlayer = useRef(null);

  const currentProgress = (Math.trunc(currentTime) * 100) / 259;

  useEffect(() => {
    if (typeof window !== undefined) setHasWindow(true);
  }, []);

  return (
    <>
      {hasWindow && (
        <>
          <ReactPlayer
            ref={audioPlayer}
            url={"/media/amarte_mil_anios.mp3"}
            controls={true}
            height={100}
            width={300}
            playing={playing}
            onProgress={(state) => setCurrentTime(state.playedSeconds)}
            style={{ display: "none" }}
          />
          <p
            className={`${saira.className} text-zinc-100 text-xl custom-shadow mt-5`}
          >
            NUESTRA CANCIÓN
          </p>
          <div className="flex gap-2 w-56 items-center">
            <button
              type="button"              
              onClick={() => setPlaying(!playing)}              
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
        </>
      )}
    </>
  );
}
