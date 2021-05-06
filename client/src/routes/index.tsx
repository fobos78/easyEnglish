import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../componets/Login/inddex';
import Registration from '../componets/Registration';
import MainPage from '../features/MainPage';

const Routes = () => {

  return (
    <>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/auth'>
          <Registration />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
