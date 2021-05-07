import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { rootReducersType } from '../../redux/reducers';
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
        <NavLink to="/">
          Easy English
        </NavLink>
      </Logo>
      <Login>
        {!isAuth && (
          isLocation('login') ?
            <NavLink to="/login">
              <BottomLine>
                Вход
              </BottomLine>
            </NavLink> :
            <NavLink to="/login">
              Вход
            </NavLink>
        )
        }
        {!isAuth && (
          isLocation('registration') ?
            <NavLink to="/registration">
              <BottomLine>
                Регистрация
              </BottomLine>
            </NavLink> :
            <NavLink to="/registration">
              Регистрация
            </NavLink>
        )
        }
        {isAuth &&
        <>
          {
            isLocation('words') ?
              <NavLink to="/words">
                <BottomLine>
                  Все слова
                </BottomLine>
              </NavLink> :
              <NavLink to="/words">
                Все слова
              </NavLink>
          }
          <NavLink to="/" onClick={() => dispatch(logout())}>
            Выход
          </NavLink>
        </>
        }
      </Login>
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
const BottomLine = styled.div`
          border-bottom: 2px solid #1890ff;
          `;
