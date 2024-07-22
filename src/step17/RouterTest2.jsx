import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Home} from './Pages/Home'
import { About } from "./Pages/About";

export function RouterTest2(){
  return (
    <Router>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">도움말</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}