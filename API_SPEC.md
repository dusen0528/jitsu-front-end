# API 명세서

## 공통 기능 (일반 사용자, 선수, 어드민)

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/login` | 로그인 |
| POST | `/signup` | 일반 유저 회원가입 |
| PATCH | `/users/{id}` | 회원 정보 수정 |
| POST | `/orders` | 동영상 구매 |
| GET | `/videos/{id}` | 동영상 ID로 상세 조회 |
| GET | `/athletes/{id}` | 선수 ID로 정보 조회 (개인정보 제외) |
| GET | `/specialties` | 전문분야 목록 조회 |
| GET | `/videos` | 카테고리별 동영상 목록 조회 (페이징) |
| GET | `/orders` | 동영상 구매 내역 조회 (페이징) |

## 선수 전용 기능

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/athletes/signup` | 선수 회원가입 |
| POST | `/videos` | 동영상 업로드 |
| PATCH | `/videos/{id}` | 동영상 수정 |
| GET | `/payouts/{id}` | 정산 상세 내역 조회 (수익, 생성일자, 동영상 제목 포함) |
| GET | `/payouts` | 선수의 전체 정산 목록 조회 (페이징) |

## 어드민 전용 기능

| 메서드 | 경로 | 설명 |
|--------|------|------|
| POST | `/specialties` | 전문분야 추가 |
| DELETE | `/specialties/{id}` | 전문분야 삭제 |
| POST | `/categories` | 카테고리 추가 |
| DELETE | `/categories/{id}` | 카테고리 삭제 |
| PATCH | `/members/{id}/ban` | 회원 정지 |
| PATCH | `/payouts/{id}/complete` | 정산 완료 처리 |
| GET | `/members` | 회원 목록 조회 (페이징) |
| GET | `/admin/logs` | 관리자 활동 내역 조회 (페이징) |
| GET | `/payouts/requests` | 전체 정산 요청 목록 조회 (페이징) |
| GET | `/payouts/completed` | 전체 정산 완료 목록 조회 (페이징) |
| POST | `/admin/videos` | 동영상 업로드 |
| PATCH | `/admin/videos/{id}` | 동영상 수정 |
| GET | `/members/{id}` | 회원 ID로 상세 조회 |

### 참고 사항

- 정산 목록은 `요청`/`완료` 상태를 분리해 조회합니다.
- 선수 ID로 정보 조회 시 개인정보는 포함되지 않습니다.

## 현재 프론트엔드 구현 사항 요약

- 전역 장바구니 상태 관리와 결제 페이지 구현
- 추천 강의에서 장바구니 추가 가능
- 관리자 페이지에서 회원 관리와 강의 등록 목록 표시
- 정산 관리 페이지에서 상태를 변경할 수 있으며 요청/완료 목록을 분리해 표시
- 선수 프로필 페이지에서 정산 신청 및 정산 내역 페이지로 이동 가능
- 선수는 정산 내역을 확인하고 각 항목을 눌러 상세 내역을 볼 수 있음

## 마이페이지 관련 기능

| 메서드 | 경로 | 설명 |
|--------|------|------|
| GET | `/me/athlete/videos` | 로그인한 선수가 등록한 강의 목록 조회 |
| POST | `/me/athlete/videos` | 선수 본인이 강의 업로드 |
| GET | `/me/user/orders` | 로그인한 사용자의 구매 강의 목록 조회 |

### 현재 프론트엔드 추가 구현 사항

- 선수는 `/athlete-courses`에서 자신의 강의를 관리하고 새로운 강의를 등록할 수 있음
- `/mypage/athlete`와 `/mypage/user` 페이지를 통해 각각 업로드한 강의와 구매한 강의를 확인 가능
