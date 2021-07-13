import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

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
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>

        <Route exact path='/words'>
          <Words />
        </Route>
        <Route exact path='/userwords'>
          <UserWords />
        </Route>
        <Route exact path='/newword'>
          <NewWord />
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
