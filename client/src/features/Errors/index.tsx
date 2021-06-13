import { Button, Result } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { rootReducersType } from '../../redux/reducers';
import { closeError } from '../../redux/reducers/errorReducer';


export const Errors = () => {
 const status = useSelector((state: rootReducersType) => state.error.status);
 const dispatch = useDispatch();
 const history = useHistory();

 const handleCloseError = () => {
   dispatch(closeError());
   history.push('/');
 };

 const goToMainPage = () => {
   return (
     <>
       <Button
         type="primary"
         onClick={handleCloseError}
       >
         На главную
       </Button>
     </>
   );
 };

 switch (status) {
 case (404):
   return (
     <Result
       status="404"
       title="404"
       subTitle="К сожалению, посещенная вами страница не существует."
       extra={goToMainPage()}
     />
   );
 case (403):
   return (
     <Result
       status="403"
       title="403"
       subTitle="Извините, у вас нет прав доступа к этой странице."
       extra={goToMainPage()}
     />
   );
 default:
   return (
     <Result
       status="500"
       title="502"
       subTitle="Извините, компонент системы в данный момент недоступен, повторите попытку позже."
       extra={goToMainPage()}
     />
   );
 }
};

