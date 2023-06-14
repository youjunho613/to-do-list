import { React, useState } from "react";
import Button from "./button";

const Form = ({ todoList, setTodoLIst }) => {
  const initial = { title: "", content: "", id: 1, isDone: false };
  const [todo, setTodo] = useState(initial);

  const todoId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTodoLIst([...todoList, { ...todo, id: todoId }]);
    setTodo(initial);
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
      제목 <input {...inputTag("title")} />
      내용 <input {...inputTag("content")} />
      <Button className={"write-button"}>추가하기</Button>
    </form>
  );
};

export default Form;
