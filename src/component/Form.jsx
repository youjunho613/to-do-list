import { useState } from "react";
import getListData from "../module/localStorage";

const INITIAL = { title: "", content: "", id: 1, isDone: false };

const Form = ({ todoList, setTodoList }) => {
  const [todo, setTodo] = useState(INITIAL);

  const todoId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodoList = [...todoList, { ...todo, id: todoId }];

    setTodoList(getListData(newTodoList));
    setTodo(INITIAL);
  };

  const inputTag = (name) => ({
    className: "write-input",
    name,
    value: todo[name],
    onChange: onChangeHandler,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  return (
    <form className="write-form" onSubmit={onSubmitHandler}>
      <label className="write-label" htmlFor="title">
        제목
      </label>
      <input {...inputTag("title")} />
      <label className="write-label" htmlFor="content">
        내용
      </label>
      <input {...inputTag("content")} />
      <button className="write-button">추가하기</button>
    </form>
  );
};

export default Form;