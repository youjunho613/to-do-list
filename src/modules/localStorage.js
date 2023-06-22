export const setData = todoList => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

export const getData = () => {
  const loadTodoList = JSON.parse(localStorage.getItem("todoList"));

  return loadTodoList;
};
