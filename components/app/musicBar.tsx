import { ISong } from "@/lib/songs/songs";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { PauseIcon, PlayIcon } from "@radix-ui/react-icons";
import { formatTime } from "@/functions/time";

const MusicBar = (props: { song: ISong }) => {
  const { song } = props;
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current!.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current!.currentTime);
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeScrub = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.currentTime = parseFloat(event.target.value);
      setCurrentTime(parseFloat(event.target.value));
    }
  };

  useEffect(() => {
    setIsPlaying(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [song]);

  return (
    <div className="audio-player flex flex-col w-full">
      <Button onClick={togglePlay} className="mx-auto">
        {isPlaying ? <PauseIcon className="font-bold	" /> : <PlayIcon />}
      </Button>
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        src={song.source}
      />
      <div className="flex flex-row justify-center">
        <p>{formatTime(currentTime)}</p>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleTimeScrub}
          className="accent-primary w-1/2"
        />
        <p>{formatTime(duration)}</p>
      </div>
    </div>
  );
};

export default MusicBar;
