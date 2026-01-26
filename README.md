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
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/bccec017-5333-41ab-b627-7b6cb55e6476" />
<details>
  <summary>수정 내역</summary>
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/bccec017-5333-41ab-b627-7b6cb55e6476" />
</details>

> createmusic
-2026-01-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/4b2df8e3-8bb6-4f6b-a587-823a20f49714" />
<details>
  <summary>수정 내역</summary>
  - 2026-01-19
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/5659f95a-849f-441c-bc31-c9bfac83df83" />
  - 2026-01-16
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/24a52eae-5e19-4f58-be59-21038fa039d6" />
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/0cfd2e9f-d4a2-484c-942f-b16577aabd1f" />
</details>

> board
- 2026-01-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/9f0b6dde-1e11-4fe3-9152-9c35fea0a7f0" />
<details>
  <summary>수정 내역</summary>
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/5b714b3b-0cba-48a1-b6bb-2b36531478d3" />
  - 2025-11-21
  <img width="838" height="849" alt="Image" src="https://github.com/user-attachments/assets/5b714b3b-0cba-48a1-b6bb-2b36531478d3" />
</details>

---

## 확인 사항

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
