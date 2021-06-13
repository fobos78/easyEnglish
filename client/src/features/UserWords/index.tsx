import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getUserWords } from '../../redux/actions/Word';


const UserWords = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWords());
  }, [dispatch]);

  return (
    <Container>
      <div>Сдесь должны быть только слова созданные пользователем(в разработке)</div>
    </Container>
  );
};

export default UserWords;

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
