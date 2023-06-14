import React from "react";

const Todo = ({ item, todoList, setTodoLIst }) => {
  const ClickDeleteHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoLIst(newTodoList);
  };

  const onClickDoneHandler = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodoLIst(newTodoList);
  };

  return (
    <li className="todo-item" key={item.id} id={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <button
        className="list-delete-button"
        onClick={() => {
          ClickDeleteHandler(item.id);
        }}
      >
        삭제
      </button>
      <button
        className="list-done-button"
        onClick={() => {
          onClickDoneHandler(item.id);
        }}
      >
        완료
      </button>
    </li>
  );
};

export default Todo;
