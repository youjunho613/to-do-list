import { React, useState } from "react";
// import TodoList from "todoList";
import "App.css";

const todoList = [
  { title: "할 일1", content: "내용1", id: 1, isDone: false },
  { title: "할 일2", content: "내용2", id: 1, isDone: false },
  { title: "할 일3", content: "내용3", id: 1, isDone: false },
  { title: "할 일4", content: "내용4", id: 1, isDone: true },
];

function App() {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
    id: "",
    isDone: false,
  });

  const setValue = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const register = (name) => ({
    name,
    value: todo[name],
    onChange: setValue,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="html-style">
      <h1 className="body-title">My Todo List</h1>
      <form className="write-form" onSubmit={onSubmitHandler}>
        제목
        <input className="write-input" {...register("title")} />
        내용
        <input className="write-input" {...register("content")} />
        <button className="write-button">추가하기</button>
      </form>
      <main>
        {/* 고정 */}
        <h2 className="list-title">Ing..</h2>
        {/* GET */}
        <ul className="do-list">
          {todoList
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <li className="todo-item">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <button className="list-delete-button">삭제</button>
                  <button className="list-done-button">완료</button>
                </li>
              );
            })}
        </ul>
        {/* 고정 */}
        <h2 className="list-title">Done..</h2>
        <ul className="do-list">
          {todoList
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <li className="todo-item">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <button className="list-delete-button">삭제</button>
                  <button className="list-done-button">완료</button>
                </li>
              );
            })}
        </ul>
        <div className="list-button-box"></div>
      </main>
    </div>
  );
}

export default App;
