import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Pages/Home'
import { About } from "./Pages/About"
import { About2 } from "./Pages/About2";
import { AboutDetails } from "./Pages/AboutDetails";

export function RouterTest3(){
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">도움말</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About2/>}>
        <Route path="details" element={<AboutDetails/>}/>
        {/* about부모요소에 element로 A */}
      </Route>
      </Routes>
    </Router>
  );
}