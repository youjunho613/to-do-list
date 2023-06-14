import React from "react";
import Todo from "./todo";

const TodoList = ({ todoList, setTodoLIst }) => {
  // const newTodoList =

  return (
    <main>
      <h2 className="list-title">Ing..</h2>
      <ul className="do-list">
        {todoList
          .filter((item) => !item.isDone)
          .map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoLIst={setTodoLIst}
              ></Todo>
            );
          })}
      </ul>
      <h2 className="list-title">Done..</h2>
      <ul className="do-list">
        {todoList
          .filter((item) => item.isDone === true)
          .map((item) => {
            return (
              <Todo
                key={item.id}
                item={item}
                todoList={todoList}
                setTodoLIst={setTodoLIst}
              ></Todo>
            );
          })}
      </ul>
      <div className="list-button-box"></div>
    </main>
  );
};

export default TodoList;
