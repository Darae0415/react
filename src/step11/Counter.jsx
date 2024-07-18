
// 3. useEffect 사용하는방법
import { useState,useEffect } from "react";

export function Counter(props){
    //const[읽기변수, 입력함수] = useState(초기값)
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    //마운트 후, 수정 후 실행
    useEffect(
        ()=>{
            document.title = `총 ${count} / ${count2}`;
            console.log('effect_count=>',count,',',count2);
        }, [count,count2]
    )
    return(
        <div>
            <p id="msg">총 {count} / {count2}번의 클릭했습니다.</p>
            <button onClick={()=>{
            // count++; 읽기전용이라 직접 변경 불가능
            setCount(count+1);
            console.log('count=>',count+1);
            }}>클릭1</button>

            <button onClick={()=>{
            // count++; 읽기전용이라 직접 변경 불가능
            setCount2(count2+1);
            console.log('count=>',count2+1);
            }}>클릭2</button>
        </div>
    );
}
// 1.DOM객체에 직접 값 변경하기
// export function Counter(props){
//     let count = 10;

//     return(
//         <div>
//             <p id="msg">총 {count}번의 클릭했습니다.</p>
//             <button onClick={()=>{count++
//             let msgEle = document.getElementById('msg');
//             msgEle.innerText = `총 ${count}번의 클릭했습니다.`;
//             console.log('count=>',count);
//             }}>클릭</button>
//         </div>
//     );
// }

// 2. useState 사용하는방법
// import { useState } from "react";

// export function Counter(props){
//     //const[읽기변수, 입력함수] = useState(초기값)
//     const[count, setCount] = useState(0);

//     return(
//         <div>
//             <p id="msg">총 {count}번의 클릭했습니다.</p>
//             <button onClick={()=>{
//             // count++; 읽기전용이라 직접 변경 불가능
//             setCount(count+1);
//             console.log('count=>',count+1);
//             }}>클릭</button>
//         </div>
//     );
// }