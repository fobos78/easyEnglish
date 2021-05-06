import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './componets/Header';
import { auth } from './redux/actions/User';
import Routes from './routes';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  },[])
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}

export default App;
