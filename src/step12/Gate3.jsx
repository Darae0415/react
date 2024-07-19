import { useState, useEffect } from "react";
import { useCounter } from "./useCounter";
//최대정원
const MAX_CAPACITY = 10;

export function Gate3(){
    const [isFull, setIsFull] = useState(false); //최대정원
    const [isEmpty, setIsEmpty] = useState(true); //정원0명
    const [count, increaseCount, decreaseCount] = useCounter(0); //현재입장객
    //count값이 변경되면 실행
    useEffect(()=>{
        setIsFull(count >= MAX_CAPACITY); //최대정원의 상태 세팅
        //→ 10명이상이면 isFull= true가 됨
        setIsEmpty(count <= 0);
        //→ 0명이면 isFull= true가 됨
    },[count]);
    return(
        <div style={{padding: 16}}>
          <p>총 {count}명 수용했습니다.</p>
          <button onClick={increaseCount} disabled={isFull}>입장</button>
          <button onClick={decreaseCount} disabled={isEmpty}>퇴장</button>

          {isFull && <p style={{color: 'red'}}>정원이 가득찼습니다.</p>} 
          {isEmpty && <p style={{color: 'red'}}>입장객이 없습니다.</p>}
          {/* {} =  Javascript 코드를 포함하고 있으며, 이 안에서 조건부 렌더링 사용 */}
          {/* isFull & isEmpty 가 각각 true(&&)일 경우 각각 설정한 p태그들 표시 */}
          
        </div>
    );
}