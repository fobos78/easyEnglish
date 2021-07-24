import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getWords } from "../../redux/actions/Word";
import { rootReducersType } from "../../redux/reducers";
import Input from "../../utils/Input";

const SearchWord = () => {
  // const [index, setIndex] = useState(0);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const arrWords = useSelector((state: rootReducersType) => state.words.words);

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <Container>
      <Wrap>
        <SelectWord>
          <Title>Поиск слов</Title>
          <Input
            value={description}
            setValue={setDescription}
            type="text"
            placeholder=""
          />
          <SelectSearch>
            {arrWords.map((word: string) => {
              if (word.indexOf(description) !== -1) {
                return (
                <div key={Math.random()}>
                  {word}
                  </div>)
              } else {
                return null;
              }
            })}
          </SelectSearch>
        </SelectWord>
      </Wrap>
    </Container>
  );
};

export default SearchWord;

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
const SelectWord = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SelectSearch = styled.div`
  width: 70%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  overflow: auto;
`;
const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
