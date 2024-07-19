import React, { useState } from "react";

function ConfirmButton(props){
    const [isConfirmed, setIsConfirmed] = useState(false);
    //isConfirmed에 false 적용, setISConfirmed 선언
    const handleConfirm = () => {
        //handle : 콜백함수 handleConfirm의 버튼을 누르면
        setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
        //setIsConfirmed에 콜백버튼 누른 값을 prevIsConfirmed에 적용시켜
        // !(not연산자)로 변형 T -> F , F -> T로
    };
    return(
        <button onClick={handleConfirm} disabled={isConfirmed}>{isConfirmed ? "확인됨" : "확인하기"}</button>
    );
}
// class 컴포넌트
// class ConfirmButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isConfirmed: false,
//         };
//         this.handleConfirm = this.handleConfirm;
//     }
//     handleConfirm = () => {
//         this.setState((prevState) => ({
//             isConfirmed: !prevState.isConfirmed,
//         }));
//     }
//     render(){
//         return(
//             <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
//                 {this.state.isConfirmed ? "확인됨" : "확인하기"}
//             </button>
//         );
//     }
// }
export default ConfirmButton;