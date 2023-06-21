// import getListData from "../module/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneTodo } from "redux/modules/todoList";
import { styled } from "styled-components";

const Todo = ({ boolean }) => {
  const { todoList } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const filterList = todoList.filter((item) => item.isDone === boolean);

  return filterList.map((item) => {
    return (
      <StLi key={item.id} id={item.id}>
        <StTitle>{item.title}</StTitle>
        <StP>{item.content}</StP>
        <StDeleteBtn onClick={() => dispatch(deleteTodo(item.id))}>
          삭제
        </StDeleteBtn>
        <StDoneBtn onClick={() => dispatch(doneTodo(item.id))}>
          {item.isDone ? "취소" : "완료"}
        </StDoneBtn>
      </StLi>
    );
  });
};

const StLi = styled.li`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5px;

  padding: 20px;

  background-color: var(--color-gray0);

  border: 3px solid;
  border-radius: 20px;

  font-size: 1.1rem;
`;

const StTitle = styled.h3`
  grid-column: 1 / 6;
  grid-row: 1 / 2;
  align-self: center;

  font-size: 1.4rem;
`;

const StP = styled.p`
  grid-column: 1 / 6;
  grid-row: 2 / 4;
  align-self: center;

  font-size: 1.1rem;
`;

const StDeleteBtn = styled.button`
  grid-row: 4 / 5;
  grid-column: 2 / 3;

  border: 2px solid var(--color-red);
  border-radius: 20px;
  color: var(--color-red);

  transition: 500ms;
  &:hover {
    border: 2px solid var(--color-red2);
    color: var(--color-red2);
  }
`;
const StDoneBtn = styled.button`
  grid-row: 4 / 5;
  grid-column: 4 / 5;

  border: 2px solid var(--color-green);
  border-radius: 20px;
  color: var(--color-green);

  transition: 500ms;
  &:hover {
    border: 2px solid var(--color-green2);
    color: var(--color-green2);
  }
`;

export default Todo;
