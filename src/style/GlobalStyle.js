import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input::selection,
  ::selection {
    background-color: #000000;
    color: #ffffff;
  }

  button {
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
  }
`;
