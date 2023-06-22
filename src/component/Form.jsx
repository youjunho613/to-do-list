import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/modules/todoList";
import styled from "styled-components";

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
    <StForm onSubmit={onSubmitHandler}>
      <StLabel htmlFor="title">제목</StLabel>
      <StInput {...inputTag("title")} ref={titleRef} />
      <StLabel htmlFor="content">내용</StLabel>
      <StInput {...inputTag("content")} ref={contentRef} />
      <StButton>추가하기</StButton>
    </StForm>
  );
};

const StForm = styled.form`
  width: 97%;
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 50px auto;

  background-color: var(--color-gray1);
  border-radius: 35px;
`;

const StLabel = styled.label`
  font-size: 1.7rem;
`;

const StInput = styled.input`
  width: 30%;

  outline: none;
  background-color: var(--color-gray1);
  border: 0;
  border-radius: 20px;

  padding: 10px;

  font-size: 1.5rem;

  &:focus {
    background-color: var(--color-gray2);
  }
`;

const StButton = styled.button`
  height: 60%;

  background-color: var(--color-gray7);
  border-radius: 20px;

  color: var(--color-white);

  &:hover {
    background-color: var(--color-gray2);
    color: var(--color-black);
    transition: 0.7s;
  }
`;

export default Form;
