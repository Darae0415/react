import { useState } from "react";
//최대정원
const MAX_CAPACITY = 10;

export function Gate(){
    const [isFull, setIsFull] = useState(false); //최대정원
    const [isEmpty, setIsEmpty] = useState(true); //정원0명
    const [count, setCount] = useState(0); //현재입장객

    
    const increaseCount = ()=>{
        let _count = count+1; //입장객 1명 증가

        setIsFull(_count >= MAX_CAPACITY); //최대정원의 상태 세팅
        //→ 10명이상이면 isFull= true가 됨
        setIsEmpty(_count <= 0); //최소정원의 상태 세팅
        //→ 0명이면 isFull= true가 됨
        setCount(_count); //입장객 값을 수정=> 재랜더링
    }
    
    const decreaseCount = ()=>{
        let _count = count-1; //입장객 1명 감소

        setIsFull(_count >= MAX_CAPACITY); //최대정원의 상태 세팅
        //→ 10명이상이면 isFull= true가 됨
        setIsEmpty(_count <= 0); //최소정원의 상태 세팅
        //→ 0명이면 isFull= true가 됨
        setCount(_count); //입장객 값을 수정=> 재랜더링
    }
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