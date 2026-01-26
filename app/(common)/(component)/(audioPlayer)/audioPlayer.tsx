"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./audioPlayer.module.css";

type AudioPlayerProps = {
  src: string;
};

export default function AudioPlayer({ src }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.load();
    setCurrent(0);
    setDuration(0);
    setIsPlaying(false);
  }, [src]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
    } else {
      audio.pause();
    }
  };

  const formatTime = (sec: number) => {
    if (!Number.isFinite(sec) || sec <= 0) return "0:00";
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${m}:${s}`;
  };

  const progressPercent =
    duration > 0 ? (current / duration) * 100 : 0;

  return (
    <>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setCurrent(0);
        }}
      />

      <div className={styles.audioRow}>
        <span className={styles.time}>
          {formatTime(current)} / {formatTime(duration)}
        </span>
      </div>

      <div className={styles.controlRow}>
        <button onClick={togglePlay} className={styles.playButton}>
          {isPlaying ? "❚❚" : "▶"}
        </button>

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={current}
          onChange={(e) => {
            const value = Number(e.currentTarget.value);
            if (!audioRef.current) return;
            audioRef.current.currentTime = value;
            setCurrent(value);
          }}
          className={styles.progress}
          style={{
            background: `linear-gradient(
              to right,
              #ff6f61 ${progressPercent}%,
              white ${progressPercent}%
            )`,
          }}
        />
      </div>
    </>
  );
}
