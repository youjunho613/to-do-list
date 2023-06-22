import { getData, setData } from "modules/localStorage";

// action value
const ADD_TODO = "App/todoList/ADD";
const DELETE_TODO = "App/todoList/DELETE";
const DONE_TODO = "App/todoList/DONE";

// action creator
export const addTodo = payload => {
  return { type: ADD_TODO, payload };
};
export const deleteTodo = payload => {
  return { type: DELETE_TODO, payload };
};
export const doneTodo = payload => {
  return { type: DONE_TODO, payload };
};

const initialState = getData();
const todoList = (state = initialState, action) => {
  const actionAdd = { todoList: [...state.todoList, action.payload] };

  const actionDelete = { todoList: state.todoList.filter(item => item.id !== action.payload) };

  const actionDone = {
    todoList: state.todoList.map(item => {
      return item.id === action.payload ? { ...item, isDone: !item.isDone } : item;
    })
  };

  switch (action.type) {
    case ADD_TODO:
      setData(actionAdd);
      return actionAdd;
    case DELETE_TODO:
      setData(actionDelete);
      return actionDelete;
    case DONE_TODO:
      setData(actionDone);
      return actionDone;
    default:
      return state;
  }
};

export default todoList;
