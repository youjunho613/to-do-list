import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Detail = () => {
  const navigate = useNavigate();
  const param = useParams();

  const { todoList } = useSelector((state) => state.todoList);

  const { title, content, id, isDone } = todoList.find(
    (item) => item.id === parseInt(param.id)
  );

  return (
    <StBox>
      <StDiv>
        <StP>ID : {id}</StP>
        <StP>상태 : {isDone ? "완료" : "하는 중"}</StP>
      </StDiv>
      <StTitle>{title}</StTitle>
      <StP height={"150px"}>{content}</StP>
      <StHomeBtn
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </StHomeBtn>
    </StBox>
  );
};

const StBox = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  max-width: 1200px;
  min-width: 800px;

  padding: 30px 40px;
  margin: 200px auto;

  background-color: var(--color-gray0);

  border: 3px solid;
  border-radius: 20px;
`;

const StDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StP = styled.p`
  height: ${(props) => props.height};

  margin: 30px 0px;

  font-size: 2rem;
`;

const StTitle = styled.h1`
  margin: 30px 0px;

  font-size: 3rem;
`;

const StHomeBtn = styled.button`
  align-self: center;

  width: 400px;
  height: 60px;

  border: 2px solid var(--color-purple);
  border-radius: 20px;
  color: var(--color-purple);

  transition: 500ms;
  &:hover {
    background-color: var(--color-purple);
    color: var(--color-white);
  }
`;

export default Detail;
