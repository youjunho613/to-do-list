import React from "react";
import Header from "component/header";
import Form from "component/form";
import Main from "component/main";
import "App.css";

const App = () => {
  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form></Form>
      <Main></Main>
    </div>
  );
};

export default App;
