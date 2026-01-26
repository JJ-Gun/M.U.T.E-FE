"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Top from "../(common)/(component)/(topbar)/top"
import Link from "next/link";
import AudioPlayer from "../(common)/(component)/(audioPlayer)/AudioPlayer";

export default function CreateMusic() {
  // 서버에서 받은 노래 URL (예시)
  const songUrl = "https://kakao-moreburger-backend.s3.ap-northeast-2.amazonaws.com/Sunny+Day+Sound.mp3";
  
  const fileName = "테스트용";

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.lowcontainer}>
        {/* 생성된 노래 */}
        <div className={styles.audioBox}>
          <div className={styles.titleRow}>
            <span className={styles.title}>{fileName}</span>
            <a
              href={songUrl}
              download
              className={styles.download}
            >
              ⬇
            </a>
          </div>
          <AudioPlayer src={songUrl} />
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
