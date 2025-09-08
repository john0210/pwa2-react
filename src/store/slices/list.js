import { createSlice } from "@reduxjs/toolkit";

// `list` 상태관리 slice 생성 및 설정
const list = createSlice({
  name: 'list', // slice 명
  initialState: { // 상태 관리할 state를 정의하는 영역
    cnt: 100, // 키랑 초기값
  },
  reducers: { // state의 상태를 변화시키는 actions를 정의하는 영역
    addCnt(state) {
      state.cnt += 1;
    },
    minusCnt(state) {
      state.cnt -=1;
    },
    changeCnt(state, action) {
      // state 파라미터 : `initailState`의 정보를 담고 있는 파라미터
      // action : 외부에서 전달 된 값을 담는 파라미터
      //   > action.payload : 전달 된 값에 접근할 수 있는 프로퍼티
      state.cnt = action.payload;
    },
  }
});

// 정의한 Actions 내보내기(컴포넌트에서 액션 호출)
export const {addCnt, changeCnt, minusCnt} = list.actions;

// Reducer 내보내기(스토어(통합관리)에서 호출하게 됨)
export default list.reducer;