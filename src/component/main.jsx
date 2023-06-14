import React from "react";

const Main = () => {
  return (
    <main>
      <h2 className="list-title">Ing..</h2>
      <ul className="do-list">
        <li className="todo-item">
          <h3>React</h3>
          <p>공부하기</p>
          <button className="list-delete-button">삭제</button>
          <button className="list-done-button">완료</button>
        </li>
      </ul>
      <h2 className="list-title">Done..</h2>
      <ul className="do-list">
        <li className="todo-item">
          <h3>개인프로젝트</h3>
          <p>수요일 17시까지 완료하기</p>
          <button className="list-delete-button">삭제</button>
          <button className="list-done-button">취소</button>
        </li>
      </ul>
    </main>
  );
};

export default Main;
