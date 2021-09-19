import axios from 'axios';
import { REACT_APP_API_URL } from '../../../config';
import { setDescriptions, setWordsEn, setWordsRus } from '../../reducers/wordReeducer';
import { message } from 'antd';

export const getWords = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/word/words`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      const wordsAll = response.data.words;
      const descriptions = wordsAll.map((el: any) => el.description);
      const wordsEn = wordsAll.map((el: any) => el.wordEn);
      const wordsRus = wordsAll.map((el: any) => el.wordRus);
      console.log('wordsEn, descriptions, wordsRus',wordsEn,descriptions,wordsRus);
      dispatch(setDescriptions(descriptions));
      dispatch(setWordsEn(wordsEn));
      dispatch(setWordsRus(wordsRus));
    }catch(error: any){
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
      const descriptions = wordsAll.map((el: any) => el.description);
      dispatch(setDescriptions(descriptions));
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
    }catch(error: any){
      message.info(error.response.data.message);
    }
  }
