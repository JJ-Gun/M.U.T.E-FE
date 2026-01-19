"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"
import Link from "next/link";

export default function CreateMusic() {
  // 서버에서 받은 노래 URL (예시)
  const songUrl = "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Sunny+Day+Sound.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() =>{
    const audio = audioRef.current;
    if(!audio) return;
    audio.load();
  }, []);

  const fileName = "테스트용";

  const togglePlay = async () =>{
    const audio = audioRef.current;
    if(!audio){
      return;
    }
    if(audio.paused){
      await audio.play();
    }
    else{
      audio.pause();
    }
  }

  const formatTime = (sec:number): string =>{
    if(isNaN(sec) || sec <= 0){
      return "0:00";
    }

    const m = Math.floor(sec/60);
    const s = Math.floor(sec%60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  const progressPercent = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.lowcontainer}>
        {/* 생성된 노래 */}
        <div className={styles.audioBox}>
          <span className={styles.title}>{fileName}</span>
          <audio
            ref={audioRef}
            src={songUrl}
            preload="metadata"
            onLoadedMetadata={(e)=>setDuration(e.currentTarget.duration)}
            onTimeUpdate={(e)=>setCurrent(e.currentTarget.currentTime)}
            onPlay={()=>setIsPlaying(true)}
            onPause={()=> setIsPlaying(false)}
            onEnded={()=>{
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
              min="0"
              max={duration || 0}
              value={current}
              onChange={(e)=>{
                if(!audioRef.current) return;
                const value = Number(e.currentTarget.value);
                audioRef.current.currentTime = value;
                setCurrent(value);
              }}
              className={styles.progress}
              style={{
                background: `linear-gradient(
                to right,
                #ff6f61 ${progressPercent}%,
                white ${progressPercent}%
                )`
              }}
            />
            <a
              href={songUrl}
              download
              className={styles.download}
            >
              ⬇
            </a>
          </div>
        </div>

        {/* 아이디와 비밀번호 입력란 */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="아이디"
            className={styles.input}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className={styles.input}
          />
          <button type="button" className={styles.registerButton}>등록</button>
        </div>

        {/* 홈으로 이동하는 버튼 */}
        <Link href="/home" legacyBehavior>
          <a className={styles.homeLink}>홈으로</a>
        </Link>
      </div>
    </div>
  );
}
