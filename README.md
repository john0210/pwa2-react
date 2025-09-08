<!--  리액트 라우터  -->

1. React Router 설치
npm install react-router-dom

2. Router 컴포넌트 생성
/src/routes/Router.jsx

3. main.jsx에 App 컴포넌트 대신 Router 컴포넌트로 변경

4. 라우터로 관리하고 싶은 컴포넌트를 만든다.

5. Router 컴포넌트의 Router 객체 정의를 HTML 구조에 맞게 설정

<!-- Redux -->
<!-- 상태 관리 라이브러리, 중앙 집중식 상태관리 패턴 구현 -->

1. Redux 설치
npm install @reduxjs/toolkit react-redux

2. Redux Store 생성(스토어는 총괄 책임자)
경로 예시- 자유지만 이것을 권장) src/store/store.js

3. Slices 생성
경로 예시- 자유지만 이것을 권장) src/store/slices/**

4. 생성한 Slices를 Store에 추가

5. main.jsx에 React Redux <Provider> 추가 (최상위 컴포넌트 일 것, StrictMode를 제외한 최상위 컴포넌트)

6. 사용