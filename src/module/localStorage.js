const getListData = (pram) => {
  localStorage.setItem("todoList", JSON.stringify(pram));

  const loadTodoList = JSON.parse(localStorage.getItem("todoList"));
  return loadTodoList;
};

// 차이점
export default getListData;
