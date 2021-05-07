import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Words = () => {
  const [index, setIndex] = useState(0);
  const [arrWords, setArrWords] = useState([]);

  useEffect(() => {
    async function requestWords() {
      try {
        const response = await axios.get('http://localhost:5000/api/word/words');
        const wordsAll = response.data.words;
        const words = wordsAll.map((el: any) => el.description);
        setArrWords(words);
      }
      catch (error) {
        throw error;
      }
    }

    requestWords();
  }, []);

  function handlePrev() {
    if (index === 0) {
      setIndex(arrWords.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index === arrWords.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <Container>
      <Wrap>
        <Title>
          {arrWords[index]}
        </Title>
        <Btns>
          <RadiusBtn
            type="primary"
            onClick={() => handlePrev()}
          ><CaretLeftOutlined />Пред.</RadiusBtn>
          {index + 1}{' '}из{' '}{arrWords.length}
          <RadiusBtn
            type="primary"
            onClick={() => handleNext()}
          >След.<CaretRightOutlined /></RadiusBtn>
        </Btns>
      </Wrap>
    </Container>
  );
};

export default Words;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Wrap = styled.div`
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