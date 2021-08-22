import axios from 'axios';
import { REACT_APP_API_URL } from '../../../config';
import { setWords } from '../../reducers/wordReeducer';
import { message } from 'antd';

export const getWords = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/word/words`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      const wordsAll = response.data.words;
      const words = wordsAll.map((el: any) => el.description);
      dispatch(setWords(words));
    }catch(error){
      message.info(error.response.data.message);
      throw error;
    }
  }
}

export const getUserWords = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/word/userwords`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      const wordsAll = response.data.words;
      // здесь нужно отсортировать слова принадлежащие тольео пользователю
      const words = wordsAll.map((el: any) => el.description);
      dispatch(setWords(words));
    }catch(error){
      message.info('В разработке');
      throw error;
    }
  }
}

interface wordData {
  wordEn: string,
  description: string,
  wordRus: string,
}

export const addWord = async (data: wordData) => {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/api/word/newword`,{
        data,
        access: false
      },{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      await message.info(response.data.message);
    }catch(error){
      message.info(error.response.data.message);
    }
  }
