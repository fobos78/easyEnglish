import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import useWindowSize from "../../hooks/useWindowSize";
import { rootReducersType } from "../../redux/reducers";
// import ExamplesWords from "../ExamplesWords";

interface coord {
  x: number;
  y: number;
  a: number;
  b: number;
}

const MainPage = () => {
  const isAuth = useSelector((state: rootReducersType) => state.user.isAuth);
  const { height, width } = useWindowSize();
  const [coordinates, setCoordinates] = useState<coord>({ x: 60, y: 10, a: 2, b: 2 });

  function pause(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const go = useCallback(async () => {
    await pause(50);
    if (coordinates.x > height - 260) {
      setCoordinates((prev) => ({ x: prev.x + prev.a, y: prev.y + prev.b, a: -2, b: prev.b }));
      return ;
    }
    if (coordinates.x < 180) {
      setCoordinates((prev) => ({ x: prev.x + prev.a, y: prev.y + prev.b, a: 2, b: prev.b }))
      return ;
    }
    if (coordinates.y > width - 180) {
      setCoordinates((prev) => ({ x: prev.x + prev.a, y: prev.y + prev.b, a: prev.a, b: -2 }))
      return ;
    }
    if (coordinates.y < 150) {
      setCoordinates((prev) => ({ x: prev.x + prev.a, y: prev.y + prev.b, a: prev.a, b: 2 }))
      return ;
    }
    setCoordinates((prev) => ({ x: prev.x + prev.a, y: prev.y + prev.b, a: prev.a, b: prev.b }));
  },[coordinates,width,height]);

  useEffect(() => {
    go();
  }, [go]);

  return (
    <Container>
      {isAuth ? (
        <WrapAnimat>
          <Title>
           Добро пожаловать!
          </Title>
        <TitleAnimat
          style={{
            top: coordinates.x,
            left: coordinates.y,
          }}
        >
        </TitleAnimat>
        </WrapAnimat>
      ) : (
        
        <Wrap>
          {/* <ExamplesWords /> */}
          <Title>
            Зарегистрируйтесь или авторизуйтесь что бы получить доступ ко всем
            словам.
          </Title>
          <TitleAnimat
          style={{
            top: coordinates.x,
            left: coordinates.y,
          }}
        >
        </TitleAnimat>
        </Wrap>
      )}
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  position: absolute;
  background: linear-gradient(rgba(0,0,0,0.5),
         rgba(0,0,0,0.7)), url("./img/2.jpg");
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
const WrapAnimat = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: white;
`;
const TitleAnimat = styled.div`
  position: absolute;
  border: 1px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 160px rgba(255, 255, 255, 1);
  mix-blend-mode: overlay ;
`;

