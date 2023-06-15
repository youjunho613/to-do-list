export const data = (pram) => {
  localStorage.setItem("todo", JSON.stringify(pram));

  const loadTodoList = JSON.parse(localStorage.getItem("todo"));
  return loadTodoList;
};

export default data;
