import Header from "component/Header";
import Form from "component/Form";
import Main from "component/Main";
import styled from "styled-components";

const Home = () => {
  return (
    <StBox>
      <Header>My Todo List</Header>
      <Form />
      <Main />
    </StBox>
  );
};

const StBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Home;
