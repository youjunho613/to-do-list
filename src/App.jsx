import { React, useState } from "react";
import Header from "component/header";
import Form from "component/form";
import TodoList from "component/todoList";
import "App.css";

function App() {
  const [todoList, setTodoLIst] = useState([{}]);

  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form todoList={todoList} setTodoLIst={setTodoLIst} />
      <TodoList todoList={todoList} setTodoLIst={setTodoLIst} />
    </div>
  );
}

export default App;
