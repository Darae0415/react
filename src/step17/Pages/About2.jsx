import { Link, Outlet } from "react-router-dom";

export function About2() {
    return (
        <>
        <h2>도움말2</h2>
        <nav>
            <Link to="details">도움말 상세보기로 이동</Link>
            {/* 위에 링크 누르면details 로 설정한 렌더링된 컴포넌트를 클릭하는 개념 */}
        </nav>
        <Outlet/> {/*Outlet은 부모라우터(about2)에서 하위 라우터(aboutDetails) 렌더링된 컴포넌트
        (AboutDetails.jsx)들을 표현*/}
        </>
    
);
 }