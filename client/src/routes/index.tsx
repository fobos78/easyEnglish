import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../componets/Login';
import Registration from '../componets/Registration';
import MainPage from '../features/MainPage';
import { rootReducersType } from '../redux/reducers';


const Routes = () => {
  const isAuth = useSelector((state: rootReducersType) => state.user.isAuth);

  return (
    <>
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        {!isAuth &&
        <>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
        </>
        }
        <Redirect to={'/'} />
      </Switch>
    </>
  );
};

export default Routes;
