import Header from "page/Header";
import Form from "component/Form";
import Main from "page/Main";
// import styled from "styled-components";
import "./style/App.css";

const App = () => {
  return (
    <div className="html-style">
      <Header>My Todo List</Header>
      <Form />
      <Main />
    </div>
  );
};
// useParams 써보기

export default App;
