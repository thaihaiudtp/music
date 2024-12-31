"use client";

import MusicBar from "@/components/app/musicBar";
import { MusicList } from "@/components/app/musicList";
import { useSongContext } from "@/components/app/providers/songProvider";
import { SearchBar } from "@/components/app/searchBar";
import { useState } from "react";

export default function Home() {
  const { song } = useSongContext();

  const [contains, setContains] = useState<string>("");

  const handleChangeContains = (value: string) => {
    setContains(value);
  };

  return (
    <>
      <main  className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
        <MusicList filter={contains} />
        {song && (
          <div>
            <MusicBar song={song} />
          </div>
        )}
      </main>
    </>
  );
}
