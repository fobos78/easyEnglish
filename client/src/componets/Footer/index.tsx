import React from 'react';
import styled from 'styled-components';


const Footer = () => {
  return (
    <Container>
      <Title>
        Наши контакты
      </Title>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2px;
  width: 100%;
  height: 130px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;