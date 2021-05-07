import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { rootReducersType } from '../../redux/reducers';
import ExamplesWords from '../ExamplesWords';

const MainPage = () => {
  const isAuth = useSelector((state: rootReducersType) => state.user.isAuth);

  return (
    <Container>
      {
        isAuth ?
          <Wrap>
            <Title>
              Описание
            </Title>
          </Wrap> :
          <Wrap>
            <ExamplesWords />
            <Title>
              Зарегистрируйтесь или авторизуйтесь что бы получить доступ ко всем словам.
            </Title>
          </Wrap>
      }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;
