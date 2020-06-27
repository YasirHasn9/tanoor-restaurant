import React from "react";
import styled from "styled-components";
import img1 from "./imgs/r.jpg";
const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  li {
    width: 25%;
    img {
      width: 100%;
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