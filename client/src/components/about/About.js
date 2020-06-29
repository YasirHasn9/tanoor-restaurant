import React from "react";
import styled from "styled-components";
const SectionAbout = styled.section`
  width: 100%;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div {
    padding: 20px 0;
    display: flex;
    justify-content: center;
    p {
      font-size: 1.6rem;
      line-height: 1.8em;
      width: 60%;
    }
  }
`;

const H2 = styled.h2`
  font-size: 2.6rem;
  border-bottom: 4px solid #555;
  text-transform: uppercase;
  text-align: center;
`;

const SectionServices = styled.section`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin:0 auto;
  div {
    padding: 10px;
    width: 24%;
    display: flex;
    flex-direction: column;
    font-size:1.4rem;
    p {
      width: 100%;
    }
  }
`;

const About = () => {
  return (
    <>
      <SectionAbout>
        <div>
          <H2>TRY OUR FOOD — WE PROMISE, YOU WON'T REGRET IT</H2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro minus
            mollitia nihil doloremque odit rem adipisci commodi quasi ipsum,
            rerum magni saepe inventore atque placeat eligendi totam quidem
            earum aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
        </div>
        </SectionAbout>
        <SectionServices>
          <div>
            <i>logo</i>
            <h2>title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minus mollitia nihil doloremque odit rem adipisci commodi quasi
              ipsum, rerum
            </p>
          </div>
          <div>
            <i>logo</i>
            <h2>title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minus mollitia nihil doloremque odit rem adipisci commodi quasi
              ipsum, rerum
            </p>
          </div>
          <div>
            <i>logo</i>
            <h2>title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minus mollitia nihil doloremque odit rem adipisci commodi quasi
              ipsum, rerum
            </p>
          </div>
          <div>
            <i>logo</i>
            <h2>title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              minus mollitia nihil doloremque odit rem adipisci commodi quasi
              ipsum, rerum
            </p>
          </div>
        </SectionServices>
    </>
  );
};

export default About;
