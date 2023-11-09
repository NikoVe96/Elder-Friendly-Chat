import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Conversations from './Conversations';
import { render } from '@testing-library/react';

function App() {
  return (
    <>
      <MainPage />
    </>
    /*
     <Router>
      <Routes>
        <Route path="/" exact component={MainPage} />
        <Route path="/conversations" component={Conversations} />
      </Routes>
    </Router> */
  );
}

export default App;
