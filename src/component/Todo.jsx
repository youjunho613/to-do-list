import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, doneTodo } from "redux/modules/todoList";
import * as St from "./Todo.style";
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
      <St.Li key={item.id} id={item.id}>
        <St.Title>{item.title}</St.Title>
        <St.P>{item.content}</St.P>
        <St.Btn {...buttonTag("red", "1 / 3", "delete", item.id)}>삭제</St.Btn>
        <St.Btn {...buttonTag("purple", "4 / 8", "detail", item.id)}>상세보기</St.Btn>
        <St.Btn {...buttonTag("green", "9 / 11", "done", item.id)}>
          {item.isDone ? "취소" : "완료"}
        </St.Btn>
      </St.Li>
    );
  });
};

export default Todo;
