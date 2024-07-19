import React, { useState } from "react";
import Toolbar from './Toolbar'; // 실제 파일 위치에 맞게 수정 필요

function LandingPage(props){
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 변수명 오타 수정

    const onClickLogin = () => {
        setIsLoggedIn(true); // 함수명 수정
    };
    const onClickLogout = () => {
        setIsLoggedIn(false); // 함수명 수정
    };

    return(
        <div>
            <Toolbar isLoggedIn={isLoggedIn}
                     onClickLogin={onClickLogin}
                     onClickLogout={onClickLogout}/>
            <div style={{padding:16}}>소플과 함께 하는 리액트 공부!</div>
        </div>
    );
}

export default LandingPage;