import { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputTodo, setInputTodo] = useState("");

  const onTitleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const onTodoChangeHandler = (event) => {
    setInputTodo(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputTitle("");
    setInputTodo("");
  };

  return (
    <div className="html-style">
      <h1 className="body-title">My Todo List</h1>
      <form className="write-form" onSubmit={onSubmitHandler}>
        제목{" "}
        <input
          className="write-input"
          type="text"
          value={inputTitle}
          onChange={onTitleChangeHandler}
        />
        내용{" "}
        <input
          className="write-input"
          type="text"
          value={inputTodo}
          onChange={onTodoChangeHandler}
        />
        <button className="write-button" type="submit">
          추가하기
        </button>
      </form>
      <main>
        <h2 className="list-title">Ing..</h2>
        <div className="do-list">
          <div className="do-item">
            <h3>여기에는 제목이 옵니다.</h3>
            <p>여기에는 내용이 옵니다.</p>
            <button className="list-delete-button">삭제</button>
            <button className="list-done-button">완료</button>
          </div>
        </div>
        <h2 className="list-title">Done..</h2>
        <div className="do-list">
          <div className="do-item">
            <h3>여기에는 제목이 옵니다.</h3>
            <p>여기에는 내용이 옵니다.</p>
            <button className="list-delete-button">삭제</button>
            <button className="list-done-button">취소</button>
          </div>
        </div>
        <div className="list-button-box"></div>
      </main>
    </div>
  );
}

export default App;
