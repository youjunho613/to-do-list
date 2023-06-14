import React from "react";

const TodoList = () => {
  const todoList = [
    { title: "할 일1", content: "내용1", id: 1, isDone: false },
    { title: "할 일2", content: "내용2", id: 1, isDone: false },
    { title: "할 일3", content: "내용3", id: 1, isDone: false },
    { title: "할 일4", content: "내용4", id: 1, isDone: false },
  ];

  return (
    <ul className="do-list">
      {todoList
        .filter((item) => item.isDone === false)
        .map((item) => {
          return (
            <li className="todo-item">
              <h3>{item.value}</h3>
              <p>여기에는 내용이 옵니다.</p>
              <button className="list-delete-button">삭제</button>
              <button className="list-done-button">완료</button>
            </li>
          );
        })}
    </ul>
  );
};

export default TodoList;
