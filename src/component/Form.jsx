import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/modules/todoList";
import * as St from "./Form.style.js";

const INITIAL = { title: "", content: "", id: 1, isDone: false };

const Form = () => {
  const [todo, setTodo] = useState(INITIAL); // useState

  const { todoList } = useSelector(state => state.todoList); // Redux
  const dispatch = useDispatch();

  const titleRef = useRef(""); // Ref로 인풋 태그 링크
  const contentRef = useRef("");

  useEffect(() => {
    titleRef.current.focus();
  }, []); // title input 포커스 해주기 ---- Effect로 렌더링 될 때 한번만 실행

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    if (titleRef.current.value === "" || contentRef.current.value === "") return; // input 유효성 검사
    const todoId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1; // id 값 유효성

    dispatch(addTodo({ ...todo, id: todoId })); // 모듈로 추가 이벤트 넘겨서 구현

    setTodo(INITIAL); // input 값 초기화

    titleRef.current.focus(); // input 커서 위치
  };

  const inputTag = name => ({
    name,
    value: todo[name],
    onChange: onChangeHandler
  });

  return (
    <St.Form onSubmit={onSubmitHandler}>
      <St.Label htmlFor="title">제목</St.Label>
      <St.Input {...inputTag("title")} ref={titleRef} />
      <St.Label htmlFor="content">내용</St.Label>
      <St.Input {...inputTag("content")} ref={contentRef} />
      <St.Button>추가하기</St.Button>
      <button type={"radio"}> </button>
    </St.Form>
  );
};

export default Form;
