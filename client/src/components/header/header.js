import React from "react";
import Nav from "../nav/Nav";
import styled from "styled-components";

import hero from "./hero.jpg";

const HeaderContainer = styled.header`
width:100%;
height:100vh;
background-image: linear-gradient(rgba(000,215,000,0.4),rgba(000,000,00,0.4)),
  url(${hero});
background-size:cover;
background-position:center;
background-attachment: fixed;
position:relative;
`;

const Title = styled.div`
  width: 60%;
  position: absolute;
  top: 50%;
  left: 10%;
  div {
    margin: 20px 0;
  }
`;
const ButtonFull = styled.button`
  border: 2px solid transparent;
  color: #fff;
  background: rgb(48, 14, 55);
  transition: 0.3s ease;
  &:hover {
    border: 2px solid green;
  }
`;
const ButtonGhost = styled.button`
  margin-left: 20px;
  background: rgba(225, 259, 200, 0);
  border: 2px solid green;
  color: #fff;
  transition: 0.3s ease;
  &:hover {
    background: rgb(48, 14, 55);
  }
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <Title>
        <h1>
          TANOOR FOOD.
          <br /> IT'S AN IRAQI FOOD IN AMERICAN WAY.
        </h1>
        <div>
          <ButtonFull>I'm hungry</ButtonFull>
          <ButtonGhost>show me more</ButtonGhost>
        </div>
      </Title>
    </HeaderContainer>
  );
};

export default Header;
