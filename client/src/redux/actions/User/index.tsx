import axios from 'axios';
import { REACT_APP_API_URL } from '../../../config';
import { setUser } from '../../reducers/userReducer';
import { message } from 'antd';

export  const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(`${REACT_APP_API_URL}/api/auth/login`,{
        email,
        password
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
      // console.log(response.data);
    }catch(error: any){
      message.info(error.response.data.message);
      // alert(error.response.data.message);
    }
  }
}

export  const registration = async  (email: string, password: string) => {
  try {
    const response = await axios.post(`${REACT_APP_API_URL}/api/auth/registration`,{
      email,
      password
    });
    message.info(response.data.message);
    return response.data.flag;
  }catch(error: any){
    message.info(error.response.data.message);
    return error.response.data.flag;
  }
}

export  const auth = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get(`${REACT_APP_API_URL}/api/auth/auth`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}});
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    }catch(error){
      localStorage.removeItem('token');
      throw error;
    }
  }
}