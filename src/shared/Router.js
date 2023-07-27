import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import { styled } from "styled-components";

const Router = () => {
  return (
    <StyledDiv>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </StyledDiv>
  );
};

export default Router;

const StyledDiv = styled.div`
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
`;
