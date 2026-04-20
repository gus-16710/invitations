"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface AudioContextType {
  playing: boolean;
  setPlaying: (v: boolean) => void;
  currentTime: number;
  setCurrentTime: (v: number) => void;
  headerVisible: boolean;
  setHeaderVisible: (v: boolean) => void;
}

const AudioContext = createContext<AudioContextType>({
  playing: false,
  setPlaying: () => {},
  currentTime: 0,
  setCurrentTime: () => {},
  headerVisible: true,
  setHeaderVisible: () => {},
});

export const useAudio = () => useContext(AudioContext);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  return (
    <AudioContext.Provider
      value={{ playing, setPlaying, currentTime, setCurrentTime, headerVisible, setHeaderVisible }}
    >
      {children}
    </AudioContext.Provider>
  );
}
