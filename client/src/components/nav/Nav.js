import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  color: #fff;
  background: rgb(48, 14, 55, 0.6);
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 70%;
  li {
    margin-top:4px;
    text-transform:capitalize;
    font-weight: 900;
    transition: 0.3s ease;
    font-size: 1.6rem;
    padding: 20px 15px;
    border-radius:10px;
    cursor:pointer;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid #fff;
    }
  }
`;

const Logo = styled.div`
  margin-left: 10%;
`;
const Nav = () => {
  return (
    <NavContainer>
      <Logo>logo</Logo>
      <Ul>
        <li>home</li>
        <li>about</li>
        <li>locations</li>
        <li>contact</li>
      </Ul>
    </NavContainer>
  );
};

export default Nav;
