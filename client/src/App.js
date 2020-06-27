import React from "react";
import Header from "./components/header/header";
import About from "./components/about/About";
import Food from "./components/food/FoodImages";
import styled from "styled-components";
const AppDiv = styled.div`
  position: relative;
`;
const App = () => {
  return (
    <AppDiv>
      <Header />
      <About />
      <Food />
    </AppDiv>
  );
};

export default App;
