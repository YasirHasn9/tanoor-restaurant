import React from "react";
import styled from "styled-components";
import img1 from "./imgs/r.jpg";
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  li {
    width: 20%;
    margin: 1%;
    overflow: hidden;
    background: #000;
    border-radius: 20px;
    img {
      width: 100%;
      height: 100%;
      -webkit-transform: scale(1.15);
      transform: scale(1.15);
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      opacity: 0.6;
      &:hover {
        -webkit-transform: scale(1);
        transform: scale(1);
        z-index: 2;
        opacity: 1;
      }
    }
  }
`;
const FoodImages = () => {
  return (
    <div>
      <Ul>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
      </Ul>
      <Ul>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
        <li>
          <img src={img1} />
        </li>
      </Ul>
    </div>
  );
};

export default FoodImages;
