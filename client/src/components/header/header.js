import React from "react";
import Styled from "styled-components";

import hero from "./hero.jpg";

const HeaderContainer = Styled.header`
width:100%;
height:100vh;
background-image: linear-gradient(90deg, rgba(89,72,46,0.727328431372549) 95%, rgba(117,90,1,0.28) 100%),
  url(${hero});
background-size:cover;
background-position:center
background-attachment: fixed;
`;

const Title = Styled.div`
width:100%;
height:200px;
background:green;
position:absolute
`;
const Header = () => {
  return (
    <HeaderContainer>
      <Title></Title>
    </HeaderContainer>
  );
};

export default Header;
