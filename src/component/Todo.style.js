import { styled } from "styled-components";

export const Li = styled.li`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 5px;

  padding: 20px;

  background-color: var(--color-gray0);

  border: 3px solid;
  border-radius: 20px;

  font-size: 1.1rem;
`;

export const Title = styled.h3`
  grid-column: 1 / 11;
  grid-row: 1 / 2;
  align-self: center;

  font-size: 1.4rem;
`;

export const P = styled.p`
  grid-column: 1/11;
  grid-row: 2 / 4;
  align-self: center;

  font-size: 1.1rem;
`;

export const Btn = styled.button`
  grid-row: 4 / 5;
  grid-column: ${props => props.column};

  border: 2px solid var(--color-${props => props.color});
  border-radius: 20px;
  color: var(--color-${props => props.color});

  transition: 500ms;
  &:hover {
    background-color: var(--color-${props => props.color});
    color: var(--color-white);
  }
`;
