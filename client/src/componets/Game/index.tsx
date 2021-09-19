import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components/macro";

import useWindowSize from "../../hooks/useWindowSize";
import pause from "../../function/pause";
import coordGame from "../../types/coordGame";

const Game = () => {
  const { height, width } = useWindowSize();
  const [flagBullet, setFlagBullet] = useState(false);
  const [coordinates, setCoordinates] = useState<coordGame>({
    gun: {
      x: 600,
      y: 100,
    },
    bullet: {
      x: 600,
      y: 130,
    },
  });

  const go = useCallback(async () => {
    await pause(50);
    setCoordinates((prev) => {
      const y = prev.bullet!.y;
      return {
        ...prev,
        bullet: { x: prev.bullet!.x - 5, y },
      };
    });
    if(coordinates.bullet!.x < 100){
      setFlagBullet(false);
      setCoordinates((prev) => {
        const y = prev.gun!.y;
        return {
          ...prev,
          bullet: { x: 600, y },
        };
      });
    }
  }, [coordinates.bullet]);

  useEffect(() => {
    if (!flagBullet) {
      return;
    }
    go();
  }, [go, flagBullet]);

  useEffect(() => {
    const onKeypress = (e: any) => {
      switch (e.keyCode) {
        case 46:
          setCoordinates((prev) => ({
            ...prev,
            gun: { x: prev.gun!.x, y: prev.gun!.y + 5 },
          }));
          break;
        case 44:
          setCoordinates((prev) => ({
            ...prev,
            gun: { x: prev.gun!.x, y: prev.gun!.y - 5 },
          }));
          break;
        case 32:
          setFlagBullet(true);
          break;
      }
      console.log(e.keyCode);
    };

    document.addEventListener("keypress", onKeypress);

    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  }, []);

  return (
    <Container>
<Title>
  Ига находится в разработке, можно подвигать танк влево - "б", вправо - "ю", огонь - " "
</Title>
      <Gun
        style={{
          top: coordinates.gun!.x,
          left: coordinates.gun!.y,
        }}
      ></Gun>
      <Bullet
        style={{
          top: coordinates.bullet!.x,
          left: coordinates.bullet!.y,
        }}
      ></Bullet>
    </Container>
  );
};

export default Game;

const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 4px;
  position: absolute;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("./img/3.jpg");
  background-size: 100% 100%;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;
const Gun = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  border: 1px solid white;
  background-size: cover;
  background-position: center;
  background-image: url("./img/gun1.png");
  z-index: 2;
`;
const Bullet = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  border: 3px solid white;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  /* background-image: url("./img/gun1.png"); */
  z-index: 1;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
`;
