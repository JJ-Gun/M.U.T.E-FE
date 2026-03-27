"use client";

import { useState, useEffect } from "react";
import Top from "../(common)/(component)/(topbar)/top";
import styles from "./board.module.css";
import AudioPlayer from "../(common)/(component)/(audioPlayer)/audioPlayer";

interface Post {
  id: number;
  userId: string;
  title: string;
  url: string;
  isVisible: boolean;
}

export default function Board() {
  const [posts, setPosts] = useState<Post[]>([]); // 게시글 상태

  const dummyPosts: Post[] = [
  {
    id: 1,
    userId: "user01",
    title: "첫 번째 게시글",
    url: "/dummy/audio/sample1.mp3",
    isVisible: false,
  },
  {
    id: 2,
    userId: "user02",
    title: "두 번째 게시글",
    url: "/dummy/audio/sample2.mp3",
    isVisible: false,
  },
  {
    id: 3,
    userId: "user03",
    title: "세 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 4,
    userId: "user03",
    title: "네 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 5,
    userId: "user03",
    title: "다섯 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 6,
    userId: "user03",
    title: "여섯 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 7,
    userId: "user03",
    title: "일곱 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 8,
    userId: "user03",
    title: "여덟 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 9,
    userId: "user03",
    title: "아홉 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 10,
    userId: "user03",
    title: "열 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 11,
    userId: "user03",
    title: "열한 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 12,
    userId: "user03",
    title: "열두 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 13,
    userId: "user03",
    title: "열세 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
  {
    id: 14,
    userId: "user03",
    title: "열네 번째 게시글",
    url: "/dummy/audio/sample3.mp3",
    isVisible: false,
  },
];

  // 서버에서 게시글 데이터를 가져오는 함수
  const fetchPosts = async () => {
    try {
     const response = await fetch("https://temu-back.r-e.kr/posts", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.map((post: any) => ({ ...post, isVisible: false })));
      } else {
        console.error("게시글을 불러오지 못했습니다:", response.statusText);
      }
    } catch (error) {
      console.error("게시글 가져오는 중 오류 발생:", error);
    }
  };

  // 컴포넌트가 처음 렌더링될 때 게시글을 가져옴
  useEffect(() => {
    fetchPosts();
  }, []);

  const toggleVisibility = (id: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, isVisible: !post.isVisible } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className={styles.container}>
      <Top />
      <div className={styles.lowcontainer}>
        {posts.map((post) => (
          <div key={post.id}>
            <div
              onClick={() => toggleVisibility(post.id)}
              className={styles.songTitle}
            >
              <span>{post.title}</span> <span>{post.userId}</span>
            </div>
            {post.isVisible && (
              <div className={styles.songDetails}>
                <div className={styles.playerWrapper}>
                  <AudioPlayer src={post.url} />
                </div>
                <a
                  href={post.url}
                  download={`${post.title}.mp3`}
                  className={styles.download}
                >
                  Download
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
