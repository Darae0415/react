import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home'
// import { About } from "./Pages/About"
import { About2 } from "./Pages/About2";
import { AboutDetails } from "./Pages/AboutDetails";
import { User } from "./Pages/User"
import { Search } from "./Pages/Search"

export function RouterTest5(){
  return (
    <Router>
      {/* Router: 여러 페이지를 관리하기 위해 사용하는 컴포넌트 */}
      <nav>
        <Link to="/">홈</Link> |
        {/* Link: 클릭하면 홈 페이지로 이동 */}
        <Link to="/user/1">사용자</Link> |
        {/* Link: 클릭하면 사용자 페이지로 이동 */}
        <Link to="/search?query=playing_game">검색</Link> |
        {/* Link: 클릭하면 검색 페이지로 이동 */}
        <Link to="/about">도움말</Link>
        {/* Link: 클릭하면 도움말 페이지로 이동 */}
      </nav>
      <Routes>
        {/* Routes: 여러 Route를 그룹으로 묶어주는 역할*/}
        <Route path="/" element={<Home />} />
        {/* Route: 경로가 "/"인 경우, 홈 페이지를 보여줌 */}
        <Route path="/user/:id" element={<User />} />
        {/* Route: 경로가 "/user/1"인 경우, 사용자 페이지를 보여줍 */}
        <Route path="/search" element={<Search />} />
        {/* Route: 경로가 "/search"인 경우, 검색 페이지를 보여줍 */}
        <Route path="/about" element={<About2 />}>
        {/* Route: 경로가 "/about"인 경우, 도움말 페이지를 보여줍 */}
          <Route path="details" element={<AboutDetails />} />
          {/* Route: 경로가 "/about/details"인 경우, 도움말의 세부 사항 페이지를 보여줍 */}
        </Route>
      </Routes>
    </Router>
  );
}
//Router는 이 안에 모든 페이지가 어떻게 연결되어 있는지 알려주는 역할
//Routes는 여러 페이지(Route)를 정리해주고 어떤 역할을 하는지 세팅하는 역할
//Route는 어떤 주소가 어떤 페이지를 보여주는지 정의하는 역할
//Router는 집의 전체 지도, Routes는 방의 목록, Route는 개별방이라 생각하면 됨
