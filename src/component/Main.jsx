import { styled } from "styled-components";
import Todo from "component/Todo";

const Main = () => {
  return (
    <main>
      <StTitle>Ing..</StTitle>
      <StUl>
        <Todo boolean={false} />
      </StUl>
      <StTitle>Done..</StTitle>
      <StUl>
        <Todo boolean={true} />
      </StUl>
    </main>
  );
};

const StTitle = styled.h2`
  margin: 25px 0 25px 0;

  font-size: 2.2rem;
`;

const StUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(calc((1 - 0.04) / 3 * 100%), 1fr)
  );
  gap: 20px 2%;

  min-height: 220px;
`;

export default Main;
