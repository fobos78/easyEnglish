import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { message } from "antd";
import { rootReducersType } from "./redux/reducers";

import Footer from "./componets/Footer";
import Header from "./componets/Header";
import { auth } from "./redux/actions/User";
import Routes from "./routes";
import { setError } from "./redux/reducers/errorReducer";
import { Errors } from "./features/Errors";

function App() {
  const dispatch = useDispatch();
  const errorIsOpen = useSelector(
    (state: rootReducersType) => state.error.isOpen
  );
  console.log("errorIsOpen", errorIsOpen);

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        const errors = [404, 403, 502];
        if (errors.includes(error.response.status)) {
          dispatch(setError(error.response));
          console.log("errorIsOpen2", errorIsOpen);
          message.config({
            top: -100,
          });
        } else {
          message.config({
            top: 0,
          });
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch, errorIsOpen]);

  if (errorIsOpen) {
    return (
      <>
        <Header />
        <Errors />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}

export default App;
