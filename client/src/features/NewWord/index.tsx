import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { addWord } from '../../redux/actions/Word';
import Input from '../../utils/Input';

const NewWord = () => {
  const [description, setDescription] = useState('');
  const [wordEn, setWordEn] = useState('');
  const [wordRus, setWordRus] = useState('');



  return (
    <Container>
      <Wrap>
        <Title>Введите слово с описанием и переводом</Title>
        <TitleDescript>Слово на англиском</TitleDescript>
        <Input value={wordEn} setValue={setWordEn} type="text" placeholder="bruise"/>
        <TitleDescript>Описание</TitleDescript>
        <Input value={description} setValue={setDescription} type="text" placeholder="представьте БРЮСа Вилюса с синяком"/>
        <TitleDescript>Слово на русском</TitleDescript>
        <Input value={wordRus} setValue={setWordRus} type="text" placeholder="синяк"/>
        <TitleDescript>Пример: bruise - синяк, - представьте БРЮСа Вилюса с синяком</TitleDescript>
        <RadiusBtn type="primary" onClick={async () => {
          const data = {wordEn, description, wordRus}
          await addWord(data);
          setDescription('');
          setWordEn('');
          setWordRus('');
        }}>Отправить</RadiusBtn>
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
margin-top: 10px;
font-size: 1.2rem;
`;
