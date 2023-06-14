import { React, useState } from "react";

const Form = ({ todoList, setTodoLIst }) => {
  const initial = { title: "", content: "", id: 1, isDone: false };

  const [todo, setTodo] = useState(initial);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setTodoLIst([...todoList, { ...todo, id: todoList.length + 1 }]); // id 값 문제있음

    setTodo(initial); //input.value 초기화 & 렌더링
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
      제목
      <input {...inputTag("title")} />
      내용
      <input {...inputTag("content")} />
      <button className="write-button">추가하기</button>
    </form>
  );
};

export default Form;
