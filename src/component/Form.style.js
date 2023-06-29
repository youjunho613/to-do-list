import styled from "styled-components";

export const Form = styled.form`
  width: 97%;
  height: 70px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 50px auto;

  background-color: var(--color-gray1);
  border-radius: 35px;
`;

export const Label = styled.label`
  font-size: 1.7rem;
`;

export const Input = styled.input`
  width: 30%;

  outline: none;
  /* background-color: var(--color-gray1); */
  border: 0;
  border-radius: 20px;

  padding: 10px;

  font-size: 1.5rem;

  &:focus {
    /* background-color: var(--color-gray2); */
  }
`;

export const Button = styled.button`
  height: 60%;

  background-color: var(--color-gray7);
  border-radius: 20px;

  color: var(--color-white);

  &:hover {
    background-color: var(--color-gray2);
    color: var(--color-black);
    transition: 0.7s;
  }
`;
