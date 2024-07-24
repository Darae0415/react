import { useParams } from "react-router-dom";

const users = [
    { id: 1, name: "홍길동", job: "백수" },
    { id: 2, name: "손흥민", job: "운동선수" },
    { id: 3, name: "김형준", job: "선수" }
];

export function User() { 
    const { id } = useParams(); // useParams 훅을 사용하여 URL에서 id 매개변수 추출
    const user = users.find(item => item.id === Number(id)); 
    // link to에 item번호와 적용된id에 해당하는 사용자 찾기 (router5에 가면 1로 설정되있음.)
    // .find 배열에서 특정 조건을 만족하는 첫 번째 요소를 찾는데 사용
    return (
        <div>
            {user ? ( // 사용자 정보가 있는 경우
                <>
                    <h2>사용자 아이디 : {id} </h2>
                    <p>이름: {user.name}</p>
                    <p>직업: {user.job}</p>
                </>
            ) : ( // 사용자 정보가 없는 경우
                <p>자료없음</p>
            )}
        </div>
    );
}