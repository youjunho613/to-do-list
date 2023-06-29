import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;

export default GlobalStyles;
