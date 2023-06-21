import styled from "styled-components";

const Header = ({ children }) => {
  return <StBox>{children}</StBox>;
};

const StBox = styled.h1`
  font-size: 2.5rem;
`;

export default Header;
