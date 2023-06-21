// action value
const ADD_TODO = "App/todoList/ADD";
const DELETE_TODO = "App/todoList/DELETE";
const DONE_TODO = "App/todoList/DONE";

// action creator : action value를 return하는 함수
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};
export const doneTodo = (payload) => {
  return { type: DONE_TODO, payload };
};

// 초기 상태값 (state)
const initialState = { todoList: [] };

// 리듀서 : state에 변화를 일으키는 함수
// const [todoList,setTodoList] = useState()
// 1. state를 action의 type에 따라 변경하는 함수

// input : state와 action
// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다.
// ex : payload가 3이다. 3만큼 action해라
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          return item.id === action.payload
            ? { ...item, isDone: !item.isDone }
            : item;
        }),
      };
    default:
      return state;
  }
};

export default todoList;
