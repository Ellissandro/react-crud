import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './core/router';
import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

