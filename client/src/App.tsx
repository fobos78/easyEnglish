import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from './componets/Footer';
import Header from './componets/Header';
import { auth } from './redux/actions/User';
import Routes from './routes';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  },[dispatch]);
  return (
    <>
      <Header />
      <Routes />
      <Footer/>
    </>
  );
}

export default App;
