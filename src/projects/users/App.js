import { useEffect, useState } from "react";
import UserList from "./components/UserList";

{
  /* 리스트 아이템 컴포넌트를 만들고 만든 컴포넌트 안에서 span의 글자색을 회색으로 지정, 시간되면 li안에 삭제버튼 추가, 버튼 누르면 삭제, 근데 만약 다 삭제되면
          등록된 사용자가 없슙니다. 라는 글자를 보여주면 됨.  */
}

function App() {
  return (
    <>
      <h1>User List</h1>
      <ul>
        <UserList />
      </ul>
    </>
  );
}

export default App;
