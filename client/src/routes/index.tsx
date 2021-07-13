import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Login from '../componets/Login';
import Registration from '../componets/Registration';
import MainPage from '../features/MainPage';
import NewWord from '../features/NewWord';
import UserWords from '../features/UserWords';
import Words from '../features/Words';
import { rootReducersType } from '../redux/reducers';


const Routes = () => {
  const isAuth = useSelector((state: rootReducersType) => state.user.isAuth);

  return (
    <>
      {!isAuth ?
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch> :
        <Switch>
          <Route exact path='/words'>
            <Words />
          </Route>
          <Route exact path='/userwords'>
            <UserWords />
          </Route>
          <Route exact path='/newword'>
            <NewWord />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      }
    </>
  );
};

export default Routes;
