import React, { FC } from 'react';
import styled from 'styled-components';

interface InputProps {
  type: string;
  placeholder: string,
  value: string,
  setValue: any
}

const Input: FC<InputProps> = ({type, placeholder, value, setValue}) => {
  return (
    <Container>
      <Wrap>
        <WrapInput size={90} onChange={(event) => setValue(event.target.value)} value={value} type={type} placeholder={placeholder} />
      </Wrap>
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 40%;
  height: 34px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 5px;
`;
const Wrap = styled.div`
  margin-left: 5px;
`;
const WrapInput = styled.input`
  width: 100%;
`;