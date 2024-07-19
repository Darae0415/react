import { useState } from "react";


//useCounter : 커스텀 Hook
export function useCounter(iniValue){
    const[count, setCount] = useState(iniValue);
    const increase = () => { setCount((count)=>count+1) };
    const decerase = () => { setCount((count)=>Math.max(count-1, 0)) }; //감소시키되 0에서 멈춤

    return[count, increase, decerase];
    //각기마다 설정된 함수 return
}