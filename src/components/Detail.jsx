import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeCnt, minusCnt } from '../store/slices/detail.js';
import { useState } from 'react';

function Detail() {

  // action 호출 방법
  const dispatch = useDispatch();

  // State에 접근하는 방법
  const cnt = useSelector(state => state.detail.cnt);

  const [inputNum, setInputNum] = useState(0);

  const convertAndSetNumber = (val) => {
    if(!isNaN(val)) {
      setInputNum(parseInt(val));
    } else {
      console.error('숫자 아니다.')
    }
  }
  
return (
    <>
    <h1>상세 페이지</h1>
    <p>{cnt}</p>
    <input type="number" onChange={(e) => { convertAndSetNumber(e.target.value) }}/>
    <button type="button" onClick={() => { dispatch(changeCnt(inputNum))}}>버튼</button>
    <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
    <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;