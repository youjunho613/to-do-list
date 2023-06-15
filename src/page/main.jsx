import Todo from "../component/Todo";

const Main = ({ todoList, setTodoList }) => {
  return (
    <main>
      <h2 className="list-title">Ing..</h2>
      <ul className="do-list">
        <Todo todoList={todoList} setTodoList={setTodoList} boolean={false} />
      </ul>
      <h2 className="list-title">Done..</h2>
      <ul className="do-list">
        <Todo todoList={todoList} setTodoList={setTodoList} boolean={true} />
      </ul>
    </main>
  );
};

export default Main;
