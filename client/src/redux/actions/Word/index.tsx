import axios from 'axios';
import { REACT_APP_API_URL } from '../../../config';
import { setWords } from '../../reducers/wordReeducer';
import { message } from 'antd';

export  const getWords = () => {
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