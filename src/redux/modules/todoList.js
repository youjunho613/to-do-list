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

const initialState = { todoList: [] };

const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.payload)
      };
    case DONE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(item => {
          return item.id === action.payload ? { ...item, isDone: !item.isDone } : item;
        })
      };
    default:
      return state;
  }
};

export default todoList;
