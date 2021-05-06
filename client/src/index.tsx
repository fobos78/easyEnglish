import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, primaryTheme } from './assets/styles';

import App from './App';
import { store } from './redux/reducers';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={primaryTheme}>
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
