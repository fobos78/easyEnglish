import React from "react";
import styled from "styled-components/macro";


const Game = () => {

  return (
    <Container>
    </Container>
  );
};

export default Game;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  position: absolute;
  background: linear-gradient(rgba(0,0,0,0),
         rgba(0,0,0,0)), url("./img/3.jpg");
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
