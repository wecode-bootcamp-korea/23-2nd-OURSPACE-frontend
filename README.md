# 프로젝트 이름

- Our Space

#프로젝트 소개

- 다양한 유형의 공간들을 공유한다 [스페이스클라우드](https://www.spacecloud.kr/) 클론 프로젝트
- 개발은 초기 세팅부터 직접 구현!

# 프로젝트 인원 및 기간

- <Front-end> 심택준, 이현준, 최호정, 이수정
- <Back-end> 임종성, 장이주

- 개발기간: 21/08/17 ~ 21/08/27

# 적용 기술

- Front-end : HTML5, JavaScript, React, Hook, React Router , Styled-component
- Back-end: Python, Django, JWT, Unit Test, Docker, s3, MySQL
- Common: AWS, RESTful API

# Front-End 구현 기능

## 로그인 (이현준)

- 카카오 API를 이용한 소셜 로그인 기능 구현

## 리스트페이지 (최호정)

- queryString을 통한 검색필터 기능 구현
- 주소 -> 좌표값으로 변경하여 지도에 다중마커 표출 기능
- 다중마커 클릭 시, 해당 아이템 표출

## 마이 페이지 (최호정)

- 예약 조회 기능 구현
- 유저가 예약한 리스트 표출
- 당일 날짜 기준으로 예약 날짜가 지난 예약은 background가 다르게 표출

## 상세 페이지 (심택준)

- 상세 페이지 UI 구현
- react datepicker 라이브러리를 활용하여 예약 가능 여부 유효성 검사 기능 구현
- slick 라이브러리 활용하여 캐러셀 구현
- axios와 async await를 활용해 비동기로 백엔드와 통신
- hooks 사용 (react 라이프 사이클 활용)
- 사용자 인증에 따라 예약 가능 여부 관리
- 사용자 인증(Authentication) 완료에 따른, Local Storage에서의 access token(JSON Web Tokens) 관리

## 예약 페이지 (심택준)

- axios와 async await를 활용해 비동기로 백엔드와 통신
- 사용자 인증(Authentication) 완료에 따른, Local Storage에서의 access token(JSON Web Tokens) 관리

## 공간등록 (이수정)

- 폼데이터로 다중 이미지 업로드 기능 구현
- 카카오 API 사용 주소찾기 구현

# 프로젝트 깃헙

- https://github.com/wecode-bootcamp-korea/23-2nd-OURSPACE-frontend
