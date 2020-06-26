import React from "react";
import styled from "styled-components";
const SectionAbout = styled.section`
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    padding: 20px 0;
    width: 50%;
    display: flex;
    justify-content: center;
    p {
        font-size:1.6rem;
        line-height: 1.8em;
        width:100%;
    }
  }
`;

const H2 = styled.h2`
  width: 40%;
  font-size: 2.6rem;
  border-bottom: 4px solid #555;
  padding: 20px 40px;
  text-transform: uppercase;
  text-align:center;
`;

const About = () => {
  return (
    <SectionAbout>
      <div>
        <H2>about</H2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus
          mollitia nihil doloremque odit rem adipisci commodi quasi ipsum, rerum
          magni saepe inventore atque placeat eligendi totam quidem earum
          aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Porro minus mollitia nihil doloremque odit rem adipisci commodi quasi
          ipsum, rerum magni saepe inventore atque placeat eligendi totam quidem
          earum aspernatur!
        </p>
      </div>
    </SectionAbout>
  );
};

export default About;
