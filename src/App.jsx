import { React, useState } from "react";
import Header from "component/header";
import Form from "component/form";
import Main from "component/main";
import "App.css";

const App = () => {
  const [todoList, setTodoLIst] = useState([
    { title: "", content: "", id: 1, isDone: false },
  ]);

  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form todoList={todoList} setTodoLIst={setTodoLIst} />
      <Main />
    </div>
  );
};

export default App;
