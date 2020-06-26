import React from "react";
import Header from "./components/header/header";
import About from "./components/about/About";
import styled from "styled-components";
const AppDiv = styled.div`
  position: relative;
`;
const App = () => {
  return (
    <AppDiv>
      <Header />
      <About />
    </AppDiv>
  );
};

export default App;
