import React from "react";
import "App.css";

const App = () => {
  return (
    <div className="html-style">
      <header>
        <h1 className="body-title">My todo List</h1>
      </header>
      <form className="write-form">
        제목
        <input className="write-input" />
        내용
        <input className="write-input" />
        <button className="write-button">추가하기</button>
      </form>
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
    </div>
  );
};

export default App;
