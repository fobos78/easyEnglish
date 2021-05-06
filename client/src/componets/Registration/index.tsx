import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { registration } from '../../redux/actions/User';
import Input from '../../utils/Input';

const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Wrap>
        <Title>Регистрация</Title>
        <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/>
        <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/>
        <RadiusBtn type="primary" onClick={() => registration(email,password)}>Зарегистрироваться</RadiusBtn>
      </Wrap>
    </Container>
  );
};

export default Registration;

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
const RadiusBtn = styled(Button)`
  border-radius: 4px;
`;
const Title = styled.div`
font-size: 1.5rem;
margin-bottom: 10px;
`;
