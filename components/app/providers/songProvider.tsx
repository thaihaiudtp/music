"use client";

import { ISong } from "@/lib/songs/songs";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SongContextType {
  song?: ISong;
  changeSong: (song: ISong | undefined) => void;
}

const SongContext = createContext<SongContextType | null>(null);

const SongContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [song, setSong] = useState<ISong | undefined>();

  const changeSong = (newSong: ISong | undefined) => {
    setSong(newSong);
  };

  const value = { song, changeSong };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export const useSongContext = () => {
  const context = useContext(SongContext);

  if (context === null) {
    throw new Error("SongContext not found");
  }

  return context as SongContextType;
};

export default SongContextProvider;
