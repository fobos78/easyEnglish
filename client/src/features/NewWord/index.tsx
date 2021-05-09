import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setWord } from '../../redux/actions/Word';

const NewWord = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setWord());
  }, [dispatch]);
  return (
    <Container>
      Здесь можно будет создать новую абстракцию
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
