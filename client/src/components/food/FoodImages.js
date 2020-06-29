import React from "react";
import styled from "styled-components";
import img1 from "./imgs/r.jpg";
const FoodImages = () => {
  return (
    <Section>
      <div>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
        <img src={img1}/>
      </div>
      <div>
        <img src={img1}/>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
      </div>
      <div>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
        <img src={img1}/>
      </div>
      <div>
        <img src={img1}/>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
      </div>
      <div>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
        <img src={img1}/>
      </div>
      <div>
        <img src={img1}/>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
      </div>
      <div>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
        <img src={img1}/>
      </div>
      <div>
        <img src={img1}/>
        <ul>
            <h3>gggggg</h3>
            <li>gg</li>
            <li>hhh</li>
            <li>ljhli</li>
            <li>kk</li>
        </ul>
      </div>
    </Section>
  );
};

export default FoodImages;

const Section = styled.section`
  padding: 60px 0;
  width: 70%;
  margin: 0 auto;
  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    ul {
        width:40%;
    };
    img {
        width:40%;
        border-radius:20px;
    }
  }
`;

const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
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

/*
      <div>
        <ul>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            facere aliquid deserunt, maxime voluptates aliquam aperiam natus
            voluptas labore laboriosam fugit quos fugiat explicabo possimus
            incidunt eveniet. Dicta, autem ullam.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            facere aliquid deserunt, maxime voluptates aliquam aperiam natus
            voluptas labore laboriosam fugit quos fugiat explicabo possimus
            incidunt eveniet. Dicta, autem ullam.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
            facere aliquid deserunt, maxime voluptates aliquam aperiam natus
            voluptas labore laboriosam fugit quos fugiat explicabo possimus
            incidunt eveniet. Dicta, autem ullam.
          </li>
        </ul>
      </div>
*/
