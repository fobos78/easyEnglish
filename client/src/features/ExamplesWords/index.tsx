import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';


const arrWords = [
  'bruise - синяк, - представте БРЮСа Вилюса с синяком',
  'marsh - болото, - представте как солдаты МАРШеруют по болоту',
  'wheel - колесо, - представте ВИЛЫ воткнутые в колесо',
];

const ExamplesWords = () => {
  const [index, setIndex] = useState(0);

  function handlePrev(num: number) {
    if (index === 0) {
      setIndex(2);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext(num: number) {
    if (index === 2) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <Container>
      <Title>
        {arrWords[index]}
      </Title>
      <Btns>
        <RadiusBtn type="primary" onClick={() => handlePrev(arrWords.length)}><CaretLeftOutlined />Пред.</RadiusBtn>
        {index + 1}
        <RadiusBtn type="primary" onClick={() => handleNext(arrWords.length)}>След.<CaretRightOutlined /></RadiusBtn>
      </Btns>
    </Container>
  );
};

export default ExamplesWords;

const Container = styled.div`
  width: 70%;
  height: 180px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 90px;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin-top: 50px;
`;
const Btns = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const RadiusBtn = styled(Button)`
  border-radius: 4px;
`;