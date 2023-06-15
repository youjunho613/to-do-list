import getListData from "../module/localStorage";

const Todo = ({ boolean, todoList, setTodoList }) => {
  const clickDeleteHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);

    setTodoList(getListData(newTodoList));
  };

  const clickDoneHandler = (id) => {
    const newTodoList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });

    localStorage.setItem("todoList", JSON.stringify(newTodoList));

    const loadTodoList = JSON.parse(localStorage.getItem("todoList"));

    setTodoList(loadTodoList);
  };

  const filterList = todoList.filter((item) => item.isDone === boolean);

  return filterList.map((item) => {
    return (
      <li className="todo-item" key={item.id} id={item.id}>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <button
          className="list-delete-button"
          onClick={() => clickDeleteHandler(item.id)}
        >
          삭제
        </button>
        <button
          className="list-done-button"
          onClick={() => clickDoneHandler(item.id)}
        >
          완료
        </button>
      </li>
    );
  });
};

export default Todo;
