import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Background from './components/Background';

import Routes from './routes';

import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes />
        <Background />
      </Router>
    </>
  );
}

export default App;
