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
        <nav>
        <Link to="/">홈</Link> |
        <Link to="/user/1">사용자</Link> | 
        <Link to="/search?query=playing_game">검색</Link> | 
        <Link to="/about">도움말</Link>
        </nav>
        <Routes>
        <Route path="/"      element={<Home/>}/>
        <Route path="/user/:id"  element={<User/>}/>
        <Route path="/search"  element={<Search/>}/>
        <Route path="/about" element={<About2/>}>
        {/* about부모요소에 element로 About로 자식요소로 둠 */}
          <Route path='details' element={<AboutDetails/>}/>
        </Route>
        </Routes>
      </Router>
    );
  }

