import { styled } from "styled-components";

export const Title = styled.h2`
  margin: 25px 0 25px 0;

  font-size: 2.2rem;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc((1 - 0.04) / 3 * 100%), 1fr));
  gap: 20px 2%;

  min-height: 220px;
`;
