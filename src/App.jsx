import Header from "page/Header";
import Form from "component/Form";
import Main from "page/Main";
import styled from "styled-components";
import "./style/App.css";

const App = () => {
  return (
    <StBox>
      <Header>My Todo List</Header>
      <Form />
      <Main />
    </StBox>
  );
};
// useParams 써보기

const StBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default App;
