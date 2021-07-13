import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { rootReducersType } from '../../redux/reducers';
import { closeError } from '../../redux/reducers/errorReducer';
import { logout } from '../../redux/reducers/userReducer';


function Header() {
  const location = useLocation();
  const isAuth = useSelector((state: rootReducersType) => state.user.isAuth);
  const dispatch = useDispatch();

  function isLocation(local: string) {
    return location.pathname.split('/')[1] === local;
  }

  return (
    <Container>

      <Logo>
        <NavLink to="/" onClick={() => dispatch(closeError())}>
          Easy English
        </NavLink>
      </Logo>
      <Login>
        {!isAuth && (
          isLocation('login') ?
            <NavLink to="/login" onClick={() => dispatch(closeError())}>
              <BottomLine >
                Вход
              </BottomLine>
            </NavLink> :
            <NavLink to="/login" onClick={() => dispatch(closeError())}>
              Вход
            </NavLink>
        )
        }
        {!isAuth && (
          isLocation('registration') ?
            <NavLink to="/registration" onClick={() => dispatch(closeError())}>
              <BottomLine >
                Регистрация
              </BottomLine>
            </NavLink> :
            <NavLink to="/registration" onClick={() => dispatch(closeError())}>
              Регистрация
            </NavLink>
        )
        }
      </Login>
      {isAuth &&
      <>
        <Options>
          {
            isLocation('search_word') ?
              <NavLink to="/search_word" onClick={() => dispatch(closeError())}>
                <BottomLine >
                  Поиск
                </BottomLine>
              </NavLink> :
              <NavLink to="/search_word" onClick={() => dispatch(closeError())}>
                Поиск
              </NavLink>
          }
          {
            isLocation('newword') ?
              <NavLink to="/newword" onClick={() => dispatch(closeError())}>
                <BottomLine >
                  Добавить слово
                </BottomLine>
              </NavLink> :
              <NavLink to="/newword" onClick={() => dispatch(closeError())}>
                Добавить слово
              </NavLink>
          }
          {
            isLocation('userwords') ?
              <NavLink to="/userwords" onClick={() => dispatch(closeError())}>
                <BottomLine >
                  Ваши слова
                </BottomLine>
              </NavLink> :
              <NavLink to="/userwords" onClick={() => dispatch(closeError())}>
                Ваши слова
              </NavLink>
          }
          {
            isLocation('words') ?
              <NavLink to="/words" onClick={() => dispatch(closeError())}>
                <BottomLine>
                  Все слова
                </BottomLine>
              </NavLink> :
              <NavLink to="/words" onClick={() => dispatch(closeError())}>
                Все слова
              </NavLink>
          }
        </Options>
        <Login>
          <Output>
          <NavLink to="/" onClick={() => {dispatch(logout());dispatch(closeError())}}>
            Выход
          </NavLink>
          </Output>
        </Login>
      </>
      }
    </Container>
  );
}

export default Header;

const Container = styled.div`
          width: 100%;
          height: 44px;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid black;
          margin-bottom: 2px;
          `;
const Logo = styled.div`
          width: 15%;
          height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-left: 30px;
          `;
const Login = styled.div`
          width: 15%;
          height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 30px;
          `;
const Output = styled.div`
          width: 100%;
          height: 44px;
          display: flex;
          justify-content: center;
          align-items: center;
          `;
const Options = styled.div`
          width: 30%;
          height: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 30px;
          `;
const BottomLine = styled.div`
          border-bottom: 2px solid #1890ff;
          `;
