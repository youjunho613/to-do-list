import { React, useState } from "react";
import Header from "component/header";
import Form from "component/form";
import Main from "page/main";
import "App.css";

const App = () => {
  const [todoList, setTodoList] = useState(() => {
    const data = JSON.parse(localStorage.getItem("todo")) || [];
    return data;
  });

  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Main todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
