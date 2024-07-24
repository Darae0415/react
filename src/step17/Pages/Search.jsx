import { useLocation } from "react-router-dom";

const users = [
    { id: 1, name: "홍길동", job: "백수", hobby:"steal"},
    { id: 2, name: "손흥민", job: "운동선수", hobby:"football" },
    { id: 3, name: "김형준", job: "선수", hobby:"playing_game" }
];

export function Search() {
    const { search } = useLocation(); //useLocation URL에서 query 문자열 가져옴(playing_game)
    // useLocation 훅을 사용
    const queryParams = new URLSearchParams(search);
    // URLSearchParams를 사용하여 쿼리 문자열을 쉽게 다룸
    const query = queryParams.get('query');
    // 쿼리 문자열에서 'query'라는 이름의 값을 가져옴(playing_game)
    const user = users.find(user => user.hobby === query);
    // 사용자의 취미가 쿼리(playing_game) 값과 같은지 확인하여 해당 사용자를 찾음
    
    return (
      <div>
        {user ? (
          <>
            <h1>찾는 취미는? {query}</h1>
            {/* 사용자가 검색한 취미를 보여줍니다. */}
            <p>이름: {user.name}</p>
            {/* 해당 사용자의 이름을 보여줍니다. */}
            <p>직업: {user.job}</p>
            {/* 해당 사용자의 직업을 보여줍니다. */}
          </>
        ) : (
          <p>해당 취미를 가진 사람이 없습니다.</p>
          // 일치하는 사용자가 없는 경우 이 메시지를 보여줍니다.
        )}
      </div>
    );
  }