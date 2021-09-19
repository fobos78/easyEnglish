import { Button } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { getWords } from '../../redux/actions/Word';
import { rootReducersType } from '../../redux/reducers';
import Input from '../../utils/Input';


const SearchWord = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const arrDescriptions = useSelector((state: rootReducersType) => state.words.description);
  const arrWordsEn = useSelector((state: rootReducersType) => state.words.wordEn);
  const arrWordsRus = useSelector((state: rootReducersType) => state.words.wordRus);

  const showModalCustom = (word: string) => {
    setDescription(word);
    setIsModalVisible(true);
  };

  const hideModalCustom = () => {
    setIsModalVisible(false);
    setDescription('');
  };

  useEffect(() => {
    dispatch(getWords());
  }, [dispatch]);

  return (
    <Container>
      <Wrap>
        {
          isModalVisible &&
          <RootModalCustom onClick={hideModalCustom}>
            <Draggable handle=".handle">

              <WrapModalCustom onClick={(e) => e.stopPropagation()}>
                <ModalHeader className={'handle'}>
                  Выбранное слово
                </ModalHeader>
                <DataInfoPre>
                  <DataInfoCode>
                    {description}
                  </DataInfoCode>
                </DataInfoPre>
                <ModalFooter>
                  <Button type={'primary'} onClick={hideModalCustom}>Закрыть</Button>
                </ModalFooter>
              </WrapModalCustom>
            </Draggable>
          </RootModalCustom>
        }
        <SelectWord>
          <Title>Поиск слов</Title>
          <WrapInput>
          <Input
            value={description}
            setValue={setDescription}
            type="text"
            placeholder=""
          />
            <CloseCircle><CloseCircleOutlined
              onClick={() => setDescription('')}
            />
            </CloseCircle>
          </WrapInput>
          <SelectSearch>
            {
            arrDescriptions.map((word: string, i: number) => {
              const searchWord = arrWordsEn[i] + ' ' + word + ' ' + arrWordsRus[i];
              if (searchWord.indexOf(description.toLowerCase()) !== -1) {
                return (
                  <Word key={Math.random()} onClick={() => showModalCustom(searchWord)}>
                    <span><span style={{ color: 'blue' }}>Слово -&nbsp;</span>{arrWordsEn[i]}&nbsp;</span>
                    <span><span style={{ color: 'blue' }}>перевод -&nbsp;</span>{arrWordsRus[i]}</span>
                  </Word>);
              } else {
                return null;
              }
            })
            }
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
const CloseCircle = styled.div`
  position: relative;
  top: -2px;
  left: 3px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
`;
const WrapInput = styled.div`
  width: 100%;
  display: flex;
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

const Word = styled.div`
  min-width: 95%;
  padding: 5px 5px;
  margin-top: 3px;
  border-radius: 2px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
`;
const SelectSearch = styled.div`
  width: 41%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 2px;
  overflow: auto;
`;
const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
const RootModalCustom = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

const WrapModalCustom = styled.div`
  width: 700px;
  min-width: 400px;
  height: 300px;
  min-height: 100px;
  background: white;
  position: relative;
  resize: both;
  margin: 0 20px;
  max-height: calc(100vh - 40px);
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ModalHeader = styled.div`
  cursor: move;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

const ModalFooter = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DataInfoPre = styled.pre`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 5px;
  padding-top: 8px;
  background-color: #f2f2fb;
  border: 1px dashed #C9C9CB;
  overflow: auto;
`;

const DataInfoCode = styled.code`
`;
