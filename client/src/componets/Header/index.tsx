import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';


function Header() {
  const location = useLocation();

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
        {
          isLocation('login') ?
            <NavLink to="/login">
              <BottomLine>
                Вход
              </BottomLine>
            </NavLink> :
            <NavLink to="/login">
              Вход
            </NavLink>
        }
        {
          isLocation('auth') ?
            <NavLink to="/auth">
              <BottomLine>
                Регистрация
              </BottomLine>
            </NavLink> :
            <NavLink to="/auth">
              Регистрация
            </NavLink>
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
          margin-bottom: 5px;
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
