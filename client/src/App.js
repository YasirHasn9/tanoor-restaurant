import React from "react";
import Header from "./components/header/header";
import styled from "styled-components";
const AppDiv = styled.div`
  position: relative;
`;
const App = () => {
  return (
    <AppDiv>
      <Header />
    </AppDiv>
  );
};

export default App;
