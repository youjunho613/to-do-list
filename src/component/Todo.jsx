// import getListData from "../module/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, doneTodo } from "redux/modules/todoList";

const Todo = ({ boolean }) => {
  const { todoList } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  const filterList = todoList.filter((item) => item.isDone === boolean);

  return filterList.map((item) => {
    return (
      <li className="todo-item" key={item.id} id={item.id}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <button
          className="list-delete-button"
          onClick={() => dispatch(deleteTodo(item.id))}
        >
          삭제
        </button>
        <button
          className="list-done-button"
          onClick={() => dispatch(doneTodo(item.id))}
        >
          {item.isDone ? "취소" : "완료"}
        </button>
      </li>
    );
  });
};

export default Todo;
