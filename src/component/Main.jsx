import Todo from "component/Todo";
import * as St from "./Main.style.js";

const Main = () => {
  return (
    <main>
      <St.Title>Ing..</St.Title>

      <St.Ul>
        <Todo boolean={false} />
      </St.Ul>
      <St.Title>Done..</St.Title>
      <St.Ul>
        <Todo boolean={true} />
      </St.Ul>
    </main>
  );
};

export default Main;
