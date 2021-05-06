import React from 'react';
import styled from 'styled-components';


const MainPage = () => {

  return (
    <Container>
      <Wrap>
        Описание
      </Wrap>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
