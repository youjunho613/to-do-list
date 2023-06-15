import React from "react";
import Todo from "../component/todo";

const Main = ({ todoList, setTodoList }) => {
  return (
    <main>
      <h2 className="list-title">Ing..</h2>
      <ul className="do-list">
        <Todo todoList={todoList} setTodoLIst={setTodoList} boolean={false} />
      </ul>
      <h2 className="list-title">Done..</h2>
      <ul className="do-list">
        <Todo todoList={todoList} setTodoLIst={setTodoList} boolean={true} />
      </ul>
    </main>
  );
};

export default Main;
