// 파일정보:src/step10/App.jsx
// import "./Comment.css"

import { CommentBoxList } from "./CommentBoxList";
import { MemberList } from"../test/MemberList";

export function App(){
  return (
    <>
      <MemberList></MemberList>
      <CommentBoxList></CommentBoxList>
    </>
  );
}