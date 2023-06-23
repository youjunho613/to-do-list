import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, doneTodo } from "redux/modules/todoList";
import { styled } from "styled-components";

const Todo = ({ boolean }) => {
  const { todoList } = useSelector(state => state.todoList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const buttonTag = (color, column, func, id) => {
    const property = { color, column };

    switch (func) {
      case "delete":
        return {
          ...property,
          onClick: () => (window.confirm("정말 삭제하시겠습니까?") ? dispatch(deleteTodo(id)) : "")
        };

      case "detail":
        return {
          ...property,
          onClick: () => {
            navigate(`/detail/${id}`);
          }
        };

      case "done":
        return { ...property, onClick: () => dispatch(doneTodo(id)) };
      default:
        return;
    }
  };

  const filterList = todoList.filter(item => item.isDone === boolean);

  return filterList.map(item => {
    return (
      <StLi key={item.id} id={item.id}>
        <StTitle>{item.title}</StTitle>
        <StP>{item.content}</StP>
        <StBtn {...buttonTag("red", "1 / 3", "delete", item.id)}>삭제</StBtn>
        <StBtn {...buttonTag("purple", "4 / 8", "detail", item.id)}>상세보기</StBtn>
        <StBtn {...buttonTag("green", "9 / 11", "done", item.id)}>
          {item.isDone ? "취소" : "완료"}
        </StBtn>
      </StLi>
    );
  });
};

const StLi = styled.li`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5px;

  padding: 20px;

  background-color: var(--color-gray0);

  border: 3px solid;
  border-radius: 20px;

  font-size: 1.1rem;
`;

const StTitle = styled.h3`
  grid-column: 1 / 11;
  grid-row: 1 / 2;
  align-self: center;

  font-size: 1.4rem;
`;

const StP = styled.p`
  grid-column: 1/11;
  grid-row: 2 / 4;
  align-self: center;

  font-size: 1.1rem;
`;

const StBtn = styled.button`
  grid-row: 4 / 5;
  grid-column: ${props => props.column};

  border: 2px solid var(--color-${props => props.color});
  border-radius: 20px;
  color: var(--color-${props => props.color});

  transition: 500ms;
  &:hover {
    background-color: var(--color-${props => props.color});
    color: var(--color-white);
  }
`;

export default Todo;
