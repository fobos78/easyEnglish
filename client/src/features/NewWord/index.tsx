import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { setWord } from '../../redux/actions/Word';
import Input from '../../utils/Input';

const NewWord = () => {
  const [description, setDescription] = useState('');

  return (
    <Container>
      <Wrap>
        <Title>Введите слово с описанием</Title>
        <Input value={description} setValue={setDescription} type="text" placeholder=""/>
        <TitleDescript>Пример: bruise - синяк, - представьте БРЮСа Вилюса с синяком</TitleDescript>
        <RadiusBtn type="primary" onClick={async () => setWord(description)}>Отправить</RadiusBtn>
      </Wrap>
    </Container>

  );
};

export default NewWord;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RadiusBtn = styled(Button)`
  border-radius: 4px;
`;
const Title = styled.div`
font-size: 1.5rem;
margin-bottom: 10px;
`;
const TitleDescript = styled(Title)`
font-size: 1.2rem;
`;
