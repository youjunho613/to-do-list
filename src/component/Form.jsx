import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/modules/todoList";
// import getListData from "../module/localStorage";

const INITIAL = { title: "", content: "", id: 1, isDone: false };

const Form = () => {
  // useState
  const [todo, setTodo] = useState(INITIAL);

  // Redux
  const { todoList } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  // Ref로 인풋 태그 링크
  const titleRef = useRef("");
  const contentRef = useRef("");

  // title input 포커스 해주기 ---- Effect로 렌더링 될 때 한번만 실행
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 1. input 유효성 검사
    if (titleRef.current.value === "" || contentRef.current.value === "")
      return;

    // 2. id 값 유효성
    const todoId =
      todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;

    // 3. 모듈로 이벤트 넘겨서 추가 기능 구현
    dispatch(addTodo({ ...todo, id: todoId }));

    // 4. input 값 초기화
    setTodo(INITIAL);

    // 로컬스토리지 구현
    // setTodoList(getListData(newTodoList));
  };

  const inputTag = (name) => ({
    className: "write-input",
    name,
    value: todo[name],
    onChange: onChangeHandler,
  });

  return (
    <form className="write-form" onSubmit={onSubmitHandler}>
      <label className="write-label" htmlFor="title">
        제목
      </label>
      <input {...inputTag("title")} ref={titleRef} />
      <label className="write-label" htmlFor="content">
        내용
      </label>
      <input {...inputTag("content")} ref={contentRef} />
      <button className="write-button">추가하기</button>
    </form>
  );
};

export default Form;
