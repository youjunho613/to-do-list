import React from "react";
import Button from "./button";

const Todo = ({ item, todoList, setTodoLIst }) => {
  const ClickDeleteHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoLIst(newTodoList);
  };

  const ClickDoneHandler = (id) => {
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
      <Button
        className={"list-delete-button"}
        func={() => ClickDeleteHandler(item.id)}
      >
        삭제
      </Button>
      <Button
        className={"list-done-button"}
        func={() => ClickDoneHandler(item.id)}
      >
        완료
      </Button>
    </li>
  );
};

export default Todo;
