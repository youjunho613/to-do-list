import { React, useState } from "react";
import Header from "component/header";
import Form from "component/form";
import Main from "component/main";
import "App.css";

const App = () => {
  const [todoList, setTodoLIst] = useState(() => {
    const data = localStorage.getItem("todo") || [];
    return JSON.parse(data);
  });

  // 새로고침 해도 값이 유지되는 기능
  // LocalStorage 이용
  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form todoList={todoList} setTodoLIst={setTodoLIst} />
      <Main todoList={todoList} setTodoLIst={setTodoLIst} />
    </div>
  );
};

export default App;
