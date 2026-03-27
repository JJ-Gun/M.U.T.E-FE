# M.U.T.E (Music, Understanding, Teaching, Education)

> https://github.com/Kakao-Goormton-MusicGen
> 기능 개선 및 오류 수정

---

## 주요 기능

- 키워드 입력
- 생성된 동요 재생
- 생성한 동요 게시판 업로드
- 동요 게시판

---

## 화면

> home
- 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/e128c3ec-1be5-4de9-bc38-3cae1e2be3d1" />
<details>
  <summary>수정 내역</summary>
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/e128c3ec-1be5-4de9-bc38-3cae1e2be3d1" />
</details>

> createmusic
- 2026-01-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/dc80f2b1-e907-4b21-b69f-27489c28a52c" />
<details>
  <summary>수정 내역</summary>
  - 2026-01-19
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/2e4d5e49-a099-4b5b-87c3-d356bb7795c8" />
  - 2026-01-16
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/07e54361-c11b-4a92-a2f7-55e24819368f" />
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/b227a3bc-2880-4ff8-861b-c4556aaa7335" />
</details>

> board
- 2026-01-26
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/c320e57c-7c17-4e83-9f28-17e397ee0027" />
<details>
  <summary>수정 내역</summary>
  - 2026-01-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/a4dd935a-46d8-4f52-84c4-7fec264f531a" />
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/caa95289-4612-48b0-9408-106a731b6e8e" />
</details>

---

## 확인 사항

### 2026-01-26
- 데이터 추가에 따른 대응 필요
  - 페이지네이션 예정
- 검색 기능 추가 예정
- 제목, 작성자 기준 필터 예정
- 하단부 부자연스러운 동작

### 2026-01-21
- createmusic에서 등록 시 사용된 ID/PW 사용 기능 불분명
- board UI 일관성 부족
  - user ID, title에 따라 변동 가능성 다수

### 2026-01-19
- createmusic 결과 url로 확인 필요

### 2025-11-21
- 키워드 입력 후 생성 불가
- 생성 완료 페이지 미정렬
- 게시판 비정상 동작

---

## 수정 내역
<details>
  <summary>2026-01-28</summary>

  ### 수정 사항
  - css 수정
    - global min-height 지정
    - board 데이터 오픈 시 하단부 공백 반영
    - home 위치 재조정
</details>
<details>
  <summary>2026-01-26</summary>

### 수정 사항
- (common)/(component)/(audioPlayer) 추가
  - 음악 재생부 audioPlayer.tsx로 분리하여 재사용
  - 해당 부분 audioPlayer.module.css로 이관
- createmusic/page.tsx 수정
  - audioPlayer 컴포넌트 분리에 따른 해당 부분 수정 및 삭제
- createmusic/page.module.css 수정
  - auidoPlayer 컴포넌트 분리에 따른 해당 부분 삭제
- board/page.txt 수정
  - 기존 화면 구조 변경
    - 작성자, 제목 위치 변경
  - auido -> audioPlayer 컴포넌트로 변경
- board/page.module.css 수정
  - 화면 구조 변경
    - songTitle align-items 속성 삭제
    - button -> download 로 변경
    - audioPlayer 조절 위해 playerWrapper 추가
</details>
<details>
  <summary>2026-01-21</summary>

### 수정 사항
- createmusic/page.tsx 수정
  - 다운로드 버튼 위치 제목과 같은 줄로 이동
- createmusic/page.module.css 수정
  - 다운로드 버튼과 제목 첫 줄과 같은 줄에 있도록 수정
    - 제목이 너무 길어 2줄 이상이 될 경우를 대비하여 제목 줄 수가 늘어나도 다운로드 버튼 유지
- board/page.tsx 수정
  - 현상황 파악 위해 더미데이터 추가 및 api 임시 해제
- board/page.module.css 수정
  - 상단부 공간 및 top 공간 확보
</details>
<details>
  <summary>2026-01-19</summary>

  ### 수정 사항
  - createmusic/page.tsx 수정
  - createmusic/page.module.css 수정
  - 생성 결과 배치 수정
    - 기본 mp3 재생 플레이어 제거
    - 재생 시간/전체 시간, 재생/일시정지, 재생 바, 다운로드 분리
    - 재생 바 슬라이더 기본 색상에서 프로젝트 색상으로 변경
    - 재생/일시정지, 다운로드 버튼 변경
  - 아이디/비밀번호 입력부 수정
    - 비선택 상태 테두리 제거
    - 커서 위치, 선택 상태 하이라이트 추가
    - input 길이 비율에 맞게 수정
  - 등록 버튼 수정
    - 입력부와 동일한 크기로 변경
    - 하이라이트 추가
  - 홈 버튼 수정
    - 텍스트 링크에서 버튼으로 변경
    - 하이라이트 추가

  - 재생/일시정지 미반영 현상
    - audio 이벤트에서 재생 상태 조작하도록 변경

  - 음원 재생 확인 여부
    - 별도의 파일로 확인된 기능
      - 음원 제목
      - 재생 시간
      - 전체 시간
      - 재생/일시정지
      - 특정 위치 재생
      - 다운로드
    - 추후 url 데이터로 확인 필요
</details>
<details>
  <summary>2026-01-16</summary>

  ### 수정 사항
  - createmusic/page.module.css 수정
  - 결과 화면 위치 조정
</details>
<details>
  <summary>2025-11-21</summary>

### 수정 사항
- home/page.module.css 수정
- chatBox 위치 조정
- chatBox 크기 조정으로 불필요한 스크롤 방지
</details>
