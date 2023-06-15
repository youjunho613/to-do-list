import { useState } from "react";
import Header from "component/Header";
import Form from "component/Form";
import Main from "page/Main";
import "App.css";

const App = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <Main todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default App;
