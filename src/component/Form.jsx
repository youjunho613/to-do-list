import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/modules/todoList";
import styled from "styled-components";
// import getListData from "../module/localStorage";

const INITIAL = { title: "", content: "", id: 1, isDone: false };

const Form = () => {
  // useState
  const [todo, setTodo] = useState(INITIAL);

  // Redux
  const { todoList } = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  // Ref로 인풋 태그 링크
  const titleRef = useRef("");
  const contentRef = useRef("");

  // title input 포커스 해주기 ---- Effect로 렌더링 될 때 한번만 실행
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const onChangeHandler = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    // 1. input 유효성 검사
    if (titleRef.current.value === "" || contentRef.current.value === "") return;

    // 2. id 값 유효성
    const todoId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

    // 3. 모듈로 이벤트 넘겨서 추가 기능 구현
    dispatch(addTodo({ ...todo, id: todoId }));

    // 4. input 값 초기화
    setTodo(INITIAL);
    titleRef.current.focus();
    // 로컬스토리지 구현
    // setTodoList(getListData(newTodoList));
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
