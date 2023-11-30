import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact component={FirstPage} />
        <Route path="/second" exactcomponent={SecondPage} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
