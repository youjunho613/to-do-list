import Todo from "../component/Todo";

const Main = () => {
  return (
    <main>
      <h2 className="list-title">Ing..</h2>
      <ul className="do-list">
        <Todo boolean={false} />
      </ul>
      <h2 className="list-title">Done..</h2>
      <ul className="do-list">
        <Todo boolean={true} />
      </ul>
    </main>
  );
};

export default Main;
